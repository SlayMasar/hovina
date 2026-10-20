# Rules for every Claude session in this repo

## GitHub Actions is off by default (manual only)
GitHub Actions minutes cost money and have run out before. This repo runs no workflow on a push or pull request. Do what a CI job would do
from the Claude cloud environment instead. Use Actions only if the owner asks for it.

- **Dependencies:** this is a pnpm workspace: use `pnpm install`, never npm (a `preinstall` hook refuses it). `ship-check` installs by itself when `node_modules` is missing.
- **Before every push: `npm run ship-check`** (`scripts/ship-check.sh`). It runs the typecheck (`pnpm run typecheck`). It writes a stamp (`.ship-check-ok`: commit, time, clean or
  dirty). Paste its summary in the reply. Do not push on a FAIL. A new `test:*` script in package.json is picked up by itself.
- **The gate before merging:** `npm run ship-check` passed **on the exact commit**, the merge call passes `expectedHeadSha`, and Cloudflare's Workers Build for this repo is green.
- **Hooks (`scripts/claude-hooks.example.json` -> `.claude/settings.json`; the owner copies it once, Claude's own safety check blocks a session
  from creating that file):** `scripts/merge-gate.mjs` refuses `merge_pull_request` unless the call passes `expectedHeadSha` and ship-check passed on that
  exact commit (a real exception: `BYPASS_SHIP_GATE=1`, and tell the owner). Hooks load when a session starts and only if its checkout has
  `.claude/settings.json`: on an older branch, `git merge origin/main` and start a new session; until then run ship-check by hand before merging.
  Merging through the GitHub website or `gh` skips the hooks.
- **Cloudflare: use the cloud environment's own access, never the Cloudflare connector (MCP).** Calls to `api.cloudflare.com` get the token from the
  environment's network proxy (Network secrets), so send them with no Authorization header (wrangler needs any placeholder `CLOUDFLARE_API_TOKEN`).
  If that access is missing in a session, say so before falling back to anything else.
- **New resources (D1, R2, KV, Workers):** create and delete them through the same REST access; try on a scratch resource and delete it afterwards.
- Things only a person can do (connect a repo to Workers Builds, create tokens, billing): say exactly what is needed.

## Keep the Actions bill at zero
Do not add or widen workflows that run on a push or pull request. If a workflow is needed, make it manual (`workflow_dispatch`).
