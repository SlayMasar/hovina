#!/usr/bin/env bash
# The checks GitHub Actions used to run, run here instead (Actions minutes cost money). `npm run ship-check` (or `pnpm run ship-check`)
# before every push; prints a summary, writes the stamp scripts/merge-gate.mjs reads, exits 1 if anything failed.
# Works out what to run from package.json, so a new test is picked up by itself:
#   typecheck (or `build` when there is no typecheck), check:css, every test:* script, scripts/check-bot-labels.mjs if present,
#   and the bot crawl when scripts/crawl-bot.mjs exists (skipped when only website, routes, scripts, docs or notes changed;
#   CRAWL=1 forces it, CRAWL=0 skips it).
# Override the list with ship-check.json: { "scripts": ["typecheck", "test:unit"] }.
cd "$(dirname "$0")/.." || exit 1

if [ -f pnpm-lock.yaml ]; then pm=pnpm; else pm=npm; fi
runscript() { "$pm" run -s "$@"; }

# Dependencies. A fresh session has no node_modules. With a committed lockfile install exactly from it; without one (the lockfile is
# gitignored in some repos on purpose, so `npm ci` cannot work) install without writing one.
missing=$(node -e '
  const fs=require("fs"),p=JSON.parse(fs.readFileSync("package.json","utf8")),d={...p.dependencies,...p.devDependencies};
  const need=[["typescript","tsc"],["tsx","tsx"],["wrangler","wrangler"],["vite","vite"]].filter(([k])=>d[k]).map(([,b])=>b);
  if(!fs.existsSync("node_modules")) {console.log("all");process.exit(0)}
  console.log(need.filter(b=>!fs.existsSync("node_modules/.bin/"+b)).join(" "))')
if [ -n "$missing" ]; then
  echo "installing dependencies..."
  if [ "$pm" = pnpm ]; then pnpm install >/dev/null 2>&1 || { echo "FAIL  pnpm install"; exit 1; }
  elif [ -n "$(git ls-files package-lock.json)" ]; then npm ci --no-audit --no-fund >/dev/null 2>&1 || { echo "FAIL  npm ci"; exit 1; }
  else npm install --no-package-lock --no-audit --no-fund >/dev/null 2>&1 || { echo "FAIL  npm install"; exit 1; }; fi
fi

fail=0; failed=(); ran=0
run() { local name="$1"; shift; local out; ran=$((ran+1)); if out=$("$@" 2>&1); then echo "ok    $name"; else echo "FAIL  $name"; echo "$out" | tail -8 | sed 's/^/      /'; fail=1; failed+=("$name"); fi; }

scripts=$(node -e '
  const fs=require("fs"),p=JSON.parse(fs.readFileSync("package.json","utf8")),s=p.scripts||{};
  if(fs.existsSync("ship-check.json")){console.log((JSON.parse(fs.readFileSync("ship-check.json","utf8")).scripts||[]).join(" "));process.exit(0)}
  const out=[]; out.push(s.typecheck?"typecheck":(s.build?"build":"")); if(s["check:css"])out.push("check:css");
  for(const k of Object.keys(s)) if(k.startsWith("test:")) out.push(k);
  console.log(out.filter(Boolean).join(" "))')
for s in $scripts; do run "$s" timeout 600 "$pm" run -s "$s"; done
[ -f scripts/check-bot-labels.mjs ] && run label-scan node scripts/check-bot-labels.mjs

crawl="${CRAWL:-}"
if [ -f scripts/crawl-bot.mjs ]; then
  if [ -z "$crawl" ]; then
    base=$(git merge-base HEAD origin/main 2>/dev/null || echo "")
    changed=$( { [ -n "$base" ] && git diff --name-only "$base"; git diff --name-only; git ls-files --others --exclude-standard; } | sort -u)
    if [ -n "$changed" ] && ! echo "$changed" | grep -qvE '^(src/web/|src/routes/|scripts/|docs/|\.claude/|\.github/|\.gitignore$|CLAUDE\.md$|IDEAS\.md$|PROGRESS\.md$|README\.md$)'; then crawl=0; else crawl=1; fi
  fi
  if [ "$crawl" = "1" ]; then
    rm -rf .ci-d1 wrangler.log
    if CI=true npx wrangler d1 migrations apply mejesi --local --persist-to .ci-d1 >/dev/null 2>&1; then
      npx wrangler dev --port 8795 --persist-to .ci-d1 --var WHATSAPP_DRY_RUN:1 --var BASE_URL:http://localhost:8795 --var BOT_NUMBER:263700000000 > wrangler.log 2>&1 &
      pid=$!
      for _ in $(seq 1 90); do curl -s -o /dev/null http://localhost:8795/ && break; sleep 2; done
      run bot-crawl node scripts/crawl-bot.mjs wrangler.log 263700000001 300
      kill $pid 2>/dev/null; pkill -f "wrangler dev --port 8795" 2>/dev/null; wait 2>/dev/null
    else echo "FAIL  local database (migrations)"; fail=1; failed+=(local-db); fi
    rm -rf .ci-d1 wrangler.log
  else
    echo "skip  bot-crawl (only website, routes, scripts or notes changed)"
  fi
fi

if [ "$ran" -eq 0 ]; then echo "WARNING: no checks found. Add a typecheck, build or test:* script to package.json (or ship-check.json)."; fi
if [ $fail -eq 0 ]; then
  # The stamp scripts/merge-gate.mjs reads: which commit passed, and whether the tree was clean while it did.
  if [ -n "$(git status --porcelain)" ]; then state=dirty; else state=clean; fi
  echo "$(git rev-parse HEAD) $(date -u +%FT%TZ) $state" > .ship-check-ok
  echo; echo "ALL CHECKS PASSED ($state tree, $(git rev-parse --short HEAD))"
else
  echo; echo "FAILED: ${failed[*]}"; exit 1
fi
