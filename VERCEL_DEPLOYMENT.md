# AIssistant Vercel Deployment Prep

This project is prepared for Vercel Git integration from:

```text
juanzuluaga1997-AI/AIssistant
```

## What Is Ready

- `vercel.json` routes all web requests to the Express app through `api/index.js`.
- `server.js` still starts normally with `npm start` locally.
- `server.js` can now be imported by Vercel without starting a second listener.
- `.env` remains ignored and must never be committed.
- `.vercel/` is ignored because it contains local Vercel project metadata.

## Vercel Project Settings

Create or import the Vercel project from the GitHub repository, then use these settings:

```text
Framework Preset: Other
Root Directory: ./
Build Command: empty / default
Install Command: npm install
Output Directory: empty / default
Production Branch: main
```

## Required Environment Variables

Add these in Vercel Project Settings -> Environment Variables. Use encrypted values for secrets.

```text
CALENDAR_PROVIDER=apps_script
CALENDAR_BRIDGE_URL=your-google-apps-script-web-app-url
CALENDAR_BRIDGE_SECRET=your-private-shared-secret
EVENT_TIME_ZONE=America/Bogota
SESSION_SECRET=your-long-random-session-secret
ALLOWED_GOOGLE_EMAIL=juan.zuluaga1997@gmail.com
NOTION_TOKEN=your-notion-integration-token
NOTION_DATA_SOURCE_ID=your-notion-data-source-id
NOTION_API_VERSION=2026-03-11
GEMINI_API_KEY=your-gemini-api-key
GEMINI_DASHBOARD_ENABLED=true
GEMINI_DASHBOARD_MODEL=gemini-2.5-flash-lite
GEMINI_DASHBOARD_FALLBACK_CHAIN_ENABLED=false
GEMINI_DASHBOARD_FALLBACK_MODELS=gemini-2.5-flash,gemini-2.0-flash-lite,gemini-2.0-flash,gemini-2.5-pro
GEMINI_DASHBOARD_TIMEOUT_MS=12000
GEMINI_EMAIL_ENABLED=false
GEMINI_EMAIL_PRIMARY_ENABLED=false
GEMINI_EMAIL_INTERPRETATION_ENABLED=false
```

Only add Google OAuth variables if the app is switched away from the Apps Script Calendar bridge:

```text
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=https://YOUR-VERCEL-DOMAIN/auth/google/callback
```

## Protected Behavior

Deployment must preserve these rules:

- No emails are auto-sent.
- Calendar events are created only after `Confirm Meeting`.
- Notion tasks are exported only after explicit confirmation.
- Notes are never cleared automatically.
- Secrets stay in Vercel settings, not in GitHub.

## Vercel Notes

The browser microphone can work on Vercel because the site will use HTTPS. The local Windows transcription fallback is intentionally disabled on Vercel because Vercel Functions do not run on the user's Windows machine. The original local app at `http://localhost:3000` still keeps that fallback.
