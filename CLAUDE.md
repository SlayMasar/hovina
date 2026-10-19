# Rules for every Claude session in this repo

## Do not depend on GitHub Actions minutes
GitHub Actions minutes cost money and have run out before. Do what Actions would do from the Claude cloud environment instead.

- **Cloudflare: use the cloud environment's own access, never the Cloudflare connector (MCP).** Calls to `api.cloudflare.com` get the token from the
  environment's network proxy (Network secrets), so send them with no Authorization header. If it is missing in a session, say so; do not quietly fall back.
- **Checks:** run typecheck and tests locally before every push and show the results.
- **Database migrations:** apply them yourself with `wrangler d1 migrations apply <db> --remote` (placeholder `CLOUDFLARE_API_TOKEN`,
  `CLOUDFLARE_ACCOUNT_ID=abf76b60d274f3dd0049b1bf2ff52765`) or the D1 REST query endpoint, before the code that needs them goes live.
- **Deploys and new resources (D1, R2, KV, Workers):** go through the same REST access; try new things on a scratch resource and delete it afterwards.
- Only a person can connect a repo to Workers Builds, create tokens or handle billing: say exactly what is needed.
- Do not add workflows that run on every push.
