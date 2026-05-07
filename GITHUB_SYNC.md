# AIssistant GitHub Sync

This project is ready to be uploaded to GitHub after Git is installed or a GitHub connector is active.

## Protected Files

Never commit:

- `.env`
- `node_modules/`
- `.chrome*/`
- `.edge*/`
- `backups/`
- local ZIP/upload folders

`.env.example` is safe to commit because it contains placeholders only.

## First Upload

Recommended repository:

```text
juanzuluaga1997-AI/AIssistant
```

Recommended visibility: private while the app is still being developed.

After Git is available:

```bash
git init
git branch -M main
git add .
git commit -m "Initial AIssistant app"
git remote add origin https://github.com/juanzuluaga1997-AI/AIssistant.git
git push -u origin main
```

## Future Updates

After each protected app update:

```bash
git status
git add app.js server.js index.html styles.css package.json package-lock.json README.md .env.example .gitignore .gitattributes GITHUB_SYNC.md assets google-apps-script-calendar-bridge.gs work-email-knowledge-base.js
git commit -m "Update AIssistant"
git push
```

Or run the protected sync script:

```powershell
.\scripts\sync-github.ps1 -Message "Update AIssistant"
```

The script stages only the known app files and never stages `.env`, `node_modules`, browser QA profiles, backups, or local documents.

Do not use destructive Git commands such as `git reset --hard` unless the app has been backed up and the exact reason is clear.
