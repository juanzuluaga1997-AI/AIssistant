const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFile } = require("child_process");

const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const { google } = require("googleapis");
const { selectEmailKnowledge } = require("./work-email-knowledge-base");

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3000);
const IS_VERCEL = process.env.VERCEL === "1";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/auth/google/callback";
const SESSION_SECRET = process.env.SESSION_SECRET || "replace-this-dev-session-secret";
const ALLOWED_GOOGLE_EMAIL = (process.env.ALLOWED_GOOGLE_EMAIL || "juan.zuluaga1997@gmail.com").toLowerCase();
const EVENT_TIME_ZONE = process.env.EVENT_TIME_ZONE || "America/Bogota";
const CALENDAR_PROVIDER = (process.env.CALENDAR_PROVIDER || "apps_script").toLowerCase();
const CALENDAR_BRIDGE_URL = process.env.CALENDAR_BRIDGE_URL || "";
const CALENDAR_BRIDGE_SECRET = process.env.CALENDAR_BRIDGE_SECRET || "";
const NOTION_TOKEN = process.env.NOTION_TOKEN || "";
const NOTION_DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID || "";
const NOTION_API_VERSION = process.env.NOTION_API_VERSION || "2026-03-11";
const NOTION_API_BASE = "https://api.notion.com/v1";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_EMAIL_MODEL = process.env.GEMINI_EMAIL_MODEL || "gemini-2.5-flash-lite";
const GEMINI_EMAIL_ENABLED = /^true$/i.test(process.env.GEMINI_EMAIL_ENABLED || "false") &&
  /^true$/i.test(process.env.GEMINI_EMAIL_PRIMARY_ENABLED || "false");
const GEMINI_EMAIL_INTERPRETATION_ENABLED = /^true$/i.test(
  process.env.GEMINI_EMAIL_INTERPRETATION_ENABLED || process.env.GEMINI_EMAIL_ENABLED || "false"
);
const GEMINI_EMAIL_TIMEOUT_MS = normalizeGeminiEmailTimeout(process.env.GEMINI_EMAIL_TIMEOUT_MS);
const GEMINI_EMAIL_CONFIDENCE_THRESHOLD = 0.62;
const GEMINI_EMAIL_FALLBACK_MODELS = parseGeminiModelList(
  process.env.GEMINI_EMAIL_FALLBACK_MODELS || process.env.GEMINI_DASHBOARD_FALLBACK_MODELS || "gemini-2.5-flash,gemini-2.5-pro"
);
const GEMINI_DASHBOARD_MODEL = process.env.GEMINI_DASHBOARD_MODEL || GEMINI_EMAIL_MODEL;
const GEMINI_DASHBOARD_FALLBACK_MODELS = parseGeminiModelList(
  process.env.GEMINI_DASHBOARD_FALLBACK_MODELS || "gemini-2.5-flash,gemini-2.5-pro"
);
const GEMINI_DASHBOARD_ENABLED = /^true$/i.test(
  process.env.GEMINI_DASHBOARD_ENABLED ||
    process.env.GEMINI_EMAIL_INTERPRETATION_ENABLED ||
    process.env.GEMINI_EMAIL_ENABLED ||
    "false"
);
const GEMINI_DASHBOARD_TIMEOUT_MS = normalizeGeminiEmailTimeout(
  process.env.GEMINI_DASHBOARD_TIMEOUT_MS || process.env.GEMINI_EMAIL_TIMEOUT_MS
);
const GEMINI_DASHBOARD_LIMITS = {
  decisions: 5,
  risks: 5,
  importantPoints: 8,
  relevant: 8,
  keyPoints: 8,
  conclusions: 3
};
const GEMINI_DASHBOARD_CATEGORY_CUES = {
  decisions: [
    "decision",
    "decided",
    "agreed",
    "approved",
    "confirmed",
    "chosen",
    "selected",
    "resolved",
    "committed",
    "signed off",
    "green light",
    "go ahead",
    "final call"
  ],
  risks: [
    "risk",
    "danger",
    "dangerous",
    "blocker",
    "blocked",
    "issue",
    "problem",
    "concern",
    "obstacle",
    "dependency",
    "delay",
    "stuck",
    "unclear",
    "missing",
    "limitation",
    "challenge",
    "bottleneck",
    "warning"
  ],
  importantPoints: [
    "important",
    "key point",
    "main point",
    "relevant",
    "topic",
    "highlight",
    "context",
    "update",
    "detail",
    "priority",
    "focus",
    "remember",
    "insight",
    "observation",
    "consideration",
    "action item",
    "next action",
    "follow-up"
  ],
  conclusions: [
    "conclusion",
    "takeaway",
    "summary",
    "outcome",
    "result",
    "wrap-up",
    "final thought",
    "end state",
    "what we learned",
    "next step",
    "overall",
    "in short"
  ]
};
const GEMINI_EMAIL_TEMPLATE_TYPES = [
  "meeting_summary",
  "action_items_follow_up",
  "client_update",
  "blocker_risk_alert",
  "approval_request",
  "general_request",
  "thank_you_recap"
];
const GEMINI_EMAIL_TYPES = Array.from(new Set([
  ...GEMINI_EMAIL_TEMPLATE_TYPES,
  "request",
  "follow_up",
  "status_update",
  "risk_alert",
  "decision_recap",
  "next_steps",
  "reminder",
  "internal_update",
  "client_update"
]));
const GEMINI_EMAIL_TEMPLATE_GUIDANCE = {
  meeting_summary: {
    label: "Meeting Summary",
    useWhen: "The user asks to recap a meeting or discussion.",
    structure: ["brief opening", "key points", "decisions", "next steps"]
  },
  action_items_follow_up: {
    label: "Action Items Follow-up",
    useWhen: "Tasks, owners, dates, or next steps need follow-up.",
    structure: ["brief opening", "action items", "owners or dates if available", "requested confirmation"]
  },
  client_update: {
    label: "Client Update",
    useWhen: "A client or customer needs a project, product, app, website, or delivery update.",
    structure: ["brief update", "progress made", "what is pending", "next step or review request"]
  },
  blocker_risk_alert: {
    label: "Blocker / Risk Alert",
    useWhen: "Something is blocked, delayed, risky, missing, urgent, or needs escalation.",
    structure: ["clear issue", "impact", "help needed", "urgency or next step"]
  },
  approval_request: {
    label: "Approval Request",
    useWhen: "Approval is needed for content, budget, design, access, account, files, launch, or a decision.",
    structure: ["what needs approval", "why it matters", "requested action", "deadline if available"]
  },
  general_request: {
    label: "General Request",
    useWhen: "The email asks for access, information, files, account upgrade, purchase availability, payment, documents, or help.",
    structure: ["clear ask", "context", "requested action"]
  },
  thank_you_recap: {
    label: "Thank You / Recap",
    useWhen: "The user needs a polite closing, appreciation, or brief recap after a completed discussion.",
    structure: ["thank you", "short recap", "next step if any"]
  }
};
let notionDataSourcePropertiesCache = null;
let geminiSdkStatusCache = null;

const GOOGLE_SCOPES = [
  "openid",
  "email",
  "profile",
  "https://www.googleapis.com/auth/calendar.events"
];

app.use(express.json({ limit: "8mb" }));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(
  session({
    name: "ai-meeting-assistant.sid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    }
  })
);

app.get("/auth/google", (req, res) => {
  if (isAppsScriptCalendarProvider()) {
    res.status(409).send("Google OAuth is disabled because CALENDAR_PROVIDER=apps_script.");
    return;
  }

  if (!hasGoogleConfig()) {
    res.status(503).send("Google OAuth is not configured. Check .env and restart the server.");
    return;
  }

  const oauthClient = createOAuthClient();
  const state = crypto.randomBytes(24).toString("hex");
  req.session.oauthState = state;

  const url = oauthClient.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: GOOGLE_SCOPES,
    state
  });

  res.redirect(url);
});

app.get("/auth/google/callback", async (req, res) => {
  if (isAppsScriptCalendarProvider()) {
    res.status(409).send("Google OAuth is disabled because CALENDAR_PROVIDER=apps_script.");
    return;
  }

  if (!hasGoogleConfig()) {
    res.status(503).send("Google OAuth is not configured. Check .env and restart the server.");
    return;
  }

  const { code, state } = req.query;

  if (!code || !state || state !== req.session.oauthState) {
    res.status(400).send("Invalid OAuth callback state.");
    return;
  }

  delete req.session.oauthState;

  try {
    const oauthClient = createOAuthClient();
    const { tokens } = await oauthClient.getToken(String(code));
    oauthClient.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauthClient,
      version: "v2"
    });
    const { data: profile } = await oauth2.userinfo.get();
    const email = (profile.email || "").toLowerCase();

    if (email !== ALLOWED_GOOGLE_EMAIL) {
      req.session.destroy(() => {
        res.status(403).send(`Scheduling is restricted to ${ALLOWED_GOOGLE_EMAIL}.`);
      });
      return;
    }

    req.session.googleTokens = tokens;
    req.session.user = {
      email,
      name: profile.name || "",
      picture: profile.picture || ""
    };

    res.redirect("/");
  } catch (error) {
    res.status(500).send("Google authentication failed.");
  }
});

app.get("/api/auth/status", (req, res) => {
  const user = req.session.user || null;
  const bridgeProvider = isAppsScriptCalendarProvider();
  const configured = bridgeProvider ? hasCalendarBridgeConfig() : hasGoogleConfig();

  res.json({
    configured,
    authenticated: bridgeProvider ? configured : Boolean(user),
    email: bridgeProvider && configured ? ALLOWED_GOOGLE_EMAIL : user ? user.email : null,
    allowedEmail: ALLOWED_GOOGLE_EMAIL,
    provider: bridgeProvider ? "apps_script" : "google_oauth",
    requiresGoogleSignIn: !bridgeProvider,
    bridgeConfigured: hasCalendarBridgeConfig(),
    message: getCalendarStatusMessage(configured, Boolean(user)),
    scopes: bridgeProvider ? [] : GOOGLE_SCOPES
  });
});

app.post("/auth/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("ai-meeting-assistant.sid");
    res.json({
      ok: true
    });
  });
});

app.post("/api/schedule-meet", async (req, res) => {
  if (req.body.confirmed !== true) {
    res.status(400).json({
      message: "Scheduling requires confirmed: true."
    });
    return;
  }

  const validation = validateScheduleBody(req.body);
  if (!validation.ok) {
    res.status(400).json({
      message: validation.message
    });
    return;
  }

  if (isAppsScriptCalendarProvider()) {
    if (!hasCalendarBridgeConfig()) {
      res.status(501).json({
        credentialsMissing: true,
        provider: "apps_script",
        message: "Calendar Apps Script bridge is not configured. Add CALENDAR_BRIDGE_URL and CALENDAR_BRIDGE_SECRET to .env."
      });
      return;
    }

    try {
      const result = await scheduleWithAppsScriptBridge(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Calendar Apps Script bridge scheduling failed."
      });
    }
    return;
  }

  if (!hasGoogleConfig()) {
    res.status(501).json({
      credentialsMissing: true,
      provider: "google_oauth",
      message: "Google OAuth credentials are missing. Configure .env to enable real scheduling."
    });
    return;
  }

  if (!req.session.user || !req.session.googleTokens) {
    res.status(401).json({
      message: "Sign in with Google before scheduling."
    });
    return;
  }

  if (req.session.user.email.toLowerCase() !== ALLOWED_GOOGLE_EMAIL) {
    res.status(403).json({
      message: `Scheduling is restricted to ${ALLOWED_GOOGLE_EMAIL}.`
    });
    return;
  }

  try {
    const oauthClient = getAuthenticatedOAuthClient(req);
    const calendar = google.calendar({
      auth: oauthClient,
      version: "v3"
    });
    const eventRequest = buildCalendarEventRequest(req.body);

    const { data: event } = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all",
      requestBody: eventRequest
    });

    res.json({
      eventId: event.id,
      eventLink: event.htmlLink,
      meetLink: extractMeetLink(event),
      message: "Meeting scheduled on Google Calendar."
    });
  } catch (error) {
    res.status(500).json({
      message: "Google Calendar scheduling failed."
    });
  }
});

app.post("/api/transcribe-local", async (req, res) => {
  const audioBase64 = typeof req.body.audioBase64 === "string" ? req.body.audioBase64 : "";
  const culture = "en-US";

  if (IS_VERCEL) {
    res.status(501).json({
      ok: false,
      message: "Local Windows transcription fallback is unavailable on Vercel. Browser speech recognition can still be used from HTTPS."
    });
    return;
  }

  if (!audioBase64) {
    res.status(400).json({
      ok: false,
      message: "Missing audioBase64."
    });
    return;
  }

  let audioBuffer;
  try {
    audioBuffer = Buffer.from(audioBase64, "base64");
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Invalid audioBase64."
    });
    return;
  }

  if (audioBuffer.length < 1024) {
    res.status(400).json({
      ok: false,
      message: "Audio clip is too small to transcribe."
    });
    return;
  }

  const tempPath = path.join(os.tmpdir(), `codex-local-transcribe-${crypto.randomUUID()}.wav`);

  try {
    await fs.promises.writeFile(tempPath, audioBuffer);
    const transcript = await transcribeWithWindowsSpeech(tempPath, culture);
    res.json({
      ...transcript,
      transcript: normalizeBusinessEnglishText(transcript.transcript)
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message || "Local Windows transcription failed."
    });
  } finally {
    fs.promises.unlink(tempPath).catch(() => {});
  }
});

app.get("/api/notion/status", (req, res) => {
  const configured = hasNotionConfig();

  res.json({
    configured,
    dataSourceId: configured ? NOTION_DATA_SOURCE_ID : "",
    destination: configured ? "Meeting Tasks" : "",
    message: configured
      ? "Notion export is configured."
      : "Notion export is not configured. Add NOTION_TOKEN and NOTION_DATA_SOURCE_ID to .env."
  });
});

app.get("/api/gemini/email-status", async (req, res) => {
  res.json(await getGeminiEmailReadiness());
});

app.post("/api/gemini/compose-email-test", async (req, res) => {
  try {
    res.json(await composeGeminiEmailFromContext(req.body || {}));
  } catch (error) {
    res.json(buildGeminiEmailFallback("Gemini email composition is unavailable."));
  }
});

app.post("/api/gemini/interpret-email-context", async (req, res) => {
  try {
    res.json(await interpretGeminiEmailContext(req.body || {}));
  } catch (error) {
    res.json(buildGeminiEmailInterpretationFallback("Gemini email interpretation is unavailable."));
  }
});

app.post("/api/gemini/interpret-dashboard-context", async (req, res) => {
  try {
    res.json(await interpretGeminiDashboardContext(req.body || {}));
  } catch (error) {
    res.json(buildGeminiDashboardFallback("Gemini dashboard interpretation is unavailable."));
  }
});

app.post("/api/notion/export-tasks", async (req, res) => {
  if (req.body.confirmed !== true) {
    res.status(400).json({
      message: "Notion export requires confirmed: true."
    });
    return;
  }

  if (!hasNotionConfig()) {
    res.status(501).json({
      credentialsMissing: true,
      message: "Notion credentials are missing. Configure NOTION_TOKEN and NOTION_DATA_SOURCE_ID in .env to enable export."
    });
    return;
  }

  const validation = validateNotionExportBody(req.body);
  if (!validation.ok) {
    res.status(400).json({
      message: validation.message
    });
    return;
  }

  try {
    const usersResult = await listNotionUsersSafely();
    const created = [];
    const failed = [];

    for (const task of validation.tasks) {
      try {
        const resolvedAssignee = resolveNotionAssignee(task.assigneeText, usersResult.users, task.assigneeEmail);
        const page = await createNotionTaskPage(task, resolvedAssignee);
        created.push({
          task: task.task,
          url: page.url || "",
          pageId: page.id || "",
          destination: "Meeting Tasks",
          dataSourceId: NOTION_DATA_SOURCE_ID,
          assignmentStatus: resolvedAssignee.assignmentStatus
        });
      } catch (error) {
        failed.push({
          task: task.task,
          message: sanitizeExternalError(error.message)
        });
      }
    }

    res.status(failed.length && !created.length ? 502 : 200).json({
      created,
      failed,
      userMatching: {
        attempted: usersResult.attempted,
        available: usersResult.available,
        warning: usersResult.warning
      },
      message: failed.length
        ? "Some tasks could not be exported to Notion."
        : "Tasks exported to Notion."
    });
  } catch (error) {
    res.status(502).json({
      message: "Notion export failed. Check token permissions, database sharing, and schema."
    });
  }
});

app.post("/api/notion/export-page", async (req, res) => {
  if (req.body.confirmed !== true) {
    res.status(400).json({
      message: "Notion page creation requires confirmed: true."
    });
    return;
  }

  if (!hasNotionConfig()) {
    res.status(501).json({
      credentialsMissing: true,
      message: "Notion credentials are missing. Configure NOTION_TOKEN and NOTION_DATA_SOURCE_ID in .env to enable page creation."
    });
    return;
  }

  const validation = validateNotionPageBody(req.body);
  if (!validation.ok) {
    res.status(400).json({
      message: validation.message
    });
    return;
  }

  try {
    const page = await createNotionVoicePage(validation.page);
    res.json({
      created: {
        title: validation.page.title,
        url: page.url || ""
      },
      message: "Page created in Notion."
    });
  } catch (error) {
    res.status(502).json({
      message: "Notion page creation failed. Check token permissions, database sharing, and schema."
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

app.get("/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "app.js"));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`AIssistant running at http://localhost:${PORT}`);
    if (isAppsScriptCalendarProvider()) {
      if (!hasCalendarBridgeConfig()) {
        console.log("Calendar Apps Script bridge is not configured. Add CALENDAR_BRIDGE_URL and CALENDAR_BRIDGE_SECRET to .env.");
      }
    } else if (!hasGoogleConfig()) {
      console.log("Google OAuth is not fully configured. Copy .env.example to .env and fill in the values.");
    }
    if (!hasNotionConfig()) {
      console.log("Notion export is not configured. Add NOTION_TOKEN and NOTION_DATA_SOURCE_ID to .env to enable it.");
    }
  });
}

module.exports = app;

function isAppsScriptCalendarProvider() {
  return CALENDAR_PROVIDER === "apps_script";
}

function hasCalendarBridgeConfig() {
  return Boolean(CALENDAR_BRIDGE_URL && CALENDAR_BRIDGE_SECRET && ALLOWED_GOOGLE_EMAIL);
}

function hasGoogleConfig() {
  return Boolean(
    GOOGLE_CLIENT_ID &&
      GOOGLE_CLIENT_SECRET &&
      GOOGLE_REDIRECT_URI &&
      process.env.SESSION_SECRET &&
      ALLOWED_GOOGLE_EMAIL
  );
}

function getCalendarStatusMessage(configured, authenticated) {
  if (isAppsScriptCalendarProvider()) {
    return configured
      ? `Calendar bridge configured. Events will be created from ${ALLOWED_GOOGLE_EMAIL}.`
      : "Calendar bridge is not configured. Add CALENDAR_BRIDGE_URL and CALENDAR_BRIDGE_SECRET to .env.";
  }

  if (!configured) {
    return "Google Calendar is not configured. Real scheduling requires Google OAuth setup.";
  }

  return authenticated
    ? `Signed in as ${ALLOWED_GOOGLE_EMAIL}.`
    : "Not signed in. Sign in to schedule on Google Calendar.";
}

function hasNotionConfig() {
  return Boolean(NOTION_TOKEN && NOTION_DATA_SOURCE_ID);
}

function normalizeGeminiEmailTimeout(value) {
  const parsed = Number(value || 12000);
  if (!Number.isFinite(parsed)) {
    return 12000;
  }

  return Math.max(1000, Math.min(60000, Math.round(parsed)));
}

function parseGeminiModelList(value) {
  return String(value || "")
    .split(/[,\s]+/)
    .map((model) => model.trim())
    .filter(Boolean);
}

async function getGeminiEmailReadiness() {
  const sdkStatus = await getGeminiSdkStatus();
  const configured = Boolean(GEMINI_API_KEY);
  const ready = Boolean(GEMINI_EMAIL_ENABLED && configured && sdkStatus.available);

  return {
    ready,
    enabled: GEMINI_EMAIL_ENABLED,
    configured,
    sdkAvailable: sdkStatus.available,
    model: GEMINI_EMAIL_MODEL,
    timeoutMs: GEMINI_EMAIL_TIMEOUT_MS,
    message: getGeminiEmailStatusMessage({
      ready,
      configured,
      sdkAvailable: sdkStatus.available,
      sdkMessage: sdkStatus.message
    })
  };
}

async function getGeminiSdkStatus() {
  if (geminiSdkStatusCache) {
    return geminiSdkStatusCache;
  }

  try {
    const geminiSdk = await import("@google/genai");
    const available = typeof geminiSdk.GoogleGenAI === "function";
    geminiSdkStatusCache = {
      available,
      message: available
        ? "Gemini SDK is available."
        : "Gemini SDK loaded, but GoogleGenAI was not available."
    };
  } catch (error) {
    geminiSdkStatusCache = {
      available: false,
      message: "Gemini SDK is not available. Install @google/genai to enable Gemini email composition later."
    };
  }

  return geminiSdkStatusCache;
}

function getGeminiEmailStatusMessage(status) {
  if (!GEMINI_EMAIL_ENABLED) {
    return "Gemini email composition is disabled.";
  }

  if (!status.configured) {
    return "Gemini email composition is disabled until GEMINI_API_KEY is configured.";
  }

  if (!status.sdkAvailable) {
    return status.sdkMessage || "Gemini SDK is unavailable.";
  }

  return "Gemini email composition is ready for AIssistant Emails.";
}

async function interpretGeminiEmailContext(body) {
  const input = normalizeGeminiEmailInterpretationInput(body);

  if (!input.rawContext) {
    return buildGeminiEmailInterpretationFallback("No usable email interpretation context was provided.");
  }

  if (!GEMINI_EMAIL_INTERPRETATION_ENABLED) {
    return buildGeminiEmailInterpretationFallback("Gemini email interpretation is disabled.");
  }

  if (!GEMINI_API_KEY) {
    return buildGeminiEmailInterpretationFallback("Gemini email interpretation is disabled until GEMINI_API_KEY is configured.");
  }

  const sdkStatus = await getGeminiSdkStatus();
  if (!sdkStatus.available) {
    return buildGeminiEmailInterpretationFallback(sdkStatus.message || "Gemini SDK is unavailable.");
  }

  try {
    const modelOutput = await requestGeminiEmailInterpretation(input);
    const parsed = parseGeminiEmailJson(modelOutput.text);
    const validation = validateGeminiEmailInterpretation(parsed);

    if (!validation.ok) {
      return buildGeminiEmailInterpretationFallback(validation.message || "Gemini returned invalid interpretation JSON.", {
        source: "gemini-interpretation"
      });
    }

    return {
      ok: true,
      source: "gemini-interpretation",
      fallback: false,
      model: modelOutput.model,
      interpretation: validation.interpretation
    };
  } catch (error) {
    const message = isAbortLikeError(error)
      ? "Gemini email interpretation timed out."
      : `Gemini email interpretation failed safely: ${sanitizeGeminiFailureMessage(error?.message)}`;
    return buildGeminiEmailInterpretationFallback(message, {
      source: "gemini-interpretation"
    });
  }
}

async function composeGeminiEmailFromContext(body) {
  const input = normalizeGeminiEmailInput(body);

  if (!input.rawContext) {
    return buildGeminiEmailFallback("No usable email context was provided.");
  }

  if (!GEMINI_EMAIL_ENABLED) {
    return buildGeminiEmailFallback("Gemini email composition is disabled.");
  }

  if (!GEMINI_API_KEY) {
    return buildGeminiEmailFallback("Gemini email composition is disabled until GEMINI_API_KEY is configured.");
  }

  const sdkStatus = await getGeminiSdkStatus();
  if (!sdkStatus.available) {
    return buildGeminiEmailFallback(sdkStatus.message || "Gemini SDK is unavailable.");
  }

  try {
    const modelOutput = await requestGeminiEmailComposition(input);
    const parsed = parseGeminiEmailJson(modelOutput);
    const validation = validateGeminiEmailDraft(parsed);

    if (!validation.ok) {
      return buildGeminiEmailFallback(validation.message || "Gemini returned invalid email JSON.", {
        source: "gemini"
      });
    }

    const draft = validation.draft;
    const gmailReady = isGeminiEmailGmailReady(draft);
    const lowConfidence = draft.emailNeeded && draft.confidence < GEMINI_EMAIL_CONFIDENCE_THRESHOLD;

    return {
      ok: gmailReady,
      source: "gemini",
      fallback: lowConfidence || !gmailReady,
      gmailReady,
      model: GEMINI_EMAIL_MODEL,
      confidenceThreshold: GEMINI_EMAIL_CONFIDENCE_THRESHOLD,
      reason: lowConfidence
        ? "Gemini returned a low-confidence draft. Review carefully before opening Gmail."
        : draft.reason,
      draft
    };
  } catch (error) {
    const message = isAbortLikeError(error)
      ? "Gemini email composition timed out."
      : `Gemini email composition failed safely: ${sanitizeGeminiFailureMessage(error?.message)}`;
    if (isGeminiQuotaError(error)) {
      return buildProtectedLocalTemplateEmailFallback(input, message, {
        source: "gemini"
      });
    }
    return buildGeminiEmailFallback(message, {
      source: "gemini"
    });
  }
}

async function interpretGeminiDashboardContext(body) {
  const input = normalizeGeminiDashboardInput(body);

  if (!input.rawContext) {
    return buildGeminiDashboardFallback("No usable dashboard interpretation context was provided.");
  }

  if (!GEMINI_DASHBOARD_ENABLED) {
    return buildGeminiDashboardFallback("Gemini dashboard interpretation is disabled.");
  }

  if (!GEMINI_API_KEY) {
    return buildGeminiDashboardFallback("Gemini dashboard interpretation is disabled until GEMINI_API_KEY is configured.");
  }

  const sdkStatus = await getGeminiSdkStatus();
  if (!sdkStatus.available) {
    return buildGeminiDashboardFallback(sdkStatus.message || "Gemini SDK is unavailable.");
  }

  try {
    const modelOutput = await requestGeminiDashboardInterpretation(input);
    const parsed = parseGeminiDashboardJson(modelOutput.text);
    const validation = validateGeminiDashboardInterpretation(parsed);

    if (!validation.ok) {
      return buildGeminiDashboardFallback(validation.message || "Gemini returned invalid dashboard JSON.", {
        source: "gemini-dashboard"
      });
    }

    return {
      ok: true,
      source: "gemini-dashboard",
      fallback: false,
      model: modelOutput.model,
      dashboard: validation.dashboard
    };
  } catch (error) {
    const message = isAbortLikeError(error)
      ? "Gemini dashboard interpretation timed out."
      : `Gemini dashboard interpretation failed safely: ${sanitizeGeminiDashboardFailureMessage(error?.message)}`;
    return buildGeminiDashboardFallback(message, {
      source: "gemini-dashboard"
    });
  }
}

function isGeminiQuotaError(error) {
  return /429|quota|RESOURCE_EXHAUSTED/i.test(String(error?.message || error || ""));
}

function sanitizeGeminiFailureMessage(value) {
  const raw = String(value || "");
  if (/429|quota|RESOURCE_EXHAUSTED/i.test(raw)) {
    return "Gemini quota is temporarily exhausted. Email fallback stayed protected.";
  }
  if (/api key|API_KEY|permission|unauthorized|forbidden/i.test(raw)) {
    return "Gemini configuration needs review. Email fallback stayed protected.";
  }
  return truncateText(
    normalizeBusinessEnglishText(raw || "unknown error")
      .replace(/AIza[0-9A-Za-z_-]+/g, "[redacted-api-key]"),
    220
  );
}

function sanitizeGeminiDashboardFailureMessage(value) {
  const raw = String(value || "");
  if (/429|quota|RESOURCE_EXHAUSTED/i.test(raw)) {
    return "Gemini quota is temporarily exhausted. Dashboard fallback organizer stayed active.";
  }
  if (/api key|API_KEY|permission|unauthorized|forbidden/i.test(raw)) {
    return "Gemini dashboard configuration needs review. Dashboard fallback organizer stayed active.";
  }
  return truncateText(
    normalizeBusinessEnglishText(raw || "unknown error")
      .replace(/AIza[0-9A-Za-z_-]+/g, "[redacted-api-key]"),
    220
  );
}

function normalizeGeminiEmailInput(body) {
  const directRequest = normalizeGeminiContextText(
    body.explicitRequest || body.command || body.voiceCommand || body.clause || body.request || ""
  );
  const currentEmailSegment = normalizeGeminiContextText(body.currentEmailSegment || "");
  const transcript = normalizeGeminiContextText(
    currentEmailSegment || body.transcript || body.rawTranscript || body.liveTranscript || body.rawContext || ""
  );
  const availableNotesContext = normalizeGeminiContextText(body.availableNotesContext || body.availableNotes || body.notesContext || "");
  const allMeetingContext = normalizeGeminiAllMeetingContext(body.allMeetingContext || {});
  const context = normalizeGeminiContextText(body.context || body.meetingContext || "");
  const notes = normalizeGeminiContextText(body.notes || body.meetingNotes || "");
  const meetingSummary = normalizeGeminiContextText(body.meetingSummary || body.summary || "");
  const recipientHint = truncateText(normalizeBusinessEnglishText(body.recipientHint || body.recipient || ""), 160);
  const previousEmailTopics = normalizeGeminiList(body.previousEmailTopics).slice(-4);
  const existingEmailSubjects = normalizeGeminiList(body.existingEmailSubjects).slice(-8);
  const richEmailBrief = normalizeGeminiEmailBrief(body.richEmailBrief || body.emailContextBrief || null);
  const briefKnowledgeQuery = [
    richEmailBrief.mainTopic,
    richEmailBrief.communicationGoal,
    richEmailBrief.whyItMatters,
    richEmailBrief.requestedAction,
    richEmailBrief.relevantFacts.join(" "),
    availableNotesContext,
    allMeetingContext.keyPoints.join(" "),
    allMeetingContext.conclusions.join(" ")
  ].filter(Boolean).join(" ");
  const selectedEmailKnowledge = selectEmailKnowledge(
    briefKnowledgeQuery || currentEmailSegment || transcript || availableNotesContext || directRequest,
    existingEmailSubjects.map((subject) => ({
      subject
    })),
    5
  );
  const selectedEmailTemplate = selectGeminiEmailTemplate({
    directRequest,
    currentEmailSegment: currentEmailSegment || transcript,
    availableNotesContext,
    richEmailBrief,
    selectedEmailKnowledge
  });

  const pieces = [
    hasGeminiEmailBriefValue(richEmailBrief) ? `Rich Email Context Brief: ${JSON.stringify(richEmailBrief)}` : "",
    selectedEmailTemplate ? `Selected email template: ${selectedEmailTemplate.label}` : "",
    hasGeminiAllMeetingContextValue(allMeetingContext) ? `All available meeting context: ${JSON.stringify(allMeetingContext)}` : "",
    directRequest ? `Direct request: ${directRequest}` : "",
    currentEmailSegment ? `Current email segment: ${currentEmailSegment}` : "",
    availableNotesContext ? `Available notes and transcript context: ${availableNotesContext}` : "",
    recipientHint ? `Recipient hint: ${recipientHint}` : "",
    transcript && !hasGeminiEmailBriefValue(richEmailBrief) ? `Transcript context: ${transcript}` : "",
    context ? `Additional context: ${context}` : "",
    notes ? `Meeting notes: ${notes}` : "",
    meetingSummary ? `Current topic summary: ${meetingSummary}` : "",
    previousEmailTopics.length ? `Earlier unrelated topics to ignore: ${previousEmailTopics.join(" | ")}` : "",
    existingEmailSubjects.length ? `Existing email subjects already prepared: ${existingEmailSubjects.join(" | ")}` : ""
  ].filter(Boolean);

  return {
    directRequest,
    currentEmailSegment: currentEmailSegment || transcript,
    recipientHint,
    previousEmailTopics,
    existingEmailSubjects,
    richEmailBrief,
    allMeetingContext,
    selectedEmailKnowledge,
    selectedEmailTemplate,
    availableNotesContext,
    rawContext: truncateText(pieces.join("\n"), 8000)
  };
}

function selectGeminiEmailTemplate({ directRequest, currentEmailSegment, availableNotesContext, richEmailBrief, selectedEmailKnowledge }) {
  const text = normalizeBusinessEnglishText([
    directRequest,
    currentEmailSegment,
    availableNotesContext,
    richEmailBrief?.mainTopic,
    richEmailBrief?.communicationGoal,
    richEmailBrief?.whyItMatters,
    richEmailBrief?.requestedAction,
    richEmailBrief?.emailType,
    ...(richEmailBrief?.relevantFacts || []),
    ...(richEmailBrief?.decisions || []),
    ...(richEmailBrief?.blockersOrRisks || []),
    ...(richEmailBrief?.nextSteps || []),
    ...(selectedEmailKnowledge || []).flatMap((entry) => [
      entry.domain,
      entry.topic,
      ...(entry.emailTypes || []),
      ...(entry.commonIntents || [])
    ])
  ].filter(Boolean).join(" "));

  if (!text || isTemplateSelectionLowValue(text)) {
    return null;
  }

  const scores = {
    meeting_summary: scoreGeminiEmailTemplate(text, [
      /\b(?:summari[sz]e|recap|meeting summary|discussion summary|send the next steps?|key points|decisions)\b/i
    ]),
    action_items_follow_up: scoreGeminiEmailTemplate(text, [
      /\b(?:action items?|owners?|assignees?|due dates?|follow[- ]?up|next steps?|tasks?)\b/i
    ]),
    client_update: scoreGeminiEmailTemplate(text, [
      /\b(?:client|customer|external update|project update|app(?:lication)? is almost complete|testing round|next review|status update)\b/i
    ]),
    blocker_risk_alert: scoreGeminiEmailTemplate(text, [
      /\b(?:blocked|blocker|risk|urgent|delay|delayed|missing|not sent|not shared|escalat(?:e|ion)|impact)\b/i
    ]),
    approval_request: scoreGeminiEmailTemplate(text, [
      /\b(?:approval|approve|approved|permission|sign[- ]?off|budget|launch|design approval|content approval)\b/i
    ]),
    general_request: scoreGeminiEmailTemplate(text, [
      /\b(?:ask|request|need|needs|access|account|upgrade|pro account|github|git\s*hub|upload|invoice|payment|file|document|buy|purchase|available|availability|store|help)\b/i
    ]),
    thank_you_recap: scoreGeminiEmailTemplate(text, [
      /\b(?:thank you|thanks|appreciate|great meeting|good meeting|wrap up|closing recap)\b/i
    ])
  };

  if (/\b(?:client|customer)\b/i.test(text)) {
    scores.client_update += 2;
  }
  if (/\b(?:blocked|blocker|risk|missing|not sent|not shared)\b/i.test(text)) {
    scores.blocker_risk_alert += 2;
  }
  if (/\b(?:approval|approve|permission|sign[- ]?off)\b/i.test(text)) {
    scores.approval_request += 2;
  }
  if (/\b(?:account|access|github|git\s*hub|upload|invoice|payment|buy|purchase|available|store)\b/i.test(text)) {
    scores.general_request += 2;
  }

  const bestType = Object.entries(scores)
    .sort((first, second) => second[1] - first[1])[0];
  if (!bestType || bestType[1] <= 0) {
    const fallbackType = getGeminiFallbackTemplateType(text, richEmailBrief);
    return fallbackType
      ? {
          type: fallbackType,
          score: 0.5,
          ...GEMINI_EMAIL_TEMPLATE_GUIDANCE[fallbackType]
        }
      : null;
  }

  return {
    type: bestType[0],
    score: bestType[1],
    ...GEMINI_EMAIL_TEMPLATE_GUIDANCE[bestType[0]]
  };
}

function getGeminiFallbackTemplateType(text, richEmailBrief) {
  if (!text || isTemplateSelectionLowValue(text)) {
    return "";
  }

  if ((richEmailBrief?.blockersOrRisks || []).length || /\b(?:blocked|blocker|risk|missing|delay|delayed)\b/i.test(text)) {
    return "blocker_risk_alert";
  }
  if ((richEmailBrief?.nextSteps || []).length || /\b(?:action items?|next steps?|tasks?|owners?)\b/i.test(text)) {
    return "action_items_follow_up";
  }
  if ((richEmailBrief?.decisions || []).length || /\b(?:decision|decided|approved|confirmed)\b/i.test(text)) {
    return "meeting_summary";
  }
  if (/\b(?:client|customer|project update|status update|testing round|next review)\b/i.test(text)) {
    return "client_update";
  }
  if (/\b(?:approval|approve|permission|sign[- ]?off)\b/i.test(text)) {
    return "approval_request";
  }
  if (text.split(/\s+/).filter(Boolean).length >= 18) {
    return "meeting_summary";
  }

  return "";
}

function scoreGeminiEmailTemplate(text, patterns) {
  return patterns.reduce((score, pattern) => score + (pattern.test(text) ? 1 : 0), 0);
}

function isTemplateSelectionLowValue(value) {
  const text = normalizeBusinessEnglishText(value);
  return !/\b(?:email|message|send|share|ask|request|update|follow[- ]?up|summary|recap|confirm|approval|client|customer|team|finance|store|vendor|github|git\s*hub|account|access|invoice|payment|blocked|blocker|risk|files?|documents?|buy|purchase|available|next steps?)\b/i.test(text) &&
    /\b(?:test|testing|app|application|section|works?|working|good|ok|okay|fine)\b/i.test(text);
}

function normalizeGeminiEmailBrief(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return createEmptyGeminiEmailBriefContext();
  }

  return {
    mainTopic: truncateText(normalizeBusinessEnglishText(value.mainTopic), 180),
    communicationGoal: truncateText(normalizeBusinessEnglishText(value.communicationGoal), 240),
    whyItMatters: truncateText(normalizeBusinessEnglishText(value.whyItMatters), 300),
    relevantFacts: normalizeGeminiList(value.relevantFacts).slice(0, 6),
    decisions: normalizeGeminiList(value.decisions).slice(0, 5),
    blockersOrRisks: normalizeGeminiList(value.blockersOrRisks).slice(0, 5),
    nextSteps: normalizeGeminiList(value.nextSteps).slice(0, 5),
    requestedAction: truncateText(normalizeBusinessEnglishText(value.requestedAction), 240),
    audienceHint: truncateText(normalizeBusinessEnglishText(value.audienceHint), 180),
    tone: truncateText(normalizeBusinessEnglishText(value.tone), 80),
    emailType: truncateText(normalizeBusinessEnglishText(value.emailType), 80),
    ignoreList: normalizeGeminiList(value.ignoreList).slice(0, 8)
  };
}

function createEmptyGeminiEmailBriefContext() {
  return {
    mainTopic: "",
    communicationGoal: "",
    whyItMatters: "",
    relevantFacts: [],
    decisions: [],
    blockersOrRisks: [],
    nextSteps: [],
    requestedAction: "",
    audienceHint: "",
    tone: "",
    emailType: "",
    ignoreList: []
  };
}

function normalizeGeminiAllMeetingContext(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return createEmptyGeminiAllMeetingContext();
  }

  return {
    manualNotes: normalizeGeminiContextText(value.manualNotes || ""),
    liveTranscript: normalizeGeminiContextText(value.liveTranscript || ""),
    currentEmailSegment: normalizeGeminiContextText(value.currentEmailSegment || ""),
    availableNotesContext: normalizeGeminiContextText(value.availableNotesContext || ""),
    summary: truncateText(normalizeBusinessEnglishText(value.summary), 500),
    actionItems: normalizeGeminiList(value.actionItems).slice(0, 8),
    decisions: normalizeGeminiList(value.decisions).slice(0, 8),
    blockers: normalizeGeminiList(value.blockers || value.risks).slice(0, 8),
    relevantPoints: normalizeGeminiList(value.relevantPoints || value.relevant).slice(0, 8),
    keyPoints: normalizeGeminiList(value.keyPoints).slice(0, 8),
    conclusions: normalizeGeminiList(value.conclusions).slice(0, 8)
  };
}

function createEmptyGeminiAllMeetingContext() {
  return {
    manualNotes: "",
    liveTranscript: "",
    currentEmailSegment: "",
    availableNotesContext: "",
    summary: "",
    actionItems: [],
    decisions: [],
    blockers: [],
    relevantPoints: [],
    keyPoints: [],
    conclusions: []
  };
}

function hasGeminiAllMeetingContextValue(context) {
  return Boolean(
    context?.manualNotes ||
    context?.liveTranscript ||
    context?.availableNotesContext ||
    context?.summary ||
    (context?.actionItems || []).length ||
    (context?.decisions || []).length ||
    (context?.blockers || []).length ||
    (context?.relevantPoints || []).length ||
    (context?.keyPoints || []).length ||
    (context?.conclusions || []).length
  );
}

function hasGeminiEmailBriefValue(brief) {
  return Boolean(
    brief?.mainTopic ||
    brief?.communicationGoal ||
    brief?.whyItMatters ||
    brief?.requestedAction ||
    (brief?.relevantFacts || []).length ||
    (brief?.decisions || []).length ||
    (brief?.blockersOrRisks || []).length ||
    (brief?.nextSteps || []).length
  );
}

function normalizeGeminiList(value) {
  const values = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  return values
    .map((item) => truncateText(normalizeBusinessEnglishText(item), 120))
    .filter(Boolean);
}

function normalizeGeminiContextText(value) {
  return truncateText(
    String(value || "")
      .replace(/\u2026/g, "...")
      .replace(/[^\S\r\n]+/g, " ")
      .split(/\r?\n+/)
      .map((line) => normalizeBusinessEnglishText(removeGeminiSpeechNoise(line)))
      .filter(Boolean)
      .join("\n"),
    4000
  );
}

function normalizeGeminiEmailInterpretationInput(body) {
  const allMeetingContext = normalizeGeminiAllMeetingContext(body.allMeetingContext || {});
  const dashboardContext = normalizeGeminiInterpretationDashboard(body.dashboardContext || {});
  const preparedTasks = normalizeGeminiList(body.preparedTasks).slice(0, 8);
  const preparedMeetings = normalizeGeminiList(body.preparedMeetings).slice(0, 6);
  const manualNotes = normalizeGeminiContextText(body.manualNotes || allMeetingContext.manualNotes || "");
  const liveNotes = normalizeGeminiContextText(body.liveNotes || body.liveTranscript || allMeetingContext.liveTranscript || "");
  const sourceText = normalizeGeminiContextText(body.sourceText || body.availableNotesContext || allMeetingContext.availableNotesContext || "");
  const emailRequest = truncateText(normalizeBusinessEnglishText(body.emailRequest || body.explicitRequest || ""), 260);
  const currentEmailSegment = normalizeGeminiContextText(body.currentEmailSegment || allMeetingContext.currentEmailSegment || "");
  const recipientHint = truncateText(normalizeBusinessEnglishText(body.recipientHint || ""), 160);
  const currentSubject = truncateText(normalizeBusinessEnglishText(body.currentSubject || ""), 160);

  const contextObject = {
    emailRequest,
    currentEmailSegment,
    manualNotes,
    liveNotes,
    sourceText,
    dashboard: dashboardContext,
    decisions: allMeetingContext.decisions,
    risksOrBlockers: allMeetingContext.blockers,
    relevant: allMeetingContext.relevantPoints,
    keyPoints: allMeetingContext.keyPoints,
    conclusions: allMeetingContext.conclusions,
    actionItems: allMeetingContext.actionItems,
    preparedTasks,
    preparedMeetings,
    recipientHint,
    currentSubject
  };
  const rawContext = normalizeGeminiContextText(JSON.stringify(contextObject));

  return {
    ...contextObject,
    rawContext
  };
}

function normalizeGeminiInterpretationDashboard(value) {
  const dashboard = value && typeof value === "object" ? value : {};
  const importantPoints = normalizeGeminiList([
    ...normalizeGeminiList(dashboard.importantPoints),
    ...normalizeGeminiList(dashboard.relevant || dashboard.topics),
    ...normalizeGeminiList(dashboard.keyPoints)
  ]).slice(0, 8);
  return {
    decisions: normalizeGeminiList(dashboard.decisions).slice(0, 8),
    risksOrBlockers: normalizeGeminiList(dashboard.risksOrBlockers || dashboard.risks).slice(0, 8),
    importantPoints,
    relevant: importantPoints,
    keyPoints: importantPoints,
    conclusions: normalizeGeminiList(dashboard.conclusions).slice(0, 8)
  };
}

function normalizeGeminiDashboardInput(body) {
  const dashboardContext = normalizeGeminiDashboardBuckets(body.dashboardContext || body.dashboard || {});
  const meetingIntelligence = normalizeGeminiDashboardMeetingIntelligence(body.meetingIntelligence || {});
  const preparedTasks = normalizeGeminiList(body.preparedTasks).slice(0, 8);
  const preparedMeetings = normalizeGeminiList(body.preparedMeetings).slice(0, 6);
  const manualNotes = normalizeGeminiContextText(body.manualNotes || "");
  const liveNotes = normalizeGeminiContextText(body.liveNotes || body.liveTranscript || "");
  const transcript = normalizeGeminiContextText(body.transcript || body.sourceText || "");

  const contextObject = {
    manualNotes,
    liveNotes,
    transcript,
    dashboardContext,
    meetingIntelligence,
    preparedTasks,
    preparedMeetings
  };

  return {
    ...contextObject,
    rawContext: hasGeminiDashboardInputValue(contextObject)
      ? truncateText(JSON.stringify(contextObject, null, 2), 6500)
      : ""
  };
}

function normalizeGeminiDashboardBuckets(value) {
  const dashboard = value && typeof value === "object" ? value : {};
  const importantPoints = [
    ...normalizeGeminiDashboardItems(dashboard.importantPoints, "importantPoints"),
    ...normalizeGeminiDashboardItems(dashboard.relevant || dashboard.topics, "importantPoints"),
    ...normalizeGeminiDashboardItems(dashboard.keyPoints, "importantPoints")
  ];
  return {
    decisions: normalizeGeminiDashboardItems(dashboard.decisions, "decisions"),
    risks: normalizeGeminiDashboardItems(dashboard.risks || dashboard.risksOrBlockers, "risks"),
    importantPoints: normalizeGeminiDashboardItems(importantPoints, "importantPoints"),
    relevant: normalizeGeminiDashboardItems(dashboard.relevant || dashboard.topics, "relevant"),
    keyPoints: normalizeGeminiDashboardItems(dashboard.keyPoints, "keyPoints"),
    conclusions: normalizeGeminiDashboardItems(dashboard.conclusions, "conclusions")
  };
}

function normalizeGeminiDashboardMeetingIntelligence(value) {
  const context = value && typeof value === "object" ? value : {};
  const importantPoints = [
    ...normalizeGeminiDashboardItems(context.importantPoints, "importantPoints"),
    ...normalizeGeminiDashboardItems(context.relevant || context.relevantPoints, "importantPoints"),
    ...normalizeGeminiDashboardItems(context.keyPoints, "importantPoints"),
    ...normalizeGeminiDashboardItems(context.actionItems || context.tasks, "importantPoints")
  ];
  return {
    summary: truncateText(normalizeBusinessEnglishText(context.summary || ""), 700),
    decisions: normalizeGeminiDashboardItems(context.decisions, "decisions"),
    risks: normalizeGeminiDashboardItems(context.risks || context.blockers, "risks"),
    actionItems: normalizeGeminiDashboardItems(context.actionItems || context.tasks, "keyPoints"),
    importantPoints: normalizeGeminiDashboardItems(importantPoints, "importantPoints"),
    relevant: normalizeGeminiDashboardItems(context.relevant || context.relevantPoints, "relevant"),
    keyPoints: normalizeGeminiDashboardItems(context.keyPoints, "keyPoints"),
    conclusions: normalizeGeminiDashboardItems(context.conclusions, "conclusions")
  };
}

function hasGeminiDashboardInputValue(context) {
  return Boolean(
    context?.manualNotes ||
    context?.liveNotes ||
    context?.transcript ||
    (context?.preparedTasks || []).length ||
    (context?.preparedMeetings || []).length ||
    hasGeminiDashboardBucketValue(context?.dashboardContext) ||
    hasGeminiDashboardBucketValue(context?.meetingIntelligence)
  );
}

function hasGeminiDashboardBucketValue(value) {
  if (!value || typeof value !== "object") {
    return false;
  }

  return Boolean(
    value.summary ||
    (value.decisions || []).length ||
    (value.risks || []).length ||
    (value.importantPoints || []).length ||
    (value.relevant || []).length ||
    (value.keyPoints || []).length ||
    (value.conclusions || []).length ||
    (value.actionItems || []).length
  );
}

async function requestGeminiEmailInterpretation(input) {
  const { GoogleGenAI } = await import("@google/genai");
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
  });
  const models = getGeminiEmailInterpretationModelCandidates();
  let lastError = null;

  for (const model of models) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), GEMINI_EMAIL_TIMEOUT_MS);
    try {
      const response = await ai.models.generateContent({
        model,
        contents: buildGeminiEmailInterpretationPrompt(input),
        config: {
          responseMimeType: "application/json",
          responseJsonSchema: buildGeminiEmailInterpretationSchema(),
          temperature: 0.12,
          abortSignal: controller.signal
        }
      });

      return {
        text: extractGeminiResponseText(response),
        model
      };
    } catch (error) {
      lastError = error;
      if (!isGeminiEmailInterpretationRetryableError(error)) {
        throw error;
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError || new Error("Gemini email interpretation failed.");
}

function getGeminiEmailInterpretationModelCandidates() {
  const seen = new Set();
  return [GEMINI_EMAIL_MODEL, ...GEMINI_EMAIL_FALLBACK_MODELS]
    .map((model) => String(model || "").trim())
    .filter(Boolean)
    .filter((model) => {
      if (seen.has(model)) {
        return false;
      }

      seen.add(model);
      return true;
    });
}

function isGeminiEmailInterpretationRetryableError(error) {
  return isGeminiQuotaError(error) ||
    isAbortLikeError(error) ||
    /503|UNAVAILABLE|high demand|temporarily unavailable|overloaded/i.test(String(error?.message || error || ""));
}

function buildGeminiEmailInterpretationPrompt(input) {
  return [
    "You are AIssistant's hidden email interpretation layer.",
    "You do not write finished emails. You only return structured fields that a local Email V1 template will use.",
    "You are the only system allowed to populate email template meaning. The frontend must only format your structured fields.",
    "Return one JSON object only. Do not return markdown, comments, or extra text.",
    "",
    "Required JSON shape:",
    JSON.stringify(createEmptyGeminiEmailInterpretation(), null, 2),
    "",
    "Required recommendedTemplate value: meeting_summary.",
    "",
    "Rules:",
    "- Always use the existing Meeting Summary email template. Do not choose any other template.",
    "- Read all available meeting context and infer the coherent business meaning behind it.",
    "- First form a private rational conclusion from all notes, then fill subject, summaryBullets, actionItems, notes, recipient, and recommendedTemplate from that conclusion.",
    "- Treat transcript text as noisy evidence, not email copy.",
    "- Do not copy transcript wording literally.",
    "- Ignore filler, repeated fragments, broken speech recognition, random words, and unrelated words.",
    "- Do not include raw counts such as 0 decisions or 6 pending tasks.",
    "- Do not invent names, dates, approvals, promises, decisions, or facts.",
    "- Leave recipient empty unless a reliable recipient is present.",
    "- internalConclusion is hidden reasoning context. It must summarize the meaning but must not be written as email copy.",
    "- summaryBullets, actionItems, and notes must be short, clean, professional bullets supported by the context.",
    "- If no action item is clearly supported, return actionItems as an empty array.",
    "- If context is unclear, return cautious generic fields that are still useful for review.",
    "- warnings must be informational only.",
    "- confidence must be high, medium, or low.",
    "",
    "Context:",
    input.rawContext
  ].join("\n");
}

function buildGeminiEmailInterpretationSchema() {
  return {
    type: "object",
    properties: {
      internalConclusion: {
        type: "string"
      },
      recommendedTemplate: {
        type: "string",
        enum: ["meeting_summary"]
      },
      subject: {
        type: "string"
      },
      summaryBullets: {
        type: "array",
        items: {
          type: "string"
        }
      },
      actionItems: {
        type: "array",
        items: {
          type: "string"
        }
      },
      notes: {
        type: "array",
        items: {
          type: "string"
        }
      },
      recipient: {
        type: "string"
      },
      confidence: {
        type: "string",
        enum: ["high", "medium", "low"]
      },
      warnings: {
        type: "array",
        items: {
          type: "string"
        }
      }
    },
    required: [
      "internalConclusion",
      "recommendedTemplate",
      "subject",
      "summaryBullets",
      "actionItems",
      "notes",
      "recipient",
      "confidence",
      "warnings"
    ],
    additionalProperties: false
  };
}

function validateGeminiEmailInterpretation(value) {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate || typeof candidate !== "object") {
    return {
      ok: false,
      message: "Gemini did not return a valid interpretation object."
    };
  }

  const interpretation = {
    internalConclusion: truncateText(sanitizeGeminiInterpretationText(candidate.internalConclusion), 500),
    recommendedTemplate: "meeting_summary",
    subject: truncateText(sanitizeGeminiEmailSubject(candidate.subject), 120),
    summaryBullets: normalizeGeminiInterpretationList(candidate.summaryBullets).slice(0, 2),
    actionItems: normalizeGeminiInterpretationList(candidate.actionItems).slice(0, 5),
    notes: normalizeGeminiInterpretationList(candidate.notes).slice(0, 3),
    recipient: truncateText(normalizeBusinessEnglishText(candidate.recipient || ""), 160),
    confidence: normalizeGeminiInterpretationConfidence(candidate.confidence),
    warnings: normalizeGeminiWarnings(candidate.warnings)
  };

  if (!interpretation.subject && !interpretation.summaryBullets.length && !interpretation.actionItems.length && !interpretation.notes.length) {
    return {
      ok: false,
      message: "Gemini interpretation did not include usable structured content."
    };
  }

  return {
    ok: true,
    interpretation
  };
}

function normalizeGeminiInterpretationList(value) {
  const values = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  return values
    .map(sanitizeGeminiInterpretationText)
    .filter(Boolean)
    .filter((item) => !/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(item))
    .filter((item) => !/^(?:want|that|create|application|meeting|email|send|draft|section|task|notes?)\b(?:[,.\s]+(?:want|that|create|application|meeting|email|send|draft|section|task|notes?))*$/i.test(item))
    .slice(0, 8);
}

function sanitizeGeminiInterpretationText(value) {
  return truncateText(
    normalizeBusinessEnglishText(removeGeminiSpeechNoise(value))
      .replace(/\b(?:zero|0)\s+decisions?\b[^.?!]*(?:\.|$)/gi, " ")
      .replace(/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/gi, " ")
      .replace(/\s+/g, " ")
      .replace(/^[,.;:\-\s]+|[,.;:\-\s]+$/g, ""),
    220
  );
}

function normalizeGeminiInterpretationConfidence(value) {
  const text = normalizeBusinessEnglishText(value).toLowerCase();
  if (text === "high" || text === "medium" || text === "low") {
    return text;
  }

  const numeric = normalizeGeminiConfidence(value);
  if (numeric >= 0.75) {
    return "high";
  }
  if (numeric >= 0.45) {
    return "medium";
  }
  return "low";
}

function createEmptyGeminiEmailInterpretation() {
  return {
    internalConclusion: "",
    recommendedTemplate: "meeting_summary",
    subject: "",
    summaryBullets: [],
    actionItems: [],
    notes: [],
    recipient: "",
    confidence: "low",
    warnings: []
  };
}

function buildGeminiEmailInterpretationFallback(reason, options = {}) {
  return {
    ok: false,
    source: options.source || "fallback",
    fallback: true,
    model: GEMINI_EMAIL_MODEL,
    reason,
    interpretation: createEmptyGeminiEmailInterpretation()
  };
}

async function requestGeminiDashboardInterpretation(input) {
  const { GoogleGenAI } = await import("@google/genai");
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
  });
  const models = getGeminiDashboardModelCandidates();
  let lastError = null;

  for (const model of models) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), GEMINI_DASHBOARD_TIMEOUT_MS);
    try {
      const response = await ai.models.generateContent({
        model,
        contents: buildGeminiDashboardPrompt(input),
        config: {
          responseMimeType: "application/json",
          responseJsonSchema: buildGeminiDashboardSchema(),
          temperature: 0.1,
          abortSignal: controller.signal
        }
      });

      return {
        text: extractGeminiResponseText(response),
        model
      };
    } catch (error) {
      lastError = error;
      if (!isGeminiDashboardRetryableError(error)) {
        throw error;
      }
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError || new Error("Gemini dashboard interpretation failed.");
}

function isGeminiDashboardRetryableError(error) {
  return isGeminiQuotaError(error) ||
    isAbortLikeError(error) ||
    /503|UNAVAILABLE|high demand|temporarily unavailable|overloaded/i.test(String(error?.message || error || ""));
}

function getGeminiDashboardModelCandidates() {
  const seen = new Set();
  return [GEMINI_DASHBOARD_MODEL, ...GEMINI_DASHBOARD_FALLBACK_MODELS]
    .map((model) => String(model || "").trim())
    .filter(Boolean)
    .filter((model) => {
      if (seen.has(model)) {
        return false;
      }

      seen.add(model);
      return true;
    });
}

function buildGeminiDashboardPrompt(input) {
  return [
    "You are AIssistant's Meeting Dashboard organizer.",
    "You organize meeting intelligence only. You do not write emails, drafts, tasks, calendar events, or Notion exports.",
    "Return one JSON object only. Do not return markdown, comments, labels, or extra text.",
    "",
    "Required JSON shape:",
    JSON.stringify(createEmptyGeminiDashboard(), null, 2),
    "",
    "Rules:",
    "- Read all available meeting context and infer the coherent business meaning behind it.",
    "- Treat transcript text as noisy evidence, not final dashboard copy.",
    "- Do not copy random transcript fragments or broken speech recognition text.",
    "- Ignore filler, repeated fragments, unrelated words, and single-word noise.",
    "- Do not include random single words such as Want, That, Create, Application, or Moment.",
    "- Do not include raw counts such as 0 decisions or 6 pending tasks.",
    "- Do not invent names, dates, approvals, decisions, risks, or conclusions.",
    "- If no strong item exists for a category, return an empty array for that category.",
    "- Keep every bullet short, clear, professional, and supported by the context.",
    "- Maximum items: decisions 5, risks 5, importantPoints 8, conclusions 3.",
    "- Use the language cues below to classify intent, but never add an item only because a cue word appears.",
    "- A cue word must be supported by a useful sentence, meeting detail, or coherent inferred meaning.",
    "",
    "Category definitions:",
    "- decisions: final choices, approvals, commitments, or explicit agreements.",
    "- risks: blockers, dependencies, delays, missing information, quality concerns, or operational risks.",
    "- importantPoints: all useful topics, relevant details, important discussion points, action-oriented observations, and next-step context that are not decisions, risks, or conclusions.",
    "- conclusions: final takeaways or coherent end-state summaries.",
    "",
    "Category language cues:",
    JSON.stringify(GEMINI_DASHBOARD_CATEGORY_CUES, null, 2),
    "",
    "Meeting context JSON:",
    input.rawContext
  ].join("\n");
}

function buildGeminiDashboardSchema() {
  return {
    type: "object",
    properties: {
      decisions: {
        type: "array",
        items: {
          type: "string"
        }
      },
      risks: {
        type: "array",
        items: {
          type: "string"
        }
      },
      importantPoints: {
        type: "array",
        items: {
          type: "string"
        }
      },
      conclusions: {
        type: "array",
        items: {
          type: "string"
        }
      }
    },
    required: ["decisions", "risks", "importantPoints", "conclusions"],
    additionalProperties: false
  };
}

function validateGeminiDashboardInterpretation(value) {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate || typeof candidate !== "object") {
    return {
      ok: false,
      message: "Gemini did not return a valid dashboard object."
    };
  }

  return {
    ok: true,
    dashboard: {
      decisions: normalizeGeminiDashboardItems(candidate.decisions, "decisions"),
      risks: normalizeGeminiDashboardItems(candidate.risks || candidate.risksOrBlockers, "risks"),
      importantPoints: normalizeGeminiDashboardItems([
        ...normalizeGeminiDashboardItems(candidate.importantPoints, "importantPoints"),
        ...normalizeGeminiDashboardItems(candidate.relevant || candidate.topics, "importantPoints"),
        ...normalizeGeminiDashboardItems(candidate.keyPoints, "importantPoints")
      ], "importantPoints"),
      relevant: normalizeGeminiDashboardItems(candidate.relevant || candidate.topics, "relevant"),
      keyPoints: normalizeGeminiDashboardItems(candidate.keyPoints, "keyPoints"),
      conclusions: normalizeGeminiDashboardItems(candidate.conclusions, "conclusions")
    }
  };
}

function normalizeGeminiDashboardItems(value, category) {
  const limit = GEMINI_DASHBOARD_LIMITS[category] || 5;
  const values = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  const seen = new Set();

  return values
    .map(sanitizeGeminiDashboardItem)
    .filter(isUsefulGeminiDashboardItem)
    .filter((item) => {
      const key = item.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

function sanitizeGeminiDashboardItem(value) {
  return truncateText(
    normalizeBusinessEnglishText(removeGeminiSpeechNoise(value))
      .replace(/\s+(?:decision|risk|blocker|relevant|topic|key point|important point|conclusion)\s*:\s*[\s\S]*$/i, "")
      .replace(/^\s*(?:decision|risk|blocker|relevant|topic|key point|important point|conclusion)\s*:\s*/i, "")
      .replace(/\b(?:zero|0)\s+decisions?\b[^.?!]*(?:\.|$)/gi, " ")
      .replace(/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/gi, " ")
      .replace(/[•*#>`_]+/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^[,.;:\-\s]+|[,.;:\-\s]+$/g, ""),
    180
  );
}

function isUsefulGeminiDashboardItem(value) {
  const text = normalizeBusinessEnglishText(value);
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!text || words.length < 2 || text.length < 8) {
    return false;
  }

  if (/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(text)) {
    return false;
  }

  if (isGeminiDashboardNoisePhrase(text) || isGeminiDashboardKeywordList(words)) {
    return false;
  }

  const contentWords = words.filter((word) => word.length > 3 && !GEMINI_DASHBOARD_STOP_WORDS.has(word));
  return contentWords.length > 0;
}

const GEMINI_DASHBOARD_STOP_WORDS = new Set([
  "this",
  "that",
  "with",
  "from",
  "have",
  "been",
  "will",
  "should",
  "there",
  "their",
  "they",
  "what",
  "when",
  "where",
  "notes",
  "note",
  "thing",
  "things"
]);

const GEMINI_DASHBOARD_RANDOM_KEYWORDS = new Set([
  "want",
  "that",
  "create",
  "application",
  "moment",
  "meeting",
  "email",
  "send",
  "draft",
  "section",
  "task",
  "notes",
  "note"
]);

function isGeminiDashboardKeywordList(words) {
  return words.length > 0 && words.every((word) => GEMINI_DASHBOARD_RANDOM_KEYWORDS.has(word));
}

function isGeminiDashboardNoisePhrase(value) {
  return /\b(?:hart and is that it|site in message|who are mentally|mentally sommelier|small and codecs|the moon is working|high moral|shown at right|largely realize|a couple of a couple of)\b/i.test(value);
}

function parseGeminiDashboardJson(value) {
  return parseGeminiEmailJson(value);
}

function createEmptyGeminiDashboard() {
  return {
    decisions: [],
    risks: [],
    importantPoints: [],
    conclusions: []
  };
}

function buildGeminiDashboardFallback(reason, options = {}) {
  return {
    ok: false,
    source: options.source || "fallback",
    fallback: true,
    model: GEMINI_DASHBOARD_MODEL,
    reason,
    dashboard: createEmptyGeminiDashboard()
  };
}

async function requestGeminiEmailComposition(input) {
  const { GoogleGenAI } = await import("@google/genai");
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
  });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_EMAIL_TIMEOUT_MS);

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_EMAIL_MODEL,
      contents: buildGeminiEmailPrompt(input),
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: buildGeminiEmailResponseSchema(),
        temperature: 0.2,
        abortSignal: controller.signal
      }
    });

    return extractGeminiResponseText(response);
  } finally {
    clearTimeout(timeout);
  }
}

function buildGeminiEmailPrompt(input) {
  const selectedKnowledge = formatGeminiEmailKnowledgeGuidance(input.selectedEmailKnowledge);
  const selectedTemplate = formatGeminiEmailTemplateGuidance(input.selectedEmailTemplate);
  return [
    "You are AIssistant's backend-only Email Composer.",
    "Use the transcript only as noisy business context, not as final email copy.",
    "Return one JSON object only. Do not return markdown, comments, or extra text.",
    "",
    "Required JSON shape:",
    JSON.stringify(createEmptyGeminiEmailDraft(""), null, 2),
    "",
    `Allowed emailType values: ${GEMINI_EMAIL_TYPES.join(", ")}.`,
    `Required templateId values: ${GEMINI_EMAIL_TEMPLATE_TYPES.join(", ")}.`,
    "",
    "Rules:",
    "- Decide whether an email is useful from explicit requests or strong implicit business opportunities.",
    "- Automatically choose exactly one existing professional templateId from the required templateId values.",
    "- First use the selected professional template. If no template is selected, choose the most appropriate templateId when the notes support a useful draft.",
    "- Set emailType to the chosen templateId whenever possible.",
    "- Do not invent arbitrary email formats. The selected template is the structure guardrail.",
    "- Fill the chosen template using only details supported by Manual notes, Live transcript, detected action items, decisions, blockers, relevant points, key points, conclusions, Current email segment, direct request, and Rich Email Context Brief.",
    "- Compose from the Rich Email Context Brief when present; use transcript text only as noisy evidence.",
    "- Review all provided Available notes and transcript context for support, but ignore unrelated topics and noise.",
    "- Earlier unrelated topics are provided only so you can ignore them.",
    "- Do not mix facts from earlier unrelated topics into the current email.",
    "- If the current segment changes topic, focus on the newest clear email topic only.",
    "- Use the selected workplace topic guidance to understand the current segment.",
    "- Do not copy the guidance. Do not mention the knowledge base.",
    "- Use the guidance only to classify the situation, choose the email type, improve the subject, and write a natural professional email.",
    "- Prefer no email over a weak or strange draft.",
    "- If the current segment is only app testing chatter with no external communication need, return emailNeeded false.",
    "- If the user clearly asks to email someone, prioritize that direct request.",
    "- If the need is implied, draft only when the business value is clear.",
    "- Extract only reliable meaning. Ignore filler, repeated phrases, uncertain fragments, and speech-recognition garbage.",
    "- Do not copy transcript text directly into the email body.",
    "- Do not include raw phrases like yeah, right, so so, or incoherent fragments.",
    "- Never invent facts, names, dates, promises, approvals, or decisions.",
    "- Keep the body concise, direct, professional, and natural, but never empty or perfunctory.",
    "- Include why the email matters and a clear ask, update, decision, blocker, or next step.",
    "- A draft that only says something is working is not useful. Return emailNeeded false unless it includes a real recipient/audience, business value, and a next step.",
    "- Do not include markdown in the email body.",
    "- Do not sign the email as AIssistant or claim to be AIssistant.",
    "- Recipient is optional. Leave recipientName and recipientEmail empty unless reliably present; a useful draft can still be Gmail-ready without a recipient.",
    "- recipient must be an object with name, email, and label. Use empty strings when no reliable recipient is detected.",
    "- warnings must be an array. Include No recipient detected only as informational when no recipient is present.",
    "- Do not use fake recipients such as Section, Send, To, For Their Memberships, or Our Clients.",
    "- Set needsReview true as advisory when confidence is low, details are thin, or the draft needs human review; do not set it only because the recipient is missing.",
    "- confidence must be a number from 0 to 1.",
    "",
    "Selected professional email template:",
    selectedTemplate || "No template selected. Automatically choose the best preferred professional emailType if the context supports a useful draft; otherwise return emailNeeded false.",
    "",
    "Selected workplace topic guidance:",
    selectedKnowledge || "No topic guidance selected.",
    "",
    "Context:",
    input.rawContext
  ].join("\n");
}

function formatGeminiEmailTemplateGuidance(template) {
  if (!template?.type || !GEMINI_EMAIL_TEMPLATE_GUIDANCE[template.type]) {
    return "";
  }

  return JSON.stringify({
    emailType: template.type,
    label: template.label,
    useWhen: template.useWhen,
    structure: template.structure
  }, null, 2);
}

function formatGeminiEmailKnowledgeGuidance(entries) {
  const selected = Array.isArray(entries) ? entries.slice(0, 5) : [];
  if (!selected.length) {
    return "";
  }

  return JSON.stringify(selected.map((entry) => ({
    id: entry.id,
    domain: entry.domain,
    topic: entry.topic,
    confidenceScore: entry.confidenceScore,
    commonIntents: entry.commonIntents,
    emailTypes: entry.emailTypes,
    goodReasonsToEmail: entry.goodReasonsToEmail,
    avoidIf: entry.avoidIf,
    recipientHints: entry.recipientHints,
    subjectGuidance: entry.subjectGuidance,
    bodyGuidance: entry.bodyGuidance,
    confidenceBoosts: entry.confidenceBoosts,
    confidencePenalties: entry.confidencePenalties
  })), null, 2);
}

function buildGeminiEmailResponseSchema() {
  return {
    type: "object",
    properties: {
      templateId: {
        type: "string",
        enum: GEMINI_EMAIL_TEMPLATE_TYPES
      },
      recipient: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          email: {
            type: "string"
          },
          label: {
            type: "string"
          }
        },
        required: ["name", "email", "label"],
        additionalProperties: false
      },
      emailNeeded: {
        type: "boolean"
      },
      confidence: {
        type: "number",
        minimum: 0,
        maximum: 1
      },
      reason: {
        type: "string"
      },
      recipientName: {
        type: "string"
      },
      recipientEmail: {
        type: "string"
      },
      subject: {
        type: "string"
      },
      body: {
        type: "string"
      },
      emailType: {
        type: "string",
        enum: GEMINI_EMAIL_TYPES
      },
      warnings: {
        type: "array",
        items: {
          type: "string"
        }
      },
      needsReview: {
        type: "boolean"
      }
    },
    required: [
      "templateId",
      "recipient",
      "subject",
      "body",
      "confidence",
      "warnings",
      "emailNeeded",
      "reason",
      "recipientName",
      "recipientEmail",
      "emailType",
      "needsReview"
    ],
    additionalProperties: false
  };
}

function extractGeminiResponseText(response) {
  if (typeof response?.text === "string") {
    return response.text;
  }

  if (typeof response?.text === "function") {
    return response.text();
  }

  const candidateText = response?.candidates?.[0]?.content?.parts
    ?.map((part) => (typeof part.text === "string" ? part.text : ""))
    .filter(Boolean)
    .join("\n");

  return candidateText || "";
}

function parseGeminiEmailJson(value) {
  const text = String(value || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }

    throw error;
  }
}

function validateGeminiEmailDraft(value) {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate || typeof candidate !== "object") {
    return {
      ok: false,
      message: "Gemini did not return a valid email object."
    };
  }

  const recipientCandidate = candidate.recipient && typeof candidate.recipient === "object"
    ? candidate.recipient
    : {};
  const templateId = normalizeGeminiTemplateId(candidate.templateId || candidate.emailType);
  const warnings = normalizeGeminiWarnings(candidate.warnings);
  const recipientName = truncateText(normalizeBusinessEnglishText(
    candidate.recipientName || recipientCandidate.name || recipientCandidate.label
  ), 120);
  const recipientEmail = extractEmail(candidate.recipientEmail || recipientCandidate.email) || "";
  const draft = {
    emailNeeded: normalizeGeminiBoolean(candidate.emailNeeded, Boolean(candidate.body || candidate.subject)),
    confidence: normalizeGeminiConfidence(candidate.confidence),
    reason: truncateText(normalizeBusinessEnglishText(candidate.reason || warnings.join(" ")), 240),
    templateId,
    recipient: {
      name: recipientName,
      email: recipientEmail,
      label: truncateText(normalizeBusinessEnglishText(recipientCandidate.label || recipientName || recipientEmail), 120)
    },
    recipientName,
    recipientEmail,
    subject: truncateText(sanitizeGeminiEmailSubject(candidate.subject), 160),
    body: sanitizeGeminiEmailBody(candidate.body),
    emailType: normalizeGeminiEmailType(candidate.emailType || templateId),
    warnings,
    needsReview: normalizeGeminiBoolean(candidate.needsReview, warnings.length > 0)
  };

  if (!draft.emailNeeded) {
    return {
      ok: true,
      draft: {
        ...createEmptyGeminiEmailDraft(draft.reason || "No useful email opportunity was found."),
        confidence: draft.confidence,
        templateId: draft.templateId,
        emailType: draft.emailType,
        warnings: draft.warnings
      }
    };
  }

  if (isLowConfidenceGeminiRecipient(draft.recipientName)) {
    draft.recipientName = "";
    draft.recipient.name = "";
    draft.recipient.label = "";
    draft.needsReview = true;
    draft.warnings = dedupe([...draft.warnings, "Recipient was unclear."]);
    draft.reason = draft.reason || "Email draft needs review because the recipient was unclear.";
  }

  if (isWeakTestingChatterGeminiDraft(draft)) {
    draft.needsReview = true;
    draft.warnings = dedupe([...draft.warnings, "Draft may be based on internal testing chatter."]);
    draft.reason = draft.reason || "Email draft needs review because the segment sounds like internal testing chatter, not a clear communication need.";
  }

  if (hasRawTranscriptGarbageGeminiContent(`${draft.subject} ${draft.body}`)) {
    draft.needsReview = true;
    draft.warnings = dedupe([...draft.warnings, "Draft contains raw transcript fragments."]);
    draft.reason = draft.reason || "Email draft needs review because it still contains raw transcript fragments.";
  }

  if (!draft.subject && draft.body) {
    draft.subject = buildGeminiFallbackSubject(draft);
    draft.needsReview = true;
    draft.warnings = dedupe([...draft.warnings, "Subject was inferred from the selected template."]);
    draft.reason = draft.reason || "Email subject was inferred from the selected template.";
  }

  if (!draft.body) {
    return {
      ok: false,
      message: "Gemini returned an incomplete email draft."
    };
  }

  if (draft.confidence < GEMINI_EMAIL_CONFIDENCE_THRESHOLD) {
    draft.needsReview = true;
    draft.warnings = dedupe([...draft.warnings, "Low confidence draft."]);
    draft.reason = draft.reason || "Email draft needs review. Please repeat the topic or message more clearly.";
  }

  if (!draft.recipientName && !draft.recipientEmail) {
    draft.warnings = dedupe([...draft.warnings, "No recipient detected."]);
  }

  if (!draft.reason) {
    draft.reason = "Gemini found a clear email opportunity from the provided context.";
  }

  return {
    ok: true,
    draft
  };
}

function buildGeminiFallbackSubject(draft) {
  const type = normalizeGeminiTemplateId(draft?.templateId || draft?.emailType);
  const templateLabel = GEMINI_EMAIL_TEMPLATE_GUIDANCE[type]?.label;
  if (templateLabel) {
    return `${templateLabel} from meeting notes`;
  }

  return "Professional follow-up from notes";
}

function hasRawTranscriptGarbageGeminiContent(value) {
  const text = normalizeBusinessEnglishText(value);
  return /\b(?:what about if|if i say that|that i need to|i need to what about|so let me|let me open|mmm|ok,\s*so|testing testing)\b/i.test(text) ||
    /\b(?:that|send|to|section)\s*,\s*(?:i|we|the)\b/i.test(text);
}

function isLowConfidenceGeminiRecipient(value) {
  const text = normalizeBusinessEnglishText(value);
  return /^(?:section|send|to|for|for their memberships?|their memberships?|our clients?|email|message|draft|recipient|unknown|someone)$/i.test(text) ||
    /\b(?:saying|telling|letting|subject|body|about)\b/i.test(text);
}

function isWeakTestingChatterGeminiDraft(draft) {
  const text = normalizeBusinessEnglishText(`${draft.subject || ""} ${draft.body || ""}`);
  const vagueTesting = /\b(?:app|application|section|meeting section|testing|test|everything|this)\b[^.]{0,80}\b(?:working|works|fine|good|ok|okay|stable)\b/i.test(text) ||
    /\b(?:the app is working|application is working|everything is fine|testing is good|section is working|section works)\b/i.test(text);
  const communicationNeed = /\b(?:next review|client review|approval|approve|confirm|request|need|needs|pro account|github|git\s*hub|upload|invoice|payment|blocked|blocker|risk|decision|next steps?|follow[- ]?up|candidate|feedback|access|documents?|content|graphics)\b/i.test(text);

  return vagueTesting && !communicationNeed;
}

function buildGeminiEmailFallback(reason, options = {}) {
  const draft = options.draft || createEmptyGeminiEmailDraft(reason);

  return {
    ok: false,
    source: options.source || "fallback",
    fallback: true,
    gmailReady: false,
    model: GEMINI_EMAIL_MODEL,
    confidenceThreshold: GEMINI_EMAIL_CONFIDENCE_THRESHOLD,
    reason,
    draft
  };
}

function buildProtectedLocalTemplateEmailFallback(input, reason, options = {}) {
  const draft = buildProtectedLocalTemplateEmailDraft(input, reason);
  if (!draft.emailNeeded) {
    return buildGeminiEmailFallback(reason, options);
  }

  const gmailReady = isGeminiEmailGmailReady(draft);
  return {
    ok: gmailReady,
    source: "local-template-fallback",
    fallback: true,
    gmailReady,
    model: GEMINI_EMAIL_MODEL,
    confidenceThreshold: GEMINI_EMAIL_CONFIDENCE_THRESHOLD,
    reason: draft.reason || reason,
    draft
  };
}

function buildProtectedLocalTemplateEmailDraft(input, reason) {
  const brief = input?.richEmailBrief || createEmptyGeminiEmailBriefContext();
  const meetingContext = input?.allMeetingContext || createEmptyGeminiAllMeetingContext();
  const contextText = normalizeBusinessEnglishBlock([
    input?.directRequest,
    input?.currentEmailSegment,
    meetingContext.manualNotes,
    meetingContext.liveTranscript,
    meetingContext.availableNotesContext,
    brief.mainTopic,
    brief.communicationGoal,
    brief.whyItMatters,
    brief.requestedAction,
    ...(brief.relevantFacts || []),
    ...(meetingContext.keyPoints || []),
    ...(meetingContext.conclusions || [])
  ].filter(Boolean).join("\n"));
  const templateId = input?.selectedEmailTemplate?.type ||
    getGeminiFallbackTemplateType(contextText, brief) ||
    "meeting_summary";
  const recipient = buildProtectedLocalFallbackRecipient(input?.recipientHint || brief.audienceHint || "");
  const supportedItems = getProtectedLocalFallbackItems(brief, meetingContext);
  const topic = truncateText(normalizeBusinessEnglishText(
    brief.mainTopic ||
    (meetingContext.relevantPoints || [])[0] ||
    (meetingContext.keyPoints || [])[0] ||
    "meeting follow-up"
  ), 90);
  const body = buildProtectedLocalTemplateBody(templateId, topic, brief, meetingContext, supportedItems);

  if (!body) {
    return createEmptyGeminiEmailDraft(reason);
  }

  const warnings = [
    recipient.email || recipient.name || recipient.label ? "" : "No recipient detected.",
    /quota|429|RESOURCE_EXHAUSTED/i.test(reason) ? "Gemini quota unavailable; local template fallback used." : ""
  ].filter(Boolean);

  return {
    emailNeeded: true,
    confidence: supportedItems.length >= 3 ? 0.68 : 0.62,
    reason: "Protected local template fallback prepared a draft from supported notes.",
    templateId,
    recipient,
    recipientName: recipient.name || recipient.label,
    recipientEmail: recipient.email,
    subject: buildProtectedLocalTemplateSubject(templateId, topic),
    body,
    emailType: templateId,
    warnings,
    needsReview: warnings.some((warning) => !/^No recipient detected\.?$/i.test(warning))
  };
}

function buildProtectedLocalFallbackRecipient(value) {
  const hint = normalizeBusinessEnglishText(value);
  const email = extractEmail(hint) || "";
  const name = email || isLowConfidenceGeminiRecipient(hint) || /^(?:client|customer|team|store|finance|internal team|client or customer contact)$/i.test(hint)
    ? ""
    : truncateText(hint, 120);
  return {
    name,
    email,
    label: name || email
  };
}

function getProtectedLocalFallbackItems(brief, meetingContext) {
  return dedupe([
    brief.communicationGoal,
    brief.whyItMatters,
    ...(brief.relevantFacts || []),
    ...(brief.decisions || []),
    ...(brief.blockersOrRisks || []),
    ...(brief.nextSteps || []),
    brief.requestedAction,
    meetingContext.summary,
    ...(meetingContext.keyPoints || []),
    ...(meetingContext.decisions || []),
    ...(meetingContext.blockers || []),
    ...(meetingContext.actionItems || []),
    ...(meetingContext.conclusions || [])
  ].map(normalizeBusinessEnglishText).filter(Boolean))
    .filter((item) => !/^no explicit/i.test(item))
    .slice(0, 8);
}

function buildProtectedLocalTemplateSubject(templateId, topic) {
  const cleanTopic = truncateText(normalizeBusinessEnglishText(topic), 64) || "Meeting Notes";
  const subjects = {
    meeting_summary: `${cleanTopic} Summary`,
    action_items_follow_up: `${cleanTopic} Next Steps`,
    client_update: `${cleanTopic} Update`,
    blocker_risk_alert: `${cleanTopic} Risk Alert`,
    approval_request: `${cleanTopic} Approval Request`,
    general_request: `${cleanTopic} Request`,
    thank_you_recap: `${cleanTopic} Recap`
  };
  return subjects[templateId] || subjects.general_request;
}

function buildProtectedLocalTemplateBody(templateId, topic, brief, meetingContext, supportedItems) {
  const items = supportedItems.slice(0, 5);
  if (!items.length) {
    return "";
  }

  const opener = getProtectedLocalTemplateOpening(templateId, topic);
  const itemLines = items.map((item) => `- ${item}`).join("\n");
  const requestedAction = normalizeBusinessEnglishText(
    brief.requestedAction ||
    (meetingContext.actionItems || [])[0] ||
    "review the update and confirm any next step"
  );
  return [
    "Hi,",
    "",
    opener,
    "",
    itemLines,
    "",
    `Please ${requestedAction}.`
  ].join("\n");
}

function getProtectedLocalTemplateOpening(templateId, topic) {
  const cleanTopic = normalizeBusinessEnglishText(topic) || "the meeting notes";
  const openings = {
    meeting_summary: `Here is a concise summary from the notes on ${cleanTopic}:`,
    action_items_follow_up: `Here are the supported next steps from the notes on ${cleanTopic}:`,
    client_update: `Here is the supported update from the notes on ${cleanTopic}:`,
    blocker_risk_alert: `The notes flag the following blocker or risk around ${cleanTopic}:`,
    approval_request: `The notes indicate an approval or confirmation is needed for ${cleanTopic}:`,
    general_request: `The notes support the following request about ${cleanTopic}:`,
    thank_you_recap: `Thank you for the discussion. Here is the supported recap on ${cleanTopic}:`
  };
  return openings[templateId] || openings.general_request;
}

function createEmptyGeminiEmailDraft(reason) {
  const cleanReason = truncateText(normalizeBusinessEnglishText(reason), 240);
  return {
    emailNeeded: false,
    confidence: 0,
    reason: cleanReason,
    templateId: "general_request",
    recipient: {
      name: "",
      email: "",
      label: ""
    },
    recipientName: "",
    recipientEmail: "",
    subject: "",
    body: "",
    emailType: "general_request",
    warnings: cleanReason ? [cleanReason] : [],
    needsReview: true
  };
}

function isGeminiEmailGmailReady(draft) {
  return Boolean(
    draft?.emailNeeded &&
      !draft.needsReview &&
      draft.confidence >= GEMINI_EMAIL_CONFIDENCE_THRESHOLD &&
      draft.subject &&
      draft.body
  );
}

function normalizeGeminiBoolean(value, fallback) {
  if (value === true || value === false) {
    return value;
  }

  if (typeof value === "string") {
    if (/^true$/i.test(value.trim())) {
      return true;
    }
    if (/^false$/i.test(value.trim())) {
      return false;
    }
  }

  return fallback;
}

function normalizeGeminiConfidence(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return 0;
  }

  if (number > 1 && number <= 100) {
    return Math.max(0, Math.min(1, number / 100));
  }

  return Math.max(0, Math.min(1, number));
}

function normalizeGeminiEmailType(value) {
  const normalized = cleanText(value).toLowerCase().replace(/[\s-]+/g, "_");
  const aliases = {
    request: "general_request",
    follow_up: "action_items_follow_up",
    status_update: "client_update",
    risk_alert: "blocker_risk_alert",
    decision_recap: "meeting_summary",
    next_steps: "action_items_follow_up",
    reminder: "action_items_follow_up",
    internal_update: "action_items_follow_up"
  };
  if (GEMINI_EMAIL_TEMPLATE_TYPES.includes(normalized)) {
    return normalized;
  }
  if (aliases[normalized]) {
    return aliases[normalized];
  }
  return GEMINI_EMAIL_TYPES.includes(normalized) ? normalized : "request";
}

function normalizeGeminiTemplateId(value) {
  const normalizedType = normalizeGeminiEmailType(value);
  if (GEMINI_EMAIL_TEMPLATE_TYPES.includes(normalizedType)) {
    return normalizedType;
  }

  return "general_request";
}

function normalizeGeminiWarnings(value) {
  const values = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  return values
    .map((item) => truncateText(normalizeBusinessEnglishText(item), 160))
    .filter(Boolean)
    .slice(0, 6);
}

function sanitizeGeminiEmailSubject(value) {
  return normalizeBusinessEnglishText(removeGeminiSpeechNoise(value))
    .replace(/^subject\s*:\s*/i, "")
    .replace(/[`*_#>]/g, "")
    .trim();
}

function sanitizeGeminiEmailBody(value) {
  const text = String(value || "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\bJust wanted to let that\b/gi, "I wanted to let you know that")
    .replace(/\bBest regards,\s*AIssistant\.?/gi, "Best,")
    .replace(/\bRegards,\s*AIssistant\.?/gi, "Regards,")
    .replace(/\bThanks,\s*AIssistant\.?/gi, "Thanks,")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/[*_`>]/g, "")
    .replace(/\r/g, "");

  return truncateText(
    text
      .split(/\n{2,}|\n/)
      .map((line) => normalizeBusinessEnglishText(removeGeminiSpeechNoise(line)))
      .filter(Boolean)
      .join("\n\n"),
    3000
  );
}

function removeGeminiSpeechNoise(value) {
  return String(value || "")
    .replace(/\b(?:um+|uh+|erm|ah+|hmm+)\b/gi, "")
    .replace(/\b(?:so\s+yeah|yeah|you know|right\?|so\s+so)\b/gi, "")
    .replace(/\b(?:what\s+about\s+if|if\s+i\s+say\s+that|so\s+let\s+me|let\s+me\s+open|mmm|ok,\s*so)\b/gi, "")
    .replace(/^\s*(?:that|send|to|section)\s*,\s*/gi, "")
    .replace(/\brandom unclear words\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isAbortLikeError(error) {
  return error?.name === "AbortError" || /abort|timeout|timed out/i.test(error?.message || "");
}

function validateNotionExportBody(body) {
  if (!Array.isArray(body.tasks) || !body.tasks.length) {
    return {
      ok: false,
      message: "At least one task is required for Notion export."
    };
  }

  if (body.tasks.length > 50) {
    return {
      ok: false,
      message: "Export is limited to 50 tasks at a time."
    };
  }

  const tasks = [];

  for (const item of body.tasks) {
    const task = normalizeNotionTask(item);
    if (!task.task) {
      return {
        ok: false,
        message: "Every Notion task needs task text."
      };
    }

    tasks.push(task);
  }

  return {
    ok: true,
    tasks
  };
}

function normalizeNotionTask(item) {
  const priority = normalizePriority(item.priority);
  const assigneeText = normalizeBusinessEnglishText(item.assigneeText) || "Unassigned";
  const assigneeEmail = extractEmail(item.assigneeEmail) || extractEmail(assigneeText);
  const dueDateIso = parseNotionDueDate(item.dueDate);
  const source = normalizeNotionSource(item.source);
  const confidence = normalizeConfidence(item.confidence);
  const assignmentStatus = normalizeAssignmentStatus(item.assignmentStatus, assigneeText);
  const taskText = truncateText(normalizeBusinessEnglishText(item.task), 180);
  const review = normalizeAissistantReviewMetadata({
    task: taskText,
    assigneeText,
    assignmentStatus,
    dueDateIso,
    confidence,
    needsReview: item.needsReview,
    reviewReason: item.reviewReason
  });

  return {
    task: taskText,
    assigneeText: truncateText(assigneeText, 120),
    assigneeEmail,
    assignmentStatus,
    priority,
    dueDate: truncateText(normalizeBusinessEnglishText(item.dueDate), 80) || "Next business week",
    dueDateIso,
    meeting: truncateText(normalizeBusinessEnglishText(item.meeting), 180) || "Meeting action plan",
    source,
    confidence,
    riskFlag: Boolean(item.riskFlag || priority === "High"),
    notes: truncateText(normalizeBusinessEnglishText(item.notes), 500),
    voiceCommand: truncateText(normalizeBusinessEnglishText(item.voiceCommand), 500),
    createdByAIssistant: true,
    aissistantFlow: normalizeAissistantFlow(item.aissistantFlow, source),
    needsReview: review.needsReview,
    reviewReason: review.reviewReason
  };
}

function validateNotionPageBody(body) {
  const page = normalizeNotionPage(body.page || {});
  if (!page.title) {
    return {
      ok: false,
      message: "Notion page title is required."
    };
  }

  return {
    ok: true,
    page
  };
}

function normalizeNotionPage(item) {
  return {
    title: truncateText(normalizeBusinessEnglishText(item.title), 180),
    parent: truncateText(normalizeBusinessEnglishText(item.parent), 160) || "Configured Notion database",
    content: truncateText(normalizeBusinessEnglishText(item.content), 1200) || "Prepared from voice command. Full transcript not exported.",
    source: normalizeNotionSource(item.source),
    relatedTasks: Array.isArray(item.relatedTasks)
      ? item.relatedTasks.map((task) => truncateText(normalizeBusinessEnglishText(task), 180)).filter(Boolean).slice(0, 10)
      : [],
    createdDate: parseNotionDueDate(item.createdDate) || formatIsoDateFromDate(new Date()),
    tags: Array.isArray(item.tags)
      ? item.tags.map((tag) => truncateText(normalizeBusinessEnglishText(tag), 40)).filter(Boolean).slice(0, 8)
      : [],
    status: truncateText(normalizeBusinessEnglishText(item.status), 80) || "Draft"
  };
}

function normalizePriority(value) {
  const cleaned = cleanText(value);
  if (/^high$/i.test(cleaned)) {
    return "High";
  }

  if (/^low$/i.test(cleaned)) {
    return "Low";
  }

  return "Medium";
}

function normalizeAssignmentStatus(value, assigneeText) {
  if (!assigneeText || assigneeText === "Unassigned") {
    return "Unassigned";
  }

  if (/^assigned$/i.test(cleanText(value))) {
    return "Assigned";
  }

  return "Needs assignment";
}

function normalizeNotionSource(value) {
  const cleaned = cleanText(value);
  if (/^live notes$/i.test(cleaned)) {
    return "Live notes";
  }

  if (/^generated action plan$/i.test(cleaned)) {
    return "Generated action plan";
  }

  return "Manual notes";
}

function normalizeAissistantFlow(value, source = "") {
  const cleaned = cleanText(value);
  if (/^voice$/i.test(cleaned)) {
    return "Voice";
  }

  if (/^generated$/i.test(cleaned)) {
    return "Generated";
  }

  if (/^manual$/i.test(cleaned)) {
    return "Manual";
  }

  if (/^live notes$/i.test(source)) {
    return "Voice";
  }

  if (/^generated action plan$/i.test(source)) {
    return "Generated";
  }

  return "Manual";
}

function normalizeAissistantReviewMetadata(context) {
  const explicitNeedsReview = normalizeOptionalBoolean(context.needsReview);
  const explicitReason = truncateText(normalizeBusinessEnglishText(context.reviewReason), 300);
  const reasons = [];

  if (!context.task || /^new\s+(?:notion\s+)?task\s+from\s+voice\s+command$/i.test(context.task)) {
    reasons.push("Task title needs detail");
  }

  if (!context.assigneeText || /^unassigned$/i.test(context.assigneeText) || /^needs assignment$/i.test(context.assignmentStatus)) {
    reasons.push("Assignee needs review");
  }

  if (!context.dueDateIso) {
    reasons.push("Due date is missing");
  }

  if (context.confidence < 75) {
    reasons.push("Extraction confidence is low");
  }

  const inferredNeedsReview = reasons.length > 0;
  const needsReview = explicitNeedsReview === null ? inferredNeedsReview : explicitNeedsReview;
  const reviewReason = needsReview
    ? (explicitReason || reasons.join("; ") || "Needs human review")
    : "";

  return {
    needsReview,
    reviewReason
  };
}

function normalizeOptionalBoolean(value) {
  if (value === true || value === false) {
    return value;
  }

  if (typeof value === "string") {
    if (/^(true|yes|1|checked)$/i.test(value.trim())) {
      return true;
    }

    if (/^(false|no|0|unchecked)$/i.test(value.trim())) {
      return false;
    }
  }

  return null;
}

function normalizeConfidence(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return 75;
  }

  return Math.max(0, Math.min(100, Math.round(number)));
}

async function listNotionUsersSafely() {
  try {
    const users = [];
    let startCursor = null;

    do {
      const query = new URLSearchParams({
        page_size: "100"
      });

      if (startCursor) {
        query.set("start_cursor", startCursor);
      }

      const data = await notionRequest(`/users?${query.toString()}`);
      users.push(...(Array.isArray(data.results) ? data.results : []));
      startCursor = data.has_more ? data.next_cursor : null;
    } while (startCursor);

    return {
      attempted: true,
      available: true,
      users,
      warning: ""
    };
  } catch (error) {
    return {
      attempted: true,
      available: false,
      users: [],
      warning: "Notion user matching was unavailable; assignees were exported as text."
    };
  }
}

function resolveNotionAssignee(assigneeText, users, assigneeEmail = "") {
  const cleaned = cleanText(assigneeText);
  const normalizedEmail = extractEmail(assigneeEmail) || extractEmail(cleaned);
  if (!cleaned || cleaned === "Unassigned") {
    return {
      userId: "",
      assigneeText: "Unassigned",
      assignmentStatus: "Unassigned"
    };
  }

  const normalizedOwner = cleaned.toLowerCase();
  let matches = [];

  if (normalizedEmail) {
    matches = users.filter((user) => String(user.person && user.person.email || "").toLowerCase() === normalizedEmail);
  } else {
    matches = users.filter((user) => String(user.name || "").toLowerCase() === normalizedOwner);
  }

  if (matches.length === 1) {
    return {
      userId: matches[0].id,
      assigneeText: cleaned,
      assignmentStatus: "Assigned"
    };
  }

  return {
    userId: "",
    assigneeText: cleaned,
    assignmentStatus: "Needs assignment"
  };
}

function extractEmail(value) {
  const match = cleanText(value).match(/[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+/);
  return match ? match[0].toLowerCase() : "";
}

async function createNotionTaskPage(task, resolvedAssignee) {
  const dataSourceProperties = await getNotionDataSourceProperties();
  const statusProperty = await buildNotionStatusProperty();
  const properties = {
    Task: {
      title: richTextArray(task.task)
    },
    "Assignee Text": {
      rich_text: richTextArray(resolvedAssignee.assigneeText)
    },
    "Assignment Status": {
      select: {
        name: resolvedAssignee.assignmentStatus
      }
    },
    Status: statusProperty,
    Priority: {
      select: {
        name: task.priority
      }
    },
    Meeting: {
      rich_text: richTextArray(task.meeting)
    },
    Source: {
      select: {
        name: task.source
      }
    },
    Confidence: {
      number: task.confidence
    },
    "Risk Flag": {
      checkbox: task.riskFlag
    },
    "Exported At": {
      date: {
        start: new Date().toISOString()
      }
    }
  };

  addOptionalRichTextProperty(properties, dataSourceProperties, "Notes", task.notes);
  addOptionalRichTextProperty(properties, dataSourceProperties, "Voice Command", task.voiceCommand);
  addOptionalCheckboxProperty(properties, dataSourceProperties, "Created by AIssistant", task.createdByAIssistant);
  addOptionalSelectProperty(properties, dataSourceProperties, "AIssistant Flow", task.aissistantFlow);
  addOptionalCheckboxProperty(properties, dataSourceProperties, "Needs Review", task.needsReview);
  addOptionalRichTextProperty(properties, dataSourceProperties, "Review Reason", task.reviewReason);

  if (resolvedAssignee.userId) {
    properties.Assignee = {
      people: [
        {
          object: "user",
          id: resolvedAssignee.userId
        }
      ]
    };
  }

  if (task.dueDateIso) {
    properties["Due Date"] = {
      date: {
        start: task.dueDateIso
      }
    };
  }

  return notionRequest("/pages", {
    method: "POST",
    body: {
      parent: {
        type: "data_source_id",
        data_source_id: NOTION_DATA_SOURCE_ID
      },
      properties
    }
  });
}

async function createNotionVoicePage(page) {
  const properties = await buildNotionVoicePageProperties(page);
  const children = buildNotionPageChildren(page);

  return notionRequest("/pages", {
    method: "POST",
    body: {
      parent: {
        type: "data_source_id",
        data_source_id: NOTION_DATA_SOURCE_ID
      },
      properties,
      children
    }
  });
}

async function buildNotionVoicePageProperties(page) {
  const properties = await getNotionDataSourceProperties();
  const titlePropertyName = Object.entries(properties).find(([, property]) => property.type === "title")?.[0] || "Task";
  const next = {
    [titlePropertyName]: {
      title: richTextArray(page.title)
    }
  };

  if (properties.Status) {
    next.Status = await buildNotionStatusProperty("Not started");
  }

  if (properties.Source) {
    next.Source = {
      select: {
        name: page.source
      }
    };
  }

  if (properties.Notes) {
    next.Notes = {
      rich_text: richTextArray(page.content)
    };
  }

  if (properties.Meeting) {
    next.Meeting = {
      rich_text: richTextArray(page.parent)
    };
  }

  if (properties["Exported At"]) {
    next["Exported At"] = {
      date: {
        start: new Date().toISOString()
      }
    };
  }

  return next;
}

function buildNotionPageChildren(page) {
  const blocks = [
    notionHeadingBlock("Summary"),
    notionParagraphBlock(page.content),
    notionHeadingBlock("Source"),
    notionParagraphBlock(`${page.source}. Full transcript was not exported by default.`)
  ];

  if (page.relatedTasks.length) {
    blocks.push(notionHeadingBlock("Related tasks"));
    page.relatedTasks.forEach((task) => {
      blocks.push(notionBulletedBlock(task));
    });
  }

  if (page.tags.length) {
    blocks.push(notionHeadingBlock("Tags"));
    blocks.push(notionParagraphBlock(page.tags.join(", ")));
  }

  return blocks;
}

function notionHeadingBlock(text) {
  return {
    object: "block",
    type: "heading_2",
    heading_2: {
      rich_text: richTextArray(text)
    }
  };
}

function notionParagraphBlock(text) {
  return {
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: richTextArray(text)
    }
  };
}

function notionBulletedBlock(text) {
  return {
    object: "block",
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: richTextArray(text)
    }
  };
}

async function buildNotionStatusProperty(statusName = "Not started") {
  const properties = await getNotionDataSourceProperties();
  const statusType = properties.Status?.type;

  if (statusType === "select") {
    return {
      select: {
        name: statusName
      }
    };
  }

  return {
    status: {
      name: statusName
    }
  };
}

async function getNotionDataSourceProperties() {
  if (notionDataSourcePropertiesCache) {
    return notionDataSourcePropertiesCache;
  }

  const dataSource = await notionRequest(`/data_sources/${NOTION_DATA_SOURCE_ID}`);
  notionDataSourcePropertiesCache = dataSource.properties || {};
  return notionDataSourcePropertiesCache;
}

async function notionRequest(pathname, options = {}) {
  const response = await fetch(`${NOTION_API_BASE}${pathname}`, {
    method: options.method || "GET",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_API_VERSION
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const message = data.message || `Notion API request failed with status ${response.status}.`;
    throw new Error(message);
  }

  return data;
}

function richTextArray(value) {
  const text = truncateText(cleanText(value), 1900);
  if (!text) {
    return [];
  }

  return [
    {
      type: "text",
      text: {
        content: text
      }
    }
  ];
}

function addOptionalRichTextProperty(target, dataSourceProperties, propertyName, value) {
  const text = truncateText(cleanText(value), 1900);
  if (!dataSourceProperties[propertyName] || !text) {
    return;
  }

  target[propertyName] = {
    rich_text: richTextArray(text)
  };
}

function addOptionalCheckboxProperty(target, dataSourceProperties, propertyName, value) {
  if (!dataSourceProperties[propertyName]) {
    return;
  }

  target[propertyName] = {
    checkbox: Boolean(value)
  };
}

function addOptionalSelectProperty(target, dataSourceProperties, propertyName, value) {
  if (!dataSourceProperties[propertyName] || !cleanText(value)) {
    return;
  }

  target[propertyName] = {
    select: {
      name: cleanText(value)
    }
  };
}

function parseNotionDueDate(value) {
  const label = cleanText(value);
  if (!label) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
    return label;
  }

  const numericMatch = label.match(/^(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?$/);
  if (numericMatch) {
    const month = Number(numericMatch[1]);
    const day = Number(numericMatch[2]);
    const year = normalizeYear(numericMatch[3]);
    return formatIsoDate(year, month, day);
  }

  const monthMatch = label.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(\d{1,2})(?:,\s*(\d{4}))?$/i);
  if (monthMatch) {
    const month = monthNameToNumber(monthMatch[1]);
    const day = Number(monthMatch[2]);
    const year = normalizeYear(monthMatch[3]);
    return formatIsoDate(year, month, day);
  }

  const today = new Date();
  const lower = label.toLowerCase();
  if (lower === "today") {
    return formatIsoDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
  }

  if (lower === "tomorrow") {
    const tomorrow = addDays(today, 1);
    return formatIsoDate(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate());
  }

  if (lower === "manana" || lower === "mañana") {
    const tomorrow = addDays(today, 1);
    return formatIsoDate(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate());
  }

  const weekdayMatch = lower.match(/^(?:next|this|by|due|proximo|próximo)?\s*(monday|tuesday|wednesday|thursday|friday|saturday|sunday|lunes|martes|miercoles|miércoles|jueves|viernes|sabado|sábado|domingo)$/);
  if (weekdayMatch) {
    const next = getNextWeekdayDate(today, normalizeWeekdayName(weekdayMatch[1]));
    return formatIsoDate(next.getFullYear(), next.getMonth() + 1, next.getDate());
  }

  const spanishMonthMatch =
    lower.match(/^(\d{1,2})\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+(\d{4}))?$/) ||
    lower.match(/^(\d{1,2})\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+(\d{4}))?$/);
  if (spanishMonthMatch) {
    return formatIsoDate(normalizeYear(spanishMonthMatch[3]), spanishMonthNameToNumber(spanishMonthMatch[2]), Number(spanishMonthMatch[1]));
  }

  return "";
}

function normalizeYear(value) {
  if (!value) {
    return new Date().getFullYear();
  }

  const number = Number(value);
  return number < 100 ? 2000 + number : number;
}

function monthNameToNumber(value) {
  return ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].indexOf(value.slice(0, 3).toLowerCase()) + 1;
}

function spanishMonthNameToNumber(value) {
  const normalized = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ].indexOf(normalized === "setiembre" ? "septiembre" : normalized) + 1;
}

function normalizeWeekdayName(value) {
  const normalized = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const weekdays = {
    domingo: "sunday",
    lunes: "monday",
    martes: "tuesday",
    miercoles: "wednesday",
    jueves: "thursday",
    viernes: "friday",
    sabado: "saturday"
  };

  return weekdays[normalized] || normalized;
}

function getNextWeekdayDate(date, weekdayName) {
  const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const target = weekdays.indexOf(weekdayName);
  if (target < 0) {
    return date;
  }

  const next = new Date(date);
  let daysUntilTarget = (target - next.getDay() + 7) % 7;
  if (daysUntilTarget === 0) {
    daysUntilTarget = 7;
  }
  next.setDate(next.getDate() + daysUntilTarget);
  return next;
}

function formatIsoDate(year, month, day) {
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) {
    return "";
  }

  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return "";
  }

  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0")
  ].join("-");
}

function formatIsoDateFromDate(date) {
  return formatIsoDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function truncateText(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function sanitizeExternalError(message) {
  return truncateText(cleanText(message).replace(NOTION_TOKEN, "[redacted]"), 220);
}

function createOAuthClient() {
  return new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);
}

function getAuthenticatedOAuthClient(req) {
  const oauthClient = createOAuthClient();
  oauthClient.setCredentials(req.session.googleTokens);
  oauthClient.on("tokens", (tokens) => {
    req.session.googleTokens = {
      ...req.session.googleTokens,
      ...tokens
    };
  });

  return oauthClient;
}

function validateScheduleBody(body) {
  if (!cleanText(body.title)) {
    return {
      ok: false,
      message: "Meeting title is required."
    };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(body.date || ""))) {
    return {
      ok: false,
      message: "Date must use YYYY-MM-DD format."
    };
  }

  if (!isValidTime(body.startTime)) {
    return {
      ok: false,
      message: "Start time must use HH:MM format."
    };
  }

  if (body.endTime && !isValidTime(body.endTime)) {
    return {
      ok: false,
      message: "End time must use HH:MM format."
    };
  }

  const attendees = normalizeAttendees(body.attendees);
  const invalidEmail = attendees.find((email) => !isValidEmail(email));
  if (invalidEmail) {
    return {
      ok: false,
      message: `Invalid attendee email: ${invalidEmail}.`
    };
  }

  return {
    ok: true
  };
}

async function scheduleWithAppsScriptBridge(body) {
  const payload = buildCalendarBridgePayload(body);
  const response = await fetch(CALENDAR_BRIDGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
    redirect: "follow"
  });
  const rawText = await response.text();
  const data = parseJsonResponse(rawText);

  if (!response.ok) {
    throw new Error(data.message || `Calendar bridge failed with status ${response.status}.`);
  }

  if (data.ok === false) {
    throw new Error(data.message || "Calendar bridge rejected the scheduling request.");
  }

  const meetLink = data.meetLink || data.hangoutLink || "";
  const eventLink = data.eventLink || data.htmlLink || "";

  return {
    demo: false,
    provider: "apps_script",
    eventId: data.eventId || "",
    eventLink,
    meetLink,
    message:
      data.message ||
      (meetLink
        ? "Meeting scheduled on Google Calendar."
        : "Meeting scheduled on Google Calendar, but no Google Meet link was returned.")
  };
}

function buildCalendarBridgePayload(body) {
  const attendees = getScheduleAttendeesOrSelf(body.attendees);
  const { startDateTime, endDateTime } = buildEventTimes(body);

  return {
    secret: CALENDAR_BRIDGE_SECRET,
    confirmed: body.confirmed === true,
    title: normalizeBusinessEnglishText(body.title),
    date: String(body.date || ""),
    startTime: String(body.startTime || ""),
    endTime: String(body.endTime || ""),
    startDateTime,
    endDateTime,
    durationMinutes: Number(body.durationMinutes) > 0 ? Number(body.durationMinutes) : 30,
    attendees,
    selfOnly: !normalizeAttendees(body.attendees).length,
    agenda: normalizeBusinessEnglishText(body.agenda),
    summary: normalizeBusinessEnglishText(body.summary),
    timeZone: EVENT_TIME_ZONE,
    source: "Codex 2026 Meeting Assistant"
  };
}

function parseJsonResponse(rawText) {
  try {
    return JSON.parse(rawText || "{}");
  } catch (error) {
    return {
      message: rawText ? `Calendar bridge returned non-JSON output: ${rawText.slice(0, 180)}` : "Calendar bridge returned an empty response."
    };
  }
}

function buildCalendarEventRequest(body) {
  const attendees = getScheduleAttendeesOrSelf(body.attendees);
  const { startDateTime, endDateTime } = buildEventTimes(body);

  return {
    summary: normalizeBusinessEnglishText(body.title),
    description: buildDescription(body.agenda, body.summary),
    start: {
      dateTime: startDateTime,
      timeZone: EVENT_TIME_ZONE
    },
    end: {
      dateTime: endDateTime,
      timeZone: EVENT_TIME_ZONE
    },
    attendees: attendees.map((email) => ({
      email
    })),
    conferenceData: {
      createRequest: {
        requestId: crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString("hex"),
        conferenceSolutionKey: {
          type: "hangoutsMeet"
        }
      }
    }
  };
}

function buildDescription(agenda, summary) {
  const parts = [];

  if (normalizeBusinessEnglishText(agenda)) {
    parts.push(`Agenda:\n${normalizeBusinessEnglishText(agenda)}`);
  }

  if (normalizeBusinessEnglishText(summary)) {
    parts.push(`Generated summary:\n${normalizeBusinessEnglishText(summary)}`);
  }

  return parts.join("\n\n");
}

function buildEventTimes(body) {
  const durationMinutes = Number(body.durationMinutes) > 0 ? Number(body.durationMinutes) : 30;
  const startMinutes = timeToMinutes(body.startTime);
  const startDateTime = `${body.date}T${body.startTime}:00`;
  let endTime = body.endTime;
  let endDate = body.date;

  if (!endTime) {
    const totalEndMinutes = startMinutes + durationMinutes;
    endDate = addDaysToDateString(body.date, Math.floor(totalEndMinutes / 1440));
    endTime = minutesToTime(totalEndMinutes % 1440);
  } else if (timeToMinutes(endTime) <= startMinutes) {
    endDate = addDaysToDateString(body.date, 1);
  }

  return {
    startDateTime,
    endDateTime: `${endDate}T${endTime}:00`
  };
}

function extractMeetLink(event) {
  if (event.hangoutLink) {
    return event.hangoutLink;
  }

  const entryPoints = event.conferenceData && event.conferenceData.entryPoints;
  if (!Array.isArray(entryPoints)) {
    return "";
  }

  const videoEntry = entryPoints.find((entry) => entry.entryPointType === "video");
  return videoEntry ? videoEntry.uri : "";
}

function normalizeAttendees(attendees) {
  if (Array.isArray(attendees)) {
    return dedupe(attendees.map((email) => String(email).trim().toLowerCase()).filter(Boolean));
  }

  return dedupe(
    String(attendees || "")
      .split(/[\s,;]+/)
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean)
  );
}

function getScheduleAttendeesOrSelf(attendees) {
  const normalized = normalizeAttendees(attendees).filter(isValidEmail);
  return normalized.length ? normalized : [ALLOWED_GOOGLE_EMAIL];
}

function isValidEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !isLikelyScheduleTimeEmailArtifact(email);
}

function isLikelyScheduleTimeEmailArtifact(email) {
  const [local = "", domain = ""] = String(email || "").toLowerCase().split("@");
  const temporalLocal = /^(?:today|tomorrow|tonight|monday|tuesday|wednesday|thursday|friday|saturday|sunday|meeting|schedule|calendar)$/;
  const timeDomain = /^(?:\d{1,4}(?:am|pm)?|(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?:am|pm)?)\.(?:am|pm)$/;

  return temporalLocal.test(local) && timeDomain.test(domain);
}

function isValidTime(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value || ""));
}

function timeToMinutes(value) {
  const [hours, minutes] = String(value).split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function addDaysToDateString(dateValue, days) {
  const date = new Date(`${dateValue}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0")
  ].join("-");
}

async function transcribeWithWindowsSpeech(audioPath, culture) {
  const scriptPath = path.join(os.tmpdir(), `codex-local-transcribe-${crypto.randomUUID()}.ps1`);
  const script = `
param(
  [string]$AudioPath,
  [string]$CultureName
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.Speech

$recognizer = [System.Speech.Recognition.SpeechRecognitionEngine]::InstalledRecognizers() |
  Where-Object { $_.Culture.Name -eq $CultureName } |
  Select-Object -First 1

if (-not $recognizer) {
  [pscustomobject]@{
    ok = $false
    transcript = ""
    confidence = 0
    culture = $CultureName
    message = "No installed Windows speech recognizer for " + $CultureName + "."
  } | ConvertTo-Json -Compress
  exit 0
}

$engine = $null
try {
  $engine = New-Object System.Speech.Recognition.SpeechRecognitionEngine -ArgumentList $recognizer
  $grammar = New-Object System.Speech.Recognition.DictationGrammar
  $engine.LoadGrammar($grammar)
  $engine.SetInputToWaveFile($AudioPath)
  $result = $engine.Recognize([TimeSpan]::FromSeconds(10))

  if ($result -and $result.Text) {
    [pscustomobject]@{
      ok = $true
      transcript = $result.Text
      confidence = $result.Confidence
      culture = $CultureName
      message = "Transcribed locally with Windows Speech Recognition."
    } | ConvertTo-Json -Compress
  } else {
    [pscustomobject]@{
      ok = $false
      transcript = ""
      confidence = 0
      culture = $CultureName
      message = "Windows Speech Recognition did not detect words in this audio clip."
    } | ConvertTo-Json -Compress
  }
}
finally {
  if ($engine) {
    $engine.Dispose()
  }
}
`;

  await fs.promises.writeFile(scriptPath, script, "utf8");

  try {
    const stdout = await execFileAsync("powershell.exe", [
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      scriptPath,
      audioPath,
      culture
    ]);
    const output = stdout.trim().split(/\r?\n/).filter(Boolean).pop();
    if (!output) {
      throw new Error("Windows Speech Recognition returned no output.");
    }
    return JSON.parse(output);
  } finally {
    fs.promises.unlink(scriptPath).catch(() => {});
  }
}

function execFileAsync(file, args) {
  return new Promise((resolve, reject) => {
    execFile(
      file,
      args,
      {
        timeout: 20000,
        windowsHide: true,
        maxBuffer: 1024 * 1024
      },
      (error, stdout, stderr) => {
        if (error) {
          const detail = stderr ? ` ${stderr.trim()}` : "";
          reject(new Error(`${error.message}${detail}`));
          return;
        }
        resolve(stdout || "");
      }
    );
  });
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeBusinessEnglishText(value) {
  let text = cleanText(value);
  if (!text) {
    return "";
  }

  const replacements = [
    [/\breuni[oó]n\b/gi, "meeting"],
    [/\breunion\b/gi, "meeting"],
    [/\bagendar\b/gi, "schedule"],
    [/\bprogramar\b/gi, "schedule"],
    [/\bcrear\b/gi, "create"],
    [/\bcrea\b/gi, "create"],
    [/\btareas\b/gi, "tasks"],
    [/\btarea\b/gi, "task"],
    [/\bp[aá]ginas\b/gi, "pages"],
    [/\bp[aá]gina\b/gi, "page"],
    [/\bpara\b/gi, "for"],
    [/\bcon\b/gi, "with"],
    [/\bsobre\b/gi, "about"],
    [/\bhoy\b/gi, "today"],
    [/\bma[nñ]ana\b/gi, "tomorrow"],
    [/\bpasado\s+ma[nñ]ana\b/gi, "the day after tomorrow"],
    [/\blunes\b/gi, "Monday"],
    [/\bmartes\b/gi, "Tuesday"],
    [/\bmi[eé]rcoles\b/gi, "Wednesday"],
    [/\bjueves\b/gi, "Thursday"],
    [/\bviernes\b/gi, "Friday"],
    [/\bs[aá]bado\b/gi, "Saturday"],
    [/\bdomingo\b/gi, "Sunday"],
    [/\bprioridad\s+alta\b/gi, "high priority"],
    [/\bprioridad\s+media\b/gi, "medium priority"],
    [/\bprioridad\s+baja\b/gi, "low priority"],
    [/\balta\b/gi, "high"],
    [/\bmedia\b/gi, "medium"],
    [/\bbaja\b/gi, "low"],
    [/\bcorreo\b/gi, "email"],
    [/\bllamada\b/gi, "call"],
    [/\bcita\b/gi, "appointment"]
  ];

  replacements.forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });

  return text
    .replace(/\bMeeting\s*:\s*/i, "Meeting: ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function dedupe(items) {
  return Array.from(new Set(items));
}
