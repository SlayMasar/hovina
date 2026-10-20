// A Claude Code PreToolUse hook for merge_pull_request (config: scripts/claude-hooks.example.json -> .claude/settings.json):
// a pull request is merged only after `npm run ship-check` passed on the exact commit being merged. This replaces the "checks"
// job GitHub Actions used to run, and once the hook is on it holds for every Claude session in this repo (the owner's and the
// partner's), not just the one that remembers.
// ship-check writes `.ship-check-ok` (gitignored) when everything passed: "<sha> <time> <clean|dirty>".
//   allowed: the merge is for another repository, or the stamp matches the commit named in tool_input.expectedHeadSha
//   denied : no expectedHeadSha, no stamp, a stamp for another commit, or one made with uncommitted changes. The reason says what to run.
// Override for a genuine exception, said to the owner: BYPASS_SHIP_GATE=1 in the environment.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

let call = {};
try { call = JSON.parse(readFileSync(0, 'utf8')); } catch { /* no stdin */ }
const allow = () => process.exit(0);
const deny = (why) => {
  console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: 'deny', permissionDecisionReason: `Merge blocked by scripts/merge-gate.mjs: ${why} Run \`npm run ship-check\` on the pull request's latest commit (pushed, nothing uncommitted), then merge again. A real exception needs BYPASS_SHIP_GATE=1 and the owner told.` } }));
  process.exit(0);
};
// Which repository is this checkout? The one in origin's URL (override: SHIP_REPO). The gate guards only that repository's merges.
let thisRepo = process.env.SHIP_REPO || '';
if (!thisRepo) { try { thisRepo = execFileSync('git', ['remote', 'get-url', 'origin'], { encoding: 'utf8' }).trim().replace(/\.git$/, '').split(/[/:]/).pop(); } catch { /* none */ } }
if (!thisRepo || call?.tool_input?.repo !== thisRepo || process.env.BYPASS_SHIP_GATE === '1') allow();

let root;
try {
  root = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
} catch { allow(); } // not in a checkout: nothing to compare, never block on the hook's own trouble
// The merge call must name the commit it merges. Without it the gate would compare against whatever this checkout happens to be on,
// and a passing check for some other commit could let an unchecked pull request through.
if (!call.tool_input.expectedHeadSha) deny('the merge call did not pass expectedHeadSha, so there is no way to tell which commit was checked.');
const want = call.tool_input.expectedHeadSha.trim();
let stamp = '';
try { stamp = readFileSync(join(root, '.ship-check-ok'), 'utf8').trim(); } catch { /* none */ }
if (!stamp) deny('ship-check has not passed in this checkout.');
const [sha, , state] = stamp.split(/\s+/);
if (state === 'dirty') deny('the last ship-check ran with uncommitted changes.');
if (sha !== want) deny(`the last passing ship-check was for ${sha?.slice(0, 7)}, not ${want.slice(0, 7)}.`);
allow();
