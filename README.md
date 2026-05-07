# AIssistant

Local AIssistant workspace for notes, meeting intelligence, Email review, Notion task export, and Google Calendar scheduling.

Protected behavior:

- Emails are review-only and open Gmail only after `Open Gmail Draft` is clicked.
- Calendar events are created only after `Confirm Meeting` is clicked.
- Notion tasks are exported only after explicit task review and confirmation.
- `.env` contains local secrets and must never be committed.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create the free Google Apps Script Calendar bridge.

Use `google-apps-script-calendar-bridge.gs` from this folder as the script code. Deploy it as a Google Apps Script web app that runs as `juan.zuluaga1997@gmail.com`.

3. Copy the environment template:

```bash
copy .env.example .env
```

4. Fill in `.env`:

```text
CALENDAR_PROVIDER=apps_script
CALENDAR_BRIDGE_URL=your-google-apps-script-web-app-url
CALENDAR_BRIDGE_SECRET=your-long-private-shared-secret
EVENT_TIME_ZONE=America/Bogota
SESSION_SECRET=replace-with-a-long-random-string
ALLOWED_GOOGLE_EMAIL=juan.zuluaga1997@gmail.com
NOTION_TOKEN=your-notion-integration-token
NOTION_DATA_SOURCE_ID=your-notion-data-source-id
NOTION_API_VERSION=2026-03-11
```

5. Start the app:

```bash
npm start
```

6. Open:

```text
http://localhost:3000
```

## Google Apps Script Calendar Bridge

This app uses a free Google Apps Script bridge for Calendar scheduling. The browser never calls Google Apps Script directly. The flow is:

```text
Browser -> local Node backend -> Google Apps Script -> Google Calendar
```

The local backend sends only reviewed meeting details after the user clicks `Confirm Meeting`. It does not send the full transcript.

### Create the Apps Script

1. Open [Google Apps Script](https://script.google.com/) in the browser.
2. Click `New project`.
3. Name it `Codex 2026 Calendar Bridge`.
4. Delete the starter code.
5. Copy the full contents of `google-apps-script-calendar-bridge.gs` into the Apps Script editor.
6. In the Apps Script left sidebar, open `Services`.
7. Add the advanced service named `Calendar API` if available.

The script can still create a calendar event with `CalendarApp` if the advanced Calendar service is not enabled, but a Google Meet link is only expected when the advanced Calendar service is available.

### Add the shared secret in Apps Script

1. In Apps Script, open `Project Settings`.
2. Under `Script properties`, add a property:

```text
CALENDAR_BRIDGE_SECRET
```

3. Set its value to a long private random string.
4. Use the same value in the local `.env` file as `CALENDAR_BRIDGE_SECRET`.

Do not paste this secret into chat or commit it to source control.

### Deploy the bridge

1. Click `Deploy`.
2. Choose `New deployment`.
3. Select type `Web app`.
4. Set `Execute as` to `Me`.
5. Set access to `Anyone with the link`.
6. Click `Deploy`.
7. Authorize the script when Google asks for Calendar permissions.
8. Copy the web app URL ending in `/exec`.
9. Paste that URL into `.env` as `CALENDAR_BRIDGE_URL`.

### Required Calendar bridge `.env`

```text
CALENDAR_PROVIDER=apps_script
CALENDAR_BRIDGE_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
CALENDAR_BRIDGE_SECRET=the-same-secret-from-script-properties
EVENT_TIME_ZONE=America/Bogota
ALLOWED_GOOGLE_EMAIL=juan.zuluaga1997@gmail.com
```

For the current test version, deploy the Apps Script from `juan.zuluaga1997@gmail.com`; events will be created from that account.

## Optional Future Google OAuth

Google OAuth code is still present for a future multi-user version, but it is not used when:

```text
CALENDAR_PROVIDER=apps_script
```

Later, the app can support a simple onboarding flow where each user signs in with Gmail and grants Calendar/Gmail permissions.

## Notion Export

Notion export is optional. If `NOTION_TOKEN` or `NOTION_DATA_SOURCE_ID` is missing, the app will keep working and will show `Notion not configured`; no task data is sent to Notion.

To enable export:

1. Create a Notion internal integration with insert content capabilities.
2. Share the target Notion task database/data source with that integration.
3. Add the token and data source ID to `.env`.
4. Restart the server.

Recommended Notion data source schema:

| Property | Type |
| --- | --- |
| Task | Title |
| Assignee | People |
| Assignee Text | Text |
| Assignment Status | Select: Assigned, Needs assignment, Unassigned |
| Status | Status: Not started, In progress, Done, Blocked |
| Priority | Select: High, Medium, Low |
| Due Date | Date |
| Meeting | Text |
| Source | Select: Manual notes, Live notes, Generated action plan |
| Confidence | Number |
| Risk Flag | Checkbox |
| Exported At | Date |
| Notes | Text |

The app exports only selected action items after a review modal and explicit confirmation. It does not export the full transcript by default. Assignees are matched to Notion users only when the backend can make an exact email or name match; otherwise the original assignee is stored in `Assignee Text` and `Assignment Status` is set to `Needs assignment`.

## Endpoints

- `GET /auth/google` starts Google OAuth only when the OAuth provider is active.
- `GET /auth/google/callback` handles the OAuth callback only when the OAuth provider is active.
- `GET /api/auth/status` returns calendar provider configuration and login/bridge status.
- `POST /api/schedule-meet` creates a Google Calendar event with Google Meet when the configured provider supports it.
- `GET /api/notion/status` returns whether Notion export is configured.
- `POST /api/notion/export-tasks` exports confirmed action items to Notion.
- `POST /auth/logout` clears the local session.

## Scheduling Rules

The backend will not create a meeting unless:

- The configured calendar provider is ready.
- The request body includes `confirmed: true`.
- The request includes a valid meeting title, date, and start time. External attendees are optional; when none are detected, the backend uses `ALLOWED_GOOGLE_EMAIL` as the self-only calendar fallback.

When `CALENDAR_PROVIDER=apps_script`, the backend also includes the shared secret in the server-side request to Apps Script. The secret is never exposed to frontend JavaScript. The Apps Script validates the secret and `confirmed: true` before creating an event.

The Apps Script creates the event on the primary calendar for `juan.zuluaga1997@gmail.com`. If no external attendees are provided, the local backend sends `ALLOWED_GOOGLE_EMAIL` as the self-only fallback so the bridge can still create the event. It tries to create a Google Meet link using Calendar API conference data. If that is not available, it still creates the calendar event and returns a clear message.
