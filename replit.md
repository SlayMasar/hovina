# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Suneldah company landing page, API server, and shared libraries.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (provisioned on demand)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Email**: nodemailer (SMTP-based forwarding to slaymasar@gmail.com)

## Artifacts

### suneldah (react-vite, preview path: /)
Futuristic landing page for Suneldah tech company. Features:
- Dark futuristic design with navy/teal palette
- Animated sections (framer-motion)
- Contact form that submits to /api/contact (forwarded to slaymasar@gmail.com)
- Logo and hero image from /public/ folder
- Single-page app with wouter routing

### api-server (express, preview path: /api)
Backend API server. Routes:
- GET /api/healthz — health check
- POST /api/contact — contact form submission (forwards to slaymasar@gmail.com via SMTP)

## Email Configuration (SMTP)

To enable actual email sending, set these environment secrets:
- SMTP_HOST — e.g. smtp.gmail.com
- SMTP_USER — your Gmail address
- SMTP_PASS — Gmail App Password (not regular password)
- SMTP_PORT — optional, defaults to 587
- SMTP_SECURE — optional, set to "true" for port 465

Without SMTP config, contact submissions are logged server-side but not emailed.

## Custom Domain

The site is intended to be linked to suneldah.com via Replit deployment custom domain settings.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
