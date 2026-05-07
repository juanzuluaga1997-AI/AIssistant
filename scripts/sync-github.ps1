param(
  [string]$Message = "Update AIssistant"
)

$ErrorActionPreference = "Stop"

$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $RepoRoot

$Git = Get-Command git -ErrorAction SilentlyContinue
if (-not $Git) {
  $FallbackGit = "C:\Program Files\Git\cmd\git.exe"
  if (-not (Test-Path -LiteralPath $FallbackGit)) {
    throw "Git is not available. Install Git for Windows before syncing."
  }
  $GitPath = $FallbackGit
} else {
  $GitPath = $Git.Source
}

$TrackedPaths = @(
  ".env.example",
  ".gitattributes",
  ".gitignore",
  "AGENTS.md",
  "GITHUB_SYNC.md",
  "README.md",
  "app.js",
  "assets",
  "google-apps-script-calendar-bridge.gs",
  "index.html",
  "package-lock.json",
  "package.json",
  "scripts/sync-github.ps1",
  "server.js",
  "styles.css",
  "work-email-knowledge-base.js"
)

& $GitPath add -- $TrackedPaths

$Staged = & $GitPath diff --cached --name-only
if (-not $Staged) {
  Write-Output "No tracked AIssistant changes to commit."
  exit 0
}

& $GitPath commit -m $Message
& $GitPath push
