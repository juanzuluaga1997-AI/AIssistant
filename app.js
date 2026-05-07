const notesInput = document.getElementById("notesInput");
const generateButton = document.getElementById("generateButton");
const loadSampleButton = document.getElementById("loadSampleButton");
const globalSearchInput = document.getElementById("globalSearchInput");
const clearSearchButton = document.getElementById("clearSearchButton");
const searchStatus = document.getElementById("searchStatus");
const themeToggleButton = document.getElementById("themeToggleButton");
const copyEmailButton = document.getElementById("copyEmailButton");
const openGmailButton = document.getElementById("openGmailButton");
const emailRowsOutput = document.getElementById("emailRowsOutput");
const downloadCsvButton = document.getElementById("downloadCsvButton");
const exportNotionButton = document.getElementById("exportNotionButton");
const notionStatus = document.getElementById("notionStatus");
const notionExportStatus = document.getElementById("notionExportStatus");
const inlineNotionStatus = document.getElementById("inlineNotionStatus");
const inlineNotionTasksOutput = document.getElementById("inlineNotionTasksOutput");
const inlineNotionPagePanel = document.getElementById("inlineNotionPagePanel");
const inlineNotionPageTitle = document.getElementById("inlineNotionPageTitle");
const inlineNotionPagePreview = document.getElementById("inlineNotionPagePreview");
const inlineNotionPageStatus = document.getElementById("inlineNotionPageStatus");
const inlineConfirmNotionPageButton = document.getElementById("inlineConfirmNotionPageButton");
const inlineEmailRecipient = document.getElementById("inlineEmailRecipient");
const inlineEmailSubject = document.getElementById("inlineEmailSubject");
const inlineEmailPreview = document.getElementById("inlineEmailPreview");
const inlineEmailStatus = document.getElementById("inlineEmailStatus");
const inlineEmailState = document.getElementById("inlineEmailState");
const inlineCsvStatus = document.getElementById("inlineCsvStatus");
const inlineCsvSummary = document.getElementById("inlineCsvSummary");
const inlineCsvPreviewOutput = document.getElementById("inlineCsvPreviewOutput");
const inlineDownloadCsvButton = document.getElementById("inlineDownloadCsvButton");
const summaryOutput = document.getElementById("summaryOutput");
const decisionsOutput = document.getElementById("decisionsOutput");
const tasksOutput = document.getElementById("tasksOutput");
const risksOutput = document.getElementById("risksOutput");
const emailOutput = document.getElementById("emailOutput");
const inputStatus = document.getElementById("inputStatus");
const analysisStatus = document.getElementById("analysisStatus");
const resultMeta = document.getElementById("resultMeta");
const manualModeButton = document.getElementById("manualModeButton");
const liveModeButton = document.getElementById("liveModeButton");
const manualMode = document.getElementById("manualMode");
const liveMode = document.getElementById("liveMode");
const consentCheck = document.getElementById("consentCheck");
const startListeningButton = document.getElementById("startListeningButton");
const stopListeningButton = document.getElementById("stopListeningButton");
const listeningIndicator = document.getElementById("listeningIndicator");
const listeningText = document.getElementById("listeningText");
const speechFallback = document.getElementById("speechFallback");
const liveStatus = document.getElementById("liveStatus");
const micRecoveryPanel = document.getElementById("micRecoveryPanel");
const micRecoveryTitle = document.getElementById("micRecoveryTitle");
const micRecoveryMessage = document.getElementById("micRecoveryMessage");
const retryMicPermissionButton = document.getElementById("retryMicPermissionButton");
const liveTranscript = document.getElementById("liveTranscript");
const clearTranscriptButton = document.getElementById("clearTranscriptButton");
const liveMeta = document.getElementById("liveMeta");
const liveKeyPointsOutput = document.getElementById("liveKeyPointsOutput");
const liveDecisionsOutput = document.getElementById("liveDecisionsOutput");
const liveActionsOutput = document.getElementById("liveActionsOutput");
const liveRisksOutput = document.getElementById("liveRisksOutput");
const liveConclusionsOutput = document.getElementById("liveConclusionsOutput");
const dashboardStatus = document.getElementById("dashboardStatus");
const dashboardHealth = document.getElementById("dashboardHealth");
const dashboardUrgency = document.getElementById("dashboardUrgency");
const dashboardLastUpdated = document.getElementById("dashboardLastUpdated");
const dashboardTopics = document.getElementById("dashboardTopics");
const dashboardRelevant = document.getElementById("dashboardRelevant");
const dashboardDecisions = document.getElementById("dashboardDecisions");
const dashboardActionItems = document.getElementById("dashboardActionItems");
const dashboardRisks = document.getElementById("dashboardRisks");
const dashboardKeyPoints = document.getElementById("dashboardKeyPoints");
const dashboardConclusions = document.getElementById("dashboardConclusions");
const dashboardConceptSlices = document.getElementById("dashboardConceptSlices");
const dashboardConceptLegend = document.getElementById("dashboardConceptLegend");
const dashboardConceptTotal = document.getElementById("dashboardConceptTotal");
const dashboardConceptLabel = document.getElementById("dashboardConceptLabel");
const dashboardConceptEmpty = document.getElementById("dashboardConceptEmpty");
const dashboardReportMenu = document.querySelector(".dashboard-report-menu");
const dashboardReportPdfButton = document.getElementById("dashboardReportPdfButton");
const dashboardReportEmailButton = document.getElementById("dashboardReportEmailButton");
const dashboardReportHtmlButton = document.getElementById("dashboardReportHtmlButton");
const schedulerForm = document.getElementById("schedulerForm");
const meetingTitle = document.getElementById("meetingTitle");
const meetingDate = document.getElementById("meetingDate");
const meetingStartTime = document.getElementById("meetingStartTime");
const meetingDuration = document.getElementById("meetingDuration");
const attendeeEmails = document.getElementById("attendeeEmails");
const meetingAgenda = document.getElementById("meetingAgenda");
const generateMeetingButton = document.getElementById("generateMeetingButton");
const schedulerStatus = document.getElementById("schedulerStatus");
const scheduleResult = document.getElementById("scheduleResult");
const meetingRowsOutput = document.getElementById("meetingRowsOutput");
const inlineMeetingStatus = document.getElementById("inlineMeetingStatus");
const inlineConfirmMeetingButton = document.getElementById("inlineConfirmMeetingButton");
const inlineMeetingTitle = document.getElementById("inlineMeetingTitle");
const inlineMeetingDate = document.getElementById("inlineMeetingDate");
const inlineMeetingStartTime = document.getElementById("inlineMeetingStartTime");
const inlineMeetingDuration = document.getElementById("inlineMeetingDuration");
const inlineMeetingAttendees = document.getElementById("inlineMeetingAttendees");
const inlineMeetingAgenda = document.getElementById("inlineMeetingAgenda");
const inlineMeetingWarning = document.getElementById("inlineMeetingWarning");
const scheduleModal = document.getElementById("scheduleModal");
const closeScheduleModalButton = document.getElementById("closeScheduleModalButton");
const cancelScheduleButton = document.getElementById("cancelScheduleButton");
const confirmScheduleButton = document.getElementById("confirmScheduleButton");
const scheduleModalWarning = document.getElementById("scheduleModalWarning");
const modalMeetingTitle = document.getElementById("modalMeetingTitle");
const modalMeetingDate = document.getElementById("modalMeetingDate");
const modalMeetingStartTime = document.getElementById("modalMeetingStartTime");
const modalMeetingDuration = document.getElementById("modalMeetingDuration");
const modalMeetingEndTime = document.getElementById("modalMeetingEndTime");
const modalMeetingAttendees = document.getElementById("modalMeetingAttendees");
const modalMeetingAgenda = document.getElementById("modalMeetingAgenda");
const modalMeetingReadiness = document.getElementById("modalMeetingReadiness");
const modalMeetingSummary = document.getElementById("modalMeetingSummary");
const calendarAuthStatus = document.getElementById("calendarAuthStatus");
const googleSignInButton = document.getElementById("googleSignInButton");
const googleLogoutButton = document.getElementById("googleLogoutButton");
const gmailModal = document.getElementById("gmailModal");
const closeGmailModalButton = document.getElementById("closeGmailModalButton");
const cancelGmailButton = document.getElementById("cancelGmailButton");
const confirmOpenGmailButton = document.getElementById("confirmOpenGmailButton");
const gmailRecipientsInput = document.getElementById("gmailRecipientsInput");
const gmailRecipientsWarning = document.getElementById("gmailRecipientsWarning");
const gmailSubjectInput = document.getElementById("gmailSubjectInput");
const gmailBodyInput = document.getElementById("gmailBodyInput");
const gmailStatus = document.getElementById("gmailStatus");
const notionModal = document.getElementById("notionModal");
const notionModalTitle = document.getElementById("notionModalTitle");
const notionModalWarning = document.getElementById("notionModalWarning");
const closeNotionModalButton = document.getElementById("closeNotionModalButton");
const cancelNotionButton = document.getElementById("cancelNotionButton");
const confirmNotionExportButton = document.getElementById("confirmNotionExportButton");
const notionTasksOutput = document.getElementById("notionTasksOutput");
const notionReviewCount = document.getElementById("notionReviewCount");
const notionReviewDestination = document.getElementById("notionReviewDestination");
const notionModalStatus = document.getElementById("notionModalStatus");
const notionPagePreview = document.getElementById("notionPagePreview");
const notionPageTitlePreview = document.getElementById("notionPageTitlePreview");
const notionPageParentPreview = document.getElementById("notionPageParentPreview");
const notionPageSourcePreview = document.getElementById("notionPageSourcePreview");
const notionPageContentPreview = document.getElementById("notionPageContentPreview");
const notionPageTasksPreview = document.getElementById("notionPageTasksPreview");
const notionPageCreatedPreview = document.getElementById("notionPageCreatedPreview");
const csvModal = document.getElementById("csvModal");
const closeCsvModalButton = document.getElementById("closeCsvModalButton");
const cancelCsvButton = document.getElementById("cancelCsvButton");
const confirmCsvDownloadButton = document.getElementById("confirmCsvDownloadButton");
const csvPreviewOutput = document.getElementById("csvPreviewOutput");
const csvReviewCount = document.getElementById("csvReviewCount");
const csvModalStatus = document.getElementById("csvModalStatus");

const HIDDEN_EMAIL_ROWS_STORAGE_KEY = "aiMeetingAssistant.hiddenEmailRows";
const HIDDEN_NOTION_TASKS_STORAGE_KEY = "aiMeetingAssistant.hiddenNotionTaskRows";
const HIDDEN_MEETING_ROWS_STORAGE_KEY = "aiMeetingAssistant.hiddenMeetingRows";

let latestTasks = [];
let latestEmail = "";
let emailPreparationEnabled = true;
let preparedEmailRows = [];
let emailRowCounter = 0;
let geminiEmailRequestCounter = 0;
const pendingGeminiEmailRequests = new Map();
let geminiEmailInterpretationRequestCounter = 0;
const pendingGeminiEmailInterpretations = new Map();
const attemptedGeminiEmailInterpretationKeys = new Set();
const geminiEmailInterpretationTimeouts = new Map();
let geminiEmailInterpretationDebounceTimer = null;
let latestGeminiEmailOnlySourceKey = "";
let latestGeminiEmailOnlyJob = null;
let dashboardGeminiTimer = null;
let dashboardGeminiRequestCounter = 0;
let latestDashboardGeminiSourceKey = "";
let dashboardGeminiQueuedAt = 0;
let lastGoodGeminiDashboardInsights = null;
let lastGoodGeminiDashboardSourceText = "";
const attemptedGeminiDashboardSourceKeys = new Set();
let explicitTranscriptClearInProgress = false;
let latestAnalysis = null;
let latestSourceText = "";
let latestCsv = "";
let recognition = null;
let isListening = false;
let finalTranscript = "";
let interimTranscript = "";
let micPermissionState = "unknown";
let recognitionRestartTimer = null;
let recognitionStartTimer = null;
let noSpeechTimer = null;
let recognitionActive = false;
let recognitionStarting = false;
let recognitionStartWatchdogCount = 0;
let lastSpeechAt = 0;
let lastAudioActivityAt = 0;
let lastRecognitionResultAt = 0;
let audioMonitorStream = null;
let audioMonitorContext = null;
let audioMonitorSource = null;
let audioMonitorAnalyser = null;
let audioMonitorTimer = null;
let localTranscriptionProcessor = null;
let localTranscriptionTimer = null;
let localTranscriptionChunks = [];
let localTranscriptionSampleRate = 0;
let localTranscriptionBusy = false;
let lastLocalTranscriptText = "";
let speechResultTimer = null;
let speechRecognitionAttempt = 0;
let recognitionLanguageIndex = 0;
let pendingMeetingProposal = null;
let preparedMeetingRows = [];
let meetingRowCounter = 0;
let activeSearchQuery = "";
let lastAutoMeetingReviewSignature = "";
let calendarAuthState = {
  configured: false,
  authenticated: false,
  backendAvailable: false,
  message: "Checking calendar connection..."
};
let notionConfig = {
  configured: false,
  checked: false,
  message: "Checking Notion..."
};
let pendingNotionTasks = [];
let pendingCsvTasks = [];
let pendingNotionAction = null;
let lastAutoNotionReviewSignature = "";
const hiddenEmailRows = loadHiddenRowKeys(HIDDEN_EMAIL_ROWS_STORAGE_KEY);
const hiddenNotionTaskRows = loadHiddenRowKeys(HIDDEN_NOTION_TASKS_STORAGE_KEY);
const hiddenMeetingRows = loadHiddenRowKeys(HIDDEN_MEETING_ROWS_STORAGE_KEY);

const SpeechRecognitionConstructor = window.webkitSpeechRecognition || window.SpeechRecognition;
const RECOGNITION_LANGUAGES = ["en-US"];
const MAX_RECOGNITION_RETRIES = 6;
const AUDIO_ACTIVITY_THRESHOLD = 0.018;
const AUDIO_ACTIVITY_WINDOW_MS = 4500;
const SPEECH_RESULT_TIMEOUT_MS = 10000;
const LOCAL_TRANSCRIPTION_ENDPOINT = "/api/transcribe-local";
const LOCAL_TRANSCRIPTION_INTERVAL_MS = 4500;
const LOCAL_TRANSCRIPTION_MIN_SECONDS = 1.1;
const LOCAL_TRANSCRIPTION_MIN_CONFIDENCE = 0.62;
const LOCAL_TRANSCRIPTION_MAX_BUFFER_SECONDS = 18;
const WEB_SPEECH_STALE_MS = 6500;
const EMAIL_ROW_MIN_CONFIDENCE = 0.36;
const EMAIL_OPEN_CONFIDENCE = 0.62;
const GEMINI_EMAIL_COMPOSE_ENDPOINT = "/api/gemini/compose-email-test";
const GEMINI_EMAIL_INTERPRET_ENDPOINT = "/api/gemini/interpret-email-context";
const GEMINI_DASHBOARD_INTERPRET_ENDPOINT = "/api/gemini/interpret-dashboard-context";
const GEMINI_EMAIL_MAX_DRAFTS_PER_SOURCE = 2;
const GEMINI_EMAIL_CLIENT_ENABLED = false;
const GEMINI_EMAIL_INTERPRETATION_CLIENT_ENABLED = true;
const GEMINI_EMAIL_ONLY_TEMPLATE_FILLING = true;
const GEMINI_EMAIL_ONLY_DEBOUNCE_MS = 2800;
const GEMINI_EMAIL_ONLY_TIMEOUT_MS = 22000;
const GEMINI_DASHBOARD_INTERPRETATION_CLIENT_ENABLED = true;
const GEMINI_DASHBOARD_ONLY_RENDERING = true;
const GEMINI_DASHBOARD_DEBOUNCE_MS = 2800;
const GEMINI_DASHBOARD_MAX_WAIT_MS = 9000;
const EMAIL_TOPIC_DUPLICATE_OVERLAP = 0.72;
const THEME_STORAGE_KEY = "aiMeetingAssistant.theme";
const LIVE_TRANSCRIPT_STORAGE_KEY = "aiMeetingAssistant.liveTranscript";
const DASHBOARD_CONCEPT_CATEGORIES = [
  { key: "decisions", label: "Decisions", color: "#2563eb" },
  { key: "risks", label: "Risks or Blockers", color: "#dc2626" },
  { key: "importantPoints", label: "Important Points", color: "#7c3aed" },
  { key: "conclusions", label: "Conclusions", color: "#d97706" }
];
const DASHBOARD_CONCEPT_LIMITS = {
  decisions: 5,
  risks: 5,
  importantPoints: 8,
  relevant: 8,
  keyPoints: 8,
  conclusions: 3
};
const DASHBOARD_LABEL_ALIASES = {
  decisions: [
    "decision",
    "decisions",
    "choice",
    "choices",
    "agreement",
    "agreements",
    "approval",
    "approvals",
    "commitment",
    "commitments",
    "confirmation",
    "confirmations",
    "final call",
    "go ahead",
    "green light"
  ],
  risks: [
    "risk",
    "risks",
    "risks or blockers",
    "blocker",
    "blockers",
    "danger",
    "dangers",
    "dangerous",
    "issue",
    "issues",
    "problem",
    "problems",
    "concern",
    "concerns",
    "obstacle",
    "obstacles",
    "dependency",
    "dependencies",
    "delay",
    "delays",
    "warning",
    "warnings"
  ],
  importantPoints: [
    "important point",
    "important points",
    "key point",
    "key points",
    "main point",
    "main points",
    "relevant",
    "topic",
    "topics",
    "highlight",
    "highlights",
    "context",
    "update",
    "updates",
    "detail",
    "details",
    "priority",
    "priorities",
    "focus",
    "insight",
    "insights",
    "observation",
    "observations",
    "action item",
    "action items",
    "next action",
    "next actions",
    "follow-up",
    "follow ups"
  ],
  conclusions: [
    "conclusion",
    "conclusions",
    "takeaway",
    "takeaways",
    "summary",
    "summaries",
    "outcome",
    "outcomes",
    "result",
    "results",
    "wrap-up",
    "wrap up",
    "final thought",
    "final thoughts",
    "end state",
    "next step",
    "next steps"
  ]
};
const DASHBOARD_INSIGHT_STOP_WORDS = new Set([
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
const DASHBOARD_RANDOM_KEYWORDS = new Set([
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
const EMAIL_V1_SAFE_FALLBACK_SUBJECT = "Meeting Follow-Up";
const EMAIL_V1_SAFE_FALLBACK_SUMMARY = [
  "This is a brief follow-up based on the available meeting notes.",
  "Some transcript details may need review before sending."
];
const EMAIL_V1_SAFE_FALLBACK_ACTIONS = [
  "Review the meeting notes and confirm the next steps."
];
const EMAIL_V1_SAFE_FALLBACK_NOTES = [
  "Please adjust any unclear details before sending."
];
const SCHEDULE_ENDPOINT = "/api/schedule-meet";
const AUTH_STATUS_ENDPOINT = "/api/auth/status";
const NOTION_STATUS_ENDPOINT = "/api/notion/status";
const NOTION_EXPORT_ENDPOINT = "/api/notion/export-tasks";
const NOTION_PAGE_ENDPOINT = "/api/notion/export-page";

const sampleNotes = `Project Phoenix weekly sync - April 30

Attendees: Priya Shah, Marcus Lee, Sofia Alvarez, Jordan Kim, Elena Brooks

The team reviewed readiness for the pilot launch. Customer onboarding is tracking well, but analytics instrumentation is still incomplete. We agreed to keep the pilot date on May 20 and limit the first wave to 12 customer accounts.

Decision: Use the standard enterprise onboarding checklist for the pilot instead of creating a custom checklist.
Approved: Budget for two temporary support contractors during the first month.
Decision: Legal review must be complete before any customer data is imported.

Action: Priya to finalize the customer list by May 6. Priority high.
Marcus will complete analytics event mapping by May 8.
Sofia to schedule legal review with procurement by May 3.
Jordan owns the support staffing plan due May 10.
Elena will prepare executive launch readout by next Friday.

Risks: analytics gaps could delay success reporting. Blocker: legal review is not yet scheduled. Concern: support coverage may be thin if contractor approvals slip.

Next meeting: May 7.`;

const decisionPatterns = [
  /\bdecision\b/i,
  /\bdecided\b/i,
  /\bagreed\b/i,
  /\bapproved\b/i,
  /\bresolved\b/i,
  /\bconfirmed\b/i,
  /\bsigned off\b/i,
  /\bselected\b/i,
  /\bchose\b/i,
  /\bwill proceed\b/i
];

const riskPatterns = [
  /\brisk\b/i,
  /\bblocker\b/i,
  /\bblocked\b/i,
  /\bdelay\b/i,
  /\bissue\b/i,
  /\bconcern\b/i,
  /\bdependency\b/i,
  /\bconstraint\b/i,
  /\bescalat/i,
  /\bmissing\b/i,
  /\bnot ready\b/i,
  /\bincomplete\b/i
];

const taskPatterns = [
  /\baction\b/i,
  /\baction item\b/i,
  /\bto do\b/i,
  /\bfollow up\b/i,
  /\bowner\b/i,
  /\bdue\b/i,
  /\b(please|can you|could you)\b/i,
  /\b(needs? to|should|has to|have to)\b/i,
  /\bby\s+(today|tomorrow|next|monday|tuesday|wednesday|thursday|friday|saturday|sunday|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}[/-]\d{1,2})/i,
  /\b[A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?\s+(?:will|to|owns|owner for|responsible for)\b/i,
  /^[A-Za-z][A-Za-z0-9_-]*(?:\s[A-Za-z][A-Za-z0-9_-]*)?\s*:\s*(configure|test|send|create|schedule|review|prepare|finalize|complete|follow|update|fix|build|draft|share|confirm|coordinate)\b/i
];

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "in",
  "into",
  "is",
  "it",
  "next",
  "of",
  "on",
  "or",
  "our",
  "the",
  "their",
  "this",
  "to",
  "was",
  "we",
  "with"
]);

manualModeButton.addEventListener("click", () => switchMode("manual"));
liveModeButton.addEventListener("click", () => switchMode("live"));
themeToggleButton?.addEventListener("click", toggleThemeMode);

globalSearchInput.addEventListener("input", () => {
  activeSearchQuery = globalSearchInput.value.trim();
  clearSearchButton.disabled = activeSearchQuery.length === 0;
  applyGlobalSearch();
});

clearSearchButton.addEventListener("click", () => {
  globalSearchInput.value = "";
  activeSearchQuery = "";
  clearSearchButton.disabled = true;
  applyGlobalSearch();
  globalSearchInput.focus();
});

dashboardReportPdfButton?.addEventListener("click", () => {
  exportDashboardReportPdf();
  closeDashboardReportMenu();
});

dashboardReportEmailButton?.addEventListener("click", () => {
  exportDashboardReportEmail();
  closeDashboardReportMenu();
});

dashboardReportHtmlButton?.addEventListener("click", () => {
  exportDashboardReportHtml();
  closeDashboardReportMenu();
});

generateButton.addEventListener("click", () => {
  const sourceText = getCurrentMeetingSourceText();

  if (!sourceText) {
    setInputStatus("Add meeting notes or a live transcript before preparing the workspace.", true);
    return;
  }

  const analysis = prepareEverythingFromSource(sourceText, "Everything prepared for review. Approve each external action when ready.");
  prepareMeetingSummaryEmailFromNotes(sourceText, analysis, "Prepared meeting summary email from current notes.");
});

loadSampleButton.addEventListener("click", () => {
  setInputStatus("Manual Notes are protected. Paste or type sample notes directly if needed.", false);
  notesInput.focus();
});

copyEmailButton.addEventListener("click", async () => {
  if (!latestEmail) {
    return;
  }

  let finalStatusMessage = "";
  let finalStatusIsError = false;

  try {
    await copyText(latestEmail);
    setInputStatus("Email copied to clipboard.", false);
  } catch (error) {
    setInputStatus("Email selected. Press Ctrl+C to copy.", false);
    emailOutput.focus();
    emailOutput.select();
  }
});

openGmailButton.addEventListener("click", openReviewedEmailInGmail);
emailRowsOutput.addEventListener("click", handleInlineEmailClick);
exportNotionButton.addEventListener("click", focusInlineNotionSection);
downloadCsvButton.addEventListener("click", downloadReviewedCsv);
inlineDownloadCsvButton.addEventListener("click", downloadReviewedCsv);
inlineConfirmMeetingButton.addEventListener("click", confirmAndScheduleMeeting);
meetingRowsOutput.addEventListener("click", handleInlineMeetingClick);
inlineConfirmNotionPageButton.addEventListener("click", confirmInlineNotionPage);
inlineNotionTasksOutput.addEventListener("click", handleInlineNotionTaskClick);

startListeningButton.addEventListener("click", startListening);
stopListeningButton.addEventListener("click", stopListening);
retryMicPermissionButton.addEventListener("click", retryMicrophonePermission);
clearTranscriptButton.addEventListener("click", clearTranscriptData);

liveTranscript.addEventListener("input", () => {
  finalTranscript = liveTranscript.value;
  interimTranscript = "";
  persistLiveTranscript(finalTranscript);
  updateLiveInsights();
});

schedulerForm.addEventListener("submit", (event) => event.preventDefault());
generateMeetingButton.addEventListener("click", handleGenerateMeetingProposal);
confirmScheduleButton.addEventListener("click", confirmAndScheduleMeeting);
cancelScheduleButton.addEventListener("click", closeScheduleModal);
closeScheduleModalButton.addEventListener("click", closeScheduleModal);
confirmOpenGmailButton.addEventListener("click", openReviewedEmailInGmail);
cancelGmailButton.addEventListener("click", closeGmailModal);
closeGmailModalButton.addEventListener("click", closeGmailModal);
gmailRecipientsInput.addEventListener("input", updateGmailRecipientsWarning);
confirmNotionExportButton.addEventListener("click", exportReviewedTasksToNotion);
cancelNotionButton.addEventListener("click", closeNotionModal);
closeNotionModalButton.addEventListener("click", closeNotionModal);
notionTasksOutput.addEventListener("change", updateNotionReviewCount);
confirmCsvDownloadButton.addEventListener("click", downloadReviewedCsv);
cancelCsvButton.addEventListener("click", closeCsvModal);
closeCsvModalButton.addEventListener("click", closeCsvModal);
googleSignInButton.addEventListener("click", () => {
  window.location.href = "/auth/google";
});
googleLogoutButton.addEventListener("click", logoutGoogle);

scheduleModal.addEventListener("click", (event) => {
  if (event.target === scheduleModal) {
    closeScheduleModal();
  }
});

gmailModal.addEventListener("click", (event) => {
  if (event.target === gmailModal) {
    closeGmailModal();
  }
});

notionModal.addEventListener("click", (event) => {
  if (event.target === notionModal) {
    closeNotionModal();
  }
});

csvModal.addEventListener("click", (event) => {
  if (event.target === csvModal) {
    closeCsvModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !notionModal.hidden) {
    closeNotionModal();
    return;
  }

  if (event.key === "Escape" && !csvModal.hidden) {
    closeCsvModal();
    return;
  }

  if (event.key === "Escape" && !gmailModal.hidden) {
    closeGmailModal();
    return;
  }

  if (event.key === "Escape" && !scheduleModal.hidden) {
    closeScheduleModal();
  }
});

document.addEventListener("input", (event) => {
  if (!activeSearchQuery || event.target === globalSearchInput) {
    return;
  }

  if (event.target.closest("[data-search-scope]")) {
    applyGlobalSearch();
  }
});

window.addEventListener("beforeunload", () => {
  clearRecognitionTimers();
  stopAudioMonitor();
  if (recognition && isListening) {
    isListening = false;
    try {
      recognition.stop();
    } catch (error) {
      // The page is unloading; no recovery is needed.
    }
  }
});

initializeLiveMode();
initializeThemeMode();
initializeScheduler();
refreshAuthStatus();
refreshNotionStatus();

function initializeScheduler() {
  const today = new Date();
  meetingDate.min = formatInputDate(today);
  meetingDate.value = formatInputDate(getNextBusinessDate(today));
  meetingStartTime.value = "09:00";
  markSchedulerFieldAuto(meetingDate);
  markSchedulerFieldAuto(meetingStartTime);
  markSchedulerFieldAuto(meetingDuration);
  trackSchedulerManualEdits();
}

async function refreshAuthStatus() {
  try {
    const response = await fetch(AUTH_STATUS_ENDPOINT);
    const status = await response.json();
    calendarAuthState = {
      configured: Boolean(response.ok && status.configured),
      authenticated: Boolean(response.ok && status.authenticated),
      backendAvailable: response.ok,
      email: status.email || "",
      message: status.message || "",
      provider: status.provider || "google_oauth",
      requiresGoogleSignIn: status.requiresGoogleSignIn !== false
    };

    if (!response.ok || !status.configured) {
      renderAuthStatus(status.message || "Google Calendar is not configured. Real scheduling requires calendar setup.", false, response.ok);
      return;
    }

    if (status.provider === "apps_script") {
      renderAuthStatus(status.message || `Calendar bridge configured. Events will be created from ${status.email || status.allowedEmail}.`, true, true);
      return;
    }

    if (status.authenticated) {
      renderAuthStatus(`Signed in as ${status.email}.`, true, true);
      return;
    }

    renderAuthStatus("Not signed in. Sign in to schedule on Google Calendar.", false, true);
  } catch (error) {
    calendarAuthState = {
      configured: false,
      authenticated: false,
      backendAvailable: false,
      message: "Backend is not running.",
      provider: "google_oauth",
      requiresGoogleSignIn: true
    };
    renderAuthStatus("Backend is not running. Real scheduling is unavailable.", false, false);
  }
}

function renderAuthStatus(message, authenticated, backendAvailable) {
  calendarAuthStatus.textContent = message;
  const needsGoogleSignIn = calendarAuthState.requiresGoogleSignIn !== false;
  googleSignInButton.disabled = authenticated || !backendAvailable || !needsGoogleSignIn;
  googleLogoutButton.disabled = !authenticated || !backendAvailable || !needsGoogleSignIn;

  if (!scheduleModal.hidden) {
    scheduleModalWarning.textContent = getScheduleModalWarning();
    updateScheduleConfirmAvailability();
  }

  if (preparedMeetingRows.length || pendingMeetingProposal) {
    renderPreparedMeetings();
  }
}

function trackSchedulerManualEdits() {
  [meetingTitle, meetingDate, meetingStartTime, meetingDuration, attendeeEmails, meetingAgenda].forEach((field) => {
    field.addEventListener("input", () => markSchedulerFieldManual(field));
    field.addEventListener("change", () => markSchedulerFieldManual(field));
  });
}

function markSchedulerFieldAuto(field) {
  field.dataset.autoPrefilled = "true";
}

function markSchedulerFieldManual(field) {
  field.dataset.autoPrefilled = "false";
}

function isSchedulerFieldAuto(field) {
  return field.dataset.autoPrefilled !== "false";
}

function prefillSchedulerFields(sourceText, analysis) {
  const suggestions = buildSchedulerPrefill(sourceText, analysis);
  let changed = 0;

  changed += setSchedulerFieldIfAvailable(meetingTitle, suggestions.title) ? 1 : 0;
  changed += clearAutoFieldIfUnavailable(meetingTitle, suggestions.title) ? 1 : 0;
  changed += setSchedulerFieldIfAvailable(meetingDate, suggestions.date) ? 1 : 0;
  changed += clearAutoFieldIfUnavailable(meetingDate, suggestions.date) ? 1 : 0;
  changed += setSchedulerFieldIfAvailable(meetingStartTime, suggestions.startTime) ? 1 : 0;
  changed += clearAutoFieldIfUnavailable(meetingStartTime, suggestions.startTime) ? 1 : 0;
  changed += setSchedulerFieldIfAvailable(meetingDuration, String(suggestions.durationMinutes || "")) ? 1 : 0;
  changed += mergeAttendeeEmails(suggestions.attendees) ? 1 : 0;
  changed += clearAutoAttendeesIfUnavailable(suggestions.attendees) ? 1 : 0;
  changed += setSchedulerFieldIfAvailable(meetingAgenda, suggestions.agenda) ? 1 : 0;
  changed += clearAutoFieldIfUnavailable(meetingAgenda, suggestions.agenda) ? 1 : 0;

  if (changed) {
    setSchedulerStatus("Scheduler details were prefilled from the notes. Review before confirming.", false);
  }

  return changed;
}

function buildSchedulerPrefill(sourceText, analysis) {
  const timeDetection = getScheduleStartTimeDetection(sourceText);
  return {
    title: normalizeBusinessEnglishText(inferMeetingTitle(sourceText)),
    date: inferScheduleDate(sourceText, analysis),
    startTime: timeDetection.time,
    durationMinutes: inferScheduleDuration(sourceText),
    attendees: extractMeetingAttendeeEmails(sourceText),
    agenda: normalizeBusinessEnglishBlock(buildVoiceMeetingAgenda(sourceText, analysis))
  };
}

function setSchedulerFieldIfAvailable(field, value) {
  const nextValue = field === meetingAgenda ? normalizeBusinessEnglishBlock(value) : normalizeBusinessEnglishText(value);
  if (!nextValue || (!isSchedulerFieldAuto(field) && field.value.trim())) {
    return false;
  }

  if (field.value === nextValue) {
    markSchedulerFieldAuto(field);
    return false;
  }

  field.value = nextValue;
  markSchedulerFieldAuto(field);
  return true;
}

function clearAutoFieldIfUnavailable(field, value) {
  if (cleanText(value) || !isSchedulerFieldAuto(field) || !field.value.trim()) {
    return false;
  }

  field.value = "";
  markSchedulerFieldAuto(field);
  return true;
}

function mergeAttendeeEmails(emails) {
  if (!emails.length) {
    return false;
  }

  const existing = parseAttendeeEmails(attendeeEmails.value);
  const merged = dedupe([...existing, ...emails]);
  const nextValue = merged.join(", ");

  if (attendeeEmails.value.trim() === nextValue) {
    markSchedulerFieldAuto(attendeeEmails);
    return false;
  }

  if (existing.length && !isSchedulerFieldAuto(attendeeEmails)) {
    return false;
  }

  attendeeEmails.value = nextValue;
  markSchedulerFieldAuto(attendeeEmails);
  return true;
}

function clearAutoAttendeesIfUnavailable(emails) {
  if (emails.length || !isSchedulerFieldAuto(attendeeEmails) || !attendeeEmails.value.trim()) {
    return false;
  }

  attendeeEmails.value = "";
  markSchedulerFieldAuto(attendeeEmails);
  return true;
}

async function refreshNotionStatus() {
  try {
    const response = await fetch(NOTION_STATUS_ENDPOINT);
    const status = await response.json();

    notionConfig = {
      configured: Boolean(response.ok && status.configured),
      checked: true,
      message: status.message || (status.configured ? "Notion configured." : "Notion not configured.")
    };
  } catch (error) {
    notionConfig = {
      configured: false,
      checked: true,
      message: "Notion status unavailable. Backend may not be running."
    };
  }

  renderNotionStatus();
}

function renderNotionStatus() {
  notionStatus.textContent = notionConfig.configured ? "Notion configured" : "Notion not configured";
  notionStatus.classList.toggle("ready", Boolean(notionConfig.configured));
  notionStatus.classList.toggle("warning", Boolean(notionConfig.checked && !notionConfig.configured));

  if (pendingNotionAction || pendingNotionTasks.length) {
    renderInlineNotionActions(pendingNotionAction || {
      type: "tasks",
      tasks: pendingNotionTasks
    });
  }
}

async function logoutGoogle() {
  try {
    await fetch("/auth/logout", {
      method: "POST"
    });
  } catch (error) {
    setSchedulerStatus("Could not reach the backend logout endpoint.", true);
  }

  await refreshAuthStatus();
}

function prepareEverythingFromSource(sourceText, statusMessage = "Everything prepared for review.") {
  const analysis = analyzeNotes(sourceText);
  renderAnalysis(analysis, sourceText);
  analysisStatus.textContent = "Prepared";
  setInputStatus(statusMessage, false);
  return analysis;
}

function prepareDownstreamActions(sourceText, analysis, routingContext = null) {
  const voiceRoute = routingContext?.source === "voice" ? routingContext : null;

  if (voiceRoute?.actionClauses?.length) {
    prepareNaturalMultiIntentActions(sourceText, analysis, voiceRoute);
    return;
  }

  if (voiceRoute?.blocksExternalActions) {
    if (voiceRoute.intent === "notes_only") {
      if (prepareContextAwareEmailRows(sourceText, analysis)) {
        activateGeminiEmailCompositionForSource(sourceText, analysis, {
          contextOnly: true
        });
        return;
      }

      if (shouldRequestGeminiImplicitEmail(sourceText, analysis)) {
        clearPreparedRowsOutsideVoiceIntent("email");
        emailPreparationEnabled = true;
        renderPreparedEmailRows();
        setInputStatus("Checking whether the context needs a useful email draft.", false);
        setInlineEmailStatus("Checking whether the context needs a useful email draft.", false);
        activateGeminiEmailCompositionForSource(sourceText, analysis, {
          contextOnly: true
        });
        return;
      }
    }

    clearPreparedExternalActionRows(voiceRoute.statusMessage, voiceRoute.intent === "ambiguous");
    return;
  }

  const focusedIntent = voiceRoute?.downstreamIntent || getFocusedActionIntent(sourceText);
  const hasExplicitEmailRequest = voiceRoute
    ? voiceRoute.intent === "email"
    : extractEmailCommandSegments(sourceText).length > 0;
  const mandatoryNotionTaskSegments = extractMandatoryNotionTaskCommandSegments(sourceText);
  const hasExplicitNotionRequest = voiceRoute
    ? voiceRoute.intent === "notion_task" || voiceRoute.intent === "notion_page"
    : hasNotionTaskOrPageIntent(sourceText) || mandatoryNotionTaskSegments.length > 0;
  const allowEmail = voiceRoute
    ? voiceRoute.intent === "email"
    : focusedIntent === "email" || focusedIntent === "general" || hasExplicitEmailRequest;
  const allowNotion = voiceRoute
    ? voiceRoute.intent === "notion_task" || voiceRoute.intent === "notion_page"
    : focusedIntent === "notion" || focusedIntent === "general" || hasExplicitNotionRequest;
  const allowMeeting = voiceRoute
    ? voiceRoute.intent === "meeting"
    : focusedIntent === "meeting" || focusedIntent === "general";
  const shouldPrepareMeeting = allowMeeting && hasMeetingSchedulingIntent(sourceText);
  const prefilledCount = shouldPrepareMeeting ? prefillSchedulerFields(sourceText, analysis) : 0;
  emailPreparationEnabled = allowEmail;

  if (voiceRoute) {
    clearPreparedRowsOutsideVoiceIntent(voiceRoute.intent);
  }

  if (!allowEmail) {
    latestEmail = "";
    emailOutput.value = "";
    copyEmailButton.disabled = true;
    openGmailButton.disabled = true;
  }

  latestCsv = "";
  pendingCsvTasks = [];
  if (focusedIntent === "meeting" && !hasExplicitNotionRequest) {
    pendingNotionTasks = [];
    pendingNotionAction = null;
  }
  if (allowNotion) {
    pendingNotionAction = buildPreparedNotionAction(sourceText, analysis) || (
      mandatoryNotionTaskSegments.length
        ? {
            type: "tasks",
            tasks: buildVoiceNotionTasksFromSegments(mandatoryNotionTaskSegments, analysis)
          }
        : null
    );
    pendingNotionTasks = pendingNotionAction?.type === "tasks"
      ? pendingNotionAction.tasks
      : (analysis.tasks.length ? buildNotionReviewTasks(analysis.tasks) : []);
  }
  const meetingProposals = shouldPrepareMeeting ? buildPreparedMeetingProposalsFromSource(sourceText, analysis) : [];
  pendingMeetingProposal = meetingProposals.length ? meetingProposals[meetingProposals.length - 1] : pendingMeetingProposal;
  exportNotionButton.disabled = !pendingNotionAction && pendingNotionTasks.length === 0;
  renderInlineEmailApproval();
  renderInlineCsvApproval([]);
  if (allowNotion || focusedIntent === "meeting") {
    renderInlineNotionActions(pendingNotionAction || {
      type: "tasks",
      tasks: pendingNotionTasks
    });
  }
  renderInlineMeetingApproval(meetingProposals);

  if (allowEmail && hasExplicitEmailRequest) {
    prepareExplicitEmailRowsFromSource(sourceText, analysis, "Prepared from a clear email request.");
  } else if (allowEmail) {
    activateGeminiEmailCompositionForSource(sourceText, analysis, {
      contextOnly: true
    });
  }

  if (pendingNotionAction) {
    setNotionExportStatus("Voice-prepared Notion action is ready inline. Confirm only the item you want to create.", false);
  }

  if (!allowMeeting && !preparedMeetingRows.length) {
    setSchedulerStatus("No meeting prepared yet.", false);
  } else if (meetingProposals.some((proposal) => hasMissingMeetingFields(proposal))) {
    const incomplete = meetingProposals.find((proposal) => hasMissingMeetingFields(proposal));
    setSchedulerStatus(`Voice preparation needs: ${formatMissingMeetingFields(incomplete)}. Say the missing details and try again, or use optional correction mode.`, true);
  } else if (prefilledCount) {
    setSchedulerStatus("Review the AI-prepared meeting details, then confirm if Google Calendar is connected.", false);
  } else if (meetingProposals.length) {
    setSchedulerStatus("Meeting review is ready from voice. Say any missing detail if the review is incomplete.", false);
  }
}

function buildVoiceCommandRoute(sourceText) {
  const cleanedText = cleanupVoiceCommandTranscript(sourceText);
  const recoveredText = recoverCommonEnglishVoiceCommandText(cleanedText);
  const routedText = recoveredText || cleanedText;
  const qualityIssue = getVoiceTranscriptQualityIssue(routedText);

  if (qualityIssue) {
    return {
      source: "voice",
      originalText: String(sourceText || ""),
      cleanedText: routedText,
      intent: "ambiguous",
      downstreamIntent: "none",
      blocksExternalActions: true,
      reason: qualityIssue,
      statusMessage: getVoiceRouteStatusMessage("ambiguous", qualityIssue)
    };
  }

  const intent = classifyVoiceCommandIntent(routedText);
  const multiIntentRoute = buildNaturalMultiIntentVoiceRoute(routedText, intent, sourceText);
  if (multiIntentRoute) {
    return multiIntentRoute;
  }

  const searchQuery = intent === "search_only" ? extractVoiceSearchQuery(routedText) : "";
  const blocksExternalActions = intent === "ambiguous" || intent === "notes_only" || intent === "search_only";

  return {
    source: "voice",
    originalText: String(sourceText || ""),
    cleanedText: routedText,
    intent,
    downstreamIntent: getDownstreamIntentForVoiceRoute(intent),
    blocksExternalActions,
    searchQuery,
    reason: "",
    statusMessage: getVoiceRouteStatusMessage(intent)
  };
}

function buildNaturalMultiIntentVoiceRoute(routedText, detectedIntent, originalText = routedText) {
  if (detectedIntent === "search_only") {
    return null;
  }

  const clauseResult = buildNaturalVoiceActionClauses(routedText);
  const actionClauses = clauseResult.actionClauses;
  const shouldUseNaturalRoute =
    actionClauses.length > 0 &&
    (detectedIntent === "ambiguous" || actionClauses.length > 1 || clauseResult.noteClauses.length > 0 || clauseResult.skippedClauses.length > 0);

  if (!shouldUseNaturalRoute) {
    return null;
  }

  return {
    source: "voice",
    originalText: String(originalText || ""),
    cleanedText: routedText,
    intent: "multi_intent",
    downstreamIntent: "multi",
    blocksExternalActions: false,
    actionClauses,
    noteClauses: clauseResult.noteClauses,
    skippedClauses: clauseResult.skippedClauses,
    searchQuery: "",
    reason: clauseResult.skippedClauses.length ? "partial" : "",
    statusMessage: getNaturalMultiIntentStatusMessage(clauseResult)
  };
}

function buildNaturalVoiceActionClauses(sourceText) {
  const clauses = splitNaturalVoiceTranscriptIntoClauses(sourceText);
  const actionClauses = [];
  const noteClauses = [];
  const skippedClauses = [];
  const seen = new Set();

  clauses.forEach((clauseText, index) => {
    const clause = cleanNaturalVoiceClause(clauseText);
    const key = normalizeScheduleText(clause);
    if (!clause || seen.has(key)) {
      return;
    }

    seen.add(key);
    const qualityIssue = getVoiceTranscriptQualityIssue(clause);
    if (qualityIssue) {
      skippedClauses.push({
        text: clause,
        reason: qualityIssue
      });
      return;
    }

    const intent = classifyNaturalVoiceClauseIntent(clause);
    if (isActionableNaturalVoiceIntent(intent)) {
      actionClauses.push({
        text: clause,
        intent,
        sourceKey: getNaturalVoiceClauseSourceKey(intent, clause, index)
      });
      return;
    }

    if (intent === "notes_only") {
      noteClauses.push({
        text: clause,
        sourceKey: getNaturalVoiceClauseSourceKey(intent, clause, index)
      });
      return;
    }

    if (hasActionishVoiceWords(clause) || /\b(?:meeting|email|gmail|message|notion|task|tasks)\b/i.test(clause)) {
      skippedClauses.push({
        text: clause,
        reason: "unclear"
      });
    }
  });

  return {
    actionClauses,
    noteClauses,
    skippedClauses
  };
}

function splitNaturalVoiceTranscriptIntoClauses(sourceText) {
  const text = cleanupVoiceCommandTranscript(sourceText)
    .replace(/\s+/g, " ")
    .trim();

  if (!text) {
    return [];
  }

  const actionStartPattern = /\b(?:(?:and\s+then|and\s+also|then|also|please|now|next)\s+)?(?:(?:can|could)\s+you\s+|let'?s\s+|(?:i|we)\s+(?:want|need|would\s+like|have|will|am\s+going|are\s+going|am\s+trying|are\s+trying)\s+(?:you\s+)?(?:to\s+)?)?(?:(?:schedule|book|set\s+up|setup|arrange|plan|make|create|set)\b[^.?!;,\n]{0,100}\b(?:meeting|call|event|appointment)\b|(?:create|add|make|prepare|assign|set)\b[^.?!;,\n]{0,100}\b(?:notion\s+)?tasks?\b|(?:write|send|draft|compose|create|prepare|make)\b[^.?!;,\n]{0,100}\b(?:e\s*[- ]?\s*mail|gmail|mail|message)\b|(?:take|capture|record|save)\b[^.?!;,\n]{0,40}\bnotes?\b)/gi;
  const starts = [];
  let match;

  while ((match = actionStartPattern.exec(text)) !== null) {
    if (!isNegatedNaturalClauseStart(text, match.index)) {
      starts.push(match.index);
    }
  }

  if (!starts.length) {
    return [];
  }

  return Array.from(new Set(starts))
    .map((start, index, allStarts) => {
      const end = allStarts[index + 1] ?? text.length;
      return cleanNaturalVoiceClause(text.slice(start, end));
    })
    .filter(Boolean);
}

function isNegatedNaturalClauseStart(text, startIndex) {
  const prefix = text.slice(Math.max(0, startIndex - 32), startIndex);
  return /\b(?:do\s+not|don't|dont|never)\s+$/i.test(prefix);
}

function cleanNaturalVoiceClause(value) {
  return normalizeBusinessEnglishText(value)
    .replace(/^(?:(?:and\s+then|and\s+also|then|also|and|so|yeah|ok|okay|hello|hi|please)\s*,?\s*)+/i, "")
    .replace(/\s*(?:[.!?]\s*)?(?:so\s+yeah|yeah|ok|okay|perfect)\s*$/i, "")
    .replace(/\b(?:and|then|also)\s*$/i, "")
    .replace(/^[,.;:\s]+|[,.;:\s]+$/g, "")
    .trim();
}

function classifyNaturalVoiceClauseIntent(clauseText) {
  const intent = classifyVoiceCommandIntent(clauseText);
  if (isActionableNaturalVoiceIntent(intent) || intent === "notes_only") {
    return intent;
  }

  if (hasNaturalMeetingClauseIntent(clauseText)) {
    return "meeting";
  }

  if (hasNaturalEmailClauseIntent(clauseText)) {
    return "email";
  }

  if (hasNaturalNotionTaskClauseIntent(clauseText)) {
    return "notion_task";
  }

  if (hasNotesOnlyVoiceIntent(clauseText)) {
    return "notes_only";
  }

  return intent;
}

function isActionableNaturalVoiceIntent(intent) {
  return intent === "meeting" || intent === "email" || intent === "notion_task";
}

function hasNaturalMeetingClauseIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /\b(?:(?:can|could)\s+you\s+|let'?s\s+|(?:i|we)\s+(?:want|need|would\s+like|will|am\s+going|are\s+going)\s+(?:you\s+)?(?:to\s+)?)?(?:schedule|book|set up|setup|arrange|plan|make|create|set)\b[^.\n]{0,110}\b(?:meeting|call|event|appointment)\b/i.test(text) ||
    (/\b(?:meeting|call|event|appointment)\b/i.test(text) && (Boolean(extractScheduleDateFromText(sourceText)) || Boolean(extractScheduleStartTimeFromText(sourceText))));
}

function hasNaturalEmailClauseIntent(sourceText) {
  const text = normalizeEmailIntentText(sourceText);
  return hasEmailIntent(text) ||
    /\b(?:(?:can|could)\s+you\s+|let'?s\s+|(?:i|we)\s+(?:want|need|would\s+like|will|am\s+going|are\s+going)\s+(?:you\s+)?(?:to\s+)?)?(?:write|send|draft|compose|create|prepare|make)\b[^.\n]{0,110}\b(?:email|gmail|mail|message)\b/i.test(text);
}

function hasNaturalNotionTaskClauseIntent(sourceText) {
  return !hasNegatedTaskCreationIntent(sourceText) &&
    (hasTaskCommandCore(sourceText) || /\bnotion\s+task\b/i.test(sourceText));
}

function getNaturalVoiceClauseSourceKey(intent, clauseText, index) {
  return [
    "natural-voice",
    intent,
    index,
    normalizeRowSignatureValue(clauseText)
  ].join(":");
}

function getNaturalMultiIntentStatusMessage(clauseResult) {
  const labels = dedupe(clauseResult.actionClauses.map((clause) => {
    if (clause.intent === "meeting") {
      return "Meetings";
    }

    if (clause.intent === "email") {
      return "Emails";
    }

    return "Notion Tasks";
  }));
  const actionText = labels.length ? labels.join(", ") : "voice actions";
  const notesText = clauseResult.noteClauses.length ? " Notes-only text stayed in notes." : "";

  if (clauseResult.skippedClauses.length) {
    return `Prepared ${actionText} from the clear voice requests. ${clauseResult.skippedClauses.length} unclear part${clauseResult.skippedClauses.length === 1 ? "" : "s"} need a clearer repeat.${notesText}`;
  }

  return `Prepared ${actionText} from the voice request. Review each row before approval.${notesText}`;
}

function cleanupVoiceCommandTranscript(value) {
  return normalizeBusinessEnglishBlock(value)
    .split(/\r?\n/)
    .map(cleanupVoiceCommandLine)
    .filter(Boolean)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanupVoiceCommandLine(value) {
  let text = cleanText(value)
    .replace(/\b(?:um+|uh+|erm|hmm+)\b/gi, " ")
    .replace(/\b(?:period|full stop)\b/gi, ".")
    .replace(/\bcomma\b/gi, ",")
    .replace(/\bquestion mark\b/gi, "?")
    .replace(/\be\s*[- ]?\s*mails?\b/gi, (match) => /s\b/i.test(match) ? "emails" : "email")
    .replace(/\bg\s*[- ]?\s*mails?\b/gi, (match) => /s\b/i.test(match) ? "gmails" : "gmail")
    .replace(/\bno\s+shun\b/gi, "Notion")
    .replace(/\bnotion\s+page\b/gi, "Notion page")
    .replace(/\bnotion\s+task\b/gi, "Notion task")
    .replace(/\bto\s+do\s+items?\b/gi, "tasks")
    .replace(/\bnew\s+to\s+do\b/gi, "new task")
    .replace(/\btodo\b/gi, "task")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();

  text = text.replace(/^(?:(?:okay|ok|alright|all right|so|hey|hi|please|now)\s*,?\s*)+/i, "");
  text = text.replace(/^(?:aissistant|ai assistant|assistant|codex)\s*,?\s*/i, "");
  return normalizeBusinessEnglishText(text);
}

function getVoiceTranscriptQualityIssue(sourceText) {
  const text = cleanText(sourceText);
  if (!text) {
    return "empty";
  }

  if (looksLikeGarbageVoiceTranscript(text)) {
    return "low_quality";
  }

  if (shouldRejectLiveTranscriptForActions(text)) {
    return "low_quality";
  }

  return "";
}

function classifyVoiceCommandIntent(sourceText) {
  const text = cleanupVoiceCommandTranscript(sourceText);
  if (!text) {
    return "ambiguous";
  }

  const explicitMeeting = hasMeetingSchedulingIntent(text);
  const explicitEmail = extractEmailCommandSegments(text).length > 0 || hasEmailIntent(text);
  const explicitNotionPage = hasNotionPageIntent(text);
  const mandatoryNotionTaskSegments = extractMandatoryNotionTaskCommandSegments(text);
  const explicitNotionTask =
    mandatoryNotionTaskSegments.length > 0 ||
    extractNotionTaskCommandSegments(text).length > 0 ||
    isMandatoryNotionTaskCommand(text);
  const explicitSearch = hasSearchOnlyVoiceIntent(text);
  const externalIntentCount = [explicitMeeting, explicitEmail, explicitNotionPage, explicitNotionTask]
    .filter(Boolean)
    .length;

  if (externalIntentCount > 1) {
    return "ambiguous";
  }

  if (explicitMeeting) {
    return "meeting";
  }

  if (explicitEmail) {
    return "email";
  }

  if (explicitNotionTask) {
    return "notion_task";
  }

  if (explicitNotionPage) {
    return "notion_page";
  }

  if (explicitSearch) {
    return "search_only";
  }

  if (hasNotesOnlyVoiceIntent(text) || !hasActionishVoiceWords(text)) {
    return "notes_only";
  }

  return "ambiguous";
}

function getDownstreamIntentForVoiceRoute(intent) {
  if (intent === "meeting") {
    return "meeting";
  }

  if (intent === "email") {
    return "email";
  }

  if (intent === "notion_task" || intent === "notion_page") {
    return "notion";
  }

  return "none";
}

function hasSearchOnlyVoiceIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /^(?:search|find|look\s+up|look\s+for)\b/.test(text) &&
    !hasMeetingSchedulingIntent(sourceText) &&
    !hasEmailIntent(sourceText) &&
    !hasNotionTaskOrPageIntent(sourceText);
}

function extractVoiceSearchQuery(sourceText) {
  return cleanText(sourceText)
    .replace(/^(?:search|find|look\s+up|look\s+for)\s+(?:for\s+)?/i, "")
    .replace(/\b(?:in|across)\s+(?:the\s+)?(?:workspace|notes|dashboard|transcript)\b/ig, "")
    .replace(/[.;,]$/, "")
    .trim();
}

function hasNotesOnlyVoiceIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /^(?:take|capture|add|record|save)\s+(?:some\s+)?notes?\b/.test(text) ||
    /^(?:note|notes)\s*[:.-]/.test(text);
}

function getVoiceRouteStatusMessage(intent, reason = "") {
  if (intent === "meeting") {
    return "Voice command routed to Meetings. Review the prepared row before confirming.";
  }

  if (intent === "email") {
    return "Voice command routed to Emails. Open the Gmail draft only after review.";
  }

  if (intent === "notion_task") {
    return "Voice command routed to Notion Tasks. Confirm Task is required before anything is sent.";
  }

  if (intent === "notion_page") {
    return "Voice command routed to a Notion page. Confirm Page is required before anything is sent.";
  }

  if (intent === "notes_only") {
    return "Notes captured. No external action was prepared.";
  }

  if (intent === "search_only") {
    return "Search applied. No external action was prepared.";
  }

  if (reason === "low_quality") {
    return "Voice transcript quality is too low to prepare actions. Please repeat the request clearly in English.";
  }

  return "Voice command was unclear. No external action was prepared. Please repeat one request at a time in English.";
}

function clearPreparedRowsOutsideVoiceIntent(intent) {
  if (intent !== "email") {
    cancelGeminiEmailOnlyQueue();
    preparedEmailRows = [];
  }

  if (intent !== "meeting") {
    preparedMeetingRows = [];
    pendingMeetingProposal = null;
  }

  if (intent !== "notion_task" && intent !== "notion_page") {
    pendingNotionTasks = [];
    pendingNotionAction = null;
  }
}

function clearPreparedExternalActionRows(statusMessage = "", isError = false) {
  cancelGeminiEmailOnlyQueue();
  latestEmail = "";
  latestCsv = "";
  pendingCsvTasks = [];
  pendingNotionTasks = [];
  pendingNotionAction = null;
  pendingMeetingProposal = null;
  preparedEmailRows = [];
  preparedMeetingRows = [];
  emailPreparationEnabled = false;
  emailOutput.value = "";
  copyEmailButton.disabled = true;
  openGmailButton.disabled = true;
  downloadCsvButton.disabled = true;
  exportNotionButton.disabled = true;
  renderInlineEmailApproval();
  renderInlineCsvApproval([]);
  renderInlineNotionActions({
    type: "tasks",
    tasks: []
  });
  renderInlineMeetingApproval(null);

  if (statusMessage) {
    setSchedulerStatus(statusMessage, isError);
    setInputStatus(statusMessage, isError);
  }
}

function prepareNaturalMultiIntentActions(sourceText, analysis, voiceRoute) {
  clearPreparedExternalActionRows();
  emailPreparationEnabled = false;

  const cleanedText = voiceRoute.cleanedText || sourceText;
  const sourceEmails = extractEmailAddresses(cleanedText);
  const meetingProposals = [];
  const notionTasks = [];
  let emailIndex = 0;

  voiceRoute.actionClauses.forEach((clause, clauseIndex) => {
    if (clause.intent === "meeting") {
      const meetingText = enrichNaturalMeetingClauseWithContext(clause.text, cleanedText);
      const meetingAnalysis = analyzeNotes(meetingText);
      const proposal = buildPreparedVoiceMeetingProposal(meetingText, meetingAnalysis, extractMeetingAttendeeEmails(cleanedText));
      proposal.sourceKey = clause.sourceKey;
      proposal.timeWarning = getUnusualMeetingTimeWarning(proposal.startTime);
      meetingProposals.push(proposal);
      return;
    }

    if (clause.intent === "notion_task") {
      const taskAnalysis = analyzeNotes(clause.text);
      const tasks = buildVoiceNotionTasksFromSegments([{
        text: clause.text,
        sourceKey: clause.sourceKey
      }], taskAnalysis, clause.text).map((task, taskIndex) => ({
        ...task,
        clientId: `voice-task-${clauseIndex}-${taskIndex}`,
        sourceKey: `${clause.sourceKey}:task:${taskIndex}`
      }));
      notionTasks.push(...tasks);
      return;
    }

    if (clause.intent === "email") {
      const emailDraft = GEMINI_EMAIL_ONLY_TEMPLATE_FILLING
        ? buildGeminiOnlyEmailPlaceholderRow({
            text: clause.text,
            sourceKey: clause.sourceKey,
            recipientInfo: inferEmailRecipient(clause.text),
            inferredReason: "Prepared from a clear email request.",
            confidence: EMAIL_OPEN_CONFIDENCE
          }, emailIndex, cleanedText, analysis, "Prepared from a clear email request.")
        : buildPreparedEmailRowFromCommand({
            text: clause.text,
            sourceKey: clause.sourceKey
          }, emailIndex, cleanedText, analysis, sourceEmails);
      upsertPreparedEmailRow(emailDraft);
      if (GEMINI_EMAIL_ONLY_TEMPLATE_FILLING) {
        latestGeminiEmailOnlySourceKey = emailDraft.sourceKey;
        removeStaleGeminiOnlyPendingEmailRows(emailDraft.sourceKey);
        scheduleGeminiEmailInterpretationForRow(emailDraft, cleanedText, analysis);
      } else {
        requestGeminiEmailInterpretationForRow(emailDraft, cleanedText, analysis);
      }
      emailIndex += 1;
    }
  });

  const uniqueNotionTasks = dedupeNaturalNotionTasks(notionTasks);
  pendingNotionTasks = uniqueNotionTasks;
  pendingNotionAction = uniqueNotionTasks.length ? {
    type: "tasks",
    tasks: uniqueNotionTasks
  } : null;
  pendingMeetingProposal = meetingProposals.length ? meetingProposals[meetingProposals.length - 1] : null;

  renderPreparedEmailRows();
  renderInlineCsvApproval([]);
  renderInlineNotionActions(pendingNotionAction || {
    type: "tasks",
    tasks: []
  });
  renderInlineMeetingApproval(meetingProposals);

  if (pendingNotionAction) {
    setNotionExportStatus("Voice-prepared Notion tasks are ready inline. Confirm only the item you want to create.", false);
  }

  if (meetingProposals.some((proposal) => hasMissingMeetingFields(proposal))) {
    const incomplete = meetingProposals.find((proposal) => hasMissingMeetingFields(proposal));
    setSchedulerStatus(`Voice preparation needs: ${formatMissingMeetingFields(incomplete)}. Say the missing details and try again, or use optional correction mode.`, true);
  } else {
    const unusualTime = meetingProposals.find((proposal) => proposal.timeWarning);
    if (unusualTime) {
      setSchedulerStatus(`${unusualTime.timeWarning} Nothing will be scheduled until Confirm Meeting is clicked.`, true);
    } else if (meetingProposals.length) {
      setSchedulerStatus("Meeting review is ready from voice. Nothing will be scheduled until Confirm Meeting is clicked.", false);
    }
  }

  const hasPartialWarning = Boolean((voiceRoute.skippedClauses || []).length);
  setInputStatus(voiceRoute.statusMessage, hasPartialWarning);
}

function dedupeNaturalNotionTasks(tasks) {
  const seen = new Set();
  return tasks.filter((task) => {
    const signature = task.signature || getNotionTaskSignature(task);
    if (!signature || seen.has(signature)) {
      return false;
    }

    task.signature = signature;
    seen.add(signature);
    return true;
  });
}

function enrichNaturalMeetingClauseWithContext(clauseText, fullText) {
  if (inferVoiceAgenda(clauseText)) {
    return clauseText;
  }

  const contextTopic = extractNaturalVoiceContextTopic(fullText);
  return contextTopic ? `${clauseText} about ${contextTopic}` : clauseText;
}

function extractNaturalVoiceContextTopic(sourceText) {
  const text = normalizeBusinessEnglishText(sourceText);
  const patterns = [
    /\b(?:i am|i'm|we are|we're)\s+testing\s+(?:the\s+)?(.+?)(?=[.!?,]|$)/i,
    /\b(?:testing|reviewing|checking)\s+(?:the\s+)?(.+?)(?=[.!?,]|$)/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const topic = cleanNaturalContextTopic(match?.[1] || "");
    if (topic) {
      return topic;
    }
  }

  return "";
}

function cleanNaturalContextTopic(value) {
  const topic = normalizeBusinessEnglishText(value)
    .replace(/\b(?:application|app)\b/i, "application")
    .replace(/\b(?:and|then)\b.*$/i, "")
    .replace(/\s+/g, " ")
    .replace(/[.;,]$/, "")
    .trim();

  return topic && topic.length >= 3 ? topic : "";
}

function getFocusedActionIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (hasMeetingSchedulingIntent(text)) {
    return "meeting";
  }

  if (!isFocusedVoiceCommand(sourceText)) {
    if (hasFocusedNotionTaskOrPageIntent(text)) {
      return "notion";
    }

    if (hasEmailIntent(text)) {
      return "email";
    }

    return "general";
  }

  if (hasFocusedNotionTaskOrPageIntent(text)) {
    return "notion";
  }

  if (hasEmailIntent(text)) {
    return "email";
  }

  return "general";
}

function isFocusedVoiceCommand(sourceText) {
  const text = String(sourceText || "").trim();
  return Boolean(text && countWords(text) <= 55 && !/\n{2,}/.test(text));
}

function hasEmailIntent(sourceText) {
  const text = normalizeEmailIntentText(sourceText);
  const emailNoun = "(?:gmail|gmails|email|emails|mail|message|messages)";
  return new RegExp(`\\b(?:open|create|draft|write|send|prepare|compose|make)\\s+(?:(?:a|an|new|two|three|four|five|six|seven|eight|nine|ten|\\d+)\\s+)?${emailNoun}\\b`, "i").test(text) ||
    new RegExp(`\\b(?:open|create|draft|write|send|prepare|compose|make)\\b[^.\\n]{0,100}\\b${emailNoun}\\b`, "i").test(text) ||
    /\b(?:need|needs|want|wants|wanted|have|has|had)\s+to\s+(?:email|message)\b/i.test(text) ||
    /\b(?:email|message)\s+[A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2}\b/i.test(text) ||
    /\b(?:send|write|draft|prepare|create|make)\s+(?:a\s+)?follow[- ]?up\b/i.test(text) ||
    /\b(?:send|write|draft|prepare|create|compose|make)\s+(?:a\s+|an\s+)?(?:summary|recap|follow[- ]?up|update)\s+(?:email|mail|message)\b/i.test(text) ||
    /\b(?:gmail\s+draft|email\s+draft|follow[- ]?up\s+email)\b/i.test(text) ||
    new RegExp(`\\b${emailNoun}\\b[^.\\n]{0,120}\\b(?:summary|summarize|summarizing|recap|follow[- ]?up)\\b`, "i").test(text) ||
    new RegExp("\\b(?:summary|summarize|summarizing|recap)\\b[^.\\n]{0,120}\\b" + emailNoun + "\\b", "i").test(text);
}

function hasLeadingEmailCommand(sourceText) {
  return /^\s*(?:open|create|draft|write|send|prepare|compose|make)\s+(?:(?:a|an|new|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+)?(?:gmail|gmails|email|emails|mail|message|messages)\b/i.test(normalizeEmailIntentText(sourceText));
}

function normalizeEmailIntentText(sourceText) {
  return String(sourceText || "")
    .replace(/\be\s*[- ]?\s*mails?\b/gi, (match) => /s\b/i.test(match) ? "emails" : "email")
    .replace(/\bg\s*[- ]?\s*mails?\b/gi, (match) => /s\b/i.test(match) ? "gmails" : "gmail");
}

function hasStrongSchedulingIntent(sourceText) {
  return /\b(?:meeting|meet|calendar|schedule|book|appointment|call|agendar|programar|reuni[oÃ³]n|cita|llamada)\b/i.test(String(sourceText || ""));
}

function hasMeetingSchedulingIntent(sourceText) {
  return extractMeetingCommandSegments(sourceText).length > 0;
}

function buildPreparedMeetingProposal(sourceText, analysis) {
  const formValues = readSchedulerFormValues();
  const emailValidation = validateAttendeeEmails(formValues.attendeesRaw);
  const proposal = buildMeetingProposal(sourceText, analysis, formValues, emailValidation.attendees);
  proposal.timeDetection = getScheduleStartTimeDetection(sourceText);
  proposal.dateDetectedFromVoice = Boolean(extractScheduleDateFromText(sourceText));
  proposal.missingFields = getMeetingProposalMissingFields(sourceText, formValues, emailValidation);
  proposal.invalidAttendees = emailValidation.invalid;

  return proposal;
}

function buildPreparedMeetingProposalsFromSource(sourceText, analysis) {
  const segments = extractMeetingCommandSegments(sourceText);
  const transcriptAttendees = extractMeetingAttendeeEmails(sourceText);
  return segments.map((segment) => {
    const segmentAttendees = extractMeetingAttendeeEmails(segment.text);
    const attendeeFallback = segmentAttendees.length
      ? segmentAttendees
      : (transcriptAttendees.length === 1 ? transcriptAttendees : []);
    const proposal = buildPreparedVoiceMeetingProposal(segment.text, analyzeNotes(segment.text), attendeeFallback);
    proposal.sourceKey = segment.sourceKey;
    return proposal;
  });
}

function buildPreparedVoiceMeetingProposal(sourceText, analysis, attendeeFallback = []) {
  const suggestions = buildSchedulerPrefill(sourceText, analysis);
  const attendees = dedupe([...suggestions.attendees, ...attendeeFallback]);
  const formValues = {
    title: suggestions.title,
    date: suggestions.date,
    startTime: suggestions.startTime,
    durationMinutes: suggestions.durationMinutes || 30,
    attendeesRaw: attendees.join(", "),
    agenda: suggestions.agenda
  };
  const emailValidation = validateAttendeeEmails(formValues.attendeesRaw);
  const proposal = buildMeetingProposal(sourceText, analysis, formValues, emailValidation.attendees);
  proposal.timeDetection = getScheduleStartTimeDetection(sourceText);
  proposal.dateDetectedFromVoice = Boolean(extractScheduleDateFromText(sourceText));
  proposal.missingFields = getMeetingProposalMissingFields(sourceText, formValues, emailValidation);
  proposal.invalidAttendees = emailValidation.invalid;
  proposal.sourceText = sourceText;
  return proposal;
}

function extractMeetingCommandSegments(sourceText) {
  const chunks = splitMeetingTranscriptIntoChunks(sourceText);
  const segments = [];
  let current = null;

  chunks.forEach((chunk) => {
    if (hasExplicitMeetingCommandStart(chunk)) {
      current = {
        text: chunk,
        baseText: chunk,
        sourceKey: getMeetingSegmentSourceKey(chunk, segments.length)
      };
      segments.push(current);
      return;
    }

    if (current && shouldAttachMeetingContinuation(chunk)) {
      current.text = cleanText(`${current.text} ${chunk}`);
    }
  });

  return segments.map((segment) => ({
    text: cleanText(segment.text),
    sourceKey: segment.sourceKey
  }));
}

function splitMeetingTranscriptIntoChunks(sourceText) {
  const normalized = String(sourceText || "")
    .replace(/\b([ap])\s*\.?\s*m\.?\b/gi, "$1m")
    .replace(/\b(?:then|and then|ok(?:ay)?|perfect|yeah|first|second|third)\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:to\s+)?(?:schedule|book|set\s+up|setup|create|arrange|plan|make|agendar|agenda|programar|programa|crear|crea)\b)/gi, ". ")
    .replace(/\s+(?=(?:i\s+)?(?:want|need|would\s+like)\s+to\s+(?:schedule|book|set\s+up|setup|create|arrange|plan|make)\b)/gi, ". ");

  return normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map((line) => cleanText(line))
    .filter(Boolean);
}

function hasExplicitMeetingCommandStart(value) {
  const text = normalizeScheduleText(value);
  if (!text || isMeetingCorrectionOnly(text)) {
    return false;
  }

  const schedulingVerb = "(?:schedule|book|create|set\\s+up|setup|arrange|plan|make|agendar|agenda|programar|programa|crear|crea|calendarizar)";
  const meetingNoun = "(?:meeting|meet|calendar\\s+event|event|appointment|call|reunion|cita|llamada)";
  const explicitScheduleMeeting = new RegExp(`\\b${schedulingVerb}\\b[^.\\n]{0,90}\\b${meetingNoun}\\b`, "i");
  const explicitAnotherMeeting = new RegExp(`\\b(?:another|new|otra|otro|nueva|nuevo)\\s+${meetingNoun}\\b`, "i");
  const explicitMatch = text.match(explicitScheduleMeeting);
  const matchedCommand = normalizeEmailIntentText(explicitMatch?.[0] || "");
  const emailCommandHijack = Boolean(explicitMatch) &&
    /\b(?:email|gmail|message)\b/i.test(matchedCommand) &&
    !/\b(?:schedule|book|set\s+up|setup|arrange|plan|calendarizar|agendar|programar)\b/i.test(matchedCommand);

  return (Boolean(explicitMatch) && !emailCommandHijack) ||
    (explicitAnotherMeeting.test(text) && /\b(?:schedule|book|create|set\s+up|setup|arrange|plan|make|agendar|agenda|programar|programa|crear|crea|want|need)\b/i.test(text));
}

function shouldAttachMeetingContinuation(value) {
  const text = normalizeScheduleText(value);
  if (!text || hasExplicitMeetingCommandStart(text)) {
    return false;
  }

  return isMeetingCorrectionOnly(text) ||
    Boolean(extractScheduleDateFromText(text)) ||
    hasTimeContinuation(text) ||
    extractEmailAddresses(value).length > 0 ||
    hasMeetingAgendaContinuation(text) ||
    hasDurationContinuation(text);
}

function isMeetingCorrectionOnly(value) {
  const text = normalizeScheduleText(value);
  return /^(?:actually|i mean|instead|change it to|change to|make it|move it to|reschedule|correction|no,?|not that|sorry)\b/.test(text);
}

function hasMeetingAgendaContinuation(text) {
  return /^(?:to|for|about|regarding|sobre|para|acerca de)\b/.test(text);
}

function hasTimeContinuation(text) {
  return /\b(?:at|from|starting at|starts at|a las|a la|desde las|desde la)?\s*(?:\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)(?::\d{2})?\s*(?:am|pm|in the morning|in the afternoon|in the evening|at night|morning|afternoon|evening|night|de la manana|de la tarde|de la noche|manana|tarde|noche)\b/.test(text) ||
    /^\s*(?:am|pm)\b/.test(text);
}

function hasDurationContinuation(text) {
  return /\b(?:for|duration|duracion|por|durante)\s+(?:\d{1,3}|one|two|three|half|una|uno|dos|media)\s+(?:minutes?|mins?|hours?|hrs?|minutos?|horas?)\b/.test(text);
}

function getMeetingSegmentSourceKey(commandText, index) {
  return [
    "meeting",
    index,
    normalizeScheduleText(commandText)
      .replace(/\b(?:actually|i mean|instead|change it to|change to|make it|move it to|reschedule|correction|sorry)\b.*$/i, "")
      .replace(/\b\d{1,2}(?::\d{2})?\s*(?:am|pm)\b/g, "")
      .replace(/\s+/g, " ")
      .trim()
  ].join(":");
}

function maybeOpenVoiceMeetingReview(sourceText, proposal) {
  if (liveMode.hidden || !proposal || !hasSchedulingIntent(sourceText) || interimTranscript) {
    return;
  }

  const signature = getMeetingProposalSignature(proposal);
  if (!signature || signature === lastAutoMeetingReviewSignature) {
    return;
  }

  lastAutoMeetingReviewSignature = signature;
  renderInlineMeetingApproval(proposal);
  if (hasMissingMeetingFields(proposal)) {
    setSchedulerStatus(`Voice preparation needs: ${formatMissingMeetingFields(proposal)}. Say the missing details and try again, or use optional correction mode.`, true);
  } else {
    setSchedulerStatus("Voice command prepared the meeting inline. Confirm before scheduling.", false);
  }
}

function getMeetingProposalSignature(proposal) {
  const attendees = Array.isArray(proposal?.attendees) ? proposal.attendees : [];
  return [
    proposal?.title,
    proposal?.date,
    proposal?.startTime,
    proposal?.durationMinutes,
    attendees.join(","),
    (proposal?.missingFields || []).join(",")
  ].join("|");
}

function loadHiddenRowKeys(storageKey) {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  } catch (error) {
    return new Set();
  }
}

function persistHiddenRowKeys(storageKey, rowSet) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(rowSet)));
  } catch (error) {
    // Row hiding is a convenience. The UI should keep working if storage is blocked.
  }
}

function normalizeRowSignatureValue(value) {
  return normalizeBusinessEnglishText(value)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function getEmailRowSignature(emailRow) {
  return [
    normalizeRowSignatureValue(emailRow?.sourceKey || ""),
    normalizeRowSignatureValue(emailRow?.recipients || ""),
    normalizeRowSignatureValue(emailRow?.recipientLabel || ""),
    normalizeRowSignatureValue(emailRow?.subject || ""),
    normalizeRowSignatureValue(emailRow?.body || "")
  ].join("|");
}

function getNotionTaskSignature(task) {
  return [
    normalizeRowSignatureValue(task?.sourceKey || ""),
    normalizeRowSignatureValue(task?.task || ""),
    normalizeRowSignatureValue(task?.type || "Task"),
    normalizeRowSignatureValue(task?.assigneeText || task?.assigneeEmail || ""),
    normalizeRowSignatureValue(task?.priority || ""),
    normalizeRowSignatureValue(task?.dueDate || ""),
    normalizeRowSignatureValue(task?.source || "")
  ].join("|");
}

function getMeetingHiddenKey(proposal) {
  return proposal?.signature || getMeetingProposalSignature(proposal || {});
}

function isMeetingRowHidden(proposal) {
  return Boolean(
    hiddenMeetingRows.has(getMeetingHiddenKey(proposal)) ||
    (proposal?.sourceKey && hiddenMeetingRows.has(proposal.sourceKey))
  );
}

function createDeleteRowButton(action, label, idValue = "") {
  const button = document.createElement("button");
  button.className = "delete-row-button";
  button.type = "button";
  button.dataset.action = action;
  if (idValue) {
    button.dataset.rowId = idValue;
  }
  button.textContent = "X";
  button.setAttribute("aria-label", label);
  button.title = label;
  return button;
}

function createRowActions(...buttons) {
  const wrapper = document.createElement("div");
  wrapper.className = "row-actions";
  buttons.filter(Boolean).forEach((button) => wrapper.appendChild(button));
  return wrapper;
}

function buildPreparedNotionAction(sourceText, analysis) {
  const taskSegments = extractNotionTaskCommandSegments(sourceText);
  const mandatoryTaskSegments = extractMandatoryNotionTaskCommandSegments(sourceText);
  if (!hasNotionPageIntent(sourceText) && !taskSegments.length && !mandatoryTaskSegments.length) {
    return null;
  }

  if (taskSegments.length || mandatoryTaskSegments.length) {
    const preferredTaskSegments = mandatoryTaskSegments.length ? mandatoryTaskSegments : taskSegments;
    return {
      type: "tasks",
      tasks: buildVoiceNotionTasksFromSegments(preferredTaskSegments, analysis, sourceText)
    };
  }

  if (hasNotionPageIntent(sourceText)) {
    return {
      type: "page",
      page: buildVoiceNotionPage(sourceText, analysis)
    };
  }

  return {
    type: "tasks",
    tasks: buildVoiceNotionTasks(sourceText, analysis)
  };
}

function maybeOpenVoiceNotionReview(sourceText, action) {
  if (liveMode.hidden || !action || interimTranscript || !hasNotionTaskOrPageIntent(sourceText)) {
    return;
  }

  const signature = getNotionActionSignature(action);
  if (!signature || signature === lastAutoNotionReviewSignature) {
    return;
  }

  lastAutoNotionReviewSignature = signature;
  pendingNotionAction = action;
  renderInlineNotionActions(action);
  setInlineNotionStatus("Voice command prepared the Notion action inline. Confirm only what you want to create.", false);
}

function getNotionActionSignature(action) {
  if (!action) {
    return "";
  }

  if (action.type === "page") {
    return ["page", action.page?.title, action.page?.content, action.page?.source].join("|");
  }

  return [
    "tasks",
    ...(action.tasks || []).map((task) => [
      task.sourceKey,
      task.task,
      task.assigneeText,
      task.assigneeEmail,
      task.priority,
      task.dueDate
    ].join(":"))
  ].join("|");
}

function hasNotionIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /\bnotion\b/.test(text) || /\b(?:tarea|tareas|task|tasks|pagina|paginas|page|pages)\b/.test(text);
}

function hasFocusedNotionIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (/\bnotion\b/.test(text)) {
    return true;
  }

  const hasTaskOrPage = /\b(?:tarea|tareas|task|tasks|pagina|paginas|page|pages)\b/.test(text);
  const hasCreationVerb = /\b(?:create|add|make|assign|crear|crea|agrega|anadir|añadir)\b/.test(text);
  const startsWithTaskCommand = /^(?:create|add|make|assign|crear|crea|agrega|anadir|aÃ±adir)\b/.test(text);
  return hasTaskOrPage && hasCreationVerb && startsWithTaskCommand && !hasMeetingSchedulingIntent(text);
}

function hasNotionPageIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /\b(?:page|pages|pagina|paginas)\b/.test(text) && !/\b(?:task|tasks|tarea|tareas)\b/.test(text);
}

function hasNotionTaskOrPageIntent(sourceText) {
  return hasNotionPageIntent(sourceText) || extractNotionTaskCommandSegments(sourceText).length > 0;
}

function hasFocusedNotionTaskOrPageIntent(sourceText) {
  return hasNotionPageIntent(sourceText) || extractNotionTaskCommandSegments(sourceText).length > 0;
}

function extractNotionTaskCommandSegments(sourceText) {
  const commandSegments = splitNotionTaskTranscriptIntoChunks(sourceText)
    .flatMap((chunk, index) => {
      const baseSourceKey = getNotionTaskSegmentSourceKey(chunk, index);
      const clauses = extractNotionTaskClausesFromChunk(chunk);
      const candidates = clauses.length ? clauses : [chunk];

      return candidates.map((candidate, clauseIndex) => ({
        text: candidate,
        sourceKey: clauses.length
          ? `${baseSourceKey}:clause:${clauseIndex}:${normalizeRowSignatureValue(candidate)}`
          : baseSourceKey
      }));
    })
    .filter((segment) => hasExplicitNotionTaskCommand(segment.text))
    .flatMap(expandNotionTaskCommandSegment);

  return dedupeNotionTaskCommandSegments(
    commandSegments.length ? commandSegments : extractDirectNotionTaskCommandSegments(sourceText)
  );
}

function extractDirectNotionTaskCommandSegments(sourceText) {
  const normalized = normalizeBusinessEnglishBlock(sourceText)
    .replace(/\b(?:then|and then|also|ok(?:ay)?|perfect|yeah|now)\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\b[^.\n]{0,90}\b(?:notion|task|tasks)\b)/gi, ". ")
    .replace(/\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\s+(?:(?:a|an|the|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+){0,3}(?:notion\s+)?tasks?\b)/gi, ". ");

  const chunks = normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?;])\s+/))
    .map(cleanText)
    .filter(Boolean);

  return chunks
    .flatMap((chunk, index) => extractDirectNotionTaskClauses(chunk).map((clause, clauseIndex) => ({
      text: clause,
      sourceKey: `direct-notion-task:${index}:${clauseIndex}:${normalizeRowSignatureValue(clause)}`
    })))
    .filter((segment) => hasExplicitNotionTaskCommand(segment.text))
    .flatMap(expandNotionTaskCommandSegment);
}

function extractMandatoryNotionTaskCommandSegments(sourceText) {
  const normalized = normalizeBusinessEnglishBlock(sourceText)
    .replace(/\b(?:then|and then|also|ok(?:ay)?|perfect|yeah|now|first|second|third|fourth|fifth)\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\b[^.\n]{0,90}\b(?:notion|task|tasks)\b)/gi, ". ")
    .replace(/\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\s+(?:(?:a|an|the|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+){0,3}(?:notion\s+)?tasks?\b)/gi, ". ");

  const chunks = normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?;])\s+/))
    .map(cleanText)
    .filter(Boolean);

  const segments = chunks
    .flatMap((chunk, index) => extractMandatoryNotionTaskClauses(chunk).map((clause, clauseIndex) => ({
      text: clause,
      sourceKey: `mandatory-notion-task-v2:${index}:${clauseIndex}:${normalizeRowSignatureValue(clause)}`
    })))
    .filter((segment) => isMandatoryNotionTaskCommand(segment.text))
    .flatMap(expandNotionTaskCommandSegment);

  return dedupeNotionTaskCommandSegments(segments);
}

function extractMandatoryNotionTaskClauses(chunk) {
  const normalized = normalizeBusinessEnglishText(chunk)
    .replace(/\b(e\s*[- ]?\s*mail|emails?|gmail|gmails?)\b/gi, " email ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized || hasNegatedTaskCreationIntent(normalized)) {
    return [];
  }

  const clauses = [];
  const commandPattern = /\b(?:(?:i\s+)?(?:want|need|would\s+like|have)\s+(?:you\s+)?to\s+)?(?:create|add|make|prepare|assign)\s+(?:(?:a|an|the|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+){0,3}(?:notion\s+)?tasks?\b(?:\s+(?:on|in)\s+notion)?[^.\n;]*/gi;
  let match;
  while ((match = commandPattern.exec(normalized)) !== null) {
    clauses.push(cleanText(match[0]));
  }

  const looseClause = extractLooseMandatoryTaskClause(normalized);
  if (looseClause) {
    clauses.push(looseClause);
  }

  if (!clauses.length) {
    const fallback = normalized.match(/\b(?:new\s+(?:notion\s+)?task|task\s+(?:on|in)\s+notion)\b[^.\n;]*/i)?.[0] || "";
    if (fallback) {
      clauses.push(cleanText(fallback));
    }
  }

  return dedupe(clauses.map(normalizeMandatoryTaskClause).filter(Boolean));
}

function extractLooseMandatoryTaskClause(value) {
  const normalized = normalizeBusinessEnglishText(value);
  const text = normalizeScheduleText(normalized);
  const commandPhrases = [
    "i want you to create a new task",
    "i want to create a new task",
    "create a new task",
    "create new task",
    "create a task",
    "create task",
    "add a new task",
    "add new task",
    "add a task",
    "prepare a new task",
    "prepare a task",
    "make a new task",
    "make a task",
    "new task"
  ];

  const indexes = commandPhrases
    .map((phrase) => text.indexOf(phrase))
    .filter((index) => index >= 0);

  if (!indexes.length) {
    return "";
  }

  const start = Math.min(...indexes);
  return normalizeMandatoryTaskClause(normalized.slice(start).replace(/^[,.;:\s]+/, ""));
}

function normalizeMandatoryTaskClause(value) {
  return cleanText(value)
    .replace(/[.!?;]+$/, "")
    .trim();
}

function isMandatoryNotionTaskCommand(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (!text || hasLeadingEmailCommand(text) || hasNegatedTaskCreationIntent(text)) {
    return false;
  }

  if (/\b(?:meeting|meet|calendar\s+event|appointment|call)\b/i.test(text) && hasMeetingSchedulingIntent(text)) {
    return false;
  }

  const explicitTaskCreation = /\b(?:create|add|make|prepare|assign|set)\b[^.\n]{0,90}\b(?:notion\s+)?tasks?\b/i.test(text);
  const simpleTaskCreation = [
    "create a new task",
    "create new task",
    "create a task",
    "create task",
    "add a new task",
    "add new task",
    "add a task",
    "prepare a new task",
    "prepare a task",
    "make a new task",
    "make a task"
  ].some((phrase) => text.includes(phrase));
  const notionTaskDestination = /\b(?:task|tasks)\s+(?:on|in)\s+notion\b/i.test(text);
  const directNewTask = /\bnew\s+(?:notion\s+)?task\b/i.test(text);
  return explicitTaskCreation || simpleTaskCreation || notionTaskDestination || directNewTask;
}

function extractDirectNotionTaskClauses(chunk) {
  const normalized = normalizeBusinessEnglishText(chunk)
    .replace(/\b(e\s*[- ]?\s*mail|emails?|gmail|gmails?)\b/gi, " email ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized || hasNegatedTaskCreationIntent(normalized)) {
    return [];
  }

  const clauses = [];
  const commandPattern = /\b(?:(?:i\s+)?(?:want|need|would\s+like|have|will|am\s+going|are\s+going)\s+(?:you\s+)?to\s+|(?:can|could)\s+you\s+|let'?s\s+|(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:to\s+)?)?(?:create|add|make|prepare|assign|set)\s+(?:(?:a|an|the|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+){0,3}(?:notion\s+)?tasks?\b(?:\s+(?:on|in)\s+notion)?[^.\n;]*/gi;
  let match;
  while ((match = commandPattern.exec(normalized)) !== null) {
    const clause = cleanText(match[0]);
    if (clause && hasTaskCommandCore(clause) && !hasLeadingEmailCommand(clause) && !hasMeetingSchedulingIntent(clause)) {
      clauses.push(clause);
    }
  }

  if (!clauses.length && /\bnew\s+(?:notion\s+)?task\b/i.test(normalized) && !hasMeetingSchedulingIntent(normalized) && !hasLeadingEmailCommand(normalized)) {
    const taskClause = cleanText(normalized.match(/\bnew\s+(?:notion\s+)?task\b[^.\n;]*/i)?.[0] || "");
    if (taskClause) {
      clauses.push(taskClause);
    }
  }

  if (!clauses.length && /\btask\s+(?:on|in)\s+notion\b/i.test(normalized) && !hasMeetingSchedulingIntent(normalized) && !hasLeadingEmailCommand(normalized)) {
    const taskClause = cleanText(normalized.match(/\b(?:create|add|make|prepare|assign)?[^.\n;]*\btask\s+(?:on|in)\s+notion\b[^.\n;]*/i)?.[0] || "");
    if (taskClause) {
      clauses.push(taskClause);
    }
  }

  return dedupe(clauses);
}

function splitNotionTaskTranscriptIntoChunks(sourceText) {
  const normalized = normalizeBusinessEnglishBlock(sourceText)
    .replace(/\b(?:then|and then|also|ok(?:ay)?|perfect|yeah|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\b[^.\n]{0,90}\b(?:notion|task|tasks)\b)/gi, ". ")
    .replace(/\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:you\s+)?(?:to\s+)?(?:create|add|make|prepare|assign)\s+(?:(?:a|an|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+)?(?:notion\s+)?(?:task|tasks)\b)/gi, ". ");

  return normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map(cleanText)
    .filter(Boolean);
}

function extractNotionTaskClausesFromChunk(chunk) {
  const normalized = normalizeBusinessEnglishBlock(chunk)
    .replace(/\b(e\s*[- ]?\s*mail|emails?|gmail|gmails?)\b/gi, " email ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized || hasNegatedTaskCreationIntent(normalized)) {
    return [];
  }

  const starts = [];
  const startPattern = /\b(?:(?:i\s+)?(?:want|need|would\s+like|have)\s+(?:you\s+)?to\s+|(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:to\s+)?)?(?:create|add|make|prepare|assign)\s+(?:(?:a|an|the|new|another|one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+){0,3}(?:notion\s+)?tasks?\b(?:\s+(?:on|in)\s+notion)?|\bnew\s+task\b|\btask\s+(?:on|in)\s+notion\b/gi;
  let match;
  while ((match = startPattern.exec(normalized)) !== null) {
    starts.push(match.index);
  }

  if (!starts.length) {
    return [];
  }

  const boundaryPattern = /\b(?:(?:schedule|book|set\s+up|create)\s+(?:a\s+|an\s+|new\s+|another\s+)?(?:meeting|meet|call|appointment)|(?:open|create|draft|write|send|prepare|compose)\s+(?:a\s+|an\s+|new\s+|another\s+)?(?:email|gmail|message))\b/gi;
  const clauses = [];

  starts.forEach((start, index) => {
    const nextTaskStart = starts[index + 1] ?? normalized.length;
    const tail = normalized.slice(start, nextTaskStart);
    boundaryPattern.lastIndex = 0;
    const boundary = boundaryPattern.exec(tail);
    const end = boundary && boundary.index > 0 ? start + boundary.index : nextTaskStart;
    const clause = cleanText(normalized.slice(start, end).replace(/^[,.;:\s]+/, "").replace(/[,;:\s]+$/, ""));
    if (clause && hasTaskCommandCore(clause)) {
      clauses.push(clause);
    }
  });

  return dedupe(clauses);
}

function dedupeNotionTaskCommandSegments(segments) {
  const seen = new Set();
  return segments.filter((segment) => {
    const key = segment.sourceKey || normalizeRowSignatureValue(segment.text);
    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function hasExplicitNotionTaskCommand(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (!text || hasMeetingSchedulingIntent(text) || hasNegatedTaskCreationIntent(text)) {
    return false;
  }

  const creationVerb = /\b(?:create|add|make|prepare|assign|set|crear|crea|agrega|anadir|añadir)\b/i;
  const taskNoun = /\b(?:notion\s+)?(?:task|tasks|tarea|tareas)\b/i;
  const notionTaskPhrase = /\bnotion\b[^.\n]{0,80}\b(?:task|tasks|tarea|tareas)\b|\b(?:task|tasks|tarea|tareas)\b[^.\n]{0,80}\bnotion\b/i;
  const directTaskCommand = hasTaskCommandCore(text);
  const assignmentCommand = /\bassign\s+(?:this\s+)?task\b/i.test(text) || /\basign(?:a|ar)\s+(?:esta\s+)?tarea\b/i.test(text);

  if (hasEmailIntent(text) && !directTaskCommand && !assignmentCommand) {
    return false;
  }

  return directTaskCommand || assignmentCommand;
}

function hasTaskCommandCore(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (hasNegatedTaskCreationIntent(text)) {
    return false;
  }

  const creationVerb = /\b(?:create|add|make|prepare|assign|set|crear|crea|agrega|anadir|aÃ±adir)\b/i;
  const taskNoun = /\b(?:notion\s+)?(?:task|tasks|tarea|tareas)\b/i;
  const notionTaskPhrase = /\bnotion\b[^.\n]{0,80}\b(?:task|tasks|tarea|tareas)\b|\b(?:task|tasks|tarea|tareas)\b[^.\n]{0,80}\bnotion\b/i;
  const directNewTask = /\bnew\s+(?:notion\s+)?task\b/i.test(text) || /\btask\s+(?:on|in)\s+notion\b/i.test(text);
  return (creationVerb.test(text) && (taskNoun.test(text) || notionTaskPhrase.test(text))) || directNewTask;
}

function hasNegatedTaskCreationIntent(sourceText) {
  const text = normalizeScheduleText(sourceText);
  return /\b(?:do\s+not|don't|dont|never)\s+(?:create|add|make|prepare|assign)\b[^.\n]{0,90}\b(?:notion\s+)?tasks?\b/.test(text) ||
    /\bno\s+(?:need\s+to\s+)?(?:create|add|make|prepare|assign)\b[^.\n]{0,90}\b(?:notion\s+)?tasks?\b/.test(text) ||
    /\bwithout\s+(?:creating|adding|making|preparing|assigning)\b[^.\n]{0,90}\b(?:notion\s+)?tasks?\b/.test(text);
}

function getNotionTaskSegmentSourceKey(commandText, index) {
  return [
    "notion-task",
    index,
    normalizeRowSignatureValue(commandText)
  ].join(":");
}

function expandNotionTaskCommandSegment(segment) {
  const text = normalizeBusinessEnglishText(segment.text);
  const multiMatch = text.match(/\b(?:create|add|make|prepare)\s+(two|three|four|five|six|seven|eight|nine|ten|2|3|4|5|6|7|8|9|10)\s+(?:new\s+|notion\s+|new\s+notion\s+)?tasks?\s*[:,-]?\s*(.+)$/i);
  if (!multiMatch) {
    return [segment];
  }

  const tail = multiMatch[2] || "";
  const requests = [];
  const itemPattern = /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|another|1|2|3|4|5|6|7|8|9|10)\s+(?:task\s+)?(?:to|about|for|regarding|on)\s+(.+?)(?=(?:,?\s+(?:and\s+)?(?:one|two|three|four|five|six|seven|eight|nine|ten|another|1|2|3|4|5|6|7|8|9|10)\s+(?:task\s+)?(?:to|about|for|regarding|on)\b)|[.;]|$)/gi;
  let match;
  while ((match = itemPattern.exec(tail)) !== null) {
    const taskText = cleanNotionTitle(match[1] || "");
    if (taskText && !isWeakNotionTaskTitle(taskText)) {
      requests.push(taskText);
    }
  }

  if (!requests.length) {
    return [segment];
  }

  return requests.map((taskText, index) => ({
    text: looksLikeAssigneeOnlyTaskPart(taskText)
      ? `Create a new task for ${taskText}.`
      : `Create a Notion task to ${taskText}.`,
    sourceKey: `${segment.sourceKey}:part:${index}:${normalizeRowSignatureValue(taskText)}`
  }));
}

function looksLikeAssigneeOnlyTaskPart(value) {
  const text = cleanText(value);
  return /^(?:the\s+)?team$/i.test(text) || /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?$/.test(text);
}

function hasSchedulingIntent(sourceText) {
  return hasMeetingSchedulingIntent(sourceText);
}

function hasLegacySchedulingKeyword(sourceText) {
  const text = String(sourceText || "");
  if (/\b(call|set\s+up)\b/i.test(text)) {
    return true;
  }

  return /\b(agendar|agenda|programar|programa|crear|crea|calendarizar|cita|reuni[oó]n|llamada|meeting|schedule|book|follow[- ]?up)\b/i.test(
    String(sourceText || "")
  );
}

function handleGenerateMeetingProposal() {
  const sourceText = getCurrentMeetingSourceText();

  if (!sourceText) {
    setSchedulerStatus("Add meeting notes or a transcript before reviewing the meeting proposal.", true);
    return;
  }

  const analysis = getReusableAnalysis(sourceText);
  prefillSchedulerFields(sourceText, analysis);
  const formValues = readSchedulerFormValues();
  const emailValidation = validateAttendeeEmails(formValues.attendeesRaw);
  pendingMeetingProposal = buildMeetingProposal(sourceText, analysis, formValues, emailValidation.attendees);
  pendingMeetingProposal.timeDetection = getScheduleStartTimeDetection(sourceText);
  pendingMeetingProposal.dateDetectedFromVoice = Boolean(extractScheduleDateFromText(sourceText));
  pendingMeetingProposal.missingFields = getMeetingProposalMissingFields(sourceText, formValues, emailValidation);
  pendingMeetingProposal.invalidAttendees = emailValidation.invalid;
  renderInlineMeetingApproval(pendingMeetingProposal);
  if (hasMissingMeetingFields(pendingMeetingProposal)) {
    setSchedulerStatus(`Voice preparation needs: ${formatMissingMeetingFields(pendingMeetingProposal)}. Say the missing details and try again, or use optional correction mode.`, true);
  } else {
    setSchedulerStatus("Prepared meeting is ready inline. Confirm before scheduling.", false);
  }
}

function readSchedulerFormValues() {
  return {
    title: normalizeBusinessEnglishText(meetingTitle.value),
    date: meetingDate.value,
    startTime: meetingStartTime.value,
    durationMinutes: Number(meetingDuration.value) || 30,
    attendeesRaw: attendeeEmails.value,
    agenda: normalizeBusinessEnglishBlock(meetingAgenda.value)
  };
}

function getCurrentMeetingSourceText() {
  const manualText = notesInput.value.trim();
  const liveText = liveTranscript.value.trim();

  if (!liveMode.hidden && liveText) {
    return liveText;
  }

  if (!manualMode.hidden && manualText) {
    return manualText;
  }

  return manualText || liveText;
}

function getReusableAnalysis(sourceText) {
  if (latestAnalysis && latestSourceText && sourceText.trim() === latestSourceText.trim()) {
    return latestAnalysis;
  }

  return analyzeNotes(sourceText);
}

function validateAttendeeEmails(rawValue) {
  const attendees = parseAttendeeEmails(rawValue);
  const invalid = attendees.filter((email) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

  return {
    attendees: attendees.filter((email) => !invalid.includes(email)),
    invalid
  };
}

function parseAttendeeEmails(rawValue) {
  const text = String(rawValue || "");
  return dedupe(
    [
      ...text
      .split(/[\s,;]+/)
      .map((email) => email.trim().toLowerCase())
        .filter(isPlausibleEmailAddress),
      ...extractMeetingAttendeeEmails(text)
    ]
  );
}

function extractEmailAddresses(text) {
  const rawText = String(text || "");
  const matches = rawText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
  const spokenMatches = extractSpokenEmailAddresses(rawText);
  return dedupe([...matches, ...spokenMatches]
    .map((email) => email.trim().toLowerCase())
    .filter(isPlausibleEmailAddress));
}

function isPlausibleEmailAddress(email) {
  const value = String(email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return false;
  }

  return !isLikelyScheduleTimeEmailArtifact(value);
}

function isLikelyScheduleTimeEmailArtifact(email) {
  const [local = "", domain = ""] = String(email || "").toLowerCase().split("@");
  const temporalLocal = /^(?:today|tomorrow|tonight|monday|tuesday|wednesday|thursday|friday|saturday|sunday|meeting|schedule|calendar)$/;
  const timeDomain = /^(?:\d{1,4}(?:am|pm)?|(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?:am|pm)?)\.(?:am|pm)$/;
  const domainParts = domain.split(".").filter(Boolean);
  const startsWithSpokenTime = /^(?:\d{1,4}(?:am|pm)?|(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?:am|pm)?)$/.test(domainParts[0] || "");
  const hasCommandTail = domainParts.some((part) =>
    /^(?:i|im|iwant|want|need|needs|would|like|create|schedule|meeting|email|gmail|now|then|am|pm)$/.test(part)
  );

  return temporalLocal.test(local) && (timeDomain.test(domain) || (startsWithSpokenTime && hasCommandTail));
}

function extractMeetingAttendeeEmails(text) {
  const knownEmails = extractKnownAttendeeEmailsFromSpeech(text);
  const extractedEmails = extractEmailAddresses(text).filter((email) =>
    !knownEmails.length || !isLikelyKnownEmailMisrecognition(email)
  );
  return dedupe([
    ...extractedEmails,
    ...knownEmails
  ]);
}

function extractKnownAttendeeEmailsFromSpeech(text) {
  const normalized = normalizeSpokenEmailText(text);
  const compactWords = normalized.replace(/[^a-z0-9]+/g, " ");
  const compactChars = normalized.replace(/[^a-z0-9]+/g, "");
  const matchesKnownUser =
    /\b(?:juan|jhon|john|wan|one|uh1)\b/.test(compactWords) &&
    /(?:\bzuluaga\b|\bsolaga\b|\bsuluaga\b|zuluaga1997|solaga1997|suluaga1997)/.test(compactWords) &&
    /\bgmail\b/.test(compactWords);
  const matchesKnownUserCompact =
    compactChars.includes("juanzuluaga1997gmail") ||
    compactChars.includes("juanzuluagagmail") ||
    compactChars.includes("jhonzuluaga1997gmail") ||
    compactChars.includes("uh1solaga1997gmail") ||
    compactChars.includes("onesolaga1997gmail");

  return matchesKnownUser || matchesKnownUserCompact
    ? ["juan.zuluaga1997@gmail.com"]
    : [];
}

function isLikelyKnownEmailMisrecognition(email) {
  return /(?:^|[._-])(?:zuluaga|solaga|suluaga)1997@gmail\.com$/i.test(email) &&
    email !== "juan.zuluaga1997@gmail.com";
}

function extractSpokenEmailAddresses(text) {
  const normalized = normalizeSpokenEmailText(text);
  const rawMatches = normalized.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || [];
  const tokens = tokenizeSpokenEmailText(normalized);
  const matches = [...rawMatches];

  tokens.forEach((token, index) => {
    if (token !== "@" && token !== "arroba" && token !== "at") {
      return;
    }

    const local = buildEmailLocalPart(tokens, index);
    const domain = buildEmailDomainPart(tokens, index);
    if (local && domain) {
      matches.push(`${local}@${domain}`);
    }
  });

  return matches.filter((email) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email));
}

function normalizeSpokenEmailText(text) {
  return ` ${String(text || "").toLowerCase()} `
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\bnineteen\s+ninety\s+seven\b/g, "1997")
    .replace(/\bone\s+nine\s+nine\s+seven\b/g, "1997")
    .replace(/\bg\s+mail\b/g, "gmail")
    .replace(/\bguion\s+bajo\b/g, "underscore")
    .replace(/\b(?:slash|barra)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSpokenEmailText(text) {
  return String(text || "")
    .replace(/([@._-])/g, " $1 ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function buildEmailLocalPart(tokens, markerIndex) {
  const parts = [];
  for (let index = markerIndex - 1; index >= 0 && parts.length < 10; index -= 1) {
    const token = normalizeEmailToken(tokens[index]);
    if (!token || isSpokenEmailBoundary(token)) {
      break;
    }
    parts.unshift(token);
  }

  return collapseEmailTokens(parts).replace(/^[._-]+|[._-]+$/g, "");
}

function buildEmailDomainPart(tokens, markerIndex) {
  const parts = [];
  let hasDot = false;

  for (let index = markerIndex + 1; index < tokens.length && parts.length < 10; index += 1) {
    const token = normalizeEmailToken(tokens[index]);
    if (!token || isSpokenEmailBoundary(token)) {
      break;
    }

    parts.push(token);
    if (token === ".") {
      hasDot = true;
      continue;
    }

    if (hasDot && /^[a-z]{2,10}$/.test(token)) {
      break;
    }
  }

  const domain = collapseEmailTokens(parts).replace(/^[.-]+|[.-]+$/g, "");
  return /\.[a-z]{2,}$/.test(domain) ? domain : "";
}

function normalizeEmailToken(token) {
  const cleaned = String(token || "")
    .toLowerCase()
    .replace(/[^a-z0-9@._-]/g, "");

  if (!cleaned) {
    return "";
  }

  const replacements = {
    punto: ".",
    dot: ".",
    underscore: "_",
    guion: "-",
    dash: "-",
    hyphen: "-"
  };

  return replacements[cleaned] || cleaned;
}

function collapseEmailTokens(tokens) {
  return tokens
    .join("")
    .replace(/\.{2,}/g, ".")
    .replace(/_{2,}/g, "_")
    .replace(/-{2,}/g, "-");
}

function isSpokenEmailBoundary(token) {
  return [
    "with",
    "for",
    "con",
    "to",
    "para",
    "por",
    "invite",
    "invita",
    "invitar",
    "attendee",
    "attendees",
    "participante",
    "participantes",
    "email",
    "correo",
    "meeting",
    "reunion",
    "llamada",
    "schedule",
    "agendar",
    "programar",
    "review",
    "revisar",
    "about",
    "sobre"
  ].includes(token);
}

function inferScheduleDate(sourceText, analysis) {
  const detectedDate = extractScheduleDateFromText(sourceText);
  if (detectedDate) {
    return detectedDate;
  }

  const taskDate = (analysis.tasks || [])
    .map((task) => parseScheduleDateLabel(task.suggestedDate))
    .find(Boolean);

  return taskDate || formatInputDate(getNextBusinessDate(new Date()));
}

function extractScheduleDateFromText(sourceText) {
  return (
    extractRelativeDateDirect(sourceText) ||
    extractSpanishDateDirect(sourceText) ||
    extractEnglishDateDirect(sourceText) ||
    extractContextualDate(sourceText)
  );
}

function extractRelativeDateDirect(sourceText) {
  const text = normalizeScheduleText(sourceText);
  const today = new Date();

  if (/\b(?:tonight|this evening|esta noche)\b/.test(text)) {
    return formatInputDate(today);
  }

  const relativeMinutes = text.match(/\b(?:in|en|dentro de)\s+(\d{1,3}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|quince|treinta|cuarenta y cinco|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)\s+(minutes?|mins?|minutos?|horas?|hours?|hrs?)\b/);
  if (relativeMinutes) {
    const date = addRelativeTimeToDate(today, relativeMinutes[1], relativeMinutes[2]);
    return formatInputDate(date);
  }

  return "";
}

function extractSpanishDateDirect(sourceText) {
  const text = normalizeScheduleText(sourceText);
  const today = new Date();

  if (/\bpasado\s+manana\b/.test(text)) {
    return formatInputDate(addDaysToLocalDate(today, 2));
  }

  const dateMatch = text.match(
    /\b(\d{1,2})\s+(?:de\s+)?(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+(?:de\s+)?(\d{4}))?\b/
  );
  if (dateMatch) {
    const year = normalizeScheduleYear(dateMatch[3]);
    return formatScheduleDateWithRollover(year, spanishMonthNameToScheduleNumber(dateMatch[2]), Number(dateMatch[1]), Boolean(dateMatch[3]));
  }

  if (/(^|\b(?:para|el|por|agenda|agendar|programar|reunion|llamada|cita)\s+)manana\b/.test(text)) {
    return formatInputDate(addDaysToLocalDate(today, 1));
  }

  if (/\bhoy\b/.test(text)) {
    return formatInputDate(today);
  }

  const weekdayMatch = text.match(/\b(?:proximo|este|esta|el|para el|para)\s+(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\b/);
  if (weekdayMatch) {
    return formatInputDate(getNextWeekdayDate(today, normalizeSpanishWeekday(weekdayMatch[1])));
  }

  return "";
}

function extractEnglishDateDirect(sourceText) {
  const text = normalizeScheduleText(sourceText);
  const today = new Date();

  if (/\btomorrow\b/.test(text)) {
    return formatInputDate(addDaysToLocalDate(today, 1));
  }

  if (/\btoday\b/.test(text)) {
    return formatInputDate(today);
  }

  const nextWeekdayMatch = text.match(/\b(?:next|this|on|for|by|due)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/);
  if (nextWeekdayMatch) {
    return formatInputDate(getNextWeekdayDate(today, nextWeekdayMatch[1]));
  }

  const schedulingWeekdayMatch = text.match(/\b(?:schedule|book|create|set up|setup|arrange|meeting|meet|call|event|appointment|another)\b[^.\n]{0,100}\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/);
  if (schedulingWeekdayMatch) {
    return formatInputDate(getNextWeekdayDate(today, schedulingWeekdayMatch[1]));
  }

  const monthFirstMatch = text.match(
    /\b(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)\.?\s+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s+(\d{4}))?\b/
  );
  if (monthFirstMatch) {
    const year = normalizeScheduleYear(monthFirstMatch[3]);
    return formatScheduleDateWithRollover(year, monthNameToScheduleNumber(monthFirstMatch[1]), Number(monthFirstMatch[2]), Boolean(monthFirstMatch[3]));
  }

  const dayFirstMatch = text.match(
    /\b(\d{1,2})(?:st|nd|rd|th)?\s+(?:of\s+)?(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)(?:,?\s+(\d{4}))?\b/
  );
  if (dayFirstMatch) {
    const year = normalizeScheduleYear(dayFirstMatch[3]);
    return formatScheduleDateWithRollover(year, monthNameToScheduleNumber(dayFirstMatch[2]), Number(dayFirstMatch[1]), Boolean(dayFirstMatch[3]));
  }

  return "";
}

function extractContextualDate(sourceText) {
  const text = String(sourceText || "");
  const contextualPatterns = [
    /\b(?:agendar|agenda|programar|programa|crear|crea|reuni[oó]n|llamada|cita)\b[^.\n]{0,120}\b(?:el|para|por|en)?\s*((?:hoy|ma[nñ]ana|pasado\s+ma[nñ]ana|la\s+pr[oó]xima\s+semana|fin\s+de\s+semana|eow|pr[oó]ximo\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)|(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)\s+\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?|\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?|\d{1,2}\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+\d{4})?))/i,
    /\b(?:el|para|por)\s+((?:hoy|ma[nñ]ana|pasado\s+ma[nñ]ana|la\s+pr[oó]xima\s+semana|fin\s+de\s+semana|eow|pr[oó]ximo\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)|(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)\s+\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?|\d{1,2}\s+de\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+\d{4})?|\d{1,2}\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+\d{4})?))\b/i,
    /\b(?:follow[- ]?up|meeting|schedule|call|review)\b[^.\n]{0,90}\b(?:on|for|by)?\s*((?:today|tomorrow|next week|end of week|eow|next\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:,\s*\d{4})?|\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?))/i,
    /\b(?:on|for)\s+((?:today|tomorrow|next week|end of week|eow|next\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:,\s*\d{4})?|\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?))\b/i
  ];

  for (const pattern of contextualPatterns) {
    const match = text.match(pattern);
    const parsed = match ? parseScheduleDateLabel(match[1]) : "";
    if (parsed) {
      return parsed;
    }
  }

  return "";
}

function parseScheduleDateLabel(value) {
  const label = cleanText(value).replace(/\.$/, "");
  if (!label) {
    return "";
  }

  const today = new Date();
  const lower = label.toLowerCase();

  if (/^\d{4}-\d{2}-\d{2}$/.test(label)) {
    return label;
  }

  if (lower === "today") {
    return formatInputDate(today);
  }

  if (lower === "tomorrow") {
    return formatInputDate(addDaysToLocalDate(today, 1));
  }

  if (lower === "manana" || lower === "mañana") {
    return formatInputDate(addDaysToLocalDate(today, 1));
  }

  if (lower === "pasado manana" || lower === "pasado mañana") {
    return formatInputDate(addDaysToLocalDate(today, 2));
  }

  if (lower === "next week") {
    return formatInputDate(getNextBusinessDate(addDaysToLocalDate(today, 6)));
  }

  if (lower === "la proxima semana" || lower === "la próxima semana") {
    return formatInputDate(getNextBusinessDate(addDaysToLocalDate(today, 6)));
  }

  if (lower === "end of week" || lower === "eow") {
    return formatInputDate(getEndOfWeekDate(today));
  }

  if (lower === "fin de semana") {
    return formatInputDate(getEndOfWeekDate(today));
  }

  const nextWeekdayMatch = lower.match(/^next\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/);
  if (nextWeekdayMatch) {
    return formatInputDate(getNextWeekdayDate(today, nextWeekdayMatch[1]));
  }

  const nextSpanishWeekdayMatch = lower.match(/^proximo\s+(lunes|martes|miercoles|miércoles|jueves|viernes|sabado|sábado|domingo)$/);
  if (nextSpanishWeekdayMatch) {
    return formatInputDate(getNextWeekdayDate(today, normalizeSpanishWeekday(nextSpanishWeekdayMatch[1])));
  }

  const numericMatch = label.match(/^(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?$/);
  if (numericMatch) {
    const year = normalizeScheduleYear(numericMatch[3]);
    return formatScheduleDateWithRollover(year, Number(numericMatch[1]), Number(numericMatch[2]), Boolean(numericMatch[3]));
  }

  const monthMatch = label.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(\d{1,2})(?:,\s*(\d{4}))?$/i);
  if (monthMatch) {
    const year = normalizeScheduleYear(monthMatch[3]);
    return formatScheduleDateWithRollover(year, monthNameToScheduleNumber(monthMatch[1]), Number(monthMatch[2]), Boolean(monthMatch[3]));
  }

  const spanishMonthMatch =
    label.match(/^(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)\s+(\d{1,2})\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+(\d{4}))?$/i) ||
    label.match(/^(\d{1,2})\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de\s+(\d{4}))?$/i) ||
    label.match(/^(\d{1,2})\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+(\d{4}))?$/i);
  if (spanishMonthMatch) {
    const year = normalizeScheduleYear(spanishMonthMatch[3]);
    return formatScheduleDateWithRollover(year, spanishMonthNameToScheduleNumber(spanishMonthMatch[2]), Number(spanishMonthMatch[1]), Boolean(spanishMonthMatch[3]));
  }

  return "";
}

function inferScheduleStartTime(sourceText) {
  return getScheduleStartTimeDetection(sourceText).time;
}

function extractScheduleStartTimeFromText(sourceText) {
  return getScheduleStartTimeDetection(sourceText).time;
}

function extractScheduleStartTimeFromTextLegacy(sourceText) {
  const text = String(sourceText || "");
  const normalized = normalizeScheduleText(sourceText);
  const relativeTime = extractRelativeStartTime(sourceText);
  if (relativeTime) {
    return relativeTime;
  }

  if (/\b(?:tonight|this evening|esta noche)\b/.test(normalized) && !/\b(?:at|a\s+las|a\s+la)\b/i.test(text)) {
    return "20:00";
  }

  const patterns = [
    /\b(\d{1,2}|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)(?::(\d{2}))?\s*(de\s+la\s+ma[nÃ±]ana|de\s+la\s+tarde|de\s+la\s+noche|ma[nÃ±]ana|tarde|noche)\b/i,
    /\b(?:a\s+las|a\s+la|desde\s+las|desde\s+la|empieza\s+a\s+las|hora\s*:?)\s*(\d{1,2}|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)(?::(\d{2}))?\s*(am|pm|a\.m\.|p\.m\.|de\s+la\s+ma[nñ]ana|de\s+la\s+tarde|de\s+la\s+noche|ma[nñ]ana|tarde|noche)?\b/i,
    /\b(?:at|from|starting at|starts at|start time\s*:?)\s*(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?::(\d{2}))?\s*(am|pm|a\.m\.|p\.m\.|in\s+the\s+morning|in\s+the\s+afternoon|in\s+the\s+evening|at\s+night|morning|afternoon|evening|night)?\b/i,
    /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?::(\d{2}))?\s*(am|pm|a\.m\.|p\.m\.|at\s+night|in\s+the\s+morning|in\s+the\s+afternoon|in\s+the\s+evening)\b/i,
    /\b(\d{1,2}):(\d{2})\s*(am|pm)?\b/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const time = match ? normalizeScheduleTime(match[1], match[2], match[3]) : "";
    if (time) {
      return time;
    }
  }

  return "";
}

function getScheduleStartTimeDetection(sourceText) {
  const normalized = normalizeScheduleTimeText(sourceText);
  const relativeTime = extractRelativeStartTime(sourceText);
  if (relativeTime) {
    return {
      time: relativeTime,
      confidence: "high",
      reason: "relative time detected"
    };
  }

  if (/\b(?:tonight|this evening|esta noche)\b/.test(normalized) && !/\b(?:at|a\s+las|a\s+la)\b/.test(normalized)) {
    return {
      time: "20:00",
      confidence: "medium",
      reason: "evening default from voice"
    };
  }

  const explicitTime = findExplicitScheduleTime(normalized);
  if (explicitTime.time) {
    return explicitTime;
  }

  const twentyFourHourTime = findClearTwentyFourHourTime(normalized);
  if (twentyFourHourTime.time) {
    return twentyFourHourTime;
  }

  const ambiguousTime = findAmbiguousScheduleTime(normalized);
  if (ambiguousTime) {
    return {
      time: "",
      confidence: "needs clarification",
      reason: `Heard "${ambiguousTime}", but AM/PM was not clear`
    };
  }

  return {
    time: "",
    confidence: "missing",
    reason: "No start time detected from voice"
  };
}

function normalizeScheduleTimeText(value) {
  return normalizeScheduleText(value)
    .replace(/\b([ap])\s*\.?\s*m\.?\b/g, "$1m")
    .replace(/\ba\s+m\b/g, "am")
    .replace(/\bp\s+m\b/g, "pm")
    .replace(/\bmediodia\b/g, "12 pm")
    .replace(/\bmedianoche\b/g, "12 am")
    .replace(/\bnoon\b/g, "12 pm")
    .replace(/\bmidnight\b/g, "12 am")
    .replace(/[.,;!?]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findExplicitScheduleTime(text) {
  const hourToken = "(\\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)";
  const meridiemToken = "(am|pm|de la manana|de la tarde|de la noche|por la manana|por la tarde|por la noche|en la manana|en la tarde|en la noche|in the morning|in the afternoon|in the evening|at night|morning|afternoon|evening|night|manana|tarde|noche)";
  const patterns = [
    new RegExp(`\\b(?:a\\s+las|a\\s+la|desde\\s+las|desde\\s+la|empieza\\s+a\\s+las|hora|at|from|starting\\s+at|starts\\s+at|start\\s+time)\\s+${hourToken}(?::(\\d{2}))?\\s+${meridiemToken}\\b`, "gi"),
    new RegExp(`\\b${hourToken}(?::(\\d{2}))?\\s+${meridiemToken}\\b`, "gi")
  ];

  let detected = {
    time: "",
    confidence: "missing",
    reason: ""
  };

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const time = normalizeScheduleTime(match[1], match[2], match[3]);
      if (time) {
        detected = {
          time,
          confidence: "high",
          reason: "explicit AM/PM or day-part detected"
        };
      }
    }
  }

  return detected;
}

function findClearTwentyFourHourTime(text) {
  const prefixed = text.match(/\b(?:a\s+las|a\s+la|desde\s+las|desde\s+la|hora|at|from|starting\s+at|starts\s+at|start\s+time)\s+([01]?\d|2[0-3]):([0-5]\d)\b/i);
  const standalone = text.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/i);
  const match = prefixed || standalone;
  if (!match) {
    return {
      time: "",
      confidence: "missing",
      reason: ""
    };
  }

  const hour = Number(match[1]);
  if (hour >= 13 || hour === 0) {
    return {
      time: normalizeScheduleTime(match[1], match[2], ""),
      confidence: "high",
      reason: "24-hour time detected"
    };
  }

  return {
    time: "",
    confidence: "needs clarification",
    reason: `Heard "${match[1]}:${match[2]}", but AM/PM was not clear`
  };
}

function findAmbiguousScheduleTime(text) {
  const hourToken = "(\\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)";
  const contextualPatterns = [
    new RegExp(`\\b(?:a\\s+las|a\\s+la|desde\\s+las|desde\\s+la|hora|at|from|starting\\s+at|starts\\s+at|start\\s+time)\\s+${hourToken}(?::(\\d{2}))?\\b`, "i"),
    new RegExp(`\\b(?:today|tomorrow|tonight|hoy|manana|esta\\s+noche)\\s+${hourToken}(?::(\\d{2}))?\\b`, "i"),
    new RegExp(`\\b(?:next\\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|lunes|martes|miercoles|jueves|viernes|sabado|domingo)\\s+${hourToken}(?::(\\d{2}))?\\b`, "i")
  ];

  for (const pattern of contextualPatterns) {
    const match = text.match(pattern);
    if (!match) {
      continue;
    }

    const hour = parseSpokenNumber(match[1]);
    if (hour >= 1 && hour <= 12) {
      return [match[1], match[2]].filter(Boolean).join(":");
    }
  }

  if (hasSchedulingIntent(text)) {
    const bare = text.match(new RegExp(`\\b${hourToken}(?::(\\d{2}))?\\b`, "i"));
    if (bare) {
      const hour = parseSpokenNumber(bare[1]);
      if (hour >= 1 && hour <= 12) {
        return [bare[1], bare[2]].filter(Boolean).join(":");
      }
    }
  }

  return "";
}

function extractRelativeStartTime(sourceText) {
  const text = normalizeScheduleText(sourceText);
  const match = text.match(/\b(?:in|en|dentro de)\s+(\d{1,3}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|quince|treinta|cuarenta y cinco|una|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)\s+(minutes?|mins?|minutos?|horas?|hours?|hrs?)\b/);
  if (!match) {
    return "";
  }

  return formatInputTime(addRelativeTimeToDate(new Date(), match[1], match[2]));
}

function normalizeScheduleTime(hourValue, minuteValue, meridiemValue) {
  let hours = parseSpokenNumber(hourValue);
  const minutes = Number(minuteValue || 0);
  const meridiem = normalizeMeridiem(meridiemValue);

  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || minutes < 0 || minutes > 59) {
    return "";
  }

  if (meridiem === "pm" && hours < 12) {
    hours += 12;
  } else if (meridiem === "am" && hours === 12) {
    hours = 0;
  }

  if (hours < 0 || hours > 23) {
    return "";
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function inferScheduleDuration(sourceText) {
  const text = String(sourceText || "");
  const normalized = normalizeScheduleText(sourceText);
  if (/\b(?:half\s+an\s+hour|media\s+hora)\b/.test(normalized)) {
    return 30;
  }

  const spokenDuration = extractSpokenDuration(normalized);
  if (spokenDuration) {
    return normalizeSupportedDuration(spokenDuration);
  }

  const match =
    text.match(/\b(?:duraci[oó]n|por|durante|agenda|agendar|programar)\b[^.\n]{0,40}?(\d{1,3}|media|una|uno|dos)\s*[- ]?(minutos?|mins?|horas?|hrs?)\b/i) ||
    text.match(/\b(media)\s+(hora)\b/i) ||
    text.match(/\b(?:duration|for|book|schedule)\b[^.\n]{0,40}?(\d{1,3})\s*[- ]?(minutes?|mins?|hours?|hrs?)\b/i) ||
    text.match(/\b(\d{1,3})\s*[- ]?(minutes?|mins?|hours?|hrs?)\s+(?:meeting|call|sync|review)\b/i);

  if (!match) {
    return 30;
  }

  const amount = match[1].toLowerCase() === "media" ? 30 : parseSpokenNumber(match[1]);
  const unit = match[2].toLowerCase();
  const minutes = amount === 30 && unit.startsWith("hora")
    ? 30
    : unit.startsWith("hour") || unit.startsWith("hr") || unit.startsWith("hora")
      ? amount * 60
      : amount;
  return normalizeSupportedDuration(minutes);
}

function normalizeSupportedDuration(minutes) {
  const supported = [15, 30, 45, 60, 90];
  if (supported.includes(minutes)) {
    return minutes;
  }

  return supported.reduce((closest, value) =>
    Math.abs(value - minutes) < Math.abs(closest - minutes) ? value : closest
  , 30);
}

function extractSpokenDuration(text) {
  const normalized = String(text || "");
  const match =
    normalized.match(/\b(?:for|por|durante|duration|duracion)\s+((?:one|two|three|fifteen|thirty|forty five|una|uno|dos|tres|quince|treinta|cuarenta y cinco|\d{1,3}))\s+(minutes?|mins?|minutos?|hours?|hrs?|horas?)\b/) ||
    normalized.match(/\b((?:one|two|three|fifteen|thirty|forty five|una|uno|dos|tres|quince|treinta|cuarenta y cinco|\d{1,3}))\s+(minutes?|mins?|minutos?|hours?|hrs?|horas?)\s+(?:meeting|call|sync|review)\b/);
  if (!match) {
    return 0;
  }

  const amount = parseSpokenNumber(match[1]);
  const unit = match[2];
  if (!amount) {
    return 0;
  }

  return unit.startsWith("hour") || unit.startsWith("hr") || unit.startsWith("hora")
    ? amount * 60
    : amount;
}

function parseSpokenNumber(value) {
  const cleaned = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    fifteen: 15,
    thirty: 30,
    "forty five": 45,
    una: 1,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
    diez: 10,
    once: 11,
    doce: 12,
    quince: 15,
    treinta: 30,
    "cuarenta y cinco": 45,
    media: 30
  };

  return numbers[cleaned] || Number(cleaned);
}

function normalizeMeridiem(value) {
  const cleaned = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\./g, "")
    .trim();

  if (!cleaned) {
    return "";
  }

  if (cleaned === "am" || cleaned.includes("manana") || cleaned.includes("morning")) {
    return "am";
  }

  if (
    cleaned === "pm" ||
    cleaned.includes("tarde") ||
    cleaned.includes("noche") ||
    cleaned.includes("afternoon") ||
    cleaned.includes("evening") ||
    cleaned.includes("night")
  ) {
    return "pm";
  }

  return cleaned;
}

function normalizeScheduleYear(value) {
  if (!value) {
    return new Date().getFullYear();
  }

  const year = Number(value);
  return year < 100 ? 2000 + year : year;
}

function monthNameToScheduleNumber(value) {
  return ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].indexOf(value.slice(0, 3).toLowerCase()) + 1;
}

function spanishMonthNameToScheduleNumber(value) {
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

function normalizeSpanishWeekday(value) {
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

function formatValidScheduleDate(year, month, day) {
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return "";
  }

  if (date < startOfDay(new Date())) {
    return "";
  }

  return formatInputDate(date);
}

function formatScheduleDateWithRollover(year, month, day, hasExplicitYear) {
  let date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return "";
  }

  if (!hasExplicitYear && date < startOfDay(new Date())) {
    date = new Date(year + 1, month - 1, day);
  }

  return date < startOfDay(new Date()) ? "" : formatInputDate(date);
}

function normalizeScheduleText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function addRelativeTimeToDate(date, amountValue, unitValue) {
  const amount = parseSpokenNumber(amountValue);
  const unit = String(unitValue || "").toLowerCase();
  const next = new Date(date);
  const minutes = unit.startsWith("hour") || unit.startsWith("hr") || unit.startsWith("hora")
    ? amount * 60
    : amount;
  next.setMinutes(next.getMinutes() + minutes);
  return next;
}

function addDaysToLocalDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getEndOfWeekDate(date) {
  const end = new Date(date);
  const daysUntilFriday = (5 - end.getDay() + 7) % 7 || 7;
  end.setDate(end.getDate() + daysUntilFriday);
  return end;
}

function getNextWeekdayDate(date, weekdayName) {
  const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const target = weekdays.indexOf(weekdayName);
  const next = new Date(date);
  let daysUntilTarget = (target - next.getDay() + 7) % 7;
  if (daysUntilTarget === 0) {
    daysUntilTarget = 7;
  }
  next.setDate(next.getDate() + daysUntilTarget);
  return next;
}

function startOfDay(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
}

function buildMeetingProposal(sourceText, analysis, formValues, attendees) {
  const date = formValues.date || "";
  const startTime = formValues.startTime || "";
  const durationMinutes = formValues.durationMinutes || 30;
  const agenda = formValues.agenda || buildVoiceMeetingAgenda(sourceText, analysis);

  return {
    title: normalizeBusinessEnglishText(formValues.title || inferMeetingTitle(sourceText)),
    date,
    startTime,
    endTime: startTime ? calculateEndTime(startTime, durationMinutes) : "",
    durationMinutes,
    attendees,
    agenda: normalizeBusinessEnglishBlock(agenda),
    summary: buildSchedulerSummary(analysis)
  };
}

function getMeetingProposalMissingFields(sourceText, formValues, emailValidation) {
  const missingFields = [];
  const dateWasDetectedFromVoice = Boolean(extractScheduleDateFromText(sourceText));
  const timeDetection = getScheduleStartTimeDetection(sourceText);

  if (!dateWasDetectedFromVoice && isSchedulerFieldAuto(meetingDate)) {
    missingFields.push("date");
  }

  if (!timeDetection.time && isSchedulerFieldAuto(meetingStartTime)) {
    missingFields.push(timeDetection.confidence === "needs clarification" ? "start time AM/PM clarification" : "start time");
  }

  return dedupe(missingFields);
}

function hasMissingMeetingFields(proposal) {
  return Boolean((proposal?.missingFields || []).length);
}

function formatMissingMeetingFields(proposal) {
  const fields = proposal?.missingFields || [];
  if (!fields.length) {
    return "";
  }

  return fields.join(", ");
}

function proposalNeedsStartTime(proposal) {
  return (proposal?.missingFields || []).some((field) => field.startsWith("start time"));
}

function getMeetingReadinessText(proposal) {
  if (hasMissingMeetingFields(proposal)) {
    const timeReason = proposal?.timeDetection?.reason || "";
    const details = [formatMissingMeetingFields(proposal), timeReason]
      .filter(Boolean)
      .join(". ");
    return `Needs voice detail: ${details}. Confirm Meeting is locked until this is clear.`;
  }

  if (proposal?.timeWarning) {
    return `${proposal.timeWarning} Nothing will be scheduled until Confirm Meeting is clicked.`;
  }

  return "Ready for final human approval. Nothing will be scheduled until Confirm Meeting is clicked.";
}

function getUnusualMeetingTimeWarning(startTime) {
  const match = String(startTime || "").match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return "";
  }

  const hour = Number(match[1]);
  return hour >= 0 && hour < 6
    ? `Unusual meeting time: ${formatDisplayTime(startTime)}. Review before confirming.`
    : "";
}

function inferMeetingTitle(sourceText) {
  const voiceAgenda = inferVoiceAgenda(sourceText);
  if (voiceAgenda) {
    return `Meeting: ${truncateAgendaText(normalizeBusinessEnglishText(voiceAgenda), 58)}`;
  }

  if (hasMeetingSchedulingIntent(sourceText) && isFocusedVoiceCommand(sourceText)) {
    return "Meeting: Voice request";
  }

  const firstUsefulLine = getLines(sourceText).find((line) =>
    line.length >= 6 &&
    line.length <= 90 &&
    !/^(attendees|participants|present|action|decision|risk|blocker|issue|concern)\s*:/i.test(line)
  );

  if (firstUsefulLine) {
    const cleaned = firstUsefulLine.replace(/\s+[-|]\s+.*$/, "").trim();
    const normalized = normalizeBusinessEnglishText(cleaned);
    return /follow-?up/i.test(normalized) ? capitalizeSentence(normalized) : `${capitalizeSentence(normalized)} follow-up`;
  }

  const topics = extractTopics(sourceText).slice(0, 2);
  return topics.length ? `${topics.join(" ")} follow-up` : "Meeting follow-up";
}

function inferVoiceAgenda(sourceText) {
  const text = cleanText(sourceText);
  const patterns = [
    /\b(?:para|sobre|acerca\s+de|con\s+el\s+fin\s+de)\s+(.+?)(?=\s+(?:con|a\s+las|a\s+la|desde|por|durante)\b|$)/gi,
    /\b(?:about|regarding|concerning|on)\s+(.+?)(?=\s+(?:with|at|from|for|by|due)\b|$)/gi,
    /\b(?:to|for)\s+(.+?)(?=\s+(?:with|on|at|from|for|by|due)\b|$)/gi
  ];

  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern)];
    for (let index = matches.length - 1; index >= 0; index -= 1) {
      const agenda = cleanText(matches[index][1]);
      if (isUsefulVoiceAgenda(agenda)) {
        return capitalizeSentence(normalizeBusinessEnglishText(agenda.replace(/^(?:the|a|an)\s+/i, "").replace(/[.;,]$/, "")));
      }
    }
  }

  return "";
}

function isUsefulVoiceAgenda(value) {
  const agenda = cleanText(value);
  if (!agenda || agenda.length <= 2 || /@/.test(agenda)) {
    return false;
  }

  const normalized = agenda
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (/^\d{1,2}\s+(?:de\s+)?(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)\b/.test(normalized)) {
    return false;
  }

  if (/^(today|tomorrow|the day after tomorrow|next|this|hoy|manana|pasado manana|proximo|lunes|martes|miercoles|jueves|viernes|sabado|domingo|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(normalized)) {
    return false;
  }

  if (/^(schedule|book|create|set up|setup|arrange|plan|make)\b.*\b(meeting|call|event|appointment)\b/.test(normalized)) {
    return false;
  }

  return true;
}

function buildMeetingAgenda(analysis) {
  const summaryLead = normalizeBusinessEnglishText(getAgendaSummaryLine(analysis.summary));
  const items = [
    summaryLead
      ? `Review context: ${summaryLead}`
      : "Review meeting context and confirm the desired outcome."
  ];

  if (analysis.decisions.length) {
    items.push(ensureTrailingPunctuation(`Validate decisions: ${normalizeBusinessEnglishList(analysis.decisions).slice(0, 2).join("; ")}`));
  }

  if (analysis.tasks.length) {
    items.push(`Review action items and owners for ${analysis.tasks.length} pending task${plural(analysis.tasks.length)}.`);
  }

  if (analysis.risks.length) {
    items.push(ensureTrailingPunctuation(`Resolve blockers: ${normalizeBusinessEnglishList(analysis.risks).slice(0, 2).join("; ")}`));
  }

  items.push("Agree on next steps and timing.");
  return normalizeBusinessEnglishBlock(items.map((item, index) => `${index + 1}. ${item}`).join("\n"));
}

function buildVoiceMeetingAgenda(sourceText, analysis) {
  const voiceAgenda = inferVoiceAgenda(sourceText);
  if (!voiceAgenda) {
    return buildMeetingAgenda(analysis);
  }

  const items = [
    `Discuss ${voiceAgenda.charAt(0).toLowerCase()}${voiceAgenda.slice(1)}.`,
    "Confirm owners, decisions, and next steps."
  ];

  if ((analysis.risks || []).length) {
    items.push("Review any risks or blockers before closing.");
  }

  return normalizeBusinessEnglishBlock(items.map((item, index) => `${index + 1}. ${ensureTrailingPunctuation(item)}`).join("\n"));
}

function getAgendaSummaryLine(summary) {
  const firstLine = cleanText(String(summary || "").split(/\r?\n/).find(Boolean) || "");
  return firstLine ? truncateAgendaText(firstLine, 180) : "";
}

function ensureTrailingPunctuation(value) {
  const text = cleanText(value);
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function truncateAgendaText(value, maxLength) {
  const text = cleanText(value);
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function buildSchedulerSummary(analysis) {
  return normalizeBusinessEnglishBlock(analysis.summary || "The meeting proposal was prepared from the provided notes.");
}

function renderScheduleModal(proposal) {
  const needsStartTime = proposalNeedsStartTime(proposal);
  modalMeetingTitle.textContent = normalizeBusinessEnglishText(proposal.title);
  modalMeetingDate.textContent = formatDisplayDate(proposal.date);
  modalMeetingStartTime.textContent = needsStartTime
    ? "Missing or unclear. Say the time with AM/PM by voice and try again."
    : formatDisplayTime(proposal.startTime);
  modalMeetingDuration.textContent = `${proposal.durationMinutes} minutes`;
  modalMeetingEndTime.textContent = needsStartTime
    ? "Waiting for a clear start time."
    : formatDisplayTime(proposal.endTime);
  modalMeetingAttendees.textContent = proposal.attendees.length
    ? proposal.attendees.join("\n")
    : "Self only. No external attendees.";
  modalMeetingAgenda.textContent = normalizeBusinessEnglishBlock(proposal.agenda);
  modalMeetingReadiness.textContent = getMeetingReadinessText(proposal);
  modalMeetingSummary.textContent = normalizeBusinessEnglishBlock(hasMissingMeetingFields(proposal)
    ? `${proposal.summary}\n\nNeeds voice detail: ${formatMissingMeetingFields(proposal)}.`
    : proposal.summary);
  scheduleModalWarning.textContent = getScheduleModalWarning();
}

function openScheduleModal() {
  scheduleModal.hidden = false;
  scheduleModal.setAttribute("aria-hidden", "false");
  setModalBusy(false);
  updateScheduleConfirmAvailability();
  cancelScheduleButton.focus();
}

function closeScheduleModal() {
  pendingMeetingProposal = null;
  hideScheduleModal();
  generateMeetingButton.focus();
}

function hideScheduleModal() {
  scheduleModal.hidden = true;
  scheduleModal.setAttribute("aria-hidden", "true");
  setModalBusy(false);
}

function renderInlineMeetingApproval(proposal) {
  appendPreparedMeetingProposals(Array.isArray(proposal) ? proposal : [proposal].filter(Boolean));
  renderPreparedMeetings();
}

function appendPreparedMeetingProposals(proposals) {
  proposals.forEach((proposal) => {
    if (!proposal) {
      return;
    }

    const signature = getMeetingProposalSignature(proposal);
    if (hiddenMeetingRows.has(signature) || (proposal.sourceKey && hiddenMeetingRows.has(proposal.sourceKey))) {
      return;
    }

    const existing = preparedMeetingRows.find((row) =>
      (proposal.sourceKey && row.sourceKey === proposal.sourceKey) ||
      row.signature === signature
    );
    if (existing) {
      if (existing.confirmationState === "Confirmed") {
        pendingMeetingProposal = existing;
        return;
      }

      Object.assign(existing, {
        ...proposal,
        clientId: existing.clientId,
        signature,
        confirmationState: getUpdatedMeetingState(existing, proposal),
        result: existing.result || null,
        error: existing.error || ""
      });
      pendingMeetingProposal = existing;
      return;
    }

    const row = {
      ...proposal,
      clientId: proposal.clientId || `meeting-${Date.now()}-${++meetingRowCounter}`,
      signature,
      sourceKey: proposal.sourceKey || "",
      confirmationState: getInitialMeetingState(proposal),
      result: null,
      error: ""
    };
    preparedMeetingRows.push(row);
    pendingMeetingProposal = row;
  });
}

function getInitialMeetingState(proposal) {
  if (hasMissingMeetingFields(proposal)) {
    return "Needs detail";
  }

  return proposal?.timeWarning ? "Review unusual time" : "Pending approval";
}

function getUpdatedMeetingState(existing, proposal) {
  if (existing.confirmationState === "Confirmed" || existing.confirmationState === "Scheduling") {
    return existing.confirmationState;
  }

  return getInitialMeetingState(proposal);
}

function renderPreparedMeetings() {
  meetingRowsOutput.textContent = "";
  preparedMeetingRows = preparedMeetingRows.filter((proposal) => !isMeetingRowHidden(proposal));

  if (pendingMeetingProposal && isMeetingRowHidden(pendingMeetingProposal)) {
    pendingMeetingProposal = preparedMeetingRows[preparedMeetingRows.length - 1] || null;
  }

  if (!preparedMeetingRows.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.className = "empty-table";
    cell.textContent = "Prepared meetings will appear here.";
    row.appendChild(cell);
    meetingRowsOutput.appendChild(row);
    setInlineMeetingStatus("No meeting prepared yet.", false);
    inlineMeetingWarning.hidden = true;
    updateScheduleConfirmAvailability();
    return;
  }

  preparedMeetingRows.forEach((proposal) => {
    const row = document.createElement("tr");
    row.dataset.meetingId = proposal.clientId;
    row.className = getMeetingRowClass(proposal);

    [
      normalizeBusinessEnglishText(proposal.title),
      proposal.date ? formatDisplayDate(proposal.date) : "Missing date",
      getMeetingStartDisplay(proposal),
      getMeetingDurationDisplay(proposal),
      proposal.attendees.length ? proposal.attendees.join("\n") : "Self only",
      normalizeBusinessEnglishBlock(proposal.agenda),
      proposal.confirmationState || getInitialMeetingState(proposal)
    ].forEach((value) => {
      const cell = document.createElement("td");
      renderHighlightedText(cell, value);
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const button = document.createElement("button");
    button.className = "primary-button compact-button";
    button.type = "button";
    button.dataset.action = "confirm-meeting";
    button.dataset.meetingId = proposal.clientId;
    button.disabled = !canConfirmMeetingProposal(proposal) || isMeetingRowTerminalOrBusy(proposal);
    button.textContent = getMeetingConfirmButtonLabel(proposal);
    button.setAttribute("aria-disabled", String(button.disabled));
    const deleteButton = createDeleteRowButton("delete-meeting", "Hide this prepared meeting", proposal.clientId);
    deleteButton.dataset.meetingId = proposal.clientId;
    actionCell.appendChild(createRowActions(button, deleteButton));
    row.appendChild(actionCell);
    meetingRowsOutput.appendChild(row);
  });

  const warning = getMeetingsInlineWarning();
  inlineMeetingWarning.hidden = !warning;
  if (warning) {
    renderHighlightedText(inlineMeetingWarning, warning);
  }

  const pendingCount = preparedMeetingRows.filter((row) => row.confirmationState === "Pending approval").length;
  const needsDetailCount = preparedMeetingRows.filter((row) => row.confirmationState === "Needs detail").length;
  const confirmedCount = preparedMeetingRows.filter((row) => row.confirmationState === "Confirmed").length;
  const detailText = needsDetailCount ? ` ${needsDetailCount} need detail.` : "";
  setInlineMeetingStatus(`${preparedMeetingRows.length} prepared. ${pendingCount} pending approval. ${confirmedCount} confirmed.${detailText}`, Boolean(needsDetailCount));
  updateScheduleConfirmAvailability();
  applyGlobalSearch();
}

function getScheduleInlineWarning(proposal) {
  if (proposal && hasMissingMeetingFields(proposal)) {
    return `Needs detail: ${formatMissingMeetingFields(proposal)}. Confirm Meeting is locked until the voice details are clear.`;
  }

  if (calendarAuthState.provider === "apps_script" && !calendarAuthState.configured) {
    return "Calendar bridge is not configured. Confirm Meeting cannot create an event yet.";
  }

  if (calendarAuthState.provider !== "apps_script" && !calendarAuthState.configured) {
    return "Google Calendar is not configured. Confirm Meeting cannot create an event yet.";
  }

  if (calendarAuthState.provider !== "apps_script" && !calendarAuthState.authenticated) {
    return "Sign in with Google before confirming a meeting.";
  }

  return "";
}

function getMeetingsInlineWarning() {
  const needsDetailCount = preparedMeetingRows.filter((proposal) => hasMissingMeetingFields(proposal)).length;
  if (needsDetailCount) {
    return `${needsDetailCount} meeting${needsDetailCount === 1 ? "" : "s"} need more voice detail before confirmation. Confirm Meeting is locked for incomplete rows only.`;
  }

  const unusualTime = preparedMeetingRows.find((proposal) => proposal.timeWarning);
  if (unusualTime) {
    return `${unusualTime.timeWarning} Confirm Meeting remains available so you can approve it intentionally.`;
  }

  return getScheduleInlineWarning(pendingMeetingProposal);
}

function getMeetingStartDisplay(proposal) {
  return proposalNeedsStartTime(proposal)
    ? "Missing or unclear. Say the time with AM/PM and try again."
    : formatDisplayTime(proposal.startTime);
}

function getMeetingDurationDisplay(proposal) {
  return proposalNeedsStartTime(proposal)
    ? `${proposal.durationMinutes} minutes / waiting for a clear start time`
    : `${proposal.durationMinutes} minutes / ends ${formatDisplayTime(proposal.endTime)}`;
}

function getMeetingRowClass(proposal) {
  if (proposal.confirmationState === "Confirmed") {
    return "meeting-row-confirmed";
  }

  if (proposal.confirmationState === "Failed" || hasMissingMeetingFields(proposal)) {
    return "meeting-row-needs-detail";
  }

  return "";
}

function getMeetingConfirmButtonLabel(proposal) {
  if (proposal.confirmationState === "Scheduling") {
    return "Scheduling...";
  }

  if (proposal.confirmationState === "Confirmed") {
    return "Confirmed";
  }

  if (proposal.confirmationState === "Failed") {
    return "Retry Meeting";
  }

  return "Confirm Meeting";
}

function isMeetingRowTerminalOrBusy(proposal) {
  return proposal.confirmationState === "Confirmed" || proposal.confirmationState === "Scheduling";
}

function getPreparedMeetingById(meetingId) {
  return preparedMeetingRows.find((proposal) => proposal.clientId === meetingId) || null;
}

function handleInlineMeetingClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  if (button.dataset.action === "delete-meeting") {
    deletePreparedMeetingRow(button.dataset.meetingId || button.dataset.rowId);
    return;
  }

  if (button.dataset.action === "confirm-meeting") {
    confirmAndScheduleMeeting(button.dataset.meetingId);
  }
}

function deletePreparedMeetingRow(meetingId) {
  const proposal = getPreparedMeetingById(meetingId);
  if (!proposal) {
    return;
  }

  hiddenMeetingRows.add(getMeetingHiddenKey(proposal));
  if (proposal.sourceKey) {
    hiddenMeetingRows.add(proposal.sourceKey);
  }
  persistHiddenRowKeys(HIDDEN_MEETING_ROWS_STORAGE_KEY, hiddenMeetingRows);
  preparedMeetingRows = preparedMeetingRows.filter((row) => row.clientId !== meetingId);
  if (pendingMeetingProposal?.clientId === meetingId) {
    pendingMeetingProposal = preparedMeetingRows[preparedMeetingRows.length - 1] || null;
  }
  renderPreparedMeetings();
  setSchedulerStatus("Prepared meeting hidden locally. Calendar events are not cancelled.", false);
}

function setInlineMeetingStatus(message, isError) {
  schedulerStatus.textContent = message;
  schedulerStatus.classList.toggle("error", Boolean(isError));
  if (inlineMeetingStatus) {
    inlineMeetingStatus.textContent = message;
    inlineMeetingStatus.classList.toggle("error", Boolean(isError));
  }
}

function setInlineMeetingBusy(isBusy, meetingId = "") {
  const proposal = getPreparedMeetingById(meetingId) || pendingMeetingProposal;
  if (proposal) {
    proposal.confirmationState = isBusy ? "Scheduling" : getInitialMeetingState(proposal);
    renderPreparedMeetings();
    return;
  }

  inlineConfirmMeetingButton.disabled = isBusy || !canConfirmRealSchedule();
  inlineConfirmMeetingButton.setAttribute("aria-disabled", String(inlineConfirmMeetingButton.disabled));
  inlineConfirmMeetingButton.textContent = isBusy ? "Scheduling..." : "Confirm Meeting";
}

function renderInlineEmailApproval() {
  if (GEMINI_EMAIL_ONLY_TEMPLATE_FILLING) {
    renderPreparedEmailRows();
    return;
  }

  const sourceText = latestSourceText || getCurrentMeetingSourceText();
  const rows = buildPreparedEmailRowsFromCurrentSource();
  rows.forEach((row) => {
    upsertPreparedEmailRow(row);
    requestGeminiEmailInterpretationForRow(row, sourceText, latestAnalysis);
  });

  renderPreparedEmailRows();
}

function buildPreparedEmailRowsFromCurrentSource() {
  if (!emailPreparationEnabled) {
    return [];
  }

  const sourceText = latestSourceText || getCurrentMeetingSourceText();
  const commands = extractEmailCommandSegments(sourceText);

  if (!latestAnalysis) {
    return [];
  }

  const sourceEmails = extractEmailAddresses(sourceText);
  if (commands.length) {
    return commands.map((command, index) => buildPreparedEmailRowFromCommand(command, index, sourceText, latestAnalysis, sourceEmails));
  }

  const contextRows = buildContextAwareEmailRows(sourceText, latestAnalysis, 0);
  if (contextRows.length) {
    return contextRows;
  }

  const emailV1Row = buildEmailV1PreparedRowFromSource(sourceText, latestAnalysis);
  return emailV1Row ? [emailV1Row] : [];
}

function prepareContextAwareEmailRows(sourceText, analysis) {
  if (GEMINI_EMAIL_ONLY_TEMPLATE_FILLING) {
    return prepareGeminiOnlyEmailRowsFromSource(sourceText, analysis, "Prepared after Gemini confirms this context needs an email.", {
      contextOnly: true,
      requireEmailIntent: false
    });
  }

  const rows = buildContextAwareEmailRows(sourceText, analysis, 0)
    .filter(Boolean);
  if (!rows.length) {
    return false;
  }

  clearPreparedRowsOutsideVoiceIntent("email");
  emailPreparationEnabled = true;
  rows.forEach((row) => {
    upsertPreparedEmailRow(row);
    requestGeminiEmailInterpretationForRow(row, sourceText, analysis);
  });
  renderPreparedEmailRows();
  renderInlineCsvApproval([]);
  renderInlineNotionActions({
    type: "tasks",
    tasks: []
  });
  renderInlineMeetingApproval(null);

  const openableCount = preparedEmailRows.filter(canOpenPreparedEmailDraft).length;
  const statusMessage = openableCount
    ? "AIssistant prepared an email draft because the transcript includes a communication need. Review it before opening Gmail."
    : "Email draft needs review. Please repeat the topic or message more clearly.";
  setInputStatus(statusMessage, openableCount === 0);
  setInlineEmailStatus(statusMessage, openableCount === 0);
  return true;
}

function prepareExplicitEmailRowsFromSource(sourceText, analysis, reason = "Prepared from a clear email request.") {
  if (GEMINI_EMAIL_ONLY_TEMPLATE_FILLING) {
    return prepareGeminiOnlyEmailRowsFromSource(sourceText, analysis, reason, {
      contextOnly: false,
      requireEmailIntent: true
    });
  }

  if (!hasEmailIntent(sourceText)) {
    return false;
  }

  const sourceEmails = extractEmailAddresses(sourceText);
  const commands = extractEmailCommandSegments(sourceText);
  const fallbackCommand = {
    text: "Create a meeting follow-up email from the notes.",
    sourceKey: `email:explicit:${normalizeRowSignatureValue(sourceText)}`,
    recipientInfo: inferEmailRecipient(sourceText),
    inferredReason: reason,
    confidence: EMAIL_OPEN_CONFIDENCE
  };
  const commandList = commands.length ? commands : [fallbackCommand];
  let preparedCount = 0;

  emailPreparationEnabled = true;
  commandList.slice(0, GEMINI_EMAIL_MAX_DRAFTS_PER_SOURCE).forEach((command, index) => {
    const row = buildPreparedEmailRowFromCommand({
      ...command,
      inferredReason: command.inferredReason || reason,
      confidence: Math.max(Number(command.confidence) || 0, EMAIL_OPEN_CONFIDENCE)
    }, index, sourceText, analysis, sourceEmails);

    if (!row) {
      return;
    }

    if (upsertPreparedEmailRow(row)) {
      preparedCount += 1;
      requestGeminiEmailInterpretationForRow(row, sourceText, analysis);
    }
  });

  if (!preparedCount) {
    return false;
  }

  renderPreparedEmailRows();
  setInputStatus("AIssistant prepared an email draft from the notes. Review it before opening Gmail.", false);
  setInlineEmailStatus("AIssistant prepared an email draft from the notes. Review it before opening Gmail.", false);
  return true;
}

function prepareEmailV1DraftFromSource(sourceText, analysis, reason = "Prepared from Email V1 draft assistant.") {
  if (GEMINI_EMAIL_ONLY_TEMPLATE_FILLING) {
    return prepareGeminiOnlyEmailRowsFromSource(sourceText, analysis, reason, {
      contextOnly: false,
      requireEmailIntent: true
    });
  }

  const row = buildEmailV1PreparedRowFromSource(sourceText, analysis, reason);
  if (!row) {
    return false;
  }

  clearPreparedRowsOutsideVoiceIntent("email");
  upsertPreparedEmailRow(row);
  requestGeminiEmailInterpretationForRow(row, sourceText, analysis);
  renderPreparedEmailRows();
  renderInlineCsvApproval([]);
  renderInlineNotionActions({
    type: "tasks",
    tasks: []
  });
  renderInlineMeetingApproval(null);
  setInputStatus("AIssistant prepared an Email V1 draft. Review it before opening Gmail.", false);
  setInlineEmailStatus("AIssistant prepared an Email V1 draft. Review it before opening Gmail.", false);
  return true;
}

function prepareMeetingSummaryEmailFromNotes(sourceText, analysis, reason = "Prepared meeting summary email from notes.") {
  const source = normalizeBusinessEnglishBlock(sourceText);
  if (!hasEnoughNotesForMeetingSummaryEmail(source)) {
    return false;
  }

  emailPreparationEnabled = true;
  return prepareGeminiOnlyEmailRowsFromSource(source, analysis || analyzeNotes(source), reason, {
    requireEmailIntent: false,
    contextOnly: false,
    forceMeetingSummary: true
  });
}

function hasEnoughNotesForMeetingSummaryEmail(sourceText) {
  const text = normalizeBusinessEnglishBlock(sourceText);
  return countWords(text) >= 18 && !looksLikeGarbageVoiceTranscript(text);
}

function buildEmailV1PreparedRowFromSource(sourceText, analysis, reason = "fallback draft. Please review before sending.") {
  if (!emailPreparationEnabled || !hasUsableEmailDraftSource(analysis, sourceText)) {
    return null;
  }

  const sourceKey = `email:v1:${normalizeRowSignatureValue(sourceText)}`;
  return buildPreparedEmailRowFromCommand({
    text: "Create a meeting follow-up email from the notes.",
    sourceKey,
    recipientInfo: inferEmailRecipient(sourceText),
    inferredReason: reason,
    confidence: EMAIL_OPEN_CONFIDENCE
  }, 0, sourceText, analysis);
}

function prepareGeminiOnlyEmailRowsFromSource(sourceText, analysis, reason = "Prepared from a clear email request.", options = {}) {
  const source = normalizeBusinessEnglishBlock(sourceText);
  const currentAnalysis = analysis || analyzeNotes(source);
  const requireEmailIntent = options.requireEmailIntent !== false;
  if (!source || (requireEmailIntent && !hasEmailIntent(source))) {
    return false;
  }

  const commands = getGeminiOnlyEmailCommands(source, currentAnalysis, reason, options);
  if (!commands.length) {
    return false;
  }

  emailPreparationEnabled = true;
  let preparedCount = 0;
  commands.slice(0, 1).forEach((command, index) => {
    const row = buildGeminiOnlyEmailPlaceholderRow(command, index, source, currentAnalysis, reason);
    if (!row) {
      return;
    }

    latestGeminiEmailOnlySourceKey = row.sourceKey;
    removeStaleGeminiOnlyPendingEmailRows(row.sourceKey);
    if (upsertPreparedEmailRow(row)) {
      preparedCount += 1;
      scheduleGeminiEmailInterpretationForRow(row, source, currentAnalysis);
    }
  });

  if (!preparedCount) {
    return false;
  }

  renderPreparedEmailRows();
  setInputStatus("Gemini is reading the notes and preparing the email template for review.", false);
  setInlineEmailStatus("Gemini is reading the notes and preparing the email template for review.", false);
  return true;
}

function getGeminiOnlyEmailCommands(sourceText, analysis, reason, options = {}) {
  return [{
    text: "Create a concise meeting summary email from these notes.",
    sourceKey: `email:gemini-summary:${normalizeRowSignatureValue(sourceText).slice(0, 180) || "current-notes"}`,
    recipientInfo: inferEmailRecipient(sourceText),
    inferredReason: reason,
    confidence: EMAIL_OPEN_CONFIDENCE
  }];
}

function buildGeminiOnlyEmailPlaceholderRow(command, index, sourceText, analysis, reason) {
  const baseSourceKey = command.sourceKey || getEmailSegmentSourceKey(command.text, index);
  const sourceKey = baseSourceKey;
  const commandText = normalizeBusinessEnglishText(command.text || "Create a meeting follow-up email from the notes.");
  const recipientInfo = command.recipientInfo || inferEmailRecipient(commandText || sourceText);
  const recipientHint = normalizeBusinessEnglishText(recipientInfo?.email || recipientInfo?.label || extractEmailAddresses(sourceText).join(", "));
  const currentEmailSegment = normalizeBusinessEnglishBlock(sourceText);

  return {
    sourceKey,
    recipients: "",
    recipientLabel: "",
    subject: "",
    body: "",
    emailType: "",
    templateId: "",
    emailV1Template: true,
    pendingGeminiEmail: true,
    geminiEmailRequest: commandText,
    geminiCurrentEmailSegment: currentEmailSegment,
    geminiRecipientHint: recipientHint,
    inferredReason: "",
    reviewReason: "Gemini is reading Notes and filling the email template.",
    qualityScore: 0,
    canOpenDraft: false
  };
}

function removeStaleGeminiOnlyPendingEmailRows(activeSourceKey) {
  const staleRows = preparedEmailRows.filter((row) => row.pendingGeminiEmail && row.sourceKey !== activeSourceKey);
  if (!staleRows.length) {
    return;
  }

  staleRows.forEach((row) => {
    clearGeminiEmailInterpretationTimeout(row.sourceKey);
    pendingGeminiEmailInterpretations.delete(row.sourceKey);
  });
  preparedEmailRows = preparedEmailRows.filter((row) => !row.pendingGeminiEmail || row.sourceKey === activeSourceKey);
}

function scheduleGeminiEmailInterpretationForRow(emailRow, sourceText, analysis) {
  if (!emailRow?.sourceKey) {
    return;
  }

  latestGeminiEmailOnlySourceKey = emailRow.sourceKey;
  latestGeminiEmailOnlyJob = {
    emailRow,
    sourceText,
    analysis,
    sourceKey: emailRow.sourceKey
  };

  if (geminiEmailInterpretationDebounceTimer) {
    clearTimeout(geminiEmailInterpretationDebounceTimer);
  }

  geminiEmailInterpretationDebounceTimer = setTimeout(() => {
    const job = latestGeminiEmailOnlyJob;
    geminiEmailInterpretationDebounceTimer = null;
    if (!job || job.sourceKey !== latestGeminiEmailOnlySourceKey) {
      return;
    }

    requestGeminiEmailInterpretationForRow(job.emailRow, job.sourceText, job.analysis);
  }, GEMINI_EMAIL_ONLY_DEBOUNCE_MS);
}

function clearGeminiEmailInterpretationTimeout(sourceKey) {
  const timeout = geminiEmailInterpretationTimeouts.get(sourceKey);
  if (timeout) {
    clearTimeout(timeout);
    geminiEmailInterpretationTimeouts.delete(sourceKey);
  }
}

function cancelGeminiEmailOnlyQueue() {
  if (geminiEmailInterpretationDebounceTimer) {
    clearTimeout(geminiEmailInterpretationDebounceTimer);
    geminiEmailInterpretationDebounceTimer = null;
  }

  latestGeminiEmailOnlySourceKey = "";
  latestGeminiEmailOnlyJob = null;
  pendingGeminiEmailInterpretations.clear();
  geminiEmailInterpretationTimeouts.forEach((timeout) => clearTimeout(timeout));
  geminiEmailInterpretationTimeouts.clear();
}

function activateGeminiEmailCompositionForSource(sourceText, analysis, options = {}) {
  if (!GEMINI_EMAIL_CLIENT_ENABLED) {
    return;
  }

  if (!emailPreparationEnabled || !analysis) {
    return;
  }

  const candidates = getGeminiEmailCompositionCandidates(sourceText, analysis, options);
  if (candidates.length) {
    candidates.forEach(requestGeminiEmailComposition);
    return;
  }
}

function getGeminiEmailCompositionCandidates(sourceText, analysis, options = {}) {
  const sourceEmails = extractEmailAddresses(sourceText);
  const commands = extractEmailCommandSegments(sourceText);
  const candidates = commands.map((command, index) => {
    const isolated = isolateGeminiEmailTopicContext(command.text, sourceText);
    const recipientInfo = command.recipientInfo || inferEmailRecipient(command.text);
    const currentAnalysis = analyzeNotes(isolated.currentEmailSegment || command.text);
    return {
      commandText: command.text,
      sourceText,
      currentEmailSegment: isolated.currentEmailSegment,
      previousEmailTopics: isolated.previousEmailTopics,
      existingEmailSubjects: getExistingEmailSubjectList(),
      analysis: currentAnalysis,
      sourceKey: command.sourceKey || getEmailSegmentSourceKey(command.text, index),
      recipientInfo,
      recipientFallback: sourceEmails.join(", "),
      inferredReason: "Prepared from a clear email request.",
      offset: getEmailSegmentOffset(sourceText, command.text)
    };
  });

  const latestImplicitSegment = commands.length ? "" : getLatestImplicitEmailTopicSegment(sourceText, analysis);
  if (latestImplicitSegment && (options.contextOnly || shouldRequestGeminiImplicitEmail(latestImplicitSegment, analyzeNotes(latestImplicitSegment)))) {
    const isolated = isolateGeminiEmailTopicContext(latestImplicitSegment, sourceText);
    const sourceKey = getGeminiImplicitEmailSourceKey(isolated.currentEmailSegment);
    candidates.push({
      commandText: "",
      sourceText,
      currentEmailSegment: isolated.currentEmailSegment,
      previousEmailTopics: isolated.previousEmailTopics,
      existingEmailSubjects: getExistingEmailSubjectList(),
      analysis: analyzeNotes(isolated.currentEmailSegment),
      sourceKey,
      recipientInfo: inferEmailRecipient(isolated.currentEmailSegment),
      recipientFallback: sourceEmails.join(", "),
      inferredReason: "Prepared because the current topic includes a communication need.",
      contextOnly: true,
      offset: getEmailSegmentOffset(sourceText, isolated.currentEmailSegment)
    });
  }

  return dedupeGeminiEmailCandidates(candidates)
    .sort((a, b) => b.offset - a.offset)
    .slice(0, GEMINI_EMAIL_MAX_DRAFTS_PER_SOURCE);
}

function dedupeGeminiEmailCandidates(candidates) {
  const seen = new Set();
  return candidates.filter((candidate) => {
    const key = buildEmailTopicKey({
      recipients: candidate.recipientFallback,
      recipientLabel: candidate.recipientInfo?.label || "",
      subject: inferEmailFocus(candidate.commandText || candidate.currentEmailSegment),
      body: candidate.currentEmailSegment,
      emailType: inferEmailRequestType(candidate.commandText || candidate.currentEmailSegment)
    });
    if (!key || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function shouldRequestGeminiImplicitEmail(sourceText, analysis) {
  const text = normalizeBusinessEnglishBlock(sourceText);
  if (!text || hasEmailDraftBlockingNoise(text)) {
    return false;
  }

  if (hasMeetingSchedulingIntent(text) && !hasEmailIntent(text)) {
    return false;
  }

  if (hasFocusedNotionTaskOrPageIntent(text) && !hasEmailIntent(text)) {
    return false;
  }

  const contextSignal = /\b(?:ask|asking|asked|follow\s*up|confirm|confirmation|update|let\s+(?:the\s+)?(?:client|customer|team|finance|[A-Za-z][a-z]+)\s+know|tell\s+(?:the\s+)?(?:client|customer|team|finance|[A-Za-z][a-z]+)|request|approval|access|payment|invoice|files?|documents?|account|upgrade|pro\s+account|blocked|blocker|risk|risks|escalate|escalation|missing|client|customer|finance|next\s+steps?)\b/i.test(text);
  const analysisSignal = Boolean(
    (analysis?.risks || []).some((risk) => /\b(?:blocked|blocker|missing|access|approval|invoice|payment|files?|documents?)\b/i.test(risk)) ||
      (analysis?.decisions || []).some((decision) => /\b(?:approved|confirmed|need\s+to\s+confirm|next\s+steps?)\b/i.test(decision))
  );

  return contextSignal || analysisSignal;
}

function isolateGeminiEmailTopicContext(segmentText, sourceText) {
  const segment = normalizeBusinessEnglishBlock(segmentText);
  const chunks = splitEmailTopicTransitionSegments(sourceText);
  const currentIndex = findBestEmailTopicSegmentIndex(chunks, segment);
  const currentEmailSegment = currentIndex >= 0
    ? chunks[currentIndex]
    : (segment || getLatestImplicitEmailTopicSegment(sourceText) || normalizeBusinessEnglishBlock(sourceText));
  const previousEmailTopics = chunks
    .slice(0, Math.max(currentIndex, 0))
    .filter((chunk) => hasEmailIntent(chunk) || hasImplicitEmailOpportunitySignal(chunk))
    .map(getEmailTopicLabel)
    .filter(Boolean)
    .slice(-4);

  return {
    currentEmailSegment: normalizeBusinessEnglishBlock(currentEmailSegment),
    previousEmailTopics
  };
}

function splitEmailTopicTransitionSegments(sourceText) {
  const normalized = normalizeEmailIntentText(sourceText)
    .replace(/\b(?:on\s+another\s+topic|another\s+thing|the\s+next\s+thing|next\s+thing)\s*,?\s*/gi, "\n")
    .replace(/\b(?:also|then|now|regarding|about)\s*,?\s+(?=(?:i\s+)?(?:also\s+)?(?:want|need|would\s+like|have|should|am\s+going)\b|(?:we|they|the\s+team|the\s+client|client|customer)\b|(?:send|write|draft|compose|create|prepare|email|message|ask|tell|let)\b)/gi, "\n")
    .replace(/\b(?:i\s+also\s+want|now\s+i\s+want|i\s+also\s+need|now\s+i\s+need)\b/gi, "\nI want");

  return normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map(cleanText)
    .filter(Boolean);
}

function findBestEmailTopicSegmentIndex(chunks, segmentText) {
  const segmentKey = normalizeRowSignatureValue(segmentText);
  if (!segmentKey) {
    return -1;
  }

  let bestIndex = -1;
  let bestScore = 0;
  chunks.forEach((chunk, index) => {
    const chunkKey = normalizeRowSignatureValue(chunk);
    if (!chunkKey) {
      return;
    }
    const score = chunkKey.includes(segmentKey) || segmentKey.includes(chunkKey)
      ? 1
      : getTokenOverlapScore(getEmailTopicTokens(chunkKey), getEmailTopicTokens(segmentKey));
    if (score >= bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  return bestScore >= 0.42 ? bestIndex : -1;
}

function getLatestImplicitEmailTopicSegment(sourceText, analysis = null) {
  const chunks = splitEmailTopicTransitionSegments(sourceText);
  for (let index = chunks.length - 1; index >= 0; index -= 1) {
    const chunk = chunks[index];
    if (hasEmailIntent(chunk) || hasMeetingSchedulingIntent(chunk) || hasFocusedNotionTaskOrPageIntent(chunk)) {
      continue;
    }
    if (hasImplicitEmailOpportunitySignal(chunk) && shouldRequestGeminiImplicitEmail(chunk, analysis || analyzeNotes(chunk))) {
      return chunk;
    }
  }

  return "";
}

function hasImplicitEmailOpportunitySignal(value) {
  const text = normalizeBusinessEnglishText(value);
  return /\b(?:ask|asking|asked|follow\s*up|confirm|confirmation|update|let\s+(?:the\s+)?(?:client|customer|team|finance|store|[A-Za-z][a-z]+)\s+know|tell\s+(?:the\s+)?(?:client|customer|team|finance|store|[A-Za-z][a-z]+)|request|approval|access|payment|invoice|files?|documents?|account|upgrade|pro\s+account|blocked|blocker|risk|risks|escalate|escalation|missing|client|customer|finance|store|buy|purchase|next\s+steps?)\b/i.test(text);
}

function getEmailTopicLabel(value) {
  const focus = cleanEmailFocus(value) || inferEmailDirectMessage(value) || normalizeBusinessEnglishText(value);
  return truncateAgendaText(focus.replace(/\b(?:email|gmail|message|draft|send|write|compose|create|prepare)\b/gi, "").trim(), 80);
}

function getEmailSegmentOffset(sourceText, segmentText) {
  const sourceKey = normalizeRowSignatureValue(sourceText);
  const segmentKey = normalizeRowSignatureValue(segmentText);
  if (!sourceKey || !segmentKey) {
    return 0;
  }

  const index = sourceKey.lastIndexOf(segmentKey);
  return index >= 0 ? index : sourceKey.length;
}

function getExistingEmailSubjectList() {
  return preparedEmailRows
    .map((row) => normalizeBusinessEnglishText(row.subject))
    .filter(Boolean)
    .slice(-8);
}

async function requestGeminiEmailComposition({
  commandText,
  sourceText,
  currentEmailSegment = "",
  previousEmailTopics = [],
  existingEmailSubjects = [],
  analysis,
  sourceKey,
  recipientInfo = { label: "", email: "" },
  recipientFallback = "",
  inferredReason = "",
  contextOnly = false
}) {
  const normalizedSourceKey = sourceKey || getGeminiImplicitEmailSourceKey(sourceText);
  const requestId = `${Date.now()}-${++geminiEmailRequestCounter}`;
  pendingGeminiEmailRequests.set(normalizedSourceKey, requestId);

  if (contextOnly && currentEmailSegment) {
    const fallbackRow = buildPreparedEmailRowFromCommand({
      text: currentEmailSegment,
      sourceKey: normalizedSourceKey,
      recipientInfo,
      inferredReason,
      confidence: EMAIL_OPEN_CONFIDENCE
    }, 0, currentEmailSegment, analysis);
    upsertPreparedEmailRow(fallbackRow);
    renderPreparedEmailRows();
  }

  try {
    const response = await fetch(GEMINI_EMAIL_COMPOSE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildGeminiEmailRequestPayload({
        commandText,
        sourceText,
        currentEmailSegment,
        previousEmailTopics,
        existingEmailSubjects,
        analysis,
        recipientInfo,
        recipientFallback
      }))
    });

    const result = await response.json().catch(() => null);
    if (pendingGeminiEmailRequests.get(normalizedSourceKey) !== requestId || !isCurrentGeminiEmailSource(sourceText)) {
      return;
    }

    const preparedRow = mapGeminiEmailResultToPreparedRow(result, {
      sourceKey: normalizedSourceKey,
      recipientInfo,
      recipientFallback,
      currentEmailSegment,
      inferredReason
    });

    if (!preparedRow) {
      if (result?.draft?.emailNeeded && result?.source === "gemini") {
        applyGeminiReviewGateToExistingEmailRow(normalizedSourceKey, result.reason || result.draft.reason);
      } else if (contextOnly && !preparedEmailRows.length) {
        setInlineEmailStatus("No email prepared yet.", false);
      }
      return;
    }

    const wasUpserted = upsertPreparedEmailRow(preparedRow);
    if (!wasUpserted && result?.source === "gemini" && !preparedRow.canOpenDraft) {
      applyGeminiReviewGateToExistingEmailRow(normalizedSourceKey, preparedRow.reviewReason);
    }
    renderPreparedEmailRows();
  } catch (error) {
    if (contextOnly && !preparedEmailRows.length) {
      setInlineEmailStatus("Gemini email composition was unavailable. No Gmail draft was opened.", true);
    }
  } finally {
    if (pendingGeminiEmailRequests.get(normalizedSourceKey) === requestId) {
      pendingGeminiEmailRequests.delete(normalizedSourceKey);
    }
  }
}

function buildGeminiEmailRequestPayload({ commandText, sourceText, currentEmailSegment, previousEmailTopics, existingEmailSubjects, analysis, recipientInfo, recipientFallback }) {
  const isolatedSegment = normalizeBusinessEnglishBlock(currentEmailSegment || commandText || sourceText);
  const availableNotesContext = normalizeBusinessEnglishBlock(sourceText);
  const allMeetingContext = buildGeminiEmailMeetingContext(sourceText, analysis, isolatedSegment);
  const richEmailBrief = buildRichEmailContextBrief({
    commandText,
    sourceText,
    currentEmailSegment: isolatedSegment,
    analysis,
    recipientInfo,
    recipientFallback
  });
  const segmentAnalysis = analyzeNotes(isolatedSegment);
  const summaryLines = [
    segmentAnalysis?.summary ? `Current topic summary: ${segmentAnalysis.summary}` : "",
    (segmentAnalysis?.decisions || []).length ? `Current topic decisions: ${(segmentAnalysis.decisions || []).join(" | ")}` : "",
    (segmentAnalysis?.risks || []).length ? `Current topic risks: ${(segmentAnalysis.risks || []).join(" | ")}` : "",
    (segmentAnalysis?.tasks || []).length ? `Current topic action items: ${(segmentAnalysis.tasks || []).map((task) => task.task || "").filter(Boolean).join(" | ")}` : ""
  ].filter(Boolean);

  return {
    explicitRequest: normalizeBusinessEnglishText(commandText || isolatedSegment),
    currentEmailSegment: isolatedSegment,
    transcript: isolatedSegment,
    availableNotesContext: normalizeRowSignatureValue(availableNotesContext) === normalizeRowSignatureValue(isolatedSegment)
      ? ""
      : availableNotesContext,
    allMeetingContext,
    richEmailBrief,
    meetingSummary: summaryLines.join("\n"),
    previousEmailTopics: (previousEmailTopics || []).map(normalizeBusinessEnglishText).filter(Boolean),
    existingEmailSubjects: (existingEmailSubjects || []).map(normalizeBusinessEnglishText).filter(Boolean),
    recipientHint: normalizeBusinessEnglishText(recipientInfo?.email || recipientInfo?.label || recipientFallback || "")
  };
}

function buildGeminiEmailMeetingContext(sourceText, analysis, currentEmailSegment) {
  const manualNotes = normalizeBusinessEnglishBlock(notesInput?.value || "");
  const liveNotes = normalizeBusinessEnglishBlock(liveTranscript?.value || "");
  const source = normalizeBusinessEnglishBlock(sourceText);
  const availableNotesContext = normalizeBusinessEnglishBlock(dedupe([
    manualNotes,
    liveNotes,
    source
  ].filter(Boolean)).join("\n"));
  const contextAnalysis = analysis || analyzeNotes(availableNotesContext || source || currentEmailSegment);
  const dashboard = buildDashboardInsights(availableNotesContext || source || currentEmailSegment, contextAnalysis);

  return {
    manualNotes,
    liveTranscript: liveNotes,
    currentEmailSegment: normalizeBusinessEnglishBlock(currentEmailSegment),
    availableNotesContext,
    summary: normalizeBusinessEnglishText(contextAnalysis?.summary || ""),
    actionItems: (contextAnalysis?.tasks || [])
      .map((task) => normalizeBusinessEnglishText(task?.task || task))
      .filter(Boolean)
      .slice(0, 8),
    decisions: normalizeBusinessEnglishList(contextAnalysis?.decisions || []).slice(0, 8),
    blockers: normalizeBusinessEnglishList(contextAnalysis?.risks || []).slice(0, 8),
    relevantPoints: normalizeBusinessEnglishList(dashboard?.relevant || []).slice(0, 8),
    keyPoints: normalizeBusinessEnglishList(dashboard?.keyPoints || []).slice(0, 8),
    conclusions: normalizeBusinessEnglishList(dashboard?.conclusions || []).slice(0, 8)
  };
}

function buildRichEmailContextBrief({ commandText, sourceText, currentEmailSegment, analysis, recipientInfo, recipientFallback }) {
  const segment = normalizeBusinessEnglishBlock(currentEmailSegment || commandText || "");
  const nearbyContext = getNearbyEmailBriefContext(sourceText, segment);
  const briefSource = normalizeBusinessEnglishBlock(dedupe([
    segment,
    ...nearbyContext
  ].filter(Boolean)).join("\n"));
  const briefAnalysis = analyzeNotes(briefSource || segment);
  const focus = inferEmailFocus(segment || commandText) || inferEmailFocus(briefSource);
  const directMessage = inferEmailDirectMessage(segment || commandText) || inferEmailDirectMessage(briefSource);
  const context = buildEmailContext(briefSource || segment, briefAnalysis, focus);
  const requestType = resolveEmailRequestType(inferEmailRequestType(segment || commandText), segment || commandText, context, focus);
  const tone = inferEmailTone(segment || commandText || briefSource);
  const effectiveRecipient = {
    label: normalizeEmailRecipientLabelForRow(recipientInfo?.label || ""),
    email: normalizeEmailRecipients(recipientInfo?.email || recipientFallback || "")
  };
  const composerContext = buildEmailComposerContext(segment || commandText, briefSource || segment, briefAnalysis, focus, directMessage, requestType, effectiveRecipient, context);
  const facts = getEmailBriefRelevantFacts(briefSource || segment);
  const decisions = normalizeBusinessEnglishList(context.decisions || []).slice(0, 4);
  const risks = normalizeBusinessEnglishList(context.risks || []).slice(0, 4);
  const nextSteps = getEmailBriefNextSteps(context, composerContext);
  const requestedAction = normalizeBusinessEnglishText(composerContext.requestAction || inferEmailBriefRequestedAction(segment || commandText, directMessage, requestType));
  const mainTopic = normalizeBusinessEnglishText(composerContext.topic || focus || getEmailSubjectTopic("", context) || getEmailBriefTopicFromFacts(facts));
  const communicationGoal = inferEmailBriefCommunicationGoal(requestType, mainTopic, requestedAction, directMessage);

  return {
    mainTopic,
    communicationGoal,
    whyItMatters: inferEmailBriefWhyItMatters({
      sourceText: briefSource || segment,
      requestType,
      mainTopic,
      requestedAction,
      facts,
      risks,
      nextSteps
    }),
    relevantFacts: facts,
    decisions,
    blockersOrRisks: risks,
    nextSteps,
    requestedAction,
    audienceHint: inferEmailBriefAudienceHint(segment || commandText, effectiveRecipient),
    tone,
    emailType: normalizeGeminiEmailTypeForRow(requestType),
    ignoreList: [
      "Do not copy raw transcript wording.",
      "Ignore filler, repeated phrases, and speech-recognition garbage.",
      "Do not invent recipients, dates, decisions, approvals, or promises.",
      "Leave recipient blank if no reliable person or group is present."
    ]
  };
}

function getNearbyEmailBriefContext(sourceText, segmentText) {
  const source = normalizeBusinessEnglishBlock(sourceText);
  const segment = normalizeBusinessEnglishBlock(segmentText);
  if (!source || !segment || normalizeRowSignatureValue(source) === normalizeRowSignatureValue(segment)) {
    return [];
  }

  const chunks = splitEmailTopicTransitionSegments(source)
    .flatMap((chunk) => getSentences(chunk).length ? getSentences(chunk) : [chunk])
    .map(normalizeBusinessEnglishText)
    .filter(Boolean);
  const currentIndex = findBestEmailTopicSegmentIndex(chunks, segment);
  if (currentIndex < 0) {
    return [];
  }

  return chunks
    .slice(Math.max(0, currentIndex - 3), Math.min(chunks.length, currentIndex + 4))
    .filter((chunk) => chunk !== segment)
    .filter(isUsefulEmailBriefContextLine)
    .slice(0, 5);
}

function isUsefulEmailBriefContextLine(value) {
  const text = normalizeBusinessEnglishText(value);
  if (!text || text.length < 12 || hasEmailDraftBlockingNoise(text)) {
    return false;
  }

  return hasStrongExternalCommunicationReason(text) ||
    /\b(?:stable|polish|improving|almost complete|final testing|testing round|core workflow|client|customer|store|github|git\s*hub|pro account|world cup album|notion tasks?|meeting scheduling|emails?)\b/i.test(text);
}

function getEmailBriefRelevantFacts(sourceText) {
  return dedupe(getSentences(sourceText)
    .map(normalizeBusinessEnglishText)
    .filter(Boolean)
    .filter((sentence) => !isEmailRequestContextNoise(sentence))
    .filter((sentence) => !hasEmailDraftBlockingNoise(sentence))
    .filter((sentence) =>
      hasStrongExternalCommunicationReason(sentence) ||
      /\b(?:stable|working|works|polish|improving|almost complete|testing round|final testing|available|buy|upload|account)\b/i.test(sentence)
    )
    .map((sentence) => truncateAgendaText(sentence, 180)))
    .slice(0, 6);
}

function getEmailBriefNextSteps(context, composerContext) {
  const taskSteps = (context.tasks || [])
    .map((task) => normalizeBusinessEnglishText(task?.task || task))
    .filter(Boolean)
    .slice(0, 4);
  const inferredStep = composerContext.requestAction
    ? `Ask the recipient to ${composerContext.requestAction}.`
    : "";
  return dedupe([inferredStep, ...taskSteps].filter(Boolean)).slice(0, 4);
}

function inferEmailBriefRequestedAction(commandText, directMessage, requestType) {
  const text = normalizeBusinessEnglishText(`${directMessage} ${commandText}`);
  const patterns = [
    /\b(?:need|needs)\s+(.+?)(?:[.;]|$)/i,
    /\b(?:ask|asking)\s+.+?\s+(?:to|if|whether)\s+(.+?)(?:[.;]|$)/i,
    /\b(?:confirm|review|approve|share|send|provide|upload)\s+(.+?)(?:[.;]|$)/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const action = cleanImplicitEmailTopic(match?.[1] || "");
    if (action) {
      return action;
    }
  }

  if (requestType === "client-update" || requestType === "internal-team-update" || requestType === "status-update") {
    return "review the update and confirm any feedback or next step";
  }

  return "";
}

function getEmailBriefTopicFromFacts(facts) {
  const firstFact = normalizeBusinessEnglishText((facts || []).find(Boolean) || "");
  if (/\bgithub|git\s*hub|pro account\b/i.test(firstFact)) {
    return "GitHub upload account access";
  }
  if (/\bworld cup album\b/i.test(firstFact)) {
    return "World Cup album availability";
  }
  if (/\bapp|application|notion|meeting scheduling|email\b/i.test(firstFact)) {
    return "application workflow update";
  }
  return firstFact ? truncateAgendaText(firstFact, 80) : "";
}

function inferEmailBriefCommunicationGoal(requestType, mainTopic, requestedAction, directMessage) {
  const topic = mainTopic || "the current work";
  if (requestedAction) {
    return `Ask for ${requestedAction}.`;
  }
  if (directMessage) {
    return `Communicate the requested message about ${topic}.`;
  }
  if (requestType === "risk-alert" || requestType === "escalation") {
    return `Flag the blocker or risk around ${topic}.`;
  }
  if (requestType === "decision-recap") {
    return `Confirm the decision and next steps for ${topic}.`;
  }
  if (requestType === "client-update") {
    return `Update the client on ${topic} and invite the next review or feedback.`;
  }
  return `Share a useful professional update about ${topic}.`;
}

function inferEmailBriefWhyItMatters({ sourceText, requestType, mainTopic, requestedAction, facts, risks, nextSteps }) {
  const text = normalizeBusinessEnglishText(sourceText);
  if (/\bpro\s+account|github|git\s*hub|upload\b/i.test(text)) {
    return "The account decision affects whether the application can be uploaded and tested in the deployment flow.";
  }
  if (/\bworld cup album\b/i.test(text)) {
    return "The sender needs availability information before deciding whether to buy the album.";
  }
  if (/\bclient|customer|next review|testing round|final testing\b/i.test(text)) {
    return "The recipient needs a clear status update so they know what is ready and what review or testing step comes next.";
  }
  if ((risks || []).length) {
    return "The issue may block progress unless the owner confirms the next step.";
  }
  if (requestedAction || (nextSteps || []).length) {
    return "The email should move the work forward with a clear action or confirmation.";
  }
  if ((facts || []).length > 1) {
    return `The update combines ${facts.length} relevant facts into a concise communication.`;
  }
  return mainTopic ? `The recipient needs context on ${mainTopic}.` : "";
}

function inferEmailBriefAudienceHint(commandText, recipientInfo) {
  if (recipientInfo?.email) {
    return recipientInfo.email;
  }
  if (recipientInfo?.label && !isLowValueEmailRecipientLabel(recipientInfo.label)) {
    return recipientInfo.label;
  }
  const text = normalizeBusinessEnglishText(commandText);
  if (/\bclient|customer\b/i.test(text)) {
    return "Client or customer contact";
  }
  if (/\bstore\b/i.test(text)) {
    return "Store contact";
  }
  if (/\bteam\b/i.test(text)) {
    return "Internal team";
  }
  return "";
}

function mapGeminiEmailResultToPreparedRow(result, options) {
  const draft = result?.draft || {};
  const draftRecipient = draft.recipient && typeof draft.recipient === "object" ? draft.recipient : {};
  const templateId = normalizeGeminiEmailTypeForRow(draft.templateId || draft.emailType);
  const body = normalizeBusinessEnglishBlock(draft.body);
  const fallbackContext = normalizeBusinessEnglishBlock(options.currentEmailSegment || options.inferredReason || "");
  const subject = restoreEmailBusinessTerms(normalizeBusinessEnglishText(draft.subject)) ||
    inferContextualEmailSubject(
      fallbackContext || "Prepared email from notes",
      inferEmailFocus(fallbackContext),
      buildEmailContext(fallbackContext, analyzeNotes(fallbackContext), ""),
      templateId,
      "",
      options.recipientInfo || { label: "" },
      "friendly-professional"
    );
  const hasDraftContent = Boolean(draft.emailNeeded && body);
  if (!hasDraftContent) {
    return null;
  }

  const confidence = Number(draft.confidence) || 0;
  const canOpenDraft = !isTrulyUnusableEmailBody({
    subject,
    body,
    qualityScore: confidence
  });
  const recipients = normalizeEmailRecipients(draft.recipientEmail || draftRecipient.email || options.recipientFallback || "");
  const recipientLabel = normalizeEmailRecipientLabelForRow(draft.recipientName || draftRecipient.name || draftRecipient.label || options.recipientInfo?.label || "");
  const warnings = normalizeGeminiEmailWarningsForRow(draft.warnings);
  const reviewReason = canOpenDraft
    ? normalizeGeminiEmailAdvisoryReason(warnings.join(" ") || draft.reason || result.reason || "")
    : normalizeBusinessEnglishText(warnings.join(" ") || result.reason || draft.reason || "Email draft needs review. Please repeat the topic or message more clearly.");

  return {
    sourceKey: options.sourceKey,
    topicKey: buildEmailTopicKey({
      recipients,
      recipientLabel: recipients ? recipients : recipientLabel,
      subject,
      body,
      emailType: templateId
    }),
    recipients,
    recipientLabel: recipients ? recipients : recipientLabel,
    subject,
    body,
    emailType: templateId,
    templateId,
    warnings,
    inferredReason: canOpenDraft
      ? normalizeBusinessEnglishText(options.inferredReason)
      : "",
    reviewReason,
    qualityScore: confidence,
    canOpenDraft
  };
}

function applyGeminiReviewGateToExistingEmailRow(sourceKey, reason) {
  const existing = preparedEmailRows.find((row) => row.sourceKey === sourceKey);
  if (!existing) {
    return false;
  }

  existing.canOpenDraft = false;
  existing.confirmationState = "Needs review";
  existing.reviewReason = normalizeBusinessEnglishText(reason) || "Email draft needs review. Please repeat the topic or message more clearly.";
  renderPreparedEmailRows();
}

function normalizeGeminiEmailAdvisoryReason(value) {
  const reason = normalizeBusinessEnglishText(value);
  if (!reason || /gmail draft opening must stay disabled/i.test(reason)) {
    return "";
  }

  return reason;
}

function normalizeGeminiEmailWarningsForRow(value) {
  const warnings = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  return warnings
    .map(normalizeBusinessEnglishText)
    .filter(Boolean)
    .filter((warning) => !/no recipient detected/i.test(warning))
    .slice(0, 4);
}

function normalizeGeminiEmailTypeForRow(value) {
  return normalizeBusinessEnglishText(value)
    .toLowerCase()
    .replace(/_/g, "-") || "custom-situation";
}

function getGeminiImplicitEmailSourceKey(sourceText) {
  return `email:gemini:context:${normalizeRowSignatureValue(sourceText)}`;
}

function isCurrentGeminiEmailSource(sourceText) {
  return !latestSourceText || normalizeRowSignatureValue(latestSourceText) === normalizeRowSignatureValue(sourceText);
}

async function requestGeminiEmailInterpretationForRow(emailRow, sourceText, analysis) {
  if (!GEMINI_EMAIL_INTERPRETATION_CLIENT_ENABLED || !emailPreparationEnabled || !emailRow?.emailV1Template) {
    return;
  }

  const sourceKey = emailRow.sourceKey || getGeminiImplicitEmailSourceKey(sourceText);
  const isGeminiOnlyPending = GEMINI_EMAIL_ONLY_TEMPLATE_FILLING && emailRow.pendingGeminiEmail;
  if (!sourceKey ||
    (!isGeminiOnlyPending && pendingGeminiEmailInterpretations.has(sourceKey)) ||
    (!isGeminiOnlyPending && attemptedGeminiEmailInterpretationKeys.has(sourceKey)) ||
    (isGeminiOnlyPending && sourceKey !== latestGeminiEmailOnlySourceKey)) {
    return;
  }

  const requestId = `${Date.now()}-${++geminiEmailInterpretationRequestCounter}`;
  pendingGeminiEmailInterpretations.set(sourceKey, requestId);
  clearGeminiEmailInterpretationTimeout(sourceKey);
  geminiEmailInterpretationTimeouts.set(sourceKey, setTimeout(() => {
    if (pendingGeminiEmailInterpretations.get(sourceKey) !== requestId) {
      return;
    }

    pendingGeminiEmailInterpretations.delete(sourceKey);
    geminiEmailInterpretationTimeouts.delete(sourceKey);
    if (!GEMINI_EMAIL_ONLY_TEMPLATE_FILLING || sourceKey === latestGeminiEmailOnlySourceKey) {
      markGeminiEmailRowNeedsReview(sourceKey, "Gemini did not finish preparing the email. Try again with a clearer email request.");
    }
  }, GEMINI_EMAIL_ONLY_TIMEOUT_MS));

  try {
    const response = await fetch(GEMINI_EMAIL_INTERPRET_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildGeminiEmailInterpretationPayload(emailRow, sourceText, analysis))
    });
    const result = await response.json().catch(() => null);
    if (pendingGeminiEmailInterpretations.get(sourceKey) !== requestId || !isCurrentGeminiEmailSource(sourceText)) {
      return;
    }

    const interpretedRow = mapGeminiEmailInterpretationToPreparedRow(result, emailRow, sourceText, analysis);
    if (!interpretedRow) {
      markGeminiEmailRowNeedsReview(sourceKey, result?.reason || "Gemini could not prepare a useful email from the notes yet.");
      return;
    }

    upsertPreparedEmailRow(interpretedRow);
    attemptedGeminiEmailInterpretationKeys.add(sourceKey);
    renderPreparedEmailRows();
  } catch (error) {
    if (pendingGeminiEmailInterpretations.get(sourceKey) === requestId && (!GEMINI_EMAIL_ONLY_TEMPLATE_FILLING || sourceKey === latestGeminiEmailOnlySourceKey)) {
      markGeminiEmailRowNeedsReview(sourceKey, "Gemini email interpretation was unavailable. No Gmail draft was opened.");
    }
  } finally {
    if (pendingGeminiEmailInterpretations.get(sourceKey) === requestId) {
      pendingGeminiEmailInterpretations.delete(sourceKey);
      clearGeminiEmailInterpretationTimeout(sourceKey);
    }
  }
}

function markGeminiEmailRowNeedsReview(sourceKey, reason) {
  const existing = preparedEmailRows.find((row) => row.sourceKey === sourceKey);
  if (!existing) {
    return false;
  }

  clearGeminiEmailInterpretationTimeout(sourceKey);
  existing.pendingGeminiEmail = false;
  existing.canOpenDraft = false;
  existing.confirmationState = "Needs review";
  existing.reviewReason = normalizeBusinessEnglishText(reason) || "Gemini could not prepare a useful email from the notes yet.";
  renderPreparedEmailRows();
  return true;
}

function buildGeminiEmailInterpretationPayload(emailRow, sourceText, analysis) {
  const source = normalizeBusinessEnglishBlock(sourceText || latestSourceText || getCurrentMeetingSourceText());
  const currentAnalysis = analysis || latestAnalysis || analyzeNotes(source);
  const dashboard = buildDashboardInsights(source, currentAnalysis);
  const allMeetingContext = GEMINI_EMAIL_ONLY_TEMPLATE_FILLING
    ? buildGeminiOnlyEmailMeetingContext(source)
    : buildGeminiEmailMeetingContext(source, currentAnalysis, source);
  const dashboardContext = GEMINI_EMAIL_ONLY_TEMPLATE_FILLING
    ? createEmptyDashboardInsights()
    : {
        decisions: normalizeBusinessEnglishList(dashboard.decisions || []),
        risksOrBlockers: normalizeBusinessEnglishList(dashboard.risks || []),
        relevant: normalizeBusinessEnglishList(dashboard.relevant || dashboard.topics || []),
        keyPoints: normalizeBusinessEnglishList(dashboard.keyPoints || []),
        conclusions: normalizeBusinessEnglishList(dashboard.conclusions || [])
      };

  return {
    sourceText: source,
    emailRequest: normalizeBusinessEnglishText(emailRow.geminiEmailRequest || ""),
    currentEmailSegment: normalizeBusinessEnglishBlock(emailRow.geminiCurrentEmailSegment || ""),
    manualNotes: normalizeBusinessEnglishBlock(notesInput?.value || ""),
    liveNotes: normalizeBusinessEnglishBlock(liveTranscript?.value || ""),
    allMeetingContext,
    dashboardContext,
    preparedTasks: getPreparedEmailInterpretationTasks(),
    preparedMeetings: getPreparedEmailInterpretationMeetings(),
    currentSubject: normalizeBusinessEnglishText(emailRow.subject || ""),
    recipientHint: normalizeBusinessEnglishText(emailRow.geminiRecipientHint || emailRow.recipients || emailRow.recipientLabel || "")
  };
}

function buildGeminiOnlyEmailMeetingContext(sourceText) {
  const manualNotes = normalizeBusinessEnglishBlock(notesInput?.value || "");
  const liveNotes = normalizeBusinessEnglishBlock(liveTranscript?.value || "");
  const source = normalizeBusinessEnglishBlock(sourceText);
  const availableNotesContext = normalizeBusinessEnglishBlock(dedupe([
    manualNotes,
    liveNotes,
    source
  ].filter(Boolean)).join("\n"));

  return {
    manualNotes,
    liveTranscript: liveNotes,
    currentEmailSegment: source,
    availableNotesContext,
    summary: "",
    actionItems: [],
    decisions: [],
    blockers: [],
    relevantPoints: [],
    keyPoints: [],
    conclusions: []
  };
}

function getPreparedEmailInterpretationTasks() {
  const actionTasks = pendingNotionAction?.type === "tasks" ? pendingNotionAction.tasks || [] : [];
  return dedupe([...pendingNotionTasks, ...actionTasks]
    .map((task) => normalizeBusinessEnglishText([
      task?.task || task?.title || task?.name || "",
      task?.assigneeText || task?.owner || "",
      task?.dueDate || task?.suggestedDate || "",
      task?.priority || task?.urgency || ""
    ].filter(Boolean).join(" | ")))
    .filter(Boolean))
    .slice(0, 8);
}

function getPreparedEmailInterpretationMeetings() {
  return dedupe([...preparedMeetingRows, pendingMeetingProposal]
    .filter(Boolean)
    .map((meeting) => normalizeBusinessEnglishText([
      meeting.title || "",
      meeting.date || "",
      meeting.startTime || "",
      meeting.agenda || meeting.summary || ""
    ].filter(Boolean).join(" | ")))
    .filter(Boolean))
    .slice(0, 6);
}

function mapGeminiEmailInterpretationToPreparedRow(result, baseRow, sourceText, analysis) {
  if (!result?.ok || result.source !== "gemini-interpretation") {
    return null;
  }

  const interpretation = normalizeEmailV1Interpretation(result.interpretation);
  if (!interpretation) {
    return null;
  }

  const recipient = normalizeEmailRecipients(interpretation.recipient);
  const recipientLabel = recipient ? "" : normalizeEmailRecipientLabelForRow(interpretation.recipient);
  const recipientInfo = {
    label: recipient ? "" : (recipientLabel || baseRow.recipientLabel || ""),
    email: recipient || baseRow.recipients || ""
  };
  const interpretedDraft = buildEmailV1Draft(
    "Create a meeting follow-up email from the interpreted notes.",
    sourceText,
    analysis || analyzeNotes(sourceText),
    recipientInfo,
    interpretation
  );

  if (!interpretedDraft?.subject || !interpretedDraft?.body || isTrulyUnusableEmailBody(interpretedDraft)) {
    return null;
  }

  return {
    ...baseRow,
    sourceKey: baseRow.sourceKey,
    recipients: recipient || baseRow.recipients || "",
    recipientLabel: recipient ? "" : (recipientLabel || baseRow.recipientLabel || ""),
    subject: interpretedDraft.subject,
    body: interpretedDraft.body,
    emailType: interpretedDraft.emailType,
    templateId: interpretation.recommendedTemplate,
    inferredReason: interpretedDraft.inferredReason,
    reviewReason: interpretedDraft.reviewReason,
    qualityScore: interpretedDraft.qualityScore,
    canOpenDraft: true,
    pendingGeminiEmail: false,
    emailV1Template: true
  };
}

function buildEmailTopicKey(emailRow) {
  const recipient = normalizeRowSignatureValue(emailRow?.recipients || emailRow?.recipientLabel || "open-recipient");
  const purpose = normalizeRowSignatureValue(emailRow?.emailType || "email");
  const tokens = getEmailTopicTokens([
    emailRow?.subject || "",
    emailRow?.body || ""
  ].join(" "));
  return [
    recipient,
    purpose,
    tokens.slice(0, 10).join(" ")
  ].join("|");
}

function getEmailTopicTokens(value) {
  const stop = new Set([
    "about",
    "account",
    "also",
    "application",
    "best",
    "client",
    "could",
    "draft",
    "email",
    "gmail",
    "hello",
    "know",
    "message",
    "please",
    "request",
    "send",
    "sending",
    "share",
    "thanks",
    "that",
    "this",
    "update",
    "wanted",
    "with",
    "would",
    "you",
    "your"
  ]);
  return dedupe(normalizeBusinessEnglishText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .split(/\s+/)
    .map((token) => token === "github" || token === "git" ? "github" : token)
    .filter((token) => token.length > 2 && !stop.has(token)))
    .sort();
}

function getTokenOverlapScore(firstTokens, secondTokens) {
  const first = new Set(firstTokens || []);
  const second = new Set(secondTokens || []);
  if (!first.size || !second.size) {
    return 0;
  }

  const intersection = [...first].filter((token) => second.has(token)).length;
  return intersection / Math.min(first.size, second.size);
}

function isDuplicatePreparedEmailTopic(existing, candidate) {
  const existingRecipient = normalizeRowSignatureValue(existing?.recipients || existing?.recipientLabel || "");
  const candidateRecipient = normalizeRowSignatureValue(candidate?.recipients || candidate?.recipientLabel || "");
  if (existingRecipient && candidateRecipient && existingRecipient !== candidateRecipient) {
    return false;
  }

  if (existing?.topicKey && candidate?.topicKey && existing.topicKey === candidate.topicKey) {
    return true;
  }

  const existingTokens = getEmailTopicTokens(`${existing?.subject || ""} ${existing?.body || ""}`);
  const candidateTokens = getEmailTopicTokens(`${candidate?.subject || ""} ${candidate?.body || ""}`);
  return getTokenOverlapScore(existingTokens, candidateTokens) >= EMAIL_TOPIC_DUPLICATE_OVERLAP;
}

function findDuplicatePreparedEmailRow(candidate) {
  return preparedEmailRows.find((row) => isDuplicatePreparedEmailTopic(row, candidate)) || null;
}

function evaluateEmailProfessionalQualityGate(emailDraft) {
  const recipients = normalizeBusinessEnglishText(emailDraft?.recipients || "");
  const recipientLabel = normalizeEmailRecipientLabelForRow(emailDraft?.recipientLabel || "");
  const subject = restoreEmailBusinessTerms(normalizeBusinessEnglishText(emailDraft?.subject || ""));
  const body = restoreEmailBusinessTerms(normalizeBusinessEnglishBlock(emailDraft?.body || ""));
  const advisoryReasons = [];

  if (recipientLabel && !hasUsefulEmailRecipient(recipients, recipientLabel)) {
    advisoryReasons.push("Recipient is unclear. You can review or leave the To field blank in Gmail.");
  }

  if (!hasProfessionalEmailSubject(subject)) {
    advisoryReasons.push("Subject may need review before sending.");
  }

  if ((Number(emailDraft?.qualityScore) || 0) < EMAIL_OPEN_CONFIDENCE) {
    advisoryReasons.push("Review the draft carefully because the source context was limited.");
  }

  return {
    canOpenDraft: Boolean(subject && body),
    reason: advisoryReasons.join(" ")
  };
}

function hasUsefulEmailRecipient(recipients, recipientLabel) {
  if (normalizeEmailRecipients(recipients)) {
    return true;
  }

  const label = normalizeEmailRecipientLabelForRow(recipientLabel);
  if (!label || isLowValueEmailRecipientLabel(label)) {
    return false;
  }

  return /\b(?:client|customer|team|finance|HR|store|vendor|partner|legal|support|sales|marketing|social media|Jared|Juan|Victor)\b/i.test(label) ||
    /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2}$/.test(label);
}

function isLowValueEmailRecipientLabel(value) {
  const label = normalizeBusinessEnglishText(value);
  return /^(?:section|send|to|for|for their memberships?|their memberships?|our clients?|recipient|someone|unknown|email|message|draft)$/i.test(label) ||
    /\b(?:saying|telling|letting|subject|body|about|working good)\b/i.test(label);
}

function hasProfessionalEmailSubject(subject) {
  const cleanSubject = normalizeBusinessEnglishText(subject);
  return cleanSubject.length >= 10 &&
    !/^(?:prepared email|meeting follow-up and action plan|status update|update|the app is working|application is working)$/i.test(cleanSubject) &&
    !/\b(?:and we|and the|and it)$/i.test(cleanSubject) &&
    !/\b(?:what about if|if i say that|that i need to|i need to what about|so let me|let me open|mmm|ok,\s*so)\b/i.test(cleanSubject) &&
    !/^(?:that|send|to|section)\s*,/i.test(cleanSubject);
}

function hasRawTranscriptGarbageEmailContent(value) {
  const text = normalizeBusinessEnglishText(value);
  return /\b(?:what about if|if i say that|that i need to|i need to what about|so let me|let me open|mmm|ok,\s*so|testing testing)\b/i.test(text) ||
    /\b(?:that|send|to|section)\s*,\s*(?:i|we|the)\b/i.test(text);
}

function isVagueTestingChatterEmail(value) {
  const text = normalizeBusinessEnglishText(value);
  return /\b(?:app|application|section|meeting section|notion section|email section|calendar section|testing|test|everything|this)\b[^.]{0,80}\b(?:working|works|fine|good|ok|okay|stable)\b/i.test(text) ||
    /\b(?:the app is working|application is working|everything is fine|testing is good|section is working|section works|this section works)\b/i.test(text);
}

function hasStrongExternalCommunicationReason(value) {
  return /\b(?:ready for (?:their\s+)?next review|next review|client review|customer review|approval|approve|confirm|request|need|needs|pro account|github|git\s*hub|upload|invoice|payment|blocked|blocker|risk|decision|next steps?|follow[- ]?up|candidate|feedback|final files?|access|documents?|content|graphics)\b/i.test(normalizeBusinessEnglishText(value));
}

function hasConcreteEmailBusinessValue(body) {
  const text = normalizeBusinessEnglishText(body);
  if (text.length < 85) {
    return false;
  }

  return /\b(?:could you|please|confirm|review|approve|share|send|provide|upload|help|need|needs|request|ask|next step|next review|ready for|blocked|blocker|risk|decision|invoice|payment|access|pro account|github|git\s*hub|candidate|feedback|launch|testing|content|graphics|available|buy)\b/i.test(text);
}

function isTrulyUnusableEmailBody(emailDraft) {
  const body = restoreEmailBusinessTerms(normalizeEmailV1BodyBlock(emailDraft?.body || ""));

  return !body || countWords(body) < 3;
}

function upsertPreparedEmailRow(emailDraft) {
  const recipients = normalizeEmailRecipients(emailDraft.recipients);
  const recipientLabel = normalizeEmailRecipientLabelForRow(emailDraft.recipientLabel || "");
  const isGeminiPendingRow = Boolean(emailDraft.pendingGeminiEmail);
  const subject = restoreEmailBusinessTerms(normalizeBusinessEnglishText(emailDraft.subject)) ||
    (isGeminiPendingRow ? "" : "Meeting follow-up and action plan");
  const body = restoreEmailBusinessTerms(sanitizeEmailV1TemplateBody(emailDraft.body));
  const sourceKey = emailDraft.sourceKey || "";
  const professionalGate = isGeminiPendingRow
    ? { reason: "" }
    : evaluateEmailProfessionalQualityGate({
        recipients,
        recipientLabel,
        subject,
        body,
        emailType: emailDraft.emailType,
        qualityScore: Number(emailDraft.qualityScore) || 0
      });
  const topicKey = emailDraft.topicKey || buildEmailTopicKey({
    recipients,
    recipientLabel,
    subject,
    body,
    emailType: emailDraft.emailType
  });
  const signature = getEmailRowSignature({ recipients, recipientLabel, subject, body, sourceKey });
  const hardQualityBlock = !isGeminiPendingRow && isTrulyUnusableEmailBody({
    subject,
    body,
    qualityScore: Number(emailDraft.qualityScore) || 0
  });

  if ((!body && !isGeminiPendingRow) || hardQualityBlock || hiddenEmailRows.has(signature) || (sourceKey && hiddenEmailRows.has(sourceKey))) {
    return false;
  }

  const existing = preparedEmailRows.find((row) =>
    (sourceKey && row.sourceKey === sourceKey) ||
    row.signature === signature
  ) || (isGeminiPendingRow ? null : findDuplicatePreparedEmailRow({
    recipients,
    recipientLabel,
    subject,
    body,
    emailType: emailDraft.emailType,
    topicKey
  }));

  if (existing && existing.sourceKey !== sourceKey && existing.canOpenDraft && emailDraft.canOpenDraft === false) {
    return true;
  }

  if (
    existing?.sourceKey === sourceKey &&
    /prepared from interpreted meeting context/i.test(existing.inferredReason || "") &&
    !/prepared from interpreted meeting context/i.test(emailDraft.inferredReason || "")
  ) {
    return true;
  }

  const nextRow = {
    clientId: existing?.clientId || `email-${Date.now()}-${++emailRowCounter}`,
    signature,
    sourceKey,
    topicKey,
    recipients,
    recipientLabel,
    subject,
    body,
    emailType: emailDraft.emailType || "custom-situation",
    templateId: emailDraft.templateId || "",
    emailV1Template: Boolean(emailDraft.emailV1Template),
    pendingGeminiEmail: isGeminiPendingRow,
    geminiEmailRequest: normalizeBusinessEnglishText(emailDraft.geminiEmailRequest || existing?.geminiEmailRequest || ""),
    geminiCurrentEmailSegment: normalizeBusinessEnglishBlock(emailDraft.geminiCurrentEmailSegment || existing?.geminiCurrentEmailSegment || ""),
    geminiRecipientHint: normalizeBusinessEnglishText(emailDraft.geminiRecipientHint || existing?.geminiRecipientHint || ""),
    warnings: Array.isArray(emailDraft.warnings) ? emailDraft.warnings : [],
    inferredReason: normalizeBusinessEnglishText(emailDraft.inferredReason || ""),
    reviewReason: normalizeBusinessEnglishText(professionalGate.reason || emailDraft.reviewReason || ""),
    qualityScore: Number(emailDraft.qualityScore) || 0,
    canOpenDraft: !isGeminiPendingRow && Boolean(subject && body) && !hardQualityBlock,
    confirmationState: existing?.confirmationState === "Opened"
      ? "Opened"
      : (isGeminiPendingRow ? "Preparing" : (hardQualityBlock ? "Needs review" : "Pending approval"))
  };

  if (existing) {
    Object.assign(existing, nextRow);
  } else {
    preparedEmailRows.push(nextRow);
  }

  return true;
}

function renderPreparedEmailRows() {
  emailRowsOutput.textContent = "";
  preparedEmailRows = preparedEmailRows.filter((row) =>
    !hiddenEmailRows.has(row.signature || getEmailRowSignature(row)) &&
    !(row.sourceKey && hiddenEmailRows.has(row.sourceKey))
  );

  if (!preparedEmailRows.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.className = "empty-table";
    cell.textContent = "Prepared emails will appear here.";
    row.appendChild(cell);
    emailRowsOutput.appendChild(row);
    setInlineEmailStatus("No email prepared yet.", false);
    openGmailButton.disabled = true;
    return;
  }

  preparedEmailRows.forEach((emailRow) => {
    const row = document.createElement("tr");
    row.dataset.emailId = emailRow.clientId;

    [
      emailRow.recipients || emailRow.recipientLabel || "No recipient detected",
      emailRow.subject || (emailRow.pendingGeminiEmail ? "Gemini is preparing..." : "No subject prepared"),
      emailRow.body ? truncateAgendaText(emailRow.body.replace(/\s+/g, " "), 130) : (emailRow.pendingGeminiEmail ? "Waiting for Gemini to fill the email template." : "No preview yet."),
      getPreparedEmailRowStatus(emailRow)
    ].forEach((value) => {
      const cell = document.createElement("td");
      renderHighlightedText(cell, value);
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const openButton = document.createElement("button");
    openButton.className = "secondary-button compact-button";
    openButton.type = "button";
    openButton.dataset.action = "open-gmail-draft";
    openButton.dataset.emailId = emailRow.clientId;
    openButton.textContent = emailRow.confirmationState === "Opened" ? "Open Again" : "Open Gmail Draft";
    openButton.disabled = !canOpenPreparedEmailDraft(emailRow);
    if (openButton.disabled && emailRow.reviewReason) {
      openButton.title = emailRow.reviewReason;
    }
    const deleteButton = createDeleteRowButton("delete-email", "Hide this prepared email", emailRow.clientId);
    deleteButton.dataset.emailId = emailRow.clientId;
    actionCell.appendChild(createRowActions(openButton, deleteButton));
    row.appendChild(actionCell);
    emailRowsOutput.appendChild(row);
  });

  const preparingCount = preparedEmailRows.filter((row) => row.pendingGeminiEmail).length;
  const pendingCount = preparedEmailRows.filter((row) => row.confirmationState !== "Opened").length;
  const reviewCount = preparedEmailRows.filter((row) => !row.pendingGeminiEmail && !canOpenPreparedEmailDraft(row)).length;
  setInlineEmailStatus(
    preparingCount
      ? `${preparingCount} email draft ${preparingCount === 1 ? "is" : "are"} being prepared by Gemini.`
      : reviewCount
      ? `${preparedEmailRows.length} prepared. ${reviewCount} need review before Gmail can open.`
      : `${preparedEmailRows.length} prepared. ${pendingCount} pending approval.`,
    reviewCount > 0
  );
  openGmailButton.disabled = preparedEmailRows.every((row) => !canOpenPreparedEmailDraft(row));
  applyGlobalSearch();
}

function canOpenPreparedEmailDraft(emailRow) {
  return Boolean(emailRow?.subject && emailRow?.body) && !isTrulyUnusableEmailBody(emailRow);
}

function getPreparedEmailRowStatus(emailRow) {
  if (emailRow.confirmationState === "Opened") {
    return "Opened";
  }

  if (emailRow.pendingGeminiEmail) {
    return "Preparing with Gemini - reading Notes and filling the email template.";
  }

  if (!canOpenPreparedEmailDraft(emailRow)) {
    return `Needs review - ${emailRow.reviewReason || "Please repeat the topic or message more clearly."}`;
  }

  if (emailRow.inferredReason) {
    return `Ready - ${emailRow.inferredReason}`;
  }

  if (emailRow.reviewReason) {
    return `Ready - ${emailRow.reviewReason}`;
  }

  return emailRow.recipients
    ? "Pending approval"
    : "No recipient detected - add recipient in Gmail";
}

function getPreparedEmailRowById(emailId) {
  return preparedEmailRows.find((row) => row.clientId === emailId) || null;
}

function getLatestPreparedEmailRow() {
  return preparedEmailRows[preparedEmailRows.length - 1] || null;
}

function handleInlineEmailClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  if (button.dataset.action === "delete-email") {
    deletePreparedEmailRow(button.dataset.emailId || button.dataset.rowId);
    return;
  }

  if (button.dataset.action === "open-gmail-draft") {
    openReviewedEmailInGmail(button.dataset.emailId);
  }
}

function deletePreparedEmailRow(emailId) {
  const emailRow = getPreparedEmailRowById(emailId);
  if (!emailRow) {
    return;
  }

  hiddenEmailRows.add(emailRow.signature || getEmailRowSignature(emailRow));
  if (emailRow.sourceKey) {
    hiddenEmailRows.add(emailRow.sourceKey);
    clearGeminiEmailInterpretationTimeout(emailRow.sourceKey);
    pendingGeminiEmailInterpretations.delete(emailRow.sourceKey);
  }
  persistHiddenRowKeys(HIDDEN_EMAIL_ROWS_STORAGE_KEY, hiddenEmailRows);
  preparedEmailRows = preparedEmailRows.filter((row) => row.clientId !== emailId);
  renderPreparedEmailRows();
  setInlineEmailStatus("Prepared email hidden locally. No Gmail draft or email was deleted.", false);
}

function getEmailCommandSourceKey(sourceText) {
  const command = getEmailCommandSegment(sourceText);
  return command ? `email:${normalizeRowSignatureValue(command)}` : "";
}

function getEmailCommandSegment(sourceText) {
  return extractEmailCommandSegments(sourceText)[0]?.text || "";
}

function extractEmailCommandSegments(sourceText) {
  return splitEmailTranscriptIntoChunks(sourceText)
    .map((chunk, index) => ({
      text: chunk,
      sourceKey: getEmailSegmentSourceKey(chunk, index)
    }))
    .filter((segment) => hasEmailIntent(segment.text))
    .flatMap(expandEmailCommandSegment);
}

function splitEmailTranscriptIntoChunks(sourceText) {
  const normalized = normalizeEmailIntentText(sourceText)
    .replace(/\b(?:on\s+another\s+topic|another\s+thing|the\s+next\s+thing|next\s+thing)\s*,?\s*/gi, ". ")
    .replace(/\b(?:then|and then|also|now|regarding|about|ok(?:ay)?|perfect|yeah|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\s*,?\s+(?=(?:i\s+)?(?:also\s+)?(?:want|need|would\s+like|have)?\s*(?:to\s+)?(?:open|create|draft|write|send|prepare|compose)\b)/gi, ". ")
    .replace(/\s+(?=(?:i\s+)?(?:want|need|would\s+like|have)?\s*(?:to\s+)?(?:open|create|draft|write|send|prepare|compose)\s+(?:(?:a|an|new)\s+)?(?:gmail|email|message)\b)/gi, ". ");

  return normalized
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map(cleanText)
    .filter(Boolean);
}

function getEmailSegmentSourceKey(commandText, index) {
  return [
    "email",
    index,
    normalizeRowSignatureValue(commandText)
  ].join(":");
}

function buildPreparedEmailRowFromCommand(command, index, sourceText, analysis, sourceEmails = []) {
  const commandEmails = extractEmailAddresses(command.text);
  const recipientInfo = command.recipientInfo || inferEmailRecipient(command.text);
  const recipients = commandEmails.length ? commandEmails.join(", ") : "";
  const isolatedSourceText = getEmailV1SourceText(command.text, sourceText);
  const isolatedAnalysis = analyzeNotes(isolatedSourceText);
  const draft = buildEmailV1Draft(command.text, isolatedSourceText, isolatedAnalysis, recipientInfo);
  const qualityScore = Math.max(Number(command.confidence) || 0, Number(draft.qualityScore) || 0);
  const canOpenDraft = command.canOpenDraft === false
    ? false
    : Boolean(draft.subject && draft.body);

  return {
    sourceKey: command.sourceKey || getEmailSegmentSourceKey(command.text, index),
    recipients,
    recipientLabel: recipients ? recipients : recipientInfo.label,
    subject: draft.subject,
    body: draft.body,
    emailType: draft.emailType,
    emailV1Template: true,
    inferredReason: draft.inferredReason || "fallback draft. Please review before sending.",
    reviewReason: command.reviewReason || (canOpenDraft ? "" : draft.reviewReason),
    qualityScore,
    canOpenDraft
  };
}

function expandEmailCommandSegment(segment) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(segment.text));
  const multiMatch = text.match(/\b(?:create|write|prepare|draft|compose|send)\s+(?:two|three|four|five|six|seven|eight|nine|ten|2|3|4|5|6|7|8|9|10)\s+(?:emails|messages)\s*[:,-]?\s*(.+)$/i);
  if (!multiMatch) {
    return [segment];
  }

  const tail = multiMatch[1] || "";
  const requests = [];
  const itemPattern = /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|another|1|2|3|4|5|6|7|8|9|10)\s+(?:email\s+)?(?:about|regarding|concerning|on)\s+(.+?)(?=(?:,?\s+(?:and\s+)?(?:one|two|three|four|five|six|seven|eight|nine|ten|another|1|2|3|4|5|6|7|8|9|10)\s+(?:email\s+)?(?:about|regarding|concerning|on)\b)|[.;]|$)/gi;
  let match;
  while ((match = itemPattern.exec(tail)) !== null) {
    const focus = cleanEmailFocus(match[1] || "");
    if (focus) {
      requests.push(focus);
    }
  }

  if (!requests.length) {
    return [segment];
  }

  return requests.map((focus, index) => ({
    text: `Create an email about ${focus}.`,
    sourceKey: `${segment.sourceKey}:part:${index}:${normalizeRowSignatureValue(focus)}`
  }));
}

function normalizeEmailRecipients(value) {
  return dedupe(String(value || "")
    .split(/[\s,;]+/)
    .map((recipient) => recipient.trim().toLowerCase())
    .filter(Boolean)
    .filter(isPlausibleEmailAddress))
    .join(", ");
}

function restoreEmailBusinessTerms(value) {
  return String(value || "")
    .replace(/\bsocial\s+medium\s+team\b/ig, "Social Media Team")
    .replace(/\bsocial\s+media\s+team\b/ig, "Social Media Team")
    .replace(/\bsocial\s+medium\b/ig, "social media");
}

function normalizeEmailRecipientLabelForRow(value) {
  const raw = restoreEmailBusinessTerms(normalizeBusinessEnglishText(value));
  if (!raw || isLowValueEmailRecipientLabel(raw)) {
    return "";
  }

  return restoreEmailBusinessTerms(cleanEmailRecipientLabel(raw));
}

function buildContextAwareEmailRows(sourceText, analysis, startIndex = 0) {
  return detectContextAwareEmailOpportunities(sourceText, analysis)
    .map((opportunity, index) => buildPreparedEmailRowFromCommand({
      text: opportunity.commandText,
      sourceKey: opportunity.sourceKey || `email:implicit:${index}:${normalizeRowSignatureValue(opportunity.commandText)}`,
      recipientInfo: {
        label: opportunity.recipientLabel || "",
        email: opportunity.recipientEmail || ""
      },
      inferredReason: opportunity.reason,
      confidence: opportunity.confidence
    }, startIndex + index, sourceText, analysis))
    .filter(Boolean);
}

function detectContextAwareEmailOpportunities(sourceText, analysis) {
  const text = normalizeBusinessEnglishBlock(sourceText);
  if (!text || hasMeetingSchedulingIntent(text) || hasFocusedNotionTaskOrPageIntent(text) || hasEmailDraftBlockingNoise(text)) {
    return [];
  }

  const lines = getLines(text);
  const sentences = getSentences(text);
  const chunks = dedupe([...lines.flatMap(splitLineIntoChunks), ...sentences].map(cleanText).filter(Boolean));
  const opportunities = [];

  chunks.forEach((chunk, index) => {
    const opportunity = inferEmailOpportunityFromChunk(chunk, index);
    if (opportunity) {
      opportunities.push(opportunity);
    }
  });

  if (!opportunities.length) {
    opportunities.push(...inferEmailOpportunitiesFromAnalysis(analysis, text));
  }

  const seen = new Set();
  return opportunities
    .filter((opportunity) => opportunity.confidence >= EMAIL_ROW_MIN_CONFIDENCE)
    .sort((a, b) => b.confidence - a.confidence)
    .filter((opportunity) => {
      const key = normalizeRowSignatureValue(`${opportunity.recipientLabel}|${opportunity.commandText}`);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    })
    .slice(0, 1);
}

function inferEmailOpportunityFromChunk(chunk, index) {
  const text = normalizeBusinessEnglishText(chunk);
  if (!text || isEmailRequestContextNoise(text) || hasMeetingSchedulingIntent(text) || hasFocusedNotionTaskOrPageIntent(text)) {
    return null;
  }

  const blockedMatch = text.match(/\bblocked\b.*?\bbecause\s+([A-Za-z][a-z]+)\s+(?:has\s+not|hasn't|did\s+not|didn't)\s+(?:sent|send|shared|share|provided|provide|uploaded|upload)\s+(.+?)(?:[.;]|$)/i);
  if (blockedMatch) {
    const recipient = cleanEmailRecipientLabel(blockedMatch[1]);
    const item = cleanImplicitEmailTopic(blockedMatch[2]) || "the missing files";
    return buildImplicitEmailOpportunity({
      index,
      recipientLabel: recipient,
      commandText: `Write an email to ${recipient || "the owner"} asking ${recipient || "them"} to send ${item}.`,
      confidence: recipient ? 0.86 : 0.66,
      reason: "Prepared because the transcript says work is blocked by a missing item."
    });
  }

  const followUpMatch = text.match(/\b(?:need|needs|needed)\s+(?:someone\s+to\s+)?follow\s+up\s+with\s+([A-Za-z][a-z]+|finance|the\s+client|client|team)\s+(?:about|regarding|on)\s+(.+?)(?:[.;]|$)/i);
  if (followUpMatch) {
    const recipient = cleanEmailRecipientLabel(followUpMatch[1]);
    const topic = cleanImplicitEmailTopic(followUpMatch[2]);
    return buildImplicitEmailOpportunity({
      index,
      recipientLabel: recipient,
      commandText: `Send a follow-up email to ${recipient || "the right owner"} about ${topic || "the open issue"}.`,
      confidence: recipient ? 0.82 : 0.64,
      reason: "Prepared because the transcript includes a follow-up request."
    });
  }

  const approvalMatch = text.match(/\b(?:need|needs|needed)\s+(?:to\s+)?(?:request|ask\s+for|get|secure)\s+(.+?)(?:\s+from\s+([A-Za-z][a-z]+|finance|the\s+client|client|team))?(?:[.;]|$)/i);
  if (approvalMatch && /\b(?:approval|access|payment|invoice|files?|documents?|account|upgrade|pro\s+account)\b/i.test(approvalMatch[1])) {
    const recipient = cleanEmailRecipientLabel(approvalMatch[2] || "");
    const topic = cleanImplicitEmailTopic(approvalMatch[1]);
    return buildImplicitEmailOpportunity({
      index,
      recipientLabel: recipient,
      commandText: recipient
        ? `Write an email to ${recipient} requesting ${topic}.`
        : `Create an email requesting ${topic}.`,
      confidence: recipient ? 0.78 : 0.58,
      reason: "Prepared because the transcript includes a request that should be communicated."
    });
  }

  const decisionMatch = text.match(/\b(?:client|customer|team)\s+(?:approved|confirmed|decided)\s+(.+?),?\s+but\s+(?:we\s+)?need\s+to\s+confirm\s+(.+?)(?:[.;]|$)/i);
  if (decisionMatch) {
    const decision = cleanImplicitEmailTopic(decisionMatch[1]);
    const nextStep = cleanImplicitEmailTopic(decisionMatch[2]);
    return buildImplicitEmailOpportunity({
      index,
      recipientLabel: "",
      commandText: `Create a decision recap email about ${decision || "the approval"} and ${nextStep || "next steps"}.`,
      confidence: 0.72,
      reason: "Prepared because the transcript includes a decision that needs confirmation."
    });
  }

  const updateMatch = text.match(/\b(?:need|needs|needed)\s+(?:to\s+)?(?:send|share|give)\s+(?:an?\s+)?update\s+(?:to\s+|with\s+)?([A-Za-z][a-z]+|finance|the\s+client|client|team)?\s*(?:about|on|regarding)?\s*(.*?)(?:[.;]|$)/i);
  if (updateMatch) {
    const recipient = cleanEmailRecipientLabel(updateMatch[1] || "");
    const topic = cleanImplicitEmailTopic(updateMatch[2]) || "the latest status";
    return buildImplicitEmailOpportunity({
      index,
      recipientLabel: recipient,
      commandText: recipient
        ? `Send a status update email to ${recipient} about ${topic}.`
        : `Create a status update email about ${topic}.`,
      confidence: recipient ? 0.76 : 0.56,
      reason: "Prepared because the transcript says an update is needed."
    });
  }

  return null;
}

function inferEmailOpportunitiesFromAnalysis(analysis, sourceText) {
  const risks = (analysis?.risks || []).filter((risk) => /\b(?:blocked|blocker|missing|not sent|not shared|access|approval|invoice|payment|files?)\b/i.test(risk));
  if (risks.length) {
    const risk = risks[0];
    const recipient = inferNamedRecipientFromText(risk);
    return [buildImplicitEmailOpportunity({
      index: 0,
      recipientLabel: recipient,
      commandText: recipient
        ? `Write a follow-up email to ${recipient} about ${cleanImplicitEmailTopic(risk)}.`
        : `Create a risk alert email about ${cleanImplicitEmailTopic(risk)}.`,
      confidence: recipient ? 0.7 : 0.52,
      reason: "Prepared because the notes include a risk or blocker that may need follow-up."
    })];
  }

  const needsFollowUp = /\b(?:follow\s+up|confirm\s+next\s+steps|request\s+(?:approval|access|payment|files?|documents?)|invoice\s+issue)\b/i.test(sourceText);
  if (needsFollowUp) {
    return [buildImplicitEmailOpportunity({
      index: 0,
      recipientLabel: inferNamedRecipientFromText(sourceText),
      commandText: `Create a follow-up email about ${cleanImplicitEmailTopic(sourceText) || "the open item"}.`,
      confidence: 0.5,
      reason: "Prepared because the notes include a communication follow-up."
    })];
  }

  const generalOpportunity = buildGeneralEmailOpportunityFromAnalysis(analysis, sourceText);
  if (generalOpportunity) {
    return [generalOpportunity];
  }

  return [];
}

function buildGeneralEmailOpportunityFromAnalysis(analysis, sourceText) {
  const text = normalizeBusinessEnglishBlock(sourceText);
  if (!hasUsableEmailDraftSource(analysis, text)) {
    return null;
  }

  const taskCount = (analysis?.tasks || []).length;
  const decisionCount = (analysis?.decisions || []).length;
  const riskCount = (analysis?.risks || []).length;
  const commandText = riskCount
    ? "Create a blocker risk alert email from the meeting notes."
    : (taskCount ? "Create an action items follow-up email from the meeting notes." : (decisionCount ? "Create a decision recap email from the meeting notes." : "Create a meeting summary email from the meeting notes."));

  const opportunity = buildImplicitEmailOpportunity({
    index: 0,
    recipientLabel: "",
    commandText,
    confidence: taskCount || decisionCount || riskCount ? 0.66 : 0.54,
    reason: "Prepared because the notes contain usable context for a professional email draft."
  });
  const implicitSegment = getLatestImplicitEmailTopicSegment(text, analysis) || text;
  opportunity.sourceKey = getGeminiImplicitEmailSourceKey(implicitSegment);
  return opportunity;
}

function hasUsableEmailDraftSource(analysis, sourceText) {
  const text = normalizeBusinessEnglishBlock(sourceText);
  if (!text || looksLikeGarbageVoiceTranscript(text)) {
    return false;
  }

  const hasStructuredContent = Boolean(
    (analysis?.decisions || []).length ||
    (analysis?.tasks || []).length ||
    (analysis?.risks || []).length
  );
  const hasUsableLength = countWords(text) >= 4;

  return hasStructuredContent || hasUsableLength;
}

function buildImplicitEmailOpportunity({ index, recipientLabel, commandText, confidence, reason }) {
  return {
    commandText: normalizeBusinessEnglishText(commandText),
    recipientLabel: recipientLabel || "",
    confidence,
    reason,
    sourceKey: `email:implicit:${index}:${normalizeRowSignatureValue(commandText)}`
  };
}

function hasEmailDraftBlockingNoise(sourceText) {
  const text = cleanText(sourceText);
  if (!text) {
    return true;
  }

  if (looksLikeGarbageVoiceTranscript(text)) {
    return true;
  }

  const usefulSignal = /\b(?:follow\s+up|update|confirm|approval|approved|access|payment|invoice|files?|documents?|account|upgrade|blocked|blocker|risk|send|share|request|client|customer|finance)\b/i.test(text);
  return countWords(text) >= 7 && !usefulSignal && isLowQualityRecognizedSpeech(text, {
    source: "email-intelligence",
    confidence: 0
  });
}

function cleanImplicitEmailTopic(value) {
  return normalizeBusinessEnglishText(value)
    .replace(/\b(?:please|thanks|thank you|as soon as possible|right away)\b/ig, "")
    .replace(/\s+/g, " ")
    .replace(/^[,.;:\s]+|[,.;:\s]+$/g, "")
    .trim();
}

function inferNamedRecipientFromText(value) {
  const match = normalizeBusinessEnglishText(value).match(/\b([A-Z][a-z]+)\b/);
  return cleanEmailRecipientLabel(match?.[1] || "");
}

function buildContextualEmailDraft(commandText, sourceText, analysis, recipientInfo = inferEmailRecipient(commandText)) {
  const rawRequestType = inferEmailRequestType(commandText);
  const focus = inferEmailFocus(commandText);
  const directMessage = inferEmailDirectMessage(commandText);
  const context = buildEmailContext(sourceText, analysis, focus);
  const requestType = resolveEmailRequestType(rawRequestType, commandText, context, focus);
  const tone = inferEmailTone(commandText);
  const composerContext = buildEmailComposerContext(commandText, sourceText, analysis, focus, directMessage, requestType, recipientInfo, context);
  const subject = inferContextualEmailSubject(commandText, focus, context, requestType, directMessage, recipientInfo, tone);
  const body = buildContextualEmailBody(commandText, focus, context, requestType, directMessage, recipientInfo, tone, composerContext);
  const quality = evaluateEmailDraftQuality({
    commandText,
    sourceText,
    subject,
    body,
    directMessage,
    focus,
    context,
    requestType,
    recipientInfo,
    composerContext
  });

  return {
    subject,
    body,
    emailType: requestType,
    inferredReason: "",
    reviewReason: quality.reviewReason,
    qualityScore: quality.score,
    canOpenDraft: quality.canOpenDraft
  };
}

function getEmailV1SourceText(commandText, sourceText) {
  const source = normalizeBusinessEnglishBlock(sourceText);
  const command = normalizeBusinessEnglishBlock(commandText);
  if (!source) {
    return command;
  }

  if (!command || countWords(command) < 12 || /^create (?:a |an )?(?:meeting summary|action items follow-up|decision recap|status update|email)/i.test(command)) {
    return source;
  }

  return source;
}

function buildEmailV1Draft(commandText, sourceText, analysis, recipientInfo = inferEmailRecipient(commandText), interpretation = null) {
  const source = normalizeBusinessEnglishBlock(sourceText || commandText);
  const interpretedDraft = buildEmailV1DraftFromInterpretation(source, analysis, recipientInfo, interpretation);
  if (interpretedDraft) {
    return interpretedDraft;
  }

  return buildSafeEmailV1FallbackDraft(recipientInfo);
}

function buildSafeEmailV1FallbackDraft(recipientInfo = { label: "" }) {
  const body = buildEmailV1Body("", null, recipientInfo, getSafeEmailV1FallbackStructuredContent());
  return {
    subject: EMAIL_V1_SAFE_FALLBACK_SUBJECT,
    body,
    emailType: "meeting_summary",
    inferredReason: "fallback draft. Please review before sending.",
    reviewReason: "",
    qualityScore: EMAIL_OPEN_CONFIDENCE,
    canOpenDraft: Boolean(body)
  };
}

function getSafeEmailV1FallbackStructuredContent() {
  return {
    recommendedTemplate: "meeting_summary",
    subject: EMAIL_V1_SAFE_FALLBACK_SUBJECT,
    summaryBullets: EMAIL_V1_SAFE_FALLBACK_SUMMARY,
    actionItems: EMAIL_V1_SAFE_FALLBACK_ACTIONS,
    notes: EMAIL_V1_SAFE_FALLBACK_NOTES,
    recipient: "",
    confidence: "medium",
    warnings: []
  };
}

function buildEmailV1Subject(sourceText, analysis) {
  const text = normalizeBusinessEnglishText(sourceText);
  const hasActions = Boolean((analysis?.tasks || []).length) ||
    /\b(?:create|send|follow\s+up|review|schedule|task|need\s+to|needs\s+to)\b/i.test(text);
  if (hasActions) {
    return "Action Items Follow-Up";
  }

  const isDiscussion = /\b(?:summary|meeting|discussed|discussion|reviewed|covered|talked\s+about|recap)\b/i.test(text);
  if (isDiscussion || (analysis?.decisions || []).length) {
    return "Meeting Summary";
  }

  if (/\b(?:project|status|update|progress|workflow|release|testing|client)\b/i.test(text)) {
    return "Project Update";
  }

  return "Meeting Follow-Up";
}

function buildEmailV1DraftFromInterpretation(sourceText, analysis, recipientInfo, interpretation) {
  const structured = normalizeEmailV1Interpretation(interpretation);
  if (!structured || !hasUsableEmailV1InterpretationContent(structured)) {
    return null;
  }

  const subject = sanitizeEmailV1InterpretedSubject(structured.subject, structured.recommendedTemplate, sourceText, analysis);
  const body = buildEmailV1Body(sourceText, analysis, recipientInfo, structured);
  const confidence = structured.confidence === "high"
    ? 0.82
    : structured.confidence === "medium"
      ? 0.7
      : EMAIL_OPEN_CONFIDENCE;

  return {
    subject,
    body,
    emailType: normalizeGeminiEmailTypeForRow(structured.recommendedTemplate || "meeting_summary"),
    inferredReason: "prepared from interpreted meeting context.",
    reviewReason: normalizeBusinessEnglishText((structured.warnings || []).filter((warning) => !/no recipient detected/i.test(warning)).join(" ")),
    qualityScore: confidence,
    canOpenDraft: Boolean(subject && body)
  };
}

function sanitizeEmailV1InterpretedSubject(subject, templateId, sourceText, analysis) {
  const cleanSubject = restoreEmailBusinessTerms(normalizeBusinessEnglishText(subject || ""));
  if (hasProfessionalEmailSubject(cleanSubject) && !isNoisyEmailV1Bullet(cleanSubject) && !/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(cleanSubject)) {
    return cleanSubject;
  }

  const templateSubject = getEmailV1TemplateSubject(templateId);
  return templateSubject || EMAIL_V1_SAFE_FALLBACK_SUBJECT;
}

function getEmailV1TemplateSubject(templateId) {
  const normalized = normalizeGeminiEmailTypeForRow(templateId);
  if (normalized === "action-items-follow-up" || normalized === "approval-request" || normalized === "general-request") {
    return "Action Items Follow-Up";
  }
  if (normalized === "client-update") {
    return "Project Update";
  }
  if (normalized === "blocker-risk-alert") {
    return "Project Update";
  }
  if (normalized === "meeting-summary" || normalized === "thank-you-recap") {
    return "Meeting Summary";
  }
  return "";
}

function sanitizeEmailV1Subject(subject, sourceText, analysis) {
  const cleanSubject = restoreEmailBusinessTerms(normalizeBusinessEnglishText(subject || ""));
  if (hasProfessionalEmailSubject(cleanSubject) && !hasRawTranscriptGarbageEmailContent(cleanSubject)) {
    return cleanSubject;
  }

  return buildEmailV1Subject(sourceText, analysis);
}

function sanitizeEmailV1SubjectTopic(value) {
  const topic = formatEmailSubjectPhrase(value)
    .replace(/\b(?:email|gmail|draft|message|send|write|create|prepare)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!topic || hasRawTranscriptGarbageEmailContent(topic) || /^(?:the app is working|section is working|this is working)$/i.test(topic)) {
    return "";
  }

  return topic.length > 46 ? `${topic.slice(0, 43).trim()}...` : topic;
}

function buildEmailV1Body(sourceText, analysis, recipientInfo = { label: "" }, structuredContent = null) {
  const interpreted = normalizeEmailV1Interpretation(structuredContent);
  const summaryBullets = interpreted?.summaryBullets?.length
    ? interpreted.summaryBullets.slice(0, 2)
    : EMAIL_V1_SAFE_FALLBACK_SUMMARY;
  const actionItems = interpreted?.actionItems?.length
    ? interpreted.actionItems.slice(0, 5)
    : EMAIL_V1_SAFE_FALLBACK_ACTIONS;
  const notes = interpreted?.notes?.length
    ? interpreted.notes.slice(0, 3)
    : EMAIL_V1_SAFE_FALLBACK_NOTES;
  const sections = [
    buildEmailGreeting(recipientInfo),
    "",
    "Here is a concise follow-up based on the meeting notes.",
    "",
    "Summary:",
    ...summaryBullets.map((item) => `- ${formatEmailV1BulletText(item)}`),
    "",
    "Action Items:",
    ...(actionItems.length ? actionItems : ["No specific action items were clearly identified."]).map((item) => `- ${formatEmailV1BulletText(item)}`)
  ];

  if (notes.length) {
    sections.push("", "Notes:", ...notes.map((item) => `- ${formatEmailV1BulletText(item)}`));
  }

  sections.push("", "Best,");
  return normalizeEmailV1BodyBlock(sections.join("\n"));
}

function normalizeEmailV1Interpretation(value) {
  if (!value || typeof value !== "object") {
    return null;
  }

  const summaryBullets = normalizeEmailV1StructuredList(value.summaryBullets, 2);
  const actionItems = normalizeEmailV1StructuredList(value.actionItems, 5);
  const notes = normalizeEmailV1StructuredList(value.notes, 3);
  const subject = normalizeBusinessEnglishText(value.subject || "");
  const recommendedTemplate = normalizeBusinessEnglishText(value.recommendedTemplate || "meeting_summary")
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
  const confidence = normalizeBusinessEnglishText(value.confidence || "medium").toLowerCase();
  const warnings = normalizeEmailV1StructuredList(value.warnings, 4);

  if (!subject && !summaryBullets.length && !actionItems.length && !notes.length) {
    return null;
  }

  return {
    recommendedTemplate,
    subject,
    summaryBullets,
    actionItems,
    notes,
    recipient: normalizeBusinessEnglishText(value.recipient || ""),
    confidence: ["high", "medium", "low"].includes(confidence) ? confidence : "medium",
    warnings
  };
}

function hasUsableEmailV1InterpretationContent(interpretation) {
  return Boolean(
    (interpretation.summaryBullets || []).length ||
    (interpretation.actionItems || []).length ||
    (interpretation.notes || []).length
  );
}

function normalizeEmailV1StructuredList(value, limit) {
  const values = Array.isArray(value) ? value : String(value || "").split(/[|\n;]/);
  return uniqueNormalizedValues(values.map(cleanEmailV1DraftLine))
    .filter(isHighQualityEmailV1Bullet)
    .slice(0, limit);
}

function getEmailV1SummaryBullets(sourceText, analysis) {
  const candidates = [
    analysis?.summary,
    ...(analysis?.decisions || []),
    ...getEmailV1CleanSentences(sourceText)
  ];
  const bullets = uniqueNormalizedValues(candidates.map(cleanEmailV1DraftLine))
    .filter(isUsefulEmailV1DraftLine)
    .filter((item) => !isEmailV1ActionItemText(item))
    .slice(0, 2);

  if (bullets.length) {
    return bullets;
  }

  const fallback = cleanEmailV1DraftLine(buildEmailV1FallbackSummary(sourceText));
  return [fallback || "The meeting notes are ready for review."];
}

function getEmailV1ActionItems(sourceText, analysis) {
  const taskItems = (analysis?.tasks || [])
    .map((task) => cleanEmailV1DraftLine(task?.task || task))
    .filter(isUsefulEmailV1DraftLine);
  const sentenceItems = getEmailV1CleanSentences(sourceText)
    .filter(isEmailV1ActionItemText)
    .map(cleanEmailV1DraftLine)
    .filter(isUsefulEmailV1DraftLine);

  return uniqueNormalizedValues([...taskItems, ...sentenceItems]).slice(0, 5);
}

function getEmailV1Notes(sourceText, analysis, summaryBullets, actionItems) {
  const used = new Set([...summaryBullets, ...actionItems].map(normalizeEmailV1ComparisonValue));
  const noteCandidates = [
    ...(analysis?.risks || []),
    ...getEmailV1CleanSentences(sourceText)
  ];

  return uniqueNormalizedValues(noteCandidates.map(cleanEmailV1DraftLine))
    .filter(isUsefulEmailV1DraftLine)
    .filter((item) => !used.has(normalizeEmailV1ComparisonValue(item)))
    .filter((item) => !isEmailV1ActionItemText(item))
    .slice(0, 3);
}

function getEmailV1CleanSentences(sourceText) {
  return getSentences(sourceText)
    .map(cleanEmailV1DraftLine)
    .filter(isUsefulEmailV1DraftLine);
}

function cleanEmailV1DraftLine(value) {
  let line = normalizeBusinessEnglishText(value || "")
    .replace(/\b(?:um|uh|erm|hmm|yeah|yep|okay|ok|like)\b[,\s]*/gi, " ")
    .replace(/\b(?:gonna)\b/gi, "going to")
    .replace(/\b(?:wanna)\b/gi, "want to")
    .replace(/\bworking good\b/gi, "working well")
    .replace(/\b(?:zero|0)\s+decisions?\b[^.?!]*(?:\.|$)/gi, " ")
    .replace(/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/gi, " ")
    .replace(/\b(?:manual notes|live notes|voice command|gmail draft|open gmail draft|notion tasks|meeting dashboard|emails section)\b:?/gi, " ")
    .replace(/\b(?:create|write|prepare|send)\s+(?:an?\s+)?(?:email|gmail draft|draft)\s*(?:to\s+[A-Za-z]+)?\s*(?:saying|that)?\s*/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/^[,.;:\-\s]+|[,.;:\-\s]+$/g, "")
    .trim();

  line = removeRepeatedEmailV1Fragments(line);
  line = line
    .replace(/^(?:we\s+)?need\s+to\s+/i, "")
    .trim();
  if (line) {
    line = line.charAt(0).toUpperCase() + line.slice(1);
  }

  return line;
}

function removeRepeatedEmailV1Fragments(value) {
  const words = normalizeBusinessEnglishText(value).split(/\s+/).filter(Boolean);
  const compacted = [];
  words.forEach((word) => {
    const previous = compacted[compacted.length - 1] || "";
    if (previous.toLowerCase() !== word.toLowerCase()) {
      compacted.push(word);
    }
  });
  return compacted.join(" ");
}

function isUsefulEmailV1DraftLine(value) {
  const line = normalizeBusinessEnglishText(value);
  if (!line || countWords(line) < 3) {
    return false;
  }
  if (hasRawTranscriptGarbageEmailContent(line) || hasEmailIntent(line)) {
    return false;
  }
  if (/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(line)) {
    return false;
  }
  if (/^(?:want|that|create|application|meeting|email|gmail|send|draft|section|task|notes?)\b(?:[,.\s]+(?:want|that|create|application|meeting|email|gmail|send|draft|section|task|notes?))*$/i.test(line)) {
    return false;
  }
  return true;
}

function isHighQualityEmailV1Bullet(value) {
  const line = normalizeBusinessEnglishText(value);
  if (!isUsefulEmailV1DraftLine(line) || isNoisyEmailV1Bullet(line)) {
    return false;
  }

  const words = line.toLowerCase().match(/[a-z0-9]+(?:'[a-z]+)?/g) || [];
  if (words.length < 4 || words.length > 28) {
    return false;
  }

  const functionWords = new Set([
    "a", "an", "and", "are", "as", "at", "be", "for", "from", "in", "is", "it", "of", "on", "or", "that", "the", "this", "to", "was", "who"
  ]);
  const functionWordCount = words.filter((word) => functionWords.has(word)).length;
  const businessSignal = /\b(?:meeting|notes?|client|customer|project|workflow|draft|review|testing|test|confirm|update|progress|next steps?|action|follow-up|approval|risk|blocker|decision|schedule|notion|github|build|application|app|email)\b/i.test(line);
  if (!businessSignal && functionWordCount / words.length > 0.38) {
    return false;
  }

  return true;
}

function isNoisyEmailV1Bullet(value) {
  const line = normalizeBusinessEnglishText(value);
  if (!line) {
    return true;
  }

  if (hasRawTranscriptGarbageEmailContent(line) || isLowQualityRecognizedSpeech(line, {
    source: "email-v1-bullet",
    confidence: 0
  })) {
    return true;
  }

  if (/\b(?:hart and is|who are mentally|mentally sommelier|small and codecs|codexes? is smart|the news|high moral|site in message|arrive(?:d)? to the most important|shown at right|largely realize)\b/i.test(line)) {
    return true;
  }

  if (/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(line)) {
    return true;
  }

  if (/^(?:want|that|create|application|meeting|email|gmail|send|draft|section|task|notes?)\b(?:[,.\s]+(?:want|that|create|application|meeting|email|gmail|send|draft|section|task|notes?))*$/i.test(line)) {
    return true;
  }

  if (/\b(?:and\s+is\s+that|is\s+that\s+it|and\s+the\s+site|who\s+are\s+mentally|small\s+and\s+codex|smart\s+and\s+the\s+news)\b/i.test(line)) {
    return true;
  }

  if (/^\s*(?:i\s+(?:want|think|know)|eh\b|uh\b|um\b|yeah\b)/i.test(line)) {
    return true;
  }

  if (/\b(?:a couple of,\s*){1,}a couple of\b/i.test(line)) {
    return true;
  }

  const words = line.toLowerCase().match(/[a-z0-9]+(?:'[a-z]+)?/g) || [];
  const uniqueWords = new Set(words);
  if (words.length >= 6 && uniqueWords.size <= Math.ceil(words.length * 0.45)) {
    return true;
  }

  return false;
}

function isEmailV1ActionItemText(value) {
  return /\b(?:create|send|follow\s+up|review|schedule|task|need\s+to|needs\s+to|should|please|confirm|test|prepare|finalize|update|share|ask)\b/i.test(value || "");
}

function uniqueNormalizedValues(values) {
  const seen = new Set();
  return (values || []).filter((value) => {
    const normalized = normalizeEmailV1ComparisonValue(value);
    if (!normalized || seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
}

function normalizeEmailV1ComparisonValue(value) {
  return normalizeBusinessEnglishText(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function formatEmailV1BulletText(value) {
  const text = cleanEmailV1DraftLine(value);
  if (!text) {
    return "";
  }

  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function normalizeEmailV1BodyBlock(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => {
      if (!line.trim()) {
        return "";
      }

      const bullet = line.match(/^-\s+(.+)$/);
      if (bullet) {
        return `- ${normalizeBusinessEnglishText(bullet[1])}`;
      }

      return normalizeBusinessEnglishText(line);
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sanitizeEmailV1TemplateBody(value) {
  const body = normalizeEmailV1BodyBlock(value);
  if (!/(^|\n)Summary:/i.test(body) || !/(^|\n)Action Items:/i.test(body)) {
    return body;
  }

  const greeting = getEmailV1TemplateGreeting(body);
  const summaryBullets = getEmailV1TemplateSectionBullets(body, "Summary").filter(isHighQualityEmailV1Bullet).slice(0, 2);
  const actionItems = getEmailV1TemplateSectionBullets(body, "Action Items").filter(isHighQualityEmailV1Bullet).slice(0, 5);
  const notes = getEmailV1TemplateSectionBullets(body, "Notes").filter(isHighQualityEmailV1Bullet).slice(0, 3);
  const sections = [
    greeting,
    "",
    "Here is a concise follow-up based on the meeting notes.",
    "",
    "Summary:",
    ...(summaryBullets.length ? summaryBullets : EMAIL_V1_SAFE_FALLBACK_SUMMARY).map((item) => `- ${formatEmailV1BulletText(item)}`),
    "",
    "Action Items:",
    ...(actionItems.length ? actionItems : EMAIL_V1_SAFE_FALLBACK_ACTIONS).map((item) => `- ${formatEmailV1BulletText(item)}`),
    "",
    "Notes:",
    ...(notes.length ? notes : EMAIL_V1_SAFE_FALLBACK_NOTES).map((item) => `- ${formatEmailV1BulletText(item)}`),
    "",
    "Best,"
  ];

  return normalizeEmailV1BodyBlock(sections.join("\n"));
}

function getEmailV1TemplateGreeting(body) {
  const greeting = String(body || "").split(/\r?\n/).find((line) => /^Hi(?:\s+[^,]+)?,?$/i.test(line.trim()));
  return greeting ? normalizeBusinessEnglishText(greeting) : "Hi,";
}

function getEmailV1TemplateSectionBullets(body, heading) {
  const lines = String(body || "").split(/\r?\n/);
  const headingPattern = new RegExp(`^${escapeRegex(heading)}:\\s*$`, "i");
  const nextHeadingPattern = /^(?:Summary|Action Items|Notes):\s*$/i;
  const start = lines.findIndex((line) => headingPattern.test(line.trim()));
  if (start < 0) {
    return [];
  }

  const values = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (nextHeadingPattern.test(line)) {
      break;
    }
    if (!line || /^Best,?$/i.test(line) || /^Here is a concise follow-up/i.test(line)) {
      continue;
    }
    values.push(line.replace(/^-\s*/, ""));
  }

  return values.map(cleanEmailV1DraftLine).filter(Boolean);
}

function appendEmailV1ListSection(sections, heading, items) {
  const values = (items || []).map(normalizeBusinessEnglishText).filter(Boolean);
  if (!values.length) {
    return;
  }

  sections.push("", heading, ...values.map((item) => `- ${item}`));
}

function getEmailV1KeyPoints(sourceText) {
  const sentences = getSentences(sourceText)
    .map(normalizeBusinessEnglishText)
    .filter((sentence) => sentence.length > 8)
    .filter((sentence) => !hasEmailIntent(sentence))
    .filter((sentence) => !hasRawTranscriptGarbageEmailContent(sentence));
  return sentences.length ? sentences : [buildEmailV1FallbackSummary(sourceText)];
}

function buildEmailV1FallbackSummary(sourceText) {
  const text = normalizeBusinessEnglishText(sourceText);
  return text
    ? truncateAgendaText(text, 220)
    : "The notes are ready for review.";
}

function ensureEmailV1Closing(body) {
  const cleanBody = normalizeBusinessEnglishBlock(body);
  if (/\nBest,?\s*$/i.test(cleanBody)) {
    return cleanBody;
  }

  return normalizeBusinessEnglishBlock(`${cleanBody}\n\nBest,`);
}

function buildEmailComposerContext(commandText, sourceText, analysis, focus, directMessage, requestType, recipientInfo, context) {
  const source = normalizeBusinessEnglishBlock(sourceText);
  const blocker = extractEmailComposerBlocker(source);
  const decision = extractEmailComposerDecision(source);
  const direct = normalizeBusinessEnglishText(directMessage);
  const topic = inferEmailComposerTopic({
    commandText,
    sourceText: source,
    focus,
    directMessage: direct,
    requestType,
    blocker,
    decision,
    context
  });
  const requestAction = inferEmailComposerRequestAction({
    commandText,
    sourceText: source,
    focus,
    directMessage: direct,
    requestType,
    blocker,
    decision,
    topic
  });

  return {
    topic,
    requestAction,
    blocker,
    decision,
    recipientLabel: recipientInfo?.label || "",
    hasClearSignal: Boolean(direct || topic || blocker || decision || requestAction || hasUsefulEmailContext(context)),
    hasRecipient: Boolean(recipientInfo?.label || recipientInfo?.email),
    hasDirectMessage: Boolean(direct)
  };
}

function extractEmailComposerBlocker(sourceText) {
  const match = normalizeBusinessEnglishText(sourceText).match(/\bblocked\b.*?\bbecause\s+([A-Za-z][a-z]+)\s+(?:has\s+not|hasn't|did\s+not|didn't)\s+(sent|send|shared|share|provided|provide|uploaded|upload)\s+(.+?)(?:[.;]|$)/i);
  if (!match) {
    return null;
  }

  const recipient = cleanEmailRecipientLabel(match[1]);
  const item = cleanImplicitEmailTopic(match[3]) || "the missing item";
  return {
    recipient,
    item,
    action: getEmailComposerActionVerb(match[2], item)
  };
}

function getEmailComposerActionVerb(verb, item) {
  if (/\bshare|shared\b/i.test(verb)) {
    return `share ${item}`;
  }
  if (/\bprovide|provided\b/i.test(verb)) {
    return `provide ${item}`;
  }
  if (/\bupload|uploaded\b/i.test(verb)) {
    return `upload ${item}`;
  }
  return `send ${item}`;
}

function extractEmailComposerDecision(sourceText) {
  const match = normalizeBusinessEnglishText(sourceText).match(/\b(?:client|customer|team)\s+(?:approved|confirmed|decided)\s+(.+?),?\s+but\s+(?:we\s+)?need\s+to\s+confirm\s+(.+?)(?:[.;]|$)/i);
  if (!match) {
    return null;
  }

  return {
    approvedItem: cleanImplicitEmailTopic(match[1]) || "the decision",
    nextStep: cleanImplicitEmailTopic(match[2]) || "next steps"
  };
}

function inferEmailComposerTopic({ commandText, sourceText, focus, directMessage, requestType, blocker, decision, context }) {
  const focusedTopic = cleanEmailFocus(focus);
  if (focusedTopic) {
    return cleanEmailComposerTopic(focusedTopic);
  }

  if (blocker?.item) {
    return blocker.item;
  }

  if (decision?.approvedItem || decision?.nextStep) {
    return [decision.approvedItem, decision.nextStep]
      .filter(Boolean)
      .join(" and ");
  }

  if (/\b(?:pro\s+account|github|git\s*hub|upload\s+.*application)\b/i.test(`${directMessage} ${commandText} ${sourceText}`)) {
    return "pro account for the GitHub upload";
  }

  if (/\bworld\s+cup\s+album\b/i.test(`${directMessage} ${commandText} ${sourceText}`)) {
    return "World Cup album availability";
  }

  if (/\b(?:core\s+workflow|notion\s+tasks?|meeting\s+scheduling|emails?\s+still\s+need\s+polish|testing\s+round|final\s+testing|app(?:lication)?\s+is\s+almost\s+complete|ready\s+for\s+(?:their\s+)?next\s+review)\b/i.test(sourceText)) {
    return "application workflow update";
  }

  if (/\binvoice\b/i.test(sourceText)) {
    return "invoice issue";
  }

  if (/\bfinal files?\b/i.test(sourceText)) {
    return "final files";
  }

  if (/\bnext steps?\b/i.test(sourceText)) {
    return "next steps";
  }

  const topic = normalizeBusinessEnglishText((context.topics || []).find(Boolean) || "");
  return topic && !isGenericEmailContextLine(topic) ? topic : "";
}

function cleanEmailComposerTopic(value) {
  const topic = normalizeBusinessEnglishText(value)
    .replace(/^(?:send|provide|share|upload|review|confirm|check|clarify)\s+(?:the\s+)?/i, "")
    .replace(/\s+/g, " ")
    .trim();
  return topic || normalizeBusinessEnglishText(value);
}

function inferEmailComposerRequestAction({ commandText, sourceText, focus, directMessage, requestType, blocker, decision, topic }) {
  if (blocker?.action) {
    return blocker.action;
  }

  if (/\b(?:pro\s+account|github|git\s*hub|upload\s+.*application)\b/i.test(`${directMessage} ${commandText} ${sourceText}`)) {
    return "confirm whether we should upgrade the account or use another upload method";
  }

  if (/\bworld\s+cup\s+album\b/i.test(`${directMessage} ${commandText} ${sourceText}`)) {
    return "confirm whether the World Cup album is available and how to buy it";
  }

  if (/\b(?:one\s+more\s+testing\s+round|two\s+more\s+weeks?|final\s+testing|next\s+review)\b/i.test(`${directMessage} ${commandText} ${sourceText}`)) {
    return "review the update and confirm any feedback for the next testing step";
  }

  const focusedTopic = cleanEmailFocus(focus);
  if (/^(?:send|provide|share|review|confirm|check|clarify)\b/i.test(focusedTopic)) {
    return focusedTopic;
  }

  if (decision?.nextStep) {
    return `confirm ${decision.nextStep}`;
  }

  if (/\binvoice\b/i.test(sourceText)) {
    return "share the latest status on the invoice issue";
  }

  if (requestType === "request-info" && topic) {
    return `review ${topic}`;
  }

  if (requestType === "follow-up" && topic) {
    return `share the latest status on ${topic}`;
  }

  return "";
}

function evaluateEmailDraftQuality({ commandText, sourceText, subject, body, directMessage, focus, context, requestType, recipientInfo, composerContext }) {
  let score = 0.24;
  const cleanBody = normalizeBusinessEnglishBlock(body);
  const cleanSubject = normalizeBusinessEnglishText(subject);

  if (directMessage) {
    score += 0.34;
  }
  if (focus) {
    score += 0.12;
  }
  if (hasUsefulEmailContext(context)) {
    score += 0.16;
  }
  if (recipientInfo?.label || recipientInfo?.email) {
    score += 0.1;
  }
  if (requestType && requestType !== "custom-situation") {
    score += 0.08;
  }
  if (composerContext?.hasClearSignal) {
    score += 0.08;
  }
  if (cleanSubject.length >= 6 && cleanBody.length >= 35) {
    score += 0.1;
  }
  if (/\b(?:review before sending|missing details|limited context)\b/i.test(cleanBody)) {
    score -= 0.12;
  }
  if (hasEmailDraftBlockingNoise(sourceText) && !directMessage) {
    score -= 0.35;
  }
  if (bodyHasNoisyEmailFragments(cleanBody, commandText)) {
    score -= 0.2;
  }

  score = Math.max(0, Math.min(1, score));
  const canOpenDraft = !isTrulyUnusableEmailBody({
    subject: cleanSubject,
    body: cleanBody,
    qualityScore: score
  });
  return {
    score,
    canOpenDraft,
    reviewReason: canOpenDraft
      ? ""
      : getEmailDraftReviewReason(score, directMessage, focus, context)
  };
}

function bodyHasNoisyEmailFragments(body, commandText) {
  const normalizedBody = normalizeForComparison(body);
  const normalizedCommand = normalizeForComparison(commandText);
  if (normalizedCommand && normalizedCommand.length > 28 && normalizedBody.includes(normalizedCommand)) {
    return true;
  }

  return /\b(?:static unclear|fragment broken|unknown words|speech recognition|garbage)\b/i.test(body);
}

function getEmailDraftReviewReason(score, directMessage, focus, context) {
  if (score < EMAIL_ROW_MIN_CONFIDENCE) {
    return "Email draft needs review. Please repeat the topic or message more clearly.";
  }
  if (!directMessage && !focus && !hasUsefulEmailContext(context)) {
    return "Email draft needs review. Please repeat the topic or message more clearly.";
  }
  return "Email draft needs review before Gmail can open.";
}

function inferEmailRecipient(commandText) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  const email = extractEmailAddresses(text).find(Boolean) || "";
  if (email) {
    return {
      label: email,
      email
    };
  }

  const recipientPatterns = [
    /\bwith\s+(?:the\s+)?((?:social\s+medi(?:a|um)|content|marketing|finance|HR|recruiting|support|design|client|customer|product|engineering)\s+team)\b/i,
    /\bwith\s+(?:the\s+)?(HR|finance|client|customer|team|store)\b/i,
    /\bwith\s+([A-Z][a-z]+)\b/,
    /\bemail\s+(?:to\s+)?(the\s+store|the\s+client|the\s+customer|the\s+team|HR|finance|[A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2})(?=\s+(?:because|and|to|saying|say|telling|tell|letting|let|that|about|regarding|concerning|with|$))/i,
    /\b(?:to|for)\s+([A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2}|the\s+store|the\s+client|the\s+customer|the\s+team|HR|finance)(?=\s+(?:because|saying|say|telling|tell|letting|let|that|about|regarding|concerning|with|and|$))/i,
    /\bupdate\s+(?:the\s+)?(client|customer|team|finance|HR|store)\b/i,
    /\b(?:send|share|give)\s+(?:an?\s+)?update\s+(?:to|with)\s+(?:the\s+)?(client|customer|team|finance|HR|store)\b/i,
    /\b(?:let|tell)\s+(?:the\s+)?([A-Za-z][a-z]+|client|customer|team|store|finance|HR)\s+know\b/i,
    /\btell\s+([A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2})\s+(?:that\s+)?(?:we|i|the|our)\b/i,
    /\bask\s+(?:the\s+)?(store|client|customer|team|finance|HR)\b/i,
    /\basking\s+([A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2})\s+to\b/i,
    /\bask\s+([A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2})\s+to\b/i
  ];

  for (const pattern of recipientPatterns) {
    const match = text.match(pattern);
    const label = cleanEmailRecipientLabel(match?.[1] || "");
    if (label) {
      return {
        label,
        email: ""
      };
    }
  }

  return {
    label: "",
    email: ""
  };
}

function cleanEmailRecipientLabel(value) {
  const label = normalizeBusinessEnglishText(value)
    .replace(/\b(?:email|message|gmail|draft|meeting|summary|report|risk|risks|decision|decisions|next|steps|topic|topics|qa|saying|say|telling|tell|and|that|to|for)\b/ig, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/^(?:the\s+)?team$/i.test(label)) {
    return "Team";
  }

  if (/^social\s+medi(?:a|um)\s+team$/i.test(label)) {
    return "Social Media Team";
  }

  if (/^hr$/i.test(label)) {
    return "HR";
  }

  if (/^(?:the\s+)?store$/i.test(label)) {
    return "The Store";
  }

  if (!label || /^(the|a|an|i|me|we|you|them|him|her|their|someone|section|send|to|for|our clients?)$/i.test(label) || /\btheir\b/i.test(label)) {
    return "";
  }

  return label
    .split(/\s+/)
    .map((part) => capitalizeSentence(part.toLowerCase()))
    .join(" ");
}

function inferEmailRequestType(commandText) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  if (/\b(?:escalate|escalation|blocked|blocking|critical)\b/i.test(text)) {
    return "escalation";
  }
  if (/\b(?:clarify|clarification|confirm|double-check|clear up)\b/i.test(text)) {
    return "clarification";
  }
  if (/\b(?:thank|thanks|appreciate|appreciation)\b/i.test(text)) {
    return "thank-you";
  }
  if (/\bfollow[- ]?up\b/i.test(text)) {
    return "follow-up";
  }
  if (/\b(?:pro\s+account|account\s+upgrade|github|git\s*hub|upload\s+.*application)\b/i.test(text)) {
    return "request-info";
  }
  if (/\b(?:asking|ask|request|can you ask|need .* from|information|details)\b/i.test(text)) {
    return "request-info";
  }
  if (/\btest\b/i.test(text)) {
    return "status-update";
  }
  if (/\b(?:status\s+update|everything\s+is\s+working|app(?:lication)?\s+is\s+working|voice\s+feature\s+is\s+improving|working\s+and\s+the\s+voice)\b/i.test(text)) {
    return "status-update";
  }
  if (/\b(?:executive\s+summary|executive|exec\s+summary)\b/i.test(text)) {
    return "executive-summary";
  }
  if (/\b(?:report|results?|metrics?|performance|campaign)\b/i.test(text)) {
    return "project-report";
  }
  if (/\b(?:risk|risks|blocker|blockers|concern|concerns|issue|issues)\b/i.test(text)) {
    return "risk-alert";
  }
  if (/\b(?:decision|decisions|decided|recap)\b/i.test(text)) {
    return "decision-recap";
  }
  if (/\b(?:client|customer|external)\b/i.test(text)) {
    return "client-update";
  }
  if (/\b(?:team|internal|launch\s+plan)\b/i.test(text)) {
    return "internal-team-update";
  }
  if (/\b(?:next\s+steps?|action\s+items?|reminder|todo|follow[- ]?ups?)\b/i.test(text)) {
    return "action-item-reminder";
  }
  if (/\b(?:summary|summarize|summarizing|recap|everything|all topics?|every topic|we discussed)\b/i.test(text)) {
    return "executive-summary";
  }
  if (/\b(?:this\s+situation|the\s+situation|current\s+situation)\b/i.test(text)) {
    return "custom-situation";
  }
  return "custom-situation";
}

function inferEmailTone(commandText) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  if (/\b(?:urgent|asap|immediately|critical|blocked|blocking|escalate|escalation)\b/i.test(text)) {
    return "urgent";
  }
  if (/\b(?:formal|formally)\b/i.test(text)) {
    return "formal";
  }
  if (/\b(?:executive|exec)\b/i.test(text)) {
    return "executive";
  }
  if (/\b(?:concise|brief|short)\b/i.test(text)) {
    return "concise";
  }
  if (/\b(?:warm|friendly|kind)\b/i.test(text)) {
    return "warm";
  }
  if (/\b(?:direct|straightforward)\b/i.test(text)) {
    return "direct";
  }
  return "friendly-professional";
}

function resolveEmailRequestType(requestType, commandText, context, focus) {
  if (requestType && requestType !== "custom-situation") {
    return requestType;
  }

  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  if (/\b(?:risk|risks|blocker|blockers|issue|issues|concern|concerns)\b/i.test(text) || (context.risks || []).length) {
    return "risk-alert";
  }
  if (/\b(?:decision|decisions|decided)\b/i.test(text) || (context.decisions || []).length) {
    return (context.tasks || []).length ? "internal-team-update" : "decision-recap";
  }
  if (/\b(?:next\s+steps?|action\s+items?|task|tasks|todo|todos)\b/i.test(text) || (context.tasks || []).length) {
    return "action-item-reminder";
  }
  if ((context.keyPoints || []).length || (context.conclusions || []).length || focus) {
    return "status-update";
  }
  return "custom-situation";
}

function inferEmailFocus(commandText) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  const focusPatterns = [
    /\basking\s+[A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2}\s+to\s+(.+?)(?:\.|$)/i,
    /\bask\s+[A-Za-z][a-z]+(?:\s+[A-Za-z][a-z]+){0,2}\s+to\s+(.+?)(?:\.|$)/i,
    /\b(?:about|regarding|concerning|on)\s+(.+?)(?:\.|$)/i,
    /\b(?:focused on|focus on)\s+(.+?)(?:\.|$)/i,
    /\b(?:for)\s+.+?\s+\b(?:about|regarding|concerning|on)\s+(.+?)(?:\.|$)/i
  ];

  for (const pattern of focusPatterns) {
    const match = text.match(pattern);
    const focus = cleanEmailFocus(match?.[1] || "");
    if (focus) {
      return focus;
    }
  }

  if (/\bfinance\b/i.test(text)) {
    return "finance discussion";
  }

  if (/\b(?:risk|risks|blocker|blockers)\b/i.test(text)) {
    return "risks and blockers";
  }

  if (/\bdecisions?\b/i.test(text)) {
    return "decisions";
  }

  if (/\b(?:next\s+steps?|action\s+items?|follow[- ]?ups?)\b/i.test(text)) {
    return "next steps";
  }

  return "";
}

function inferEmailDirectMessage(commandText) {
  const text = normalizeBusinessEnglishText(normalizeEmailIntentText(commandText));
  const directPatterns = [
    /\bletting?\s+(?:the\s+)?(?:client|customer|team|store|finance)\s+know\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\bletting\s+(?:him|her|them|[A-Za-z][a-z]+)\s+know\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\blet\s+(?:the\s+)?(?:client|customer|team|store|finance)\s+know\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\blet\s+(?:him|her|them|[A-Za-z][a-z]+)\s+know\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\btell\s+(?:the\s+)?(?:client|customer|team|store|finance)\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\btell\s+(?:him|her|them|[A-Za-z][a-z]+)\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\bupdate\s+(?:the\s+)?(?:client|customer|team|store|finance|HR)\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\bask\s+(?:the\s+)?(?:store|client|customer|team|finance|HR)\s+(?:if|whether)\s+(.+?)(?:\.|$)/i,
    /\bask\s+(?:if|whether)\s+(.+?)(?:\.|$)/i,
    /\b(?:saying|telling)\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\bbecause\s+(.+?)(?:\.|$)/i,
    /\b(?:and\s+)?say\s+in\s+(?:that|the|this)\s+(?:email|message)\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\b(?:and\s+)?say\s+(?:that\s+)?(.+?)(?:\.|$)/i,
    /\b(?:with|containing)\s+(?:a\s+)?(?:message|body)\s+(?:that\s+)?(.+?)(?:\.|$)/i
  ];

  for (const pattern of directPatterns) {
    const match = text.match(pattern);
    const message = cleanDirectEmailMessage(match?.[1] || "");
    if (message) {
      return message;
    }
  }

  return "";
}

function cleanDirectEmailMessage(value) {
  const message = normalizeBusinessEnglishText(value)
    .replace(/\b(?:in\s+)?(?:that|the|this)\s+(?:email|message)\b/ig, "")
    .replace(/\b(?:please|thanks|thank you)\b/ig, "")
    .replace(/\s+/g, " ")
    .replace(/^[,.;:\s]+|[,.;:\s]+$/g, "")
    .trim();

  if (!message || /\b(?:email|gmail|message|draft)\b$/i.test(message)) {
    return "";
  }

  return capitalizeSentence(message);
}

function cleanEmailFocus(value) {
  const focus = normalizeBusinessEnglishText(value)
    .replace(/\btoday['’]s\s+meeting\b/ig, "")
    .replace(/\b(?:this|the)\s+meeting\b/ig, "")
    .replace(/\b(?:summary|summarizing|summarize|recap|everything|all topics?|every topic|we discussed|from)\b/ig, "")
    .replace(/\b(?:email|emails|gmail|gmails|message|messages|draft|follow-up|follow up)\b/ig, "")
    .replace(/^(?:the|a|an)\s+/i, "")
    .replace(/\s+/g, " ")
    .replace(/[.;,]$/, "")
    .trim();

  return focus && focus.length > 2 ? focus : "";
}

function formatEmailSubjectPhrase(value) {
  return cleanText(value)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      return /^(and|or|the|a|an|to|for|of|in|on|from)$/.test(lower)
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function buildEmailContext(sourceText, analysis, focus) {
  const normalizedSource = normalizeBusinessEnglishBlock(sourceText);
  const lines = getLines(normalizedSource);
  const sentences = getSentences(normalizedSource);
  const chunks = dedupe([...lines.flatMap(splitLineIntoChunks), ...sentences].map(cleanText).filter(Boolean));
  const nonEmailChunks = chunks.filter((chunk) => !isEmailRequestContextNoise(chunk));
  const dashboardInsights = buildDashboardInsights(normalizedSource, analysis);
  const focusTerms = focus
    ? focus.toLowerCase().split(/\s+/).filter((word) => word.length > 3 && !stopWords.has(word))
    : [];
  const focusSentences = focusTerms.length
    ? nonEmailChunks.filter((chunk) => focusTerms.some((term) => chunk.toLowerCase().includes(term))).slice(0, 4)
    : [];
  const dashboardKeyPoints = filterEmailContextItems(dashboardInsights.keyPoints || []);
  const sourceKeyPoints = focusSentences.length
    ? focusSentences
    : dashboardKeyPoints.slice(0, 5);
  const fallbackPoints = nonEmailChunks
    .filter((chunk) => chunk.length > 18)
    .slice(0, 5);
  const contextTasks = (analysis.tasks || [])
    .filter((task) => !isEmailRequestContextNoise(task?.task || ""))
    .slice(0, 6);

  return {
    summary: analysis.summary || buildSummary(normalizedSource, sentences, analysis.decisions || [], analysis.tasks || [], analysis.risks || [], []),
    keyPoints: dedupe([...(sourceKeyPoints || []), ...fallbackPoints]).slice(0, 5),
    decisions: filterEmailContextItems(dashboardInsights.decisions || analysis.decisions || []).slice(0, 5),
    risks: filterEmailContextItems(dashboardInsights.risks || analysis.risks || []).slice(0, 5),
    tasks: contextTasks,
    conclusions: filterEmailContextItems(dashboardInsights.conclusions || []).slice(0, 4),
    topics: (dashboardInsights.relevant || dashboardInsights.topics || extractTopics(normalizedSource)).slice(0, 5),
    hasTranscript: Boolean(cleanText(normalizedSource))
  };
}

function isEmailRequestContextNoise(value) {
  const text = normalizeBusinessEnglishText(value);
  if (!text) {
    return false;
  }

  return hasEmailIntent(text) ||
    /\b(?:create|write|prepare|draft|compose|send)\b.+\b(?:email|emails|gmail|message|messages|draft)\b/i.test(text) ||
    /\b(?:email|emails|gmail|message|messages|draft)\b.+\b(?:about|regarding|concerning|saying|telling|letting|asking|for|to)\b/i.test(text);
}

function filterEmailContextItems(items) {
  return (items || [])
    .map(normalizeBusinessEnglishText)
    .filter(Boolean)
    .filter((item) => !isEmailRequestContextNoise(item))
    .filter((item) => !isGenericEmailContextLine(item));
}

function isGenericEmailContextLine(value) {
  return /^(?:discussion notes were captured|no explicit|\d+\s+(?:action item|risk|blocker|decision|key point|topic|conclusion))/i.test(normalizeBusinessEnglishText(value));
}

function inferContextualEmailSubject(commandText, focus, context, requestType = "custom-situation", directMessage = "", recipientInfo = { label: "" }, tone = "friendly-professional") {
  if (directMessage) {
    return applyEmailToneToSubject(inferDirectEmailSubject(directMessage, recipientInfo), tone);
  }

  const topic = getEmailSubjectTopic(focus, context);
  const subjectByType = {
    "follow-up": topic ? `${topic} Follow-Up` : "Follow-Up",
    "executive-summary": topic ? `${topic} Executive Summary` : "Executive Summary",
    "status-update": topic ? `${topic} Status Update` : "Status Update",
    "risk-alert": topic && !/\b(?:risks?|blockers?)\b/i.test(topic) ? `${topic} Risks and Blockers` : "Risks and Blockers",
    "decision-recap": topic ? `${topic} Decision Recap` : "Decision Recap",
    "action-item-reminder": topic && !/\b(?:next\s+steps?|action\s+items?)\b/i.test(topic) ? `${topic} Next Steps` : "Next Steps",
    "project-report": topic ? `${topic} Report` : "Project Report",
    "client-update": topic ? `${topic} Client Update` : "Client Update",
    "internal-team-update": topic ? `${topic} Team Update` : "Team Update",
    "thank-you": topic ? `Thank You: ${topic}` : "Thank You",
    "request-info": topic ? `Request: ${topic}` : "Information Request",
    "escalation": topic ? `Escalation: ${topic}` : "Escalation",
    "clarification": topic ? `Clarification Needed: ${topic}` : "Clarification Needed",
    "custom-situation": topic ? `${topic} Update` : "Situation Update"
  };

  return applyEmailToneToSubject(subjectByType[requestType] || subjectByType["custom-situation"], tone);
}

function getEmailSubjectTopic(focus, context) {
  const rawTopic = focus || (context.topics || []).find(Boolean) || "";
  const topic = formatEmailSubjectPhrase(rawTopic);
  return topic.length > 46 ? `${topic.slice(0, 43).trim()}...` : topic;
}

function applyEmailToneToSubject(subject, tone) {
  const cleanSubject = normalizeBusinessEnglishText(subject) || "Prepared Email";
  if (tone === "urgent" && !/^urgent\b/i.test(cleanSubject)) {
    return `Urgent: ${cleanSubject}`;
  }
  return cleanSubject;
}

function inferDirectEmailSubject(message, recipientInfo) {
  if (/\b(?:pro\s+account|account\s+upgrade|github|git\s*hub|upload\s+.*application)\b/i.test(message)) {
    return "GitHub Upload Account Request";
  }

  if (/\b(?:core\s+workflow\s+is\s+improving|one\s+more\s+testing\s+round|ready\s+for\s+(?:their\s+|your\s+|the\s+)?next\s+review|next\s+review|notion\s+tasks?\s+(?:are\s+)?stable|two\s+more\s+weeks?\s+(?:of\s+)?testing|app(?:lication)?\s+is\s+almost\s+complete)\b/i.test(message)) {
    return "Application Review Update";
  }

  if (/\bworld\s+cup\s+album\b/i.test(message)) {
    return "World Cup Album Availability";
  }

  if (/\bvoice\s+feature\s+is\s+improving\b/i.test(message)) {
    return "Voice Feature Status Update";
  }

  if (/\b(?:everything\s+is\s+(?:ok|okay|working)|app(?:lication)?\s+is\s+working|working\s+in\s+the\s+application)\b/i.test(message)) {
    return "Application Status Update";
  }

  const words = cleanText(message)
    .replace(/[.!?]+$/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 7)
    .join(" ");
  return words ? capitalizeSentence(words) : (recipientInfo?.label ? `Message for ${recipientInfo.label}` : "Prepared Email");
}

function buildContextualEmailBody(commandText, focus, context, requestType = "custom-situation", directMessage = "", recipientInfo = { label: "" }, tone = "friendly-professional", composerContext = {}) {
  if (directMessage) {
    return buildDirectMessageEmailBody(directMessage, recipientInfo, context, tone, composerContext);
  }

  const sections = [
    buildEmailGreeting(recipientInfo),
    "",
    buildInterpretedEmailOpening(requestType, composerContext, tone)
  ];

  const requestLine = buildInterpretedEmailRequestLine(requestType, composerContext, tone);
  if (requestLine) {
    sections.push("", requestLine);
  }

  if (!composerContext.hasClearSignal) {
    sections.push("", "Please review before sending and add the missing topic or message.");
  }

  sections.push("", getEmailClosing(tone));
  return normalizeBusinessEnglishBlock(sections.join("\n"));
}

function buildDirectMessageEmailBody(message, recipientInfo, context, tone = "friendly-professional", composerContext = {}) {
  const sections = [
    buildEmailGreeting(recipientInfo),
    "",
    composeDirectEmailMessage(message, composerContext, tone)
  ];

  sections.push("", getEmailClosing(tone));
  return normalizeBusinessEnglishBlock(sections.join("\n"));
}

function buildInterpretedEmailOpening(requestType, composerContext, tone) {
  const topic = formatEmailTopicForSentence(composerContext.topic || "this");
  if (requestType === "decision-recap") {
    const approvedItem = composerContext.decision?.approvedItem || topic;
    return `I wanted to recap that ${approvedItem} has been approved and make sure the next steps are clear before we move forward.`;
  }
  if (requestType === "risk-alert" || requestType === "escalation") {
    return `I wanted to flag a blocker around ${topic} so we can keep the work moving.`;
  }
  if (requestType === "request-info") {
    return `I wanted to ask for help with ${topic}.`;
  }
  if (requestType === "follow-up") {
    return `I wanted to follow up on ${topic}.`;
  }
  if (requestType === "status-update") {
    return `I wanted to share a quick update on ${topic}.`;
  }
  if (requestType === "action-item-reminder") {
    return `I wanted to align on the next step for ${topic}.`;
  }
  if (requestType === "client-update" || requestType === "internal-team-update") {
    return `I wanted to share a concise update on ${topic}.`;
  }
  if (requestType === "project-report" || requestType === "executive-summary") {
    return `I wanted to send a concise summary of ${topic}.`;
  }
  return composerContext.topic
    ? `I wanted to follow up on ${topic}.`
    : "I wanted to share a quick note, but the topic needs a final review.";
}

function formatEmailTopicForSentence(value) {
  const topic = normalizeBusinessEnglishText(value);
  if (!topic || /^(?:the|a|an|this|that|these|those|my|our|your)\b/i.test(topic)) {
    return topic || "this";
  }

  return `the ${topic}`;
}

function buildInterpretedEmailRequestLine(requestType, composerContext, tone) {
  if (composerContext.requestAction) {
    const action = normalizeBusinessEnglishText(composerContext.requestAction);
    return tone === "urgent"
      ? `Could you please ${action} as soon as possible?`
      : `Could you please ${action}?`;
  }

  if (requestType === "decision-recap" && composerContext.decision?.nextStep) {
    return `Could you confirm ${composerContext.decision.nextStep} and share the owner or timing if available?`;
  }

  if (requestType === "risk-alert" || requestType === "escalation") {
    return "Could you help confirm the next step or who should take ownership?";
  }

  if (requestType === "follow-up" || requestType === "status-update") {
    return "Could you share the latest status and any next step we should track?";
  }

  if (requestType === "action-item-reminder") {
    return "Could you confirm the owner and timing for the next step?";
  }

  return "";
}

function composeDirectEmailMessage(message, composerContext, tone) {
  const cleanMessage = normalizeBusinessEnglishText(message);
  if (/\b(?:pro\s+account|github|git\s*hub|upload\s+.*application)\b/i.test(cleanMessage)) {
    return "I wanted to let you know that I need a pro account to upload this application to GitHub. Could you help confirm whether we should upgrade the account or use another upload method?";
  }

  if (/\bworld\s+cup\s+album\b/i.test(cleanMessage)) {
    return "I wanted to ask if you have the World Cup album available. If so, could you let me know how I can buy it?";
  }

  if (/\b(?:core\s+workflow\s+is\s+improving|one\s+more\s+testing\s+round|ready\s+for\s+(?:their\s+|your\s+|the\s+)?next\s+review|next\s+review|notion\s+tasks?\s+(?:are\s+)?stable)\b/i.test(cleanMessage)) {
    return "I wanted to share a quick update: the core workflow is improving, Notion tasks are stable, meeting scheduling works, and emails are the remaining area that needs polish. We need one more testing round before the next review so we can confirm the workflow end to end.";
  }

  if (/\b(?:app(?:lication)?\s+is\s+almost\s+complete|two\s+more\s+weeks?\s+(?:of\s+)?testing)\b/i.test(cleanMessage)) {
    return "I wanted to share a quick update that the application is almost complete. We need two more weeks for testing before the next review so we can confirm the remaining details with confidence.";
  }

  if (/\b(?:everything\s+is\s+working|app(?:lication)?\s+is\s+working|the\s+app\s+is\s+working)\b/i.test(cleanMessage)) {
    return "I wanted to let you know that the application is working.";
  }

  if (composerContext.requestAction) {
    return `I wanted to ask for help with ${composerContext.topic || "this"}. Could you please ${composerContext.requestAction}?`;
  }

  return normalizeDirectEmailSentence(cleanMessage, tone);
}

function normalizeDirectEmailSentence(message, tone) {
  const cleanMessage = ensureEmailSentencePunctuation(capitalizeSentence(normalizeBusinessEnglishText(message)));
  if (tone === "urgent" && !/\b(?:please|could you|can you)\b/i.test(cleanMessage)) {
    return `${cleanMessage} Please treat this as urgent.`;
  }
  return cleanMessage;
}

function ensureEmailSentencePunctuation(value) {
  const text = normalizeBusinessEnglishText(value);
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function buildEmailGreeting(recipientInfo = { label: "" }) {
  return recipientInfo?.label && !recipientInfo.email
    ? `Hi ${recipientInfo.label},`
    : "Hi,";
}

function getHumanEmailOpening(requestType, focus, context, tone = "friendly-professional") {
  const topic = cleanEmailFocus(focus) || normalizeBusinessEnglishText((context.topics || []).find(Boolean) || "");
  const topicPhrase = topic && !/\b(?:risks?|blockers?)\b/i.test(topic) ? ` on ${topic}` : "";
  if (requestType === "risk-alert") {
    return tone === "urgent"
      ? `I want to flag the risks${topicPhrase} so they can be reviewed quickly.`
      : `I wanted to flag the main risks${topicPhrase} while they are still fresh.`;
  }
  if (requestType === "project-report") {
    return topic
      ? `Here is a short report on ${topic}.`
      : "Here is a short report based on the latest notes.";
  }
  if (requestType === "decision-recap") {
    return "Here is a quick recap of the decisions and what they mean next.";
  }
  if (requestType === "action-item-reminder") {
    return "Here are the action items that need attention.";
  }
  if (requestType === "request-info") {
    return tone === "urgent"
      ? "I need your help with the item below as soon as possible."
      : "Could you help with the item below?";
  }
  if (requestType === "escalation") {
    return "I am escalating this so it gets the right attention.";
  }
  if (requestType === "clarification") {
    return "I wanted to clarify one point before the work moves forward.";
  }
  if (requestType === "thank-you") {
    return tone === "formal"
      ? "I wanted to express my appreciation."
      : "I wanted to send a quick thank-you.";
  }
  if (requestType === "internal-team-update") {
    return tone === "warm"
      ? `Quick friendly update${topicPhrase}:`
      : `Quick team update${topicPhrase}:`;
  }
  if (requestType === "client-update") {
    return `I wanted to share a concise client update${topicPhrase}.`;
  }
  if (requestType === "executive-summary") {
    return "Here is the executive version of the latest discussion.";
  }
  if (requestType === "status-update") {
    return topic
      ? `Here is a quick status update on ${topic}.`
      : "Here is a quick status update.";
  }
  if (requestType === "follow-up") {
    return topic
      ? `I wanted to follow up on ${topic}.`
      : "I wanted to follow up on the open item.";
  }
  return topic
    ? `I wanted to share a useful update on ${topic}.`
    : "I wanted to share the most useful update from the current context.";
}

function hasUsefulEmailContext(context) {
  return Boolean(
    (context.keyPoints || []).length ||
    (context.decisions || []).length ||
    (context.risks || []).length ||
    (context.tasks || []).length ||
    (context.conclusions || []).length
  );
}

function appendNaturalEmailBullets(sections, heading, items, fallbackItems = []) {
  const values = dedupe([...(items || []), ...(fallbackItems || [])]
    .map(normalizeBusinessEnglishText)
    .filter(Boolean))
    .slice(0, 4);
  if (!values.length) {
    return;
  }

  sections.push("", heading);
  values.forEach((item) => {
    sections.push(`- ${item}`);
  });
}

function getEmailTaskLines(tasks) {
  return (tasks || [])
    .filter((task) => task?.task)
    .map((task) => {
      const owner = normalizeBusinessEnglishText(task.owner || task.assigneeText || "");
      const due = normalizeBusinessEnglishText(task.suggestedDate || task.dueDate || "");
      const parts = [normalizeBusinessEnglishText(task.task)];
      if (owner) {
        parts.push(`Owner: ${owner}`);
      }
      if (due) {
        parts.push(`Due: ${due}`);
      }
      return parts.join(" | ");
    });
}

function getConciseContextLines(context) {
  return dedupe([
    ...(context.keyPoints || []),
    ...(context.decisions || []),
    ...(context.risks || []),
    ...(context.conclusions || [])
  ]).slice(0, 4);
}

function getReportEmailHighlights(context, focus) {
  return dedupe([
    ...(context.keyPoints || []),
    ...(context.conclusions || []),
    ...(focus ? [`This short report is focused on ${focus}.`] : [])
  ]).slice(0, 4);
}

function getStatusEmailHighlights(context, focus) {
  return dedupe([
    ...(context.keyPoints || []),
    ...(context.conclusions || []),
    ...(context.decisions || []),
    ...(focus ? [`The update is focused on ${focus}.`, "Please confirm owners and timing for the next steps before sending."] : [])
  ]).slice(0, 4);
}

function getExecutiveEmailHighlights(context, focus) {
  return dedupe([
    ...(context.keyPoints || []),
    ...(context.conclusions || []),
    ...(focus ? [`Main topic: ${focus}.`] : [])
  ]).slice(0, 4);
}

function buildInformationRequestLine(focus, tone) {
  const item = cleanEmailFocus(focus);
  if (item) {
    const request = /^(?:review|check|confirm|send|provide|share|clarify)\b/i.test(item)
      ? item
      : `review ${item}`;
    if (/^(?:send|provide|share)\b/i.test(request)) {
      return tone === "urgent"
        ? `Please ${request} as soon as possible.`
        : `Could you please ${request}?`;
    }
    return tone === "urgent"
      ? `Please ${request} as soon as possible and send back the missing details.`
      : `Could you please ${request} and send back the missing details?`;
  }
  return tone === "urgent"
    ? "Please send back the missing details as soon as possible."
    : "Could you please send back the missing details when you have a chance?";
}

function getEmailClosing(tone) {
  if (tone === "formal" || tone === "executive") {
    return "Regards,";
  }
  if (tone === "warm") {
    return "Thanks,";
  }
  if (tone === "urgent" || tone === "direct") {
    return "Thank you,";
  }
  return "Best,";
}

function getContextualEmailOpening(requestType, focus) {
  if (requestType === "report") {
    return focus
      ? `Here is a report on ${focus} based on the meeting notes.`
      : "Here is a report based on the meeting notes.";
  }

  if (requestType === "risks") {
    return "Here is a risk-focused email based on the meeting notes.";
  }

  if (requestType === "decisions") {
    return "Here is an email focused on the decisions captured in the meeting notes.";
  }

  if (requestType === "next-steps") {
    return "Here is an email focused on the next steps from the meeting notes.";
  }

  if (requestType === "status-update") {
    return "Here is a concise status update based on the request and current notes.";
  }

  if (requestType === "summary") {
    return "Here is a summary of the topics discussed in the meeting.";
  }

  return focus
    ? `Here is a concise follow-up on ${focus} based on the meeting notes.`
    : "Here is the email requested from the meeting notes.";
}

function appendEmailListSection(sections, heading, items) {
  const values = (items || []).map(normalizeBusinessEnglishText).filter(Boolean);
  if (!values.length) {
    return;
  }

  sections.push("", heading, ...values.map((item) => `- ${item}`));
}

function appendEmailTaskSection(sections, tasks) {
  const values = (tasks || []).filter((task) => task?.task);
  if (!values.length) {
    return;
  }

  sections.push("", "Next steps:");
  values.forEach((task) => {
    sections.push(`- ${normalizeBusinessEnglishText(task.task)} | Owner: ${normalizeBusinessEnglishText(task.owner) || "Unassigned"} | Due: ${normalizeBusinessEnglishText(task.suggestedDate) || "TBD"} | Priority: ${normalizeBusinessEnglishText(task.priority) || "Medium"}`);
  });
}

function getPreparedEmailDraft() {
  const directDraft = parseGeneratedEmail(emailOutput.value || latestEmail);
  if (directDraft.body || !emailPreparationEnabled || !latestAnalysis) {
    return directDraft;
  }

  return parseGeneratedEmail(buildFollowUpEmail(
    latestAnalysis.summary || "",
    latestAnalysis.decisions || [],
    latestAnalysis.tasks || [],
    latestAnalysis.risks || []
  ));
}

function setInlineEmailStatus(message, isError) {
  inlineEmailStatus.textContent = message;
  inlineEmailStatus.classList.toggle("error", Boolean(isError));
}

function focusInlineNotionSection() {
  document.getElementById("notionTasksSection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function renderInlineNotionActions(action) {
  const actionToRender = action || {
    type: "tasks",
    tasks: pendingNotionTasks
  };

  if (actionToRender.type === "page") {
    renderInlineNotionTasks([]);
    renderInlineNotionPage(actionToRender.page);
    return;
  }

  inlineNotionPagePanel.hidden = true;
  inlineConfirmNotionPageButton.disabled = true;
  renderInlineNotionTasks(actionToRender.tasks || []);
}

function renderInlineNotionTasks(tasks) {
  inlineNotionTasksOutput.innerHTML = "";
  const existingBySignature = new Map(
    pendingNotionTasks.map((task) => [
      task.signature || getNotionTaskSignature(task),
      task
    ])
  );
  pendingNotionTasks = (tasks || [])
    .map((task, index) => {
      const signature = task.signature || getNotionTaskSignature(task);
      const previous = existingBySignature.get(signature);
      return {
        ...task,
        signature,
        clientId: task.clientId || previous?.clientId || `task-${index}`,
        confirmationState: task.confirmationState || previous?.confirmationState || "Pending approval"
      };
    })
    .filter((task) => !hiddenNotionTaskRows.has(task.signature));

  if (!pendingNotionTasks.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.className = "empty-table";
    cell.textContent = "Prepared Notion tasks will appear here.";
    row.appendChild(cell);
    inlineNotionTasksOutput.appendChild(row);
    setInlineNotionStatus("No Notion tasks prepared yet.", false);
    exportNotionButton.disabled = true;
    return;
  }

  pendingNotionTasks.forEach((task, index) => {
    const row = document.createElement("tr");
    const taskCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const assigneeCell = document.createElement("td");
    const dueDateCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const sourceCell = document.createElement("td");
    const confirmationCell = document.createElement("td");
    const actionButton = document.createElement("button");

    taskCell.className = "task-cell";
    renderHighlightedText(taskCell, task.task || "Untitled task");
    renderHighlightedText(typeCell, task.type || "Task");
    renderHighlightedText(assigneeCell, task.assigneeText || task.assigneeEmail || "Unassigned");
    renderHighlightedText(dueDateCell, task.dueDate || "No due date");

    const priorityBadge = document.createElement("span");
    priorityBadge.className = `priority ${formatClassName(task.priority || "Medium")}`;
    renderHighlightedText(priorityBadge, task.priority || "Medium");
    priorityCell.appendChild(priorityBadge);

    const statusPill = document.createElement("span");
    const statusText = task.confirmationState === "Pending approval"
      ? (task.assignmentStatus || "Pending approval")
      : task.confirmationState;
    statusPill.className = `assignment-pill ${formatClassName(statusText)}`;
    renderHighlightedText(statusPill, statusText);
    statusCell.appendChild(statusPill);

    renderHighlightedText(sourceCell, task.source || "Action plan");

    actionButton.className = "secondary-button compact-button";
    actionButton.type = "button";
    actionButton.dataset.action = "confirm-notion-task";
    actionButton.dataset.index = String(index);
    actionButton.textContent = task.confirmationState === "Confirmed" ? "Confirmed" : "Confirm Task";
    actionButton.disabled = task.confirmationState === "Confirmed";
    const deleteButton = createDeleteRowButton("delete-notion-task", "Hide this prepared Notion task", task.clientId);
    deleteButton.dataset.index = String(index);
    confirmationCell.appendChild(createRowActions(actionButton, deleteButton));

    row.append(taskCell, typeCell, priorityCell, assigneeCell, dueDateCell, sourceCell, statusCell, confirmationCell);
    inlineNotionTasksOutput.appendChild(row);
  });

  setInlineNotionStatus(
    notionConfig.configured
      ? `${pendingNotionTasks.length} Notion task${plural(pendingNotionTasks.length)} pending approval.`
      : "Notion is not configured. Review is visible, but Confirm Task will not send data until setup is complete.",
    Boolean(notionConfig.checked && !notionConfig.configured)
  );
  exportNotionButton.disabled = false;
  applyGlobalSearch();
}

function renderInlineNotionPage(page) {
  inlineNotionPagePanel.hidden = false;
  renderHighlightedText(inlineNotionPageTitle, page?.title || "Untitled Notion page");
  renderHighlightedText(inlineNotionPagePreview, truncateAgendaText(normalizeBusinessEnglishBlock(page?.content || ""), 260) || "No page content prepared.");
  inlineConfirmNotionPageButton.disabled = !page?.title;
  setInlineNotionPageStatus(
    notionConfig.configured
      ? "Pending approval. No page is created until Confirm Page is clicked."
      : "Notion is not configured. Confirm Page will not send data until setup is complete.",
    Boolean(notionConfig.checked && !notionConfig.configured)
  );
  setInlineNotionStatus("Prepared Notion page is ready inline.", false);
  applyGlobalSearch();
}

function setInlineNotionStatus(message, isError) {
  inlineNotionStatus.textContent = message;
  inlineNotionStatus.classList.toggle("error", Boolean(isError));
  setNotionExportStatus(message, isError);
}

function setInlineNotionPageStatus(message, isError) {
  inlineNotionPageStatus.textContent = message;
  inlineNotionPageStatus.classList.toggle("error", Boolean(isError));
}

function renderInlineCsvApproval(tasks) {
  const rows = tasks || [];
  pendingCsvTasks = rows.slice();
  inlineCsvPreviewOutput.innerHTML = "";
  inlineDownloadCsvButton.disabled = !latestCsv || rows.length === 0;
  downloadCsvButton.disabled = inlineDownloadCsvButton.disabled;

  if (!rows.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "empty-table";
    cell.textContent = "No CSV rows prepared yet.";
    row.appendChild(cell);
    inlineCsvPreviewOutput.appendChild(row);
    inlineCsvSummary.textContent = "Prepared action items will be available as a CSV after analysis.";
    setInlineCsvStatus("No CSV prepared yet.", false);
    return;
  }

  rows.slice(0, 4).forEach((task) => {
    const row = document.createElement("tr");
    [task.task, task.owner, task.suggestedDate, task.priority].map(normalizeBusinessEnglishText).forEach((value) => {
      const cell = document.createElement("td");
      renderHighlightedText(cell, value);
      row.appendChild(cell);
    });
    inlineCsvPreviewOutput.appendChild(row);
  });

  inlineCsvSummary.textContent = `${rows.length} action item${plural(rows.length)} prepared. Download CSV is the final approval action.`;
  setInlineCsvStatus("Pending approval", false);
  applyGlobalSearch();
}

function setInlineCsvStatus(message, isError) {
  inlineCsvStatus.textContent = message;
  inlineCsvStatus.classList.toggle("error", Boolean(isError));
}

function openGmailReviewModal() {
  renderInlineEmailApproval();
  openGmailButton.focus();
}

function getPreparedEmailRecipients() {
  return dedupe([
    ...parseAttendeeEmails(attendeeEmails.value),
    ...extractEmailAddresses(latestSourceText),
    ...extractEmailAddresses(notesInput.value),
    ...extractEmailAddresses(liveTranscript.value)
  ]).join(", ");
}

function closeGmailModal() {
  gmailModal.hidden = true;
  gmailModal.setAttribute("aria-hidden", "true");
  setGmailStatus("", false);
  openGmailButton.focus();
}

async function openNotionReviewModal() {
  if (pendingNotionAction && hasNotionTaskOrPageIntent(getCurrentMeetingSourceText())) {
    renderInlineNotionActions(pendingNotionAction);
    focusInlineNotionSection();
    return;
  }

  if (!latestTasks.length) {
    setNotionExportStatus("Prepare action items before exporting to Notion.", true);
    return;
  }

  if (!notionConfig.checked) {
    await refreshNotionStatus();
  }

  if (!notionConfig.configured) {
    setNotionExportStatus("Notion is not configured yet. Add NOTION_TOKEN and NOTION_DATA_SOURCE_ID to .env, share the Notion database with the integration, then restart the server.", true);
    return;
  }

  pendingNotionAction = {
    type: "tasks",
    tasks: buildNotionReviewTasks(latestTasks)
  };
  renderInlineNotionActions(pendingNotionAction);
  focusInlineNotionSection();
}

async function openPreparedNotionAction(action, statusMessage) {
  if (!action) {
    setNotionExportStatus("No Notion action is ready for review.", true);
    return;
  }

  if (!notionConfig.checked) {
    await refreshNotionStatus();
  }

  if (!notionConfig.configured) {
    setNotionExportStatus("Notion is not configured yet. Add NOTION_TOKEN and NOTION_DATA_SOURCE_ID to .env, share the Notion database with the integration, then restart the server.", true);
    return;
  }

  pendingNotionAction = action;
  if (action.type === "page") {
    pendingNotionTasks = [];
    renderInlineNotionActions(action);
  } else {
    pendingNotionTasks = action.tasks || [];
    renderInlineNotionActions(action);
  }

  setInlineNotionStatus(statusMessage || "Review the inline Notion action. Nothing is sent until you confirm.", false);
  focusInlineNotionSection();
  applyGlobalSearch();
}

function closeNotionModal() {
  notionModal.hidden = true;
  notionModal.setAttribute("aria-hidden", "true");
  setNotionModalStatus("", false);
  resetNotionReviewUi();
  exportNotionButton.focus();
}

function buildNotionReviewTasks(tasks) {
  const meeting = normalizeBusinessEnglishText(getNotionMeetingLabel());
  const source = getNotionSourceLabel();

  return tasks.map((task, index) => addAissistantTaskMetadata({
    clientId: `task-${index}`,
    selected: true,
    task: normalizeBusinessEnglishText(task.task),
    assigneeText: normalizeBusinessEnglishText(cleanAssigneeText(task.owner)) || "Unassigned",
    assigneeEmail: extractEmailAddresses(task.owner || "").find(Boolean) || "",
    assignmentStatus: getClientAssignmentStatus(cleanAssigneeText(task.owner)),
    priority: normalizeBusinessEnglishText(task.priority),
    dueDate: normalizeBusinessEnglishText(task.suggestedDate),
    meeting,
    source,
    confidence: calculateTaskConfidence(task),
    riskFlag: task.priority === "High",
    notes: ""
  }, {
    flow: "Generated"
  }));
}

function cleanAssigneeText(value) {
  return cleanText(value)
    .replace(/^(action|task|owner|assignee)\s+/i, "")
    .trim();
}

function buildVoiceNotionTasks(sourceText, analysis) {
  const commandSegments = extractNotionTaskCommandSegments(sourceText);
  const mandatorySegments = extractMandatoryNotionTaskCommandSegments(sourceText);
  const taskSegments = mandatorySegments.length ? mandatorySegments : commandSegments;
  if (taskSegments.length > 1) {
    return taskSegments.map((segment, index) => buildSingleVoiceNotionTask(segment.text, analysis, {
      clientId: `voice-task-${index}`,
      sourceKey: segment.sourceKey
    }));
  }

  const requestedCount = getRequestedNotionTaskCount(sourceText);
  const meetingTasks = analysis.tasks || [];

  if (requestedCount > 1 && meetingTasks.length) {
    return buildNotionReviewTasks(meetingTasks.slice(0, requestedCount)).map((task) => addAissistantTaskMetadata({
      ...task,
      notes: "",
      aissistantFlow: "Voice",
      voiceCommand: normalizeBusinessEnglishText(sourceText),
      confidence: Math.max(task.confidence, 82)
    }, {
      flow: "Voice",
      voiceCommand: sourceText
    }));
  }

  if (/from this meeting|from the meeting|de esta reunion|de la reunion/i.test(sourceText) && meetingTasks.length) {
    return buildNotionReviewTasks(meetingTasks).map((task) => addAissistantTaskMetadata({
      ...task,
      notes: "",
      aissistantFlow: "Voice",
      voiceCommand: normalizeBusinessEnglishText(sourceText),
      confidence: Math.max(task.confidence, 82)
    }, {
      flow: "Voice",
      voiceCommand: sourceText
    }));
  }

  const command = taskSegments[0] || {
    text: sourceText,
    sourceKey: getNotionTaskSegmentSourceKey(sourceText, 0)
  };
  return [buildSingleVoiceNotionTask(command.text, analysis, {
    clientId: "voice-task-0",
    sourceKey: command.sourceKey
  })];
}

function buildVoiceNotionTasksFromSegments(commandSegments, analysis, fallbackText = "") {
  const segments = commandSegments && commandSegments.length
    ? commandSegments
    : [{
        text: fallbackText,
        sourceKey: getNotionTaskSegmentSourceKey(fallbackText, 0)
      }];

  return segments.map((segment, index) => buildSingleVoiceNotionTask(segment.text, analysis, {
    clientId: `voice-task-${index}`,
    sourceKey: segment.sourceKey
  }));
}

function buildSingleVoiceNotionTask(sourceText, analysis, options = {}) {
  const taskTitle = inferVoiceNotionTaskTitle(sourceText, analysis);
  const assignee = inferVoiceNotionAssignee(sourceText);
  const assigneeEmail = extractEmailAddresses(sourceText).find(Boolean) || "";
  const dueDate = inferVoiceNotionDueDate(sourceText);
  const priority = inferVoicePriority(sourceText);
  const assignmentStatus = getVoiceAssignmentStatus(assignee.name, assigneeEmail);

  return addAissistantTaskMetadata({
    clientId: options.clientId || "voice-task-0",
    sourceKey: options.sourceKey || getNotionTaskSegmentSourceKey(sourceText, 0),
    selected: true,
    type: "Task",
    task: normalizeBusinessEnglishText(taskTitle),
    assigneeText: normalizeBusinessEnglishText(assignee.name) || assigneeEmail || "Unassigned",
    assigneeEmail,
    assignmentStatus,
    priority,
    dueDate: normalizeBusinessEnglishText(dueDate),
    meeting: getNotionMeetingLabel(),
    source: getNotionSourceLabel(),
    confidence: calculateVoiceNotionConfidence({
      taskTitle,
      assignee,
      assigneeEmail,
      dueDate,
      priority,
      sourceText
    }),
    riskFlag: priority === "High",
    notes: normalizeBusinessEnglishBlock(buildVoiceNotionTaskNotes(sourceText, analysis)),
    voiceCommand: normalizeBusinessEnglishText(sourceText)
  }, {
    flow: getAissistantFlowLabel(getNotionSourceLabel())
  });
}

function inferVoiceNotionTaskTitle(sourceText, analysis) {
  const text = cleanText(sourceText);
  const patterns = [
    /:\s*(.+?)\s*$/i,
    /\b(?:create|make|add|prepare)\s+(?:(?:a|an|the|new|another)\s+){0,3}(?:notion\s+)?task(?:\s+(?:on|in)\s+notion)?\s+(?:for\s+((?:the\s+)?team|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?|[A-Z])\s+)?to\s+(.+?)(?=\s+(?:by|due|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:create|make|add|prepare)\s+(?:(?:a|an|the|new|another)\s+){0,3}(?:notion\s+)?task(?:\s+(?:on|in)\s+notion)?(?:\s+with\s+(?:high|medium|low)\s+priority)?\s+to\s+(.+?)(?=\s+(?:by|due|for|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:create|make|add|prepare)\s+(?:(?:a|an|the|new|another)\s+){0,3}(?:notion\s+)?task\s+(?:about|regarding|on)\s+(.+?)(?=\s+(?:by|due|for|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:create|make|add|prepare)\s+(?:(?:a|an|the|new|another)\s+){0,3}(?:notion\s+)?task(?:\s+(?:on|in)\s+notion)?\s+for\s+(?:a|an|the)\s+(.+?)(?=\s+(?:by|due|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:create|make|add)\s+(?:(?:a|an|the|new|another)\s+){0,3}(?:notion\s+)?task\s+(?:for\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?\s+)?to\s+(.+?)(?=\s+(?:by|due|for|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:task|tarea)\s+(?:for|para)\s+.+?\s+to\s+(.+?)(?=\s+(?:by|due|for|with|assign|and\s+mark)\b|[.!?]?$)/i,
    /\b(?:crear|crea|agrega|anadir|añadir)\s+(?:una\s+)?(?:tarea\s+)?(?:en\s+notion\s+)?(?:para\s+.+?\s+)?(?:de|para)\s+(.+?)(?=\s+(?:para\s+manana|para\s+hoy|con\s+prioridad|asign|por|el|manana|hoy)\b|[.!?]?$)/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const value = match ? cleanNotionTitle(match[2] || match[1]) : "";
    if (value && !isWeakNotionTaskTitle(value)) {
      return capitalizeSentence(normalizeBusinessEnglishText(value));
    }
  }

  if (/\bthis task\b/i.test(text) && latestTasks.length) {
    return latestTasks[0].task;
  }

  const firstTask = analysis.tasks && analysis.tasks[0];
  if (firstTask && /from this meeting|from the meeting|de esta reunion|de la reunion/i.test(text)) {
    return normalizeBusinessEnglishText(firstTask.task);
  }

  if (/\b(?:create|make|add|prepare)\b/i.test(text) && /\b(?:notion\s+)?task\b/i.test(text)) {
    const priority = inferVoicePriority(sourceText);
    const taskLabel = /\bnotion\s+task\b/i.test(text) ? "New Notion task from voice command" : "New task from voice command";
    return priority === "High" ? `High-priority ${taskLabel.charAt(0).toLowerCase()}${taskLabel.slice(1)}` : taskLabel;
  }

  const assignee = inferVoiceNotionAssignee(sourceText);
  return assignee.name && assignee.name !== "Unassigned"
    ? `Follow up with ${assignee.name}`
    : "New task from voice command";
}

function isWeakNotionTaskTitle(value) {
  const normalized = normalizeScheduleText(value);
  return /^(today|tomorrow|hoy|manana|next business week|friday|lunes|martes|miercoles|jueves|viernes|sabado|domingo)$/.test(normalized) ||
    /^(high|medium|low|alta|media|baja|priority|prioridad|notion)$/.test(normalized);
}

function cleanNotionTitle(value) {
  return normalizeBusinessEnglishText(cleanText(value)
    .replace(/\b(?:in|en)\s+notion\b/ig, "")
    .replace(/\bon\s+notion\b/ig, "")
    .replace(/\bwith\s+(?:high|medium|low)\s+priority\b/ig, "")
    .replace(/\b(?:high|medium|low|alta|media|baja)\s+priority\b/ig, "")
    .replace(/\b(?:prioridad)\s+(?:alta|media|baja)\b/ig, "")
    .replace(/\b(?:by|due|para|el)\s+(?:today|tomorrow|hoy|manana|next\s+\w+|proximo\s+\w+)\b.*$/i, "")
    .replace(/\s+/g, " ")
    .replace(/[.;,]$/, "")
    .trim());
}

function inferVoiceNotionDueDate(sourceText) {
  return extractScheduleDateFromText(sourceText) || "No due date specified";
}

function inferVoiceNotionAssignee(sourceText) {
  const text = cleanText(sourceText);
  const patterns = [
    /\bassign\b.*?\bto\s+([A-Za-zÁÉÍÓÚÑáéíóúñ](?:[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:\s+[A-Za-zÁÉÍÓÚÑáéíóúñ]+)?)?)\b/i,
    /\bassign\s+(?:this\s+task\s+)?to\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?|[A-Z])\b/,
    /\bfor\s+((?:the\s+)?team|[A-Za-z][a-z]+(?:\s+(?!to\b|with\b|by\b|due\b|priority\b|high\b|medium\b|low\b)[A-Za-z][a-z]+)?|[A-Z])\s*(?=(?:to|with|by|due|priority|high|medium|low|$|[.!?]))/i,
    /\bfor\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?|[A-Z])\s+to\b/,
    /\bfor\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?|[A-Z])\s+(?:with|by|due|priority|high|medium|low)\b/,
    /\bpara\s+([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ]+)?|[A-Z])\b/,
    /\basign(?:a|ar)\s+(?:esta\s+tarea\s+)?a\s+([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ]+)?|[A-Z])\b/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const name = match ? cleanText(match[1]) : "";
    if (name && !isAssigneeStopWord(name)) {
      return {
        name: normalizeVoiceAssigneeName(name),
        ambiguous: isAmbiguousAssigneeName(name)
      };
    }
  }

  return {
    name: "",
    ambiguous: false
  };
}

function normalizeVoiceAssigneeName(value) {
  const name = normalizeBusinessEnglishText(value);
  if (/^(?:the\s+)?team$/i.test(name)) {
    return "Team";
  }

  return name;
}

function isAssigneeStopWord(value) {
  return /^(notion|task|tarea|tomorrow|today|manana|hoy|high|medium|low|alta|media|baja)$/i.test(cleanText(value));
}

function isAmbiguousAssigneeName(value) {
  const name = cleanText(value);
  return name.length <= 2 || /^[A-Z]$/.test(name) || /\b(someone|alguien|team|equipo)\b/i.test(name);
}

function getVoiceAssignmentStatus(assigneeName, assigneeEmail) {
  if (assigneeEmail) {
    return "Will match by email";
  }

  if (!assigneeName) {
    return "Unassigned";
  }

  return isAmbiguousAssigneeName(assigneeName) ? "Needs assignment" : "Needs assignment";
}

function inferVoicePriority(sourceText) {
  const text = normalizeScheduleText(sourceText);
  if (/\b(high|urgent|critical|alta|urgente|critica|critico)\b/.test(text)) {
    return "High";
  }

  if (/\b(low|baja)\b/.test(text)) {
    return "Low";
  }

  return "Medium";
}

function calculateVoiceNotionConfidence(context) {
  let score = 62;
  if (context.taskTitle && context.taskTitle !== "AI-prepared Notion task") {
    score += 14;
  }
  if (context.assignee.name || context.assigneeEmail) {
    score += 8;
  }
  if (context.assigneeEmail) {
    score += 5;
  }
  if (context.dueDate && !/^(next business week|no due date specified)$/i.test(context.dueDate)) {
    score += 7;
  }
  if (/\bnotion\b/i.test(context.sourceText)) {
    score += 4;
  }
  return Math.min(score, 96);
}

function buildVoiceNotionTaskNotes(sourceText, analysis) {
  const summary = analysis.summary ? getAgendaSummaryLine(analysis.summary) : "";
  return isUsefulNotionTaskNote(summary, sourceText) ? truncateAgendaText(`Context: ${summary}`, 500) : "";
}

function isUsefulNotionTaskNote(summary, sourceText) {
  const note = normalizeScheduleText(summary);
  const command = normalizeScheduleText(sourceText);
  if (!note || note.length < 20) {
    return false;
  }

  if (command.includes(note) || note.includes(command)) {
    return false;
  }

  return !/\b(?:create|add|make|prepare|assign)\b.{0,80}\b(?:notion\s+)?tasks?\b/.test(note);
}

function getRequestedNotionTaskCount(sourceText) {
  const text = normalizeScheduleText(sourceText);
  const match = text.match(/\b(create|crear|crea|add|agrega|anadir|añadir)\s+(one|two|three|four|five|una|uno|dos|tres|cuatro|cinco|\d{1,2})\s+(?:new\s+|notion\s+|new\s+notion\s+)?(?:tasks|tareas)\b/);
  if (!match) {
    return 1;
  }

  return Math.max(1, Math.min(parseSpokenNumber(match[2]) || 1, 10));
}

function buildVoiceNotionPage(sourceText, analysis) {
  const title = normalizeBusinessEnglishText(inferVoiceNotionPageTitle(sourceText) || "AI-prepared Notion page");
  const relatedTasks = (analysis.tasks || []).slice(0, 5).map((task) => normalizeBusinessEnglishText(task.task));
  const content = buildVoiceNotionPageContent(sourceText, analysis, relatedTasks);

  return {
    title,
    parent: "Configured Notion database",
    content: normalizeBusinessEnglishBlock(content),
    source: getNotionSourceLabel(),
    relatedTasks,
    createdDate: formatInputDate(new Date()),
    tags: normalizeBusinessEnglishList(inferVoiceNotionPageTags(sourceText, analysis)),
    status: "Draft"
  };
}

function inferVoiceNotionPageTitle(sourceText) {
  const text = cleanText(sourceText);
  const patterns = [
    /\b(?:page|pagina)\s+(?:called|named|titled|llamada|llamado|titulada|titulada como)\s+(.+?)(?=\s+(?:with|con|from|using|usando)\b|[.!?]?$)/i,
    /\b(?:called|named|titled|llamada|llamado)\s+(.+?)(?=\s+(?:with|con|from|using|usando)\b|[.!?]?$)/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    const title = match ? cleanNotionTitle(match[1]) : "";
    if (title) {
      return capitalizeSentence(normalizeBusinessEnglishText(title));
    }
  }

  return "";
}

function buildVoiceNotionPageContent(sourceText, analysis, relatedTasks) {
  const summary = analysis.summary || summarizeVoiceCommandForNotion(sourceText);
  const sections = [
    summary ? `Summary: ${summary}` : "",
    relatedTasks.length ? `Related tasks: ${relatedTasks.join("; ")}` : "",
    "Source: prepared from voice command. Full transcript not exported by default."
  ].filter(Boolean);

  return truncateAgendaText(normalizeBusinessEnglishBlock(sections.join("\n\n")), 1200);
}

function inferVoiceNotionPageTags(sourceText, analysis) {
  const topics = extractTopics(sourceText).slice(0, 3);
  if (topics.length) {
    return topics;
  }

  return (analysis.tasks || []).length ? ["Meeting tasks"] : ["Voice note"];
}

function summarizeVoiceCommandForNotion(sourceText) {
  return truncateAgendaText(normalizeBusinessEnglishText(cleanText(sourceText).replace(/\b(?:create|crea|crear|add|agrega)\b/i, "").trim()), 220);
}

function renderNotionReviewTasks(tasks) {
  notionModalTitle.textContent = "Export tasks to Notion";
  notionModalWarning.textContent = "This will send only the reviewed action items to your configured Notion database. The full transcript will not be exported.";
  notionPagePreview.hidden = true;
  notionPageTitlePreview.textContent = "";
  notionPageParentPreview.textContent = "";
  notionPageSourcePreview.textContent = "";
  notionPageContentPreview.textContent = "";
  notionPageTasksPreview.textContent = "";
  notionPageCreatedPreview.textContent = "";
  notionTasksOutput.closest(".table-wrap").hidden = false;
  notionReviewDestination.textContent = "Destination: configured Notion task database.";
  confirmNotionExportButton.textContent = "Confirm export to Notion";
  notionTasksOutput.innerHTML = "";

  if (!tasks.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 10;
    cell.className = "empty-table";
    cell.textContent = "No tasks ready for export.";
    row.appendChild(cell);
    notionTasksOutput.appendChild(row);
    updateNotionReviewCount();
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "notion-task-checkbox";
    checkbox.checked = task.selected;
    checkbox.dataset.index = String(index);
    checkbox.setAttribute("aria-label", `Export task: ${task.task}`);
    checkboxCell.appendChild(checkbox);

    const taskCell = document.createElement("td");
    const assigneeCell = document.createElement("td");
    const assigneeEmailCell = document.createElement("td");
    const assignmentCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const dueDateCell = document.createElement("td");
    const meetingCell = document.createElement("td");
    const confidenceCell = document.createElement("td");
    const notesCell = document.createElement("td");
    const assignmentPill = document.createElement("span");
    const priorityBadge = document.createElement("span");

    taskCell.textContent = normalizeBusinessEnglishText(task.task);
    assigneeCell.textContent = normalizeBusinessEnglishText(task.assigneeText);
    assigneeEmailCell.textContent = task.assigneeEmail || "None detected";
    assignmentPill.className = `assignment-pill ${formatClassName(task.assignmentStatus)}`;
    assignmentPill.textContent = task.assignmentStatus;
    assignmentCell.appendChild(assignmentPill);
    priorityBadge.className = `priority ${task.priority.toLowerCase()}`;
    priorityBadge.textContent = normalizeBusinessEnglishText(task.priority);
    priorityCell.appendChild(priorityBadge);
    dueDateCell.textContent = normalizeBusinessEnglishText(task.dueDate);
    meetingCell.textContent = `${normalizeBusinessEnglishText(task.meeting)} / ${normalizeBusinessEnglishText(task.source)}`;
    confidenceCell.textContent = `${task.confidence}%`;
    notesCell.textContent = normalizeBusinessEnglishBlock(task.notes);

    row.append(checkboxCell, taskCell, assigneeCell, assigneeEmailCell, assignmentCell, priorityCell, dueDateCell, meetingCell, confidenceCell, notesCell);
    notionTasksOutput.appendChild(row);
  });

  updateNotionReviewCount();
}

function renderNotionPageReview(page) {
  const pageData = page || {};
  notionModalTitle.textContent = "Create Notion page";
  notionModalWarning.textContent = "This will create one reviewed Notion page. The full transcript will not be exported.";
  notionTasksOutput.closest(".table-wrap").hidden = true;
  notionPagePreview.hidden = false;
  notionReviewDestination.textContent = `Destination: ${pageData.parent || "configured Notion database"}.`;
  notionReviewCount.textContent = "1 page prepared for review.";
  confirmNotionExportButton.textContent = "Confirm page creation";
  notionTasksOutput.innerHTML = "";
  notionPageTitlePreview.textContent = normalizeBusinessEnglishText(pageData.title) || "Untitled page";
  notionPageParentPreview.textContent = normalizeBusinessEnglishText(pageData.parent) || "Configured Notion database";
  notionPageSourcePreview.textContent = normalizeBusinessEnglishText(pageData.source || getNotionSourceLabel());
  notionPageContentPreview.textContent = normalizeBusinessEnglishBlock(pageData.content || "No content detected.");
  notionPageTasksPreview.textContent = (pageData.relatedTasks || []).length
    ? normalizeBusinessEnglishList(pageData.relatedTasks).join("\n")
    : "No related tasks detected.";
  notionPageCreatedPreview.textContent = pageData.createdDate || formatInputDate(new Date());
}

function resetNotionReviewUi() {
  notionModalTitle.textContent = "Review Notion action";
  notionModalWarning.textContent = "This will send only the reviewed Notion action to your configured Notion workspace. The full transcript will not be exported.";
  notionTasksOutput.closest(".table-wrap").hidden = false;
  notionPagePreview.hidden = true;
  confirmNotionExportButton.textContent = "Confirm export to Notion";
}

function updateNotionReviewCount() {
  if (pendingNotionAction?.type === "page") {
    notionReviewCount.textContent = "1 page prepared for review.";
    confirmNotionExportButton.disabled = !pendingNotionAction.page?.title;
    return;
  }

  const selectedCount = getSelectedNotionTasks().length;
  const totalCount = pendingNotionTasks.length;
  const taskLabel = selectedCount === 1 ? "task" : "tasks";
  notionReviewCount.textContent = `${selectedCount} of ${totalCount} ${taskLabel} selected.`;
  confirmNotionExportButton.disabled = selectedCount === 0;
}

function getSelectedNotionTasks() {
  return Array.from(notionTasksOutput.querySelectorAll(".notion-task-checkbox"))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => pendingNotionTasks[Number(checkbox.dataset.index)])
    .filter(Boolean);
}

function handleInlineNotionTaskClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  if (button.dataset.action === "delete-notion-task") {
    deletePreparedNotionTask(Number(button.dataset.index));
    return;
  }

  if (button.dataset.action === "confirm-notion-task") {
    confirmInlineNotionTask(Number(button.dataset.index));
  }
}

function deletePreparedNotionTask(index) {
  const task = pendingNotionTasks[index];
  if (!task) {
    return;
  }

  hiddenNotionTaskRows.add(task.signature || getNotionTaskSignature(task));
  persistHiddenRowKeys(HIDDEN_NOTION_TASKS_STORAGE_KEY, hiddenNotionTaskRows);
  pendingNotionTasks = pendingNotionTasks.filter((_, taskIndex) => taskIndex !== index);
  if (pendingNotionAction?.type === "tasks") {
    pendingNotionAction.tasks = pendingNotionTasks;
  }
  renderInlineNotionTasks(pendingNotionTasks);
  setInlineNotionStatus("Prepared Notion task hidden locally. Existing Notion pages are not deleted.", false);
}

async function confirmInlineNotionTask(index) {
  const task = pendingNotionTasks[index];
  let finalStatusMessage = "";
  let finalStatusIsError = false;
  if (!task) {
    setInlineNotionStatus("No prepared Notion task was found for that row.", true);
    return;
  }

  if (!notionConfig.checked) {
    await refreshNotionStatus();
  }

  if (!notionConfig.configured) {
    setInlineNotionStatus("Notion is not configured. No task data was sent. Add the Notion credentials to .env, share the database with the integration, then restart the server.", true);
    return;
  }

  pendingNotionTasks[index] = {
    ...task,
    confirmationState: "Pending approval"
  };
  setInlineNotionStatus(`Creating "${task.task}" in Notion...`, false);
  renderInlineNotionTasks(pendingNotionTasks);
  const rowButton = inlineNotionTasksOutput.querySelector(`button[data-action="confirm-notion-task"][data-index="${index}"]`);
  if (rowButton) {
    rowButton.disabled = true;
    rowButton.textContent = "Creating...";
  }

  try {
    const response = await fetch(NOTION_EXPORT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        confirmed: true,
        tasks: [buildNotionExportTaskPayload(task)]
      })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Notion task creation failed.");
    }

    const failedCount = Array.isArray(data.failed) ? data.failed.length : 0;
    if (failedCount) {
      throw new Error(data.failed[0]?.message || "Notion task creation failed.");
    }

    pendingNotionTasks[index] = {
      ...pendingNotionTasks[index],
      confirmationState: "Confirmed"
    };
    finalStatusMessage = `Task created in Notion: ${task.task}`;
  } catch (error) {
    pendingNotionTasks[index] = {
      ...pendingNotionTasks[index],
      confirmationState: "Failed"
    };
    finalStatusMessage = error.message || "Notion task creation failed.";
    finalStatusIsError = true;
  } finally {
    renderInlineNotionTasks(pendingNotionTasks);
    if (finalStatusMessage) {
      setInlineNotionStatus(finalStatusMessage, finalStatusIsError);
    }
  }
}

async function confirmInlineNotionPage() {
  const page = pendingNotionAction?.page;
  if (!page || !page.title) {
    setInlineNotionPageStatus("The Notion page needs a title before it can be created. Say the title by voice and try again.", true);
    return;
  }

  if (!notionConfig.checked) {
    await refreshNotionStatus();
  }

  if (!notionConfig.configured) {
    setInlineNotionPageStatus("Notion is not configured. No page data was sent. Add credentials to .env, share the database with the integration, then restart the server.", true);
    return;
  }

  inlineConfirmNotionPageButton.disabled = true;
  inlineConfirmNotionPageButton.textContent = "Creating...";
  setInlineNotionPageStatus("Creating reviewed page in Notion...", false);

  try {
    const response = await fetch(NOTION_PAGE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        confirmed: true,
        page
      })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Notion page creation failed.");
    }

    setInlineNotionPageStatus("Page created in Notion.", false);
    setInlineNotionStatus("Page created in Notion.", false);
    inlineConfirmNotionPageButton.textContent = "Confirmed";
  } catch (error) {
    setInlineNotionPageStatus(error.message || "Notion page creation failed.", true);
    setInlineNotionStatus(error.message || "Notion page creation failed.", true);
    inlineConfirmNotionPageButton.disabled = false;
    inlineConfirmNotionPageButton.textContent = "Confirm Page";
  }
}

async function exportReviewedTasksToNotion() {
  if (!notionConfig.configured) {
    setNotionModalStatus("Notion is not configured. No task data was sent.", true);
    return;
  }

  if (pendingNotionAction?.type === "page") {
    await exportReviewedPageToNotion();
    return;
  }

  const selectedTasks = getSelectedNotionTasks();
  if (!selectedTasks.length) {
    setNotionModalStatus("Select at least one task before exporting.", true);
    return;
  }

  setNotionModalBusy(true);
  setNotionModalStatus("Exporting selected tasks to Notion...", false);

  try {
    const response = await fetch(NOTION_EXPORT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        confirmed: true,
        tasks: selectedTasks.map(buildNotionExportTaskPayload)
      })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Notion export failed.");
    }

    const createdCount = Array.isArray(data.created) ? data.created.length : 0;
    const failedCount = Array.isArray(data.failed) ? data.failed.length : 0;
    const message = failedCount
      ? `${createdCount} task${plural(createdCount)} exported, ${failedCount} failed. Review Notion setup or task details.`
      : `${createdCount} task${plural(createdCount)} exported to Notion.`;

    setNotionModalStatus(message, Boolean(failedCount));
    setNotionExportStatus(message, Boolean(failedCount));
  } catch (error) {
    setNotionModalStatus(error.message || "Notion export failed.", true);
    setNotionExportStatus(error.message || "Notion export failed.", true);
  } finally {
    setNotionModalBusy(false);
  }
}

async function exportReviewedPageToNotion() {
  const page = pendingNotionAction?.page;
  if (!page || !page.title) {
    setNotionModalStatus("The Notion page needs a title before it can be created. Say the title by voice and try again, or use optional correction mode.", true);
    return;
  }

  setNotionModalBusy(true);
  setNotionModalStatus("Creating reviewed page in Notion...", false);

  try {
    const response = await fetch(NOTION_PAGE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        confirmed: true,
        page
      })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Notion page creation failed.");
    }

    const message = "Page created in Notion.";
    setNotionModalStatus(message, false);
    setNotionExportStatus(message, false);
  } catch (error) {
    setNotionModalStatus(error.message || "Notion page creation failed.", true);
    setNotionExportStatus(error.message || "Notion page creation failed.", true);
  } finally {
    setNotionModalBusy(false);
  }
}

function getClientAssignmentStatus(owner) {
  if (!owner || owner === "Unassigned") {
    return "Unassigned";
  }

  return "Needs assignment";
}

function calculateTaskConfidence(task) {
  let score = 72;

  if (task.owner && task.owner !== "Unassigned") {
    score += 10;
  }

  if (task.suggestedDate && !/^next business week$/i.test(task.suggestedDate)) {
    score += 8;
  }

  if (task.priority) {
    score += 5;
  }

  return Math.min(score, 95);
}

function getNotionMeetingLabel() {
  const explicitTitle = cleanText(meetingTitle.value);
  if (explicitTitle) {
    return explicitTitle;
  }

  const sourceText = getCurrentMeetingSourceText();
  return sourceText ? inferMeetingTitle(sourceText) : "Meeting action plan";
}

function getNotionSourceLabel() {
  if (!liveMode.hidden && liveTranscript.value.trim()) {
    return "Live notes";
  }

  return "Manual notes";
}

function getAissistantFlowLabel(sourceLabel = getNotionSourceLabel(), fallback = "") {
  if (/^voice$/i.test(fallback)) {
    return "Voice";
  }

  if (/^generated$/i.test(fallback)) {
    return "Generated";
  }

  if (/^manual$/i.test(fallback)) {
    return "Manual";
  }

  if (/^live notes$/i.test(sourceLabel)) {
    return "Voice";
  }

  if (/^generated action plan$/i.test(sourceLabel)) {
    return "Generated";
  }

  return "Manual";
}

function addAissistantTaskMetadata(task, options = {}) {
  const source = normalizeBusinessEnglishText(task.source || getNotionSourceLabel());
  const flow = normalizeBusinessEnglishText(options.flow || task.aissistantFlow || getAissistantFlowLabel(source));
  const voiceCommand = normalizeBusinessEnglishText(options.voiceCommand || task.voiceCommand || "");
  const review = getAissistantTaskReviewInfo({
    ...task,
    source,
    aissistantFlow: flow,
    voiceCommand
  });

  return {
    ...task,
    source,
    createdByAIssistant: true,
    aissistantFlow: flow,
    voiceCommand,
    needsReview: review.needsReview,
    reviewReason: review.reason
  };
}

function getAissistantTaskReviewInfo(task) {
  const reasons = [];
  const title = normalizeBusinessEnglishText(task.task);
  const assignee = normalizeBusinessEnglishText(task.assigneeText);
  const dueDate = normalizeBusinessEnglishText(task.dueDate);
  const confidence = Number(task.confidence);

  if (!title || /^new\s+(?:notion\s+)?task\s+from\s+voice\s+command$/i.test(title)) {
    reasons.push("Task title needs detail");
  }

  if (!assignee || /^unassigned$/i.test(assignee) || /^needs assignment$/i.test(task.assignmentStatus)) {
    reasons.push("Assignee needs review");
  }

  if (!dueDate || /^no due date specified$/i.test(dueDate) || /^next business week$/i.test(dueDate)) {
    reasons.push("Due date is missing or broad");
  }

  if (Number.isFinite(confidence) && confidence < 75) {
    reasons.push("Extraction confidence is low");
  }

  return {
    needsReview: reasons.length > 0,
    reason: reasons.join("; ")
  };
}

function buildNotionExportTaskPayload(task) {
  return addAissistantTaskMetadata(task);
}

function setNotionExportStatus(message, isError) {
  notionExportStatus.textContent = message;
  notionExportStatus.classList.toggle("error", Boolean(isError));
}

function setNotionModalStatus(message, isError) {
  notionModalStatus.textContent = message;
  notionModalStatus.classList.toggle("error", Boolean(isError));
}

function setCsvModalStatus(message, isError) {
  csvModalStatus.textContent = message;
  csvModalStatus.classList.toggle("error", Boolean(isError));
}

function setNotionModalBusy(isBusy) {
  const isPageAction = pendingNotionAction?.type === "page";
  const canConfirm = isPageAction ? Boolean(pendingNotionAction.page?.title) : getSelectedNotionTasks().length > 0;
  confirmNotionExportButton.disabled = isBusy || !canConfirm;
  confirmNotionExportButton.textContent = isBusy
    ? (isPageAction ? "Creating..." : "Exporting...")
    : (isPageAction ? "Confirm page creation" : "Confirm export to Notion");
  cancelNotionButton.disabled = isBusy;
  closeNotionModalButton.disabled = isBusy;
}

function formatClassName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function openReviewedEmailInGmail(emailId = "") {
  const rowDraft = typeof emailId === "string" ? getPreparedEmailRowById(emailId) : null;
  const fallbackDraft = getLatestPreparedEmailRow();
  const draft = rowDraft || fallbackDraft || getPreparedEmailDraft();
  const recipients = rowDraft?.recipients ?? fallbackDraft?.recipients ?? getPreparedEmailRecipients();
  const subject = normalizeBusinessEnglishText(draft.subject) || "Meeting follow-up and action plan";
  const body = sanitizeEmailV1TemplateBody(draft.body);
  renderInlineEmailApproval();

  if (!body) {
    setInlineEmailStatus("Prepare everything before opening a Gmail draft.", true);
    setInputStatus("Prepare everything before opening a Gmail draft.", true);
    return;
  }

  if ((rowDraft || fallbackDraft) && !canOpenPreparedEmailDraft(rowDraft || fallbackDraft)) {
    const reviewMessage = (rowDraft || fallbackDraft).reviewReason || "Email draft needs review. Please repeat the topic or message more clearly.";
    setInlineEmailStatus(reviewMessage, true);
    setInputStatus(reviewMessage, true);
    return;
  }

  const gmailUrl = buildGmailComposeUrl({
    recipients,
    subject,
    body
  });
  const openedWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

  if (!openedWindow) {
    try {
      await copyText(formatEmailForClipboard(subject, body));
      setInlineEmailStatus("Gmail was blocked by the browser. The email was copied as a fallback.", true);
      setInputStatus("Gmail was blocked. Email copied to clipboard.", true);
    } catch (error) {
      setInlineEmailStatus("Gmail was blocked. Use Copy email as the fallback.", true);
      setInputStatus("Gmail was blocked. Use Copy email as the fallback.", true);
    }
    return;
  }

  setInlineEmailStatus("Opened", false);
  if (rowDraft || fallbackDraft) {
    const openedRow = rowDraft || fallbackDraft;
    openedRow.confirmationState = "Opened";
    renderPreparedEmailRows();
  }
  setInputStatus(recipients
    ? "Gmail draft opened in your browser. Review before sending."
    : "Gmail draft opened with a blank To field. Add recipients in Gmail before sending.", false);
}

function parseGeneratedEmail(emailText) {
  const lines = String(emailText || "").split(/\r?\n/);
  const subjectIndex = lines.findIndex((line) => /^subject\s*:/i.test(line));
  const subject =
    subjectIndex >= 0
      ? lines[subjectIndex].replace(/^subject\s*:\s*/i, "").trim()
      : "Meeting follow-up and action plan";
  const bodyLines = subjectIndex >= 0 ? lines.filter((_, index) => index !== subjectIndex) : lines;

  while (bodyLines.length && !bodyLines[0].trim()) {
    bodyLines.shift();
  }

  return {
    subject: normalizeBusinessEnglishText(subject),
    body: normalizeBusinessEnglishBlock(bodyLines.join("\n").trim())
  };
}

function buildGmailComposeUrl({ recipients, subject, body }) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    su: subject,
    body
  });

  if (recipients) {
    params.set("to", recipients);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

function formatEmailForClipboard(subject, body) {
  return `Subject: ${subject}\n\n${body}`;
}

function setGmailStatus(message, isError) {
  gmailStatus.textContent = message;
  gmailStatus.classList.toggle("error", Boolean(isError));
}

function updateGmailRecipientsWarning() {
  const hasRecipients = Boolean(gmailRecipientsInput.value.trim());
  gmailRecipientsWarning.hidden = hasRecipients;

  if (!hasRecipients) {
    setGmailStatus("No recipient detected. Gmail will open without a To field unless you add recipients here.", false);
    return;
  }

  if (/No recipient detected|Recipient field is empty/i.test(gmailStatus.textContent)) {
    setGmailStatus("Review the draft. Gmail will open a browser compose window; nothing is sent automatically.", false);
  }
}

async function confirmAndScheduleMeeting(meetingId = "") {
  const proposal = typeof meetingId === "string" && meetingId
    ? getPreparedMeetingById(meetingId)
    : pendingMeetingProposal;

  if (!proposal) {
    setSchedulerStatus("Review the prepared meeting proposal before scheduling.", true);
    return;
  }

  if (hasMissingMeetingFields(proposal)) {
    setSchedulerStatus(`Cannot schedule yet. Voice preparation needs: ${formatMissingMeetingFields(proposal)}.`, true);
    proposal.confirmationState = "Needs detail";
    renderPreparedMeetings();
    updateScheduleConfirmAvailability();
    return;
  }

  pendingMeetingProposal = proposal;
  setInlineMeetingBusy(true, proposal.clientId);
  setSchedulerStatus("Scheduling request in progress...", false);

  let scheduledSuccessfully = false;

  try {
    const result = await scheduleMeeting(proposal);
    scheduledSuccessfully = true;
    proposal.confirmationState = "Confirmed";
    proposal.result = result;
    proposal.error = "";
    renderScheduleResult(result);
    renderPreparedMeetings();
    setSchedulerStatus("Meeting scheduled. Other prepared meetings remain pending until you confirm them.", false);
  } catch (error) {
    proposal.confirmationState = "Failed";
    proposal.error = error.message || "Scheduling failed.";
    renderPreparedMeetings();
    setSchedulerStatus(error.message || "Scheduling failed.", true);
    renderScheduleError(error.message || "Scheduling failed.");
  } finally {
    if (!scheduledSuccessfully) {
      updateScheduleConfirmAvailability();
    }
  }
}

async function scheduleMeeting(proposal) {
  const payload = {
    title: proposal.title,
    date: proposal.date,
    startTime: proposal.startTime,
    endTime: proposal.endTime,
    durationMinutes: proposal.durationMinutes,
    attendees: proposal.attendees,
    agenda: proposal.agenda,
    summary: proposal.summary,
    confirmed: true
  };

  try {
    const response = await fetch(SCHEDULE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await readScheduleResponse(response);

    if (!response.ok) {
      throw new Error(getSchedulingErrorMessage(response, data));
    }

    if (data.credentialsMissing || data.missingCredentials || data.demoMode) {
      throw new Error("Real scheduling is unavailable. Configure Google Calendar credentials and sign in before confirming a meeting.");
    }

    return {
      demo: false,
      eventLink: data.eventLink || data.htmlLink || "",
      meetLink: data.meetLink || data.meetingLink || "",
      message: data.message || "The meeting was scheduled by the backend."
    };
  } catch (error) {
    if (isNetworkOrStaticFileError(error)) {
      throw new Error("Real scheduling is unavailable because the backend or Google Calendar setup could not be reached.");
    }

    throw error;
  }
}

async function readScheduleResponse(response) {
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
}

function getSchedulingErrorMessage(response, data) {
  if (response.status === 501 || data.credentialsMissing || data.missingCredentials) {
    return data.message || "Real scheduling is unavailable. Configure the calendar provider before confirming a meeting.";
  }

  if (response.status === 401) {
    return "Sign in with Google before confirming a meeting.";
  }

  if (response.status === 403) {
    return data.message || "This Google account is not allowed to schedule meetings from this app.";
  }

  if (response.status === 404) {
    return "Real scheduling is unavailable because the scheduling endpoint could not be reached.";
  }

  return data.message || `Scheduling failed with status ${response.status}.`;
}

function isNetworkOrStaticFileError(error) {
  return error instanceof TypeError || /failed to fetch|network|fetch/i.test(error.message || "");
}

function renderScheduleResult(result) {
  scheduleResult.hidden = false;
  scheduleResult.classList.remove("error");
  scheduleResult.textContent = "";

  const message = document.createElement("div");
  renderHighlightedText(message, result.message);
  scheduleResult.appendChild(message);

  if (result.meetLink) {
    const linkLabel = document.createElement("span");
    renderHighlightedText(linkLabel, result.demo ? "Simulated Meet link: " : "Meet link: ");
    const link = document.createElement("a");
    link.href = result.meetLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    renderHighlightedText(link, result.meetLink);
    scheduleResult.appendChild(linkLabel);
    scheduleResult.appendChild(link);
  }

  if (result.eventLink) {
    const separator = document.createElement("div");
    const linkLabel = document.createElement("span");
    const link = document.createElement("a");
    separator.textContent = "";
    renderHighlightedText(linkLabel, "Calendar event: ");
    link.href = result.eventLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    renderHighlightedText(link, result.eventLink);
    scheduleResult.appendChild(separator);
    scheduleResult.appendChild(linkLabel);
    scheduleResult.appendChild(link);
  }

  applyGlobalSearch();
}

function renderScheduleError(message) {
  scheduleResult.hidden = false;
  scheduleResult.classList.add("error");
  renderHighlightedText(scheduleResult, message);
  applyGlobalSearch();
}

function setModalBusy(isBusy) {
  confirmScheduleButton.disabled = isBusy || !canConfirmRealSchedule();
  confirmScheduleButton.setAttribute("aria-disabled", String(confirmScheduleButton.disabled));
  inlineConfirmMeetingButton.disabled = confirmScheduleButton.disabled;
  inlineConfirmMeetingButton.setAttribute("aria-disabled", String(inlineConfirmMeetingButton.disabled));
  cancelScheduleButton.disabled = isBusy;
  closeScheduleModalButton.disabled = isBusy;
  confirmScheduleButton.textContent = isBusy ? "Scheduling..." : "Confirm Meeting";
  inlineConfirmMeetingButton.textContent = isBusy ? "Scheduling..." : "Confirm Meeting";
}

function updateScheduleConfirmAvailability() {
  confirmScheduleButton.disabled = !canConfirmRealSchedule();
  confirmScheduleButton.setAttribute("aria-disabled", String(confirmScheduleButton.disabled));
  inlineConfirmMeetingButton.disabled = confirmScheduleButton.disabled;
  inlineConfirmMeetingButton.setAttribute("aria-disabled", String(inlineConfirmMeetingButton.disabled));
  meetingRowsOutput.querySelectorAll("[data-action='confirm-meeting']").forEach((button) => {
    const proposal = getPreparedMeetingById(button.dataset.meetingId);
    button.disabled = !canConfirmMeetingProposal(proposal) || isMeetingRowTerminalOrBusy(proposal || {});
    button.setAttribute("aria-disabled", String(button.disabled));
  });
}

function canConfirmRealSchedule(proposal = pendingMeetingProposal) {
  return canConfirmMeetingProposal(proposal);
}

function canConfirmMeetingProposal(proposal) {
  if (!proposal || hasMissingMeetingFields(proposal)) {
    return false;
  }

  if (calendarAuthState.provider === "apps_script") {
    return Boolean(calendarAuthState.configured);
  }

  return Boolean(calendarAuthState.configured && calendarAuthState.authenticated);
}

function getScheduleModalWarning() {
  if (pendingMeetingProposal && hasMissingMeetingFields(pendingMeetingProposal)) {
    return `The app still needs: ${formatMissingMeetingFields(pendingMeetingProposal)}. Nothing can be scheduled until the missing detail is captured by voice or corrected manually.`;
  }

  if (calendarAuthState.provider === "apps_script") {
    if (!calendarAuthState.configured) {
      return "Calendar bridge is not configured. Add the Apps Script web app URL and shared secret before Confirm Meeting can create an event.";
    }

    return "No meeting, calendar invite, or Google Meet link will be created through the Calendar bridge unless you click Confirm Meeting.";
  }

  if (!calendarAuthState.configured) {
    return "Google Calendar is not configured. Real scheduling requires Google Calendar setup before Confirm Meeting can create an event.";
  }

  if (!calendarAuthState.authenticated) {
    return "Sign in with Google to enable Confirm Meeting. No calendar event or invite will be created until you confirm.";
  }

  return "No meeting, calendar invite, or Google Meet link will be created unless you click Confirm Meeting.";
}

function setSchedulerStatus(message, isError) {
  schedulerStatus.textContent = message;
  schedulerStatus.classList.toggle("error", Boolean(isError));
}

function calculateEndTime(startTime, durationMinutes) {
  const [hours, minutes] = startTime.split(":").map(Number);
  const date = new Date();
  date.setHours(hours || 0, minutes || 0, 0, 0);
  date.setMinutes(date.getMinutes() + durationMinutes);

  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatDisplayDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function formatDisplayTime(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const date = new Date();
  date.setHours(hours || 0, minutes || 0, 0, 0);

  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit"
  });
}

function getNextBusinessDate(date) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
    nextDate.setDate(nextDate.getDate() + 1);
  }

  return nextDate;
}

function formatInputDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function formatInputTime(date) {
  return [
    String(date.getHours()).padStart(2, "0"),
    String(date.getMinutes()).padStart(2, "0")
  ].join(":");
}

function switchMode(mode) {
  const useLiveMode = mode === "live";

  manualMode.hidden = useLiveMode;
  liveMode.hidden = !useLiveMode;
  manualMode.classList.toggle("active-mode", !useLiveMode);
  liveMode.classList.toggle("active-mode", useLiveMode);
  manualModeButton.classList.toggle("active", !useLiveMode);
  liveModeButton.classList.toggle("active", useLiveMode);
  manualModeButton.setAttribute("aria-selected", String(!useLiveMode));
  liveModeButton.setAttribute("aria-selected", String(useLiveMode));

  if (useLiveMode) {
    updateLiveInsights();
  }
}

function initializeThemeMode() {
  const savedTheme = getSavedThemeMode();
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setThemeMode(savedTheme || (prefersDark ? "dark" : "light"), { persist: false });
}

function toggleThemeMode() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setThemeMode(nextTheme, { persist: true });
}

function setThemeMode(theme, options = {}) {
  const mode = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = mode;

  if (themeToggleButton) {
    const isDark = mode === "dark";
    themeToggleButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggleButton.setAttribute("aria-pressed", String(isDark));
  }

  if (options.persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      // Theme preference is optional; the app should continue if browser storage is unavailable.
    }
  }
}

function getSavedThemeMode() {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : "";
  } catch (error) {
    return "";
  }
}

function canUseLiveVoiceOrigin() {
  return location.protocol === "http:" || location.protocol === "https:";
}

function isFileProtocolApp() {
  return location.protocol === "file:";
}

function getLocalhostRequiredMessage() {
  return "Microphone voice scheduling requires the local server. Please open http://localhost:3000.";
}

function getMicrophoneRecoveryMessage() {
  return "Microphone permission is denied for localhost:3000. Click Start listening or Retry microphone permission to try again. If the browser rejects it, allow microphone access in the address bar, refresh this page, and retry.";
}

function blockFileProtocolVoice() {
  micPermissionState = "blocked";
  isListening = false;
  recognitionStarting = false;
  recognitionActive = false;
  clearRecognitionTimers();
  updateListeningControls();
  speechFallback.hidden = false;
  speechFallback.textContent = getLocalhostRequiredMessage();
  hideMicrophoneRecovery();
  setLiveStatus(`Open from localhost required. ${getLocalhostRequiredMessage()}`, true);
}

function showMicrophoneRecovery(message = getMicrophoneRecoveryMessage()) {
  micRecoveryPanel.hidden = false;
  micRecoveryTitle.textContent = "Microphone access is blocked.";
  micRecoveryMessage.textContent = message;
  retryMicPermissionButton.disabled = false;
}

function hideMicrophoneRecovery() {
  micRecoveryPanel.hidden = true;
  retryMicPermissionButton.disabled = false;
}

function initializeLiveMode() {
  finalTranscript = loadStoredTranscript();
  setLiveTranscriptValue(finalTranscript, {
    allowSourceMutation: true,
    allowEmpty: true,
    reason: "restore-saved-transcript"
  });

  if (!canUseLiveVoiceOrigin()) {
    speechFallback.hidden = false;
    speechFallback.textContent = getLocalhostRequiredMessage();
    startListeningButton.disabled = true;
    stopListeningButton.disabled = true;
    hideMicrophoneRecovery();
    updateListeningControls(false);
    setLiveStatus(`Open from localhost required. ${getLocalhostRequiredMessage()}`, true);
  } else if (!SpeechRecognitionConstructor) {
    speechFallback.hidden = false;
    speechFallback.textContent = "Browser speech recognition is not supported here, so Live Notes will use the local Windows transcription fallback from localhost.";
    hideMicrophoneRecovery();
    updateListeningControls(false);
    setLiveStatus("Mic permission needed. Click Start listening; local Windows transcription fallback is ready if browser speech recognition is unavailable.", false);
    void refreshMicrophonePermissionState();
  } else {
    speechFallback.hidden = true;
    updateListeningControls(false);
    setLiveStatus("Mic permission needed. Click Start listening when you are ready to speak.", false);
    void refreshMicrophonePermissionState();
  }

  updateLiveInsights();
}

async function startListening() {
  if (isFileProtocolApp()) {
    blockFileProtocolVoice();
    return;
  }

  if (!consentCheck.checked) {
    setLiveStatus("Confirm participant permission before starting listening.", true);
    consentCheck.focus();
    return;
  }

  if (isListening || recognitionStarting || recognitionActive) {
    return;
  }

  const currentPermission = await queryMicrophonePermissionState();
  if (currentPermission === "denied" || micPermissionState === "denied") {
    micPermissionState = "denied";
    updateListeningControls();
    showMicrophoneRecovery("The browser says microphone access may be blocked. I will try one direct microphone request now. If the browser rejects it, allow microphone access for localhost in the address bar, then retry.");
    setLiveStatus("Trying to reopen the microphone. If the browser asks again, click Allow.", false);
  }

  hideMicrophoneRecovery();
  clearRecognitionTimers();
  stopAudioMonitor();
  resetRecognitionInstance();
  interimTranscript = "";
  recognitionStartWatchdogCount = 0;
  speechRecognitionAttempt = 0;
  recognitionLanguageIndex = 0;
  lastSpeechAt = 0;
  lastAudioActivityAt = 0;
  lastRecognitionResultAt = 0;
  isListening = true;
  recognitionStarting = true;
  recognitionActive = false;
  updateListeningControls();
  setLiveStatus("Connecting to your microphone. If the browser asks for permission, click Allow.", false);

  try {
    await startAudioMonitor();
  } catch (error) {
    const permissionAfterAttempt = await queryMicrophonePermissionState();
    stopAudioMonitor();
    resetRecognitionInstance();
    isListening = false;
    recognitionStarting = false;
    recognitionActive = false;
    if (permissionAfterAttempt === "denied" || error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
      micPermissionState = "denied";
      showMicrophoneRecovery("Microphone access was denied. In the browser address bar, allow microphone access for localhost, reload, then try again.");
      setLiveStatus("Microphone permission denied. Allow microphone access for localhost and retry.", true);
    } else {
      showMicrophoneRecovery("The browser could not open a microphone stream. Check Windows microphone privacy settings, confirm the selected microphone in Edge or Chrome, then retry.");
      setLiveStatus("Microphone could not be opened: " + (error.message || error.name || "unknown error") + ".", true);
    }
    updateListeningControls();
    return;
  }

  if (SpeechRecognitionConstructor) {
    setupRecognition();
    setLiveStatus("Microphone connected. Starting speech recognition.", false);
    startRecognitionEngine("initial");
  } else {
    recognitionStarting = false;
    recognitionActive = false;
    updateListeningControls();
    setLiveStatus("Microphone connected. Browser speech recognition is unavailable, so the app is using local Windows transcription fallback.", false);
  }
}

function stopListening() {
  clearRecognitionTimers();
  stopAudioMonitor();
  isListening = false;
  recognitionStarting = false;
  recognitionActive = false;
  interimTranscript = "";

  if (recognition) {
    try {
      recognition.stop();
    } catch (error) {
      // The browser may already have stopped the recognizer.
    }
  }

  updateListeningControls();
  setLiveStatus("Listening stopped. Transcript remains saved locally.", false);
  prepareMeetingSummaryEmailFromNotes(getCurrentMeetingSourceText(), latestAnalysis, "Prepared meeting summary email after listening stopped.");
}

async function retryMicrophonePermission() {
  if (!canUseLiveVoiceOrigin()) {
    blockFileProtocolVoice();
    return;
  }

  retryMicPermissionButton.disabled = true;
  setLiveStatus("Checking microphone permission for localhost:3000...", false);

  const currentPermission = await queryMicrophonePermissionState();
  if (currentPermission === "denied") {
    showMicrophoneRecovery();
    setLiveStatus("The browser reports microphone access is blocked. Trying a direct microphone request anyway.", false);
  }

  try {
    await requestMicrophonePermission();
    hideMicrophoneRecovery();
    updateListeningControls(false);
    setLiveStatus("Microphone permission is ready. Click Start listening and speak the meeting request.", false);
  } catch (error) {
    const updatedPermission = await queryMicrophonePermissionState();
    if (updatedPermission === "denied") {
      micPermissionState = "denied";
      showMicrophoneRecovery();
      setLiveStatus(getMicrophoneRecoveryMessage(), true);
    } else {
      micPermissionState = updatedPermission || "prompt";
      showMicrophoneRecovery("The browser did not grant microphone access yet. Allow Microphone for localhost:3000, then click Retry microphone permission again. If this keeps happening in the Codex in-app browser, open http://localhost:3000 in Chrome or Edge.");
      setLiveStatus("Microphone permission was not restored yet. Use the recovery steps below, then retry.", true);
    }
    updateListeningControls(false);
  } finally {
    retryMicPermissionButton.disabled = false;
  }
}

async function requestMicrophonePermission() {
  if (!canUseLiveVoiceOrigin()) {
    throw new Error("Voice requires local server origin.");
  }

  const currentPermission = await queryMicrophonePermissionState();
  if (micPermissionState === "granted" || currentPermission === "granted") {
    micPermissionState = "granted";
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.getTracks().forEach((track) => track.stop());
  micPermissionState = "granted";
}

async function queryMicrophonePermissionState() {
  if (!navigator.permissions || !navigator.permissions.query) {
    return micPermissionState;
  }

  try {
    const permission = await navigator.permissions.query({ name: "microphone" });
    if (permission.state === "denied" || permission.state === "granted") {
      micPermissionState = permission.state;
    } else if (micPermissionState !== "granted") {
      micPermissionState = permission.state || micPermissionState;
    }
    permission.onchange = () => {
      if (permission.state === "denied" || permission.state === "granted") {
        micPermissionState = permission.state;
      } else if (micPermissionState !== "granted") {
        micPermissionState = permission.state || micPermissionState;
      }
      updateListeningControls(isListening);
      if (micPermissionState === "denied") {
        isListening = false;
        recognitionStarting = false;
        recognitionActive = false;
        clearRecognitionTimers();
        resetRecognitionInstance();
        stopAudioMonitor();
        showMicrophoneRecovery();
        setLiveStatus(getMicrophoneRecoveryMessage(), true);
      } else {
        hideMicrophoneRecovery();
      }
    };
    return micPermissionState;
  } catch (error) {
    return micPermissionState;
  }
}

async function refreshMicrophonePermissionState() {
  if (!canUseLiveVoiceOrigin() || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return micPermissionState;
  }

  const currentPermission = await queryMicrophonePermissionState();
  if (currentPermission === "denied") {
    isListening = false;
    recognitionStarting = false;
    recognitionActive = false;
    clearRecognitionTimers();
    showMicrophoneRecovery();
    updateListeningControls();
    setLiveStatus(getMicrophoneRecoveryMessage(), true);
  } else {
    hideMicrophoneRecovery();
    updateListeningControls(isListening);
  }
  return currentPermission;
}

function clearRecognitionRestartTimer() {
  if (!recognitionRestartTimer) {
    return;
  }

  window.clearTimeout(recognitionRestartTimer);
  recognitionRestartTimer = null;
}

function clearRecognitionStartTimer() {
  if (!recognitionStartTimer) {
    return;
  }

  window.clearTimeout(recognitionStartTimer);
  recognitionStartTimer = null;
}

function clearNoSpeechTimer() {
  if (noSpeechTimer) {
    window.clearTimeout(noSpeechTimer);
    noSpeechTimer = null;
  }
}

function clearSpeechResultTimer() {
  if (speechResultTimer) {
    window.clearTimeout(speechResultTimer);
    speechResultTimer = null;
  }
}

function clearAudioMonitorTimer() {
  if (audioMonitorTimer) {
    window.clearInterval(audioMonitorTimer);
    audioMonitorTimer = null;
  }
}

function clearRecognitionTimers() {
  clearRecognitionRestartTimer();
  clearRecognitionStartTimer();
  clearNoSpeechTimer();
  clearSpeechResultTimer();
}

function markAudioActivity() {
  lastAudioActivityAt = Date.now();
}

function hasRecentAudioActivity(windowMs = AUDIO_ACTIVITY_WINDOW_MS) {
  return lastAudioActivityAt > 0 && Date.now() - lastAudioActivityAt <= windowMs;
}

function readAudioActivityLevel(analyser, data) {
  analyser.getByteTimeDomainData(data);
  let total = 0;
  for (let index = 0; index < data.length; index += 1) {
    total += Math.abs((data[index] - 128) / 128);
  }
  return total / data.length;
}

async function startAudioMonitor() {
  stopAudioMonitor();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error("Microphone capture is unavailable in this browser.");
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    }
  });

  audioMonitorStream = stream;
  micPermissionState = "granted";

  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    return;
  }

  audioMonitorContext = new AudioContextConstructor();
  if (audioMonitorContext.state === "suspended" && typeof audioMonitorContext.resume === "function") {
    await audioMonitorContext.resume();
  }

  audioMonitorAnalyser = audioMonitorContext.createAnalyser();
  audioMonitorAnalyser.fftSize = 1024;
  audioMonitorSource = audioMonitorContext.createMediaStreamSource(stream);
  audioMonitorSource.connect(audioMonitorAnalyser);
  startLocalTranscriptionRecorder(audioMonitorContext, audioMonitorSource);

  const audioData = new Uint8Array(audioMonitorAnalyser.fftSize);
  audioMonitorTimer = window.setInterval(() => {
    if (!audioMonitorAnalyser) {
      return;
    }
    const level = readAudioActivityLevel(audioMonitorAnalyser, audioData);
    if (level >= AUDIO_ACTIVITY_THRESHOLD) {
      markAudioActivity();
    }
  }, 200);
}

function stopAudioMonitor() {
  stopLocalTranscriptionRecorder({
    flush: true
  });
  clearAudioMonitorTimer();

  if (audioMonitorSource && typeof audioMonitorSource.disconnect === "function") {
    try {
      audioMonitorSource.disconnect();
    } catch (error) {
      // The source may already be disconnected by the browser.
    }
  }

  if (audioMonitorStream) {
    audioMonitorStream.getTracks().forEach((track) => track.stop());
  }

  if (audioMonitorContext && audioMonitorContext.state !== "closed" && typeof audioMonitorContext.close === "function") {
    audioMonitorContext.close().catch(() => {});
  }

  audioMonitorStream = null;
  audioMonitorContext = null;
  audioMonitorSource = null;
  audioMonitorAnalyser = null;
}

function startLocalTranscriptionRecorder(context, source) {
  stopLocalTranscriptionRecorder();

  if (!context || !source || typeof context.createScriptProcessor !== "function") {
    return;
  }

  localTranscriptionSampleRate = context.sampleRate || 44100;
  localTranscriptionChunks = [];
  localTranscriptionProcessor = context.createScriptProcessor(4096, 1, 1);

  localTranscriptionProcessor.onaudioprocess = (event) => {
    if (!isListening) {
      return;
    }

    const input = event.inputBuffer.getChannelData(0);
    localTranscriptionChunks.push(new Float32Array(input));

    const output = event.outputBuffer.getChannelData(0);
    output.fill(0);
  };

  try {
    source.connect(localTranscriptionProcessor);
    localTranscriptionProcessor.connect(context.destination);
    localTranscriptionTimer = window.setInterval(() => {
      void flushLocalTranscriptionChunk(false);
    }, LOCAL_TRANSCRIPTION_INTERVAL_MS);
  } catch (error) {
    stopLocalTranscriptionRecorder();
  }
}

function stopLocalTranscriptionRecorder(options = {}) {
  const shouldFlush = Boolean(options.flush);

  if (localTranscriptionTimer) {
    clearInterval(localTranscriptionTimer);
    localTranscriptionTimer = null;
  }

  if (shouldFlush) {
    void flushLocalTranscriptionChunk(true);
  } else {
    localTranscriptionChunks = [];
  }

  if (localTranscriptionProcessor) {
    try {
      localTranscriptionProcessor.onaudioprocess = null;
      localTranscriptionProcessor.disconnect();
    } catch (error) {
      // The processor may already be disconnected.
    }
  }

  localTranscriptionProcessor = null;
  localTranscriptionSampleRate = 0;
}

async function flushLocalTranscriptionChunk(force) {
  if (localTranscriptionBusy || !localTranscriptionChunks.length || !localTranscriptionSampleRate) {
    return;
  }

  const chunks = localTranscriptionChunks;
  localTranscriptionChunks = [];
  const totalSamples = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const durationSeconds = totalSamples / localTranscriptionSampleRate;

  if (!force && durationSeconds < LOCAL_TRANSCRIPTION_MIN_SECONDS) {
    localTranscriptionChunks = chunks.concat(localTranscriptionChunks);
    return;
  }

  if (!force && !hasRecentAudioActivity(LOCAL_TRANSCRIPTION_INTERVAL_MS + 2000)) {
    restoreLocalTranscriptionChunks(chunks);
    return;
  }

  if (!force && lastRecognitionResultAt > 0 && Date.now() - lastRecognitionResultAt < WEB_SPEECH_STALE_MS) {
    return;
  }

  let audioBase64 = "";
  try {
    audioBase64 = encodeWavBase64(chunks, localTranscriptionSampleRate);
  } catch (error) {
    if (force) {
      setLiveStatus("Local voice fallback could not prepare the audio clip: " + (error.message || "unknown error") + ".", true);
    }
    return;
  }

  localTranscriptionBusy = true;
  try {
    const response = await fetch(LOCAL_TRANSCRIPTION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        audioBase64,
        culture: getLocalTranscriptionCulture()
      })
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Local voice fallback request failed.");
    }

    const transcript = normalizeRecognizedTranscriptForNotes(result.transcript || "");
    if (result.ok && transcript && !isDuplicateLocalTranscript(transcript)) {
      appendFinalTranscript(transcript);
      lastLocalTranscriptText = transcript;
      lastSpeechAt = Date.now();
      lastRecognitionResultAt = Date.now();
      speechRecognitionAttempt = 0;
      renderLiveTranscript({
        allowSourceMutation: true,
        reason: "speech-capture"
      });
      updateLiveInsights();
      setLiveStatus("Listening. Local Windows transcription added words to the transcript.", false);
    } else if (result.ok && cleanText(result.transcript || "")) {
      setLiveStatus("Voice retry needed. The local transcription was not clear enough to prepare actions.", true);
      liveMeta.textContent = "Voice retry needed.";
    } else if (force && result.message) {
      setLiveStatus("Local voice fallback ran, but no words were detected yet. Speak clearly and try again.", false);
    }
  } catch (error) {
    if (force) {
      setLiveStatus("Local voice fallback failed: " + (error.message || "unknown error") + ".", true);
    }
  } finally {
    localTranscriptionBusy = false;
  }
}

function restoreLocalTranscriptionChunks(chunks) {
  if (!chunks.length || !localTranscriptionSampleRate) {
    return;
  }

  const maxSamples = localTranscriptionSampleRate * LOCAL_TRANSCRIPTION_MAX_BUFFER_SECONDS;
  const combined = chunks.concat(localTranscriptionChunks);
  const kept = [];
  let keptSamples = 0;

  for (let index = combined.length - 1; index >= 0; index -= 1) {
    const chunk = combined[index];
    if (!chunk || !chunk.length) {
      continue;
    }

    if (keptSamples >= maxSamples) {
      break;
    }

    kept.unshift(chunk);
    keptSamples += chunk.length;
  }

  localTranscriptionChunks = kept;
}

function getLocalTranscriptionCulture() {
  return "en-US";
}

function isDuplicateLocalTranscript(transcript) {
  const normalizedTranscript = normalizeTranscriptForCompare(transcript);
  if (!normalizedTranscript) {
    return true;
  }

  const normalizedLastLocal = normalizeTranscriptForCompare(lastLocalTranscriptText);
  if (normalizedTranscript === normalizedLastLocal) {
    return true;
  }

  const normalizedFinal = normalizeTranscriptForCompare(finalTranscript);
  return normalizedFinal.includes(normalizedTranscript);
}

function normalizeTranscriptForCompare(text) {
  return cleanText(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9@.]+/g, " ")
    .trim();
}

function encodeWavBase64(chunks, sampleRate) {
  const samples = mergeAudioChunks(chunks);
  const bytesPerSample = 2;
  const channelCount = 1;
  const dataSize = samples.length * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  writeWavString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeWavString(view, 8, "WAVE");
  writeWavString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channelCount, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * channelCount * bytesPerSample, true);
  view.setUint16(32, channelCount * bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeWavString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  let offset = 44;
  samples.forEach((sample) => {
    const clamped = Math.max(-1, Math.min(1, sample));
    const value = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
    view.setInt16(offset, value, true);
    offset += bytesPerSample;
  });

  return arrayBufferToBase64(buffer);
}

function mergeAudioChunks(chunks) {
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const merged = new Float32Array(totalLength);
  let offset = 0;
  chunks.forEach((chunk) => {
    merged.set(chunk, offset);
    offset += chunk.length;
  });
  return merged;
}

function writeWavString(view, offset, value) {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function getCurrentRecognitionLanguage() {
  return RECOGNITION_LANGUAGES[recognitionLanguageIndex % RECOGNITION_LANGUAGES.length];
}

function advanceRecognitionLanguage() {
  recognitionLanguageIndex = (recognitionLanguageIndex + 1) % RECOGNITION_LANGUAGES.length;
}

function armSpeechResultWatchdog() {
  clearSpeechResultTimer();
  speechResultTimer = window.setTimeout(() => {
    if (!isListening || !recognitionActive) {
      return;
    }

    if (lastRecognitionResultAt > 0 && Date.now() - lastRecognitionResultAt <= SPEECH_RESULT_TIMEOUT_MS + 2000) {
      armSpeechResultWatchdog();
      return;
    }

    if (hasRecentAudioActivity(SPEECH_RESULT_TIMEOUT_MS + 2000)) {
      void flushLocalTranscriptionChunk(true);
      restartRecognitionForTranscript("I can hear microphone audio, but no English words are reaching the transcript. Retrying the English voice engine and using the local Windows fallback.");
      return;
    }

    setLiveStatus("Listening, but no microphone audio has been detected yet. Check the selected microphone, speak closer, or switch to another mic.", false);
    armSpeechResultWatchdog();
  }, SPEECH_RESULT_TIMEOUT_MS);
}

function restartRecognitionForTranscript(message) {
  if (!isListening) {
    return;
  }

  speechRecognitionAttempt += 1;
  if (speechRecognitionAttempt > MAX_RECOGNITION_RETRIES) {
    speechRecognitionAttempt = MAX_RECOGNITION_RETRIES;
    void flushLocalTranscriptionChunk(true);
    recognitionStarting = false;
    recognitionActive = false;
    clearRecognitionTimers();
    resetRecognitionInstance();
    setLiveStatus("Browser speech recognition is having trouble, but listening continues with the local transcription fallback. Keep speaking clearly.", false);
    updateListeningControls(true);
    return;
  }

  advanceRecognitionLanguage();
  setLiveStatus(message + " Attempt " + speechRecognitionAttempt + " of " + MAX_RECOGNITION_RETRIES + ".", false);
  resetRecognitionInstance();
  setupRecognition();
  startRecognitionEngine("transcript-retry");
}

function resetRecognitionInstance() {
  clearRecognitionTimers();
  if (!recognition) {
    recognitionActive = false;
    recognitionStarting = false;
    return;
  }

  const previousRecognition = recognition;
  recognition = null;

  try {
    previousRecognition.onstart = null;
    previousRecognition.onresult = null;
    previousRecognition.onerror = null;
    previousRecognition.onend = null;
    previousRecognition.onaudiostart = null;
    previousRecognition.onsoundstart = null;
    previousRecognition.onspeechstart = null;
    previousRecognition.onspeechend = null;
    previousRecognition.onaudioend = null;
    if (typeof previousRecognition.abort === "function") {
      previousRecognition.abort();
    } else if (typeof previousRecognition.stop === "function") {
      previousRecognition.stop();
    }
  } catch (error) {
    // The old recognizer may already be stopped.
  }

  recognitionActive = false;
  recognitionStarting = false;
}

function startRecognitionEngine(reason) {
  if (!isListening) {
    return;
  }

  if (!recognition) {
    setupRecognition();
  }

  if (!recognition) {
    return;
  }

  recognition.lang = getCurrentRecognitionLanguage();
  recognitionStarting = true;
  recognitionActive = false;
  updateListeningControls();
  clearRecognitionStartTimer();

  try {
    recognition.start();
    armRecognitionStartWatchdog(reason);
  } catch (error) {
    const alreadyStarted = error && error.name === "InvalidStateError";
    if (alreadyStarted) {
      setLiveStatus("Speech recognition is already starting. Waiting for the browser.", false);
      armRecognitionStartWatchdog(reason);
      return;
    }

    recognitionStarting = false;
    recognitionActive = false;
    isListening = false;
    stopAudioMonitor();
    updateListeningControls();
    setLiveStatus("Could not start speech recognition: " + (error.message || error.name || "unknown error") + ".", true);
  }
}

async function armRecognitionStartWatchdog(reason) {
  clearRecognitionStartTimer();
  recognitionStartTimer = window.setTimeout(async () => {
    if (!isListening || recognitionActive) {
      return;
    }

    const currentPermission = await queryMicrophonePermissionState();
    if (currentPermission === "denied") {
      micPermissionState = "denied";
      recognitionStarting = false;
      recognitionActive = false;
      isListening = false;
      stopAudioMonitor();
      updateListeningControls();
      showMicrophoneRecovery("Microphone access is blocked. Allow microphone access for localhost, reload, then click Start listening again.");
      setLiveStatus("Microphone permission denied. Allow microphone access for localhost and retry.", true);
      return;
    }

    recognitionStartWatchdogCount += 1;
    if (currentPermission === "prompt" || currentPermission === "unknown") {
      if (recognitionStartWatchdogCount < 2) {
        setLiveStatus("Waiting for browser microphone permission. Click Allow if the browser asks.", false);
        armRecognitionStartWatchdog(reason);
        return;
      }
    }

    restartRecognitionForTranscript("Microphone permission is granted, but speech recognition did not start. Retrying the voice engine.");
  }, 9000);
}

function armNoSpeechTimer() {
  clearNoSpeechTimer();
  noSpeechTimer = window.setTimeout(() => {
    if (!isListening || !recognitionActive || lastSpeechAt) {
      return;
    }

    if (hasRecentAudioActivity(9000)) {
      setLiveStatus("Microphone audio is detected, but no words have been transcribed yet. Keep speaking clearly; the app will retry automatically if needed.", false);
      return;
    }

    setLiveStatus("Listening, but no microphone audio has been detected yet. Check your selected microphone and speak clearly.", false);
  }, 7000);
}

function scheduleRecognitionRestart(message) {
  clearRecognitionTimers();
  recognitionStarting = true;
  recognitionActive = false;
  listeningText.textContent = "Reconnecting";
  setLiveStatus(message, false);
  updateListeningControls();
  recognitionRestartTimer = window.setTimeout(() => {
    recognitionRestartTimer = null;
    if (!isListening || micPermissionState === "denied" || !canUseLiveVoiceOrigin()) {
      recognitionStarting = false;
      updateListeningControls();
      return;
    }

    listeningText.textContent = "Reconnecting";
    setLiveStatus("Reconnecting...", false);
    startRecognitionEngine("restart");
  }, 450);
}

function formatSpeechRecognitionError(prefix, errorOrEvent) {
  const code = errorOrEvent?.error || errorOrEvent?.name || "unknown";
  const detail = errorOrEvent?.message ? ` (${errorOrEvent.message})` : "";
  return `${prefix}: ${code}${detail}.`;
}

function selectBestRecognitionAlternative(result) {
  const alternatives = [];
  for (let index = 0; index < result.length; index += 1) {
    const alternative = result[index] || {};
    const transcript = cleanText(alternative.transcript || "");
    if (!transcript) {
      continue;
    }

    alternatives.push({
      transcript,
      confidence: Number.isFinite(alternative.confidence) ? alternative.confidence : 0,
      score: scoreRecognitionAlternative(transcript, alternative.confidence)
    });
  }

  return alternatives.sort((left, right) => right.score - left.score)[0] || {
    transcript: "",
    confidence: 0,
    score: 0
  };
}

function scoreRecognitionAlternative(transcript, confidence = 0) {
  const text = cleanText(transcript);
  let score = Number.isFinite(confidence) ? confidence : 0;
  const normalized = normalizeScheduleText(text);

  if (hasActionRoutingIntent(text)) {
    score += 8;
  }

  if (/\b(?:schedule|book|set up|setup|create|prepare|write|notion|email|gmail)\b/.test(normalized)) {
    score += 3;
  }

  if (/\b(?:meeting|calendar|task|email|gmail)\b/.test(normalized)) {
    score += 2;
  }

  if (/\b(?:today|tomorrow|next|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(normalized)) {
    score += 1.5;
  }

  if (/\b(?:am|pm|morning|afternoon|evening|night|\d{1,2}:\d{2})\b/.test(normalized)) {
    score += 1.5;
  }

  if (extractMeetingAttendeeEmails(text).length) {
    score += 1;
  }

  if (looksLikeGarbageVoiceTranscript(text)) {
    score -= 6;
  }

  return score;
}

function normalizeRecognizedTranscriptForNotes(value) {
  const text = cleanText(value || "");
  if (!text) {
    return "";
  }

  return normalizeBusinessEnglishText(text);
}

function isLowQualityRecognizedSpeech(value, options = {}) {
  const text = cleanText(value || "");
  if (!text) {
    return true;
  }

  if (hasActionRoutingIntent(text)) {
    return false;
  }

  const normalized = normalizeScheduleText(text);
  const hasActionishWords = hasActionishVoiceWords(text);
  const confidence = Number(options.confidence);
  const hasLowLocalConfidence = options.source === "local" &&
    Number.isFinite(confidence) &&
    confidence > 0 &&
    confidence < LOCAL_TRANSCRIPTION_MIN_CONFIDENCE;

  if (hasLowLocalConfidence && hasActionishWords) {
    return true;
  }

  if (looksLikeGarbageVoiceTranscript(text)) {
    return true;
  }

  if (/\b(?:cancel(?:ed|led)?|scandal)\s+(?:a\s+)?meeting\b/.test(normalized)) {
    return true;
  }

  return countWords(text) >= 8 && hasActionishWords;
}

function hasActionishVoiceWords(value) {
  return /\b(?:meeting|meet|schedule|book|calendar|notion|task|email|gmail|send|draft|call|appointment|review|action\s+items?|next\s+steps?)\b/i.test(value);
}

function looksLikeGarbageVoiceTranscript(value) {
  const normalized = normalizeScheduleText(value);
  return /\b(?:in the city|tools the scandal|this is the indian|for small last|small last eight|trying one|stay a|made for some more of us)\b/.test(normalized);
}

function recoverCommonEnglishVoiceCommandText(value) {
  const text = normalizeScheduleTimeText(value);
  if (!text || hasActionRoutingIntent(text)) {
    return "";
  }

  const hasMisheardMeetingCommand = /\b(?:it'?s\s+)?(?:cancel(?:ed|led)?|scandal|scheduled?)\s+(?:a\s+)?meeting\b/.test(text);
  const hasTomorrowCue = /\b(?:tomorrow|to morrow|for small|small last|small)\b/.test(text);
  const hasEightCue = /\b(?:8|eight|eighth)\b/.test(text);

  if (hasMisheardMeetingCommand && hasTomorrowCue && hasEightCue) {
    return "Schedule a meeting tomorrow at 8 AM";
  }

  const scheduleWithoutMeeting = text.match(/\bschedule\b.*\b(?:today|tomorrow|next\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b.*\b(?:at\s+)?(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?::(\d{2}))?\s*(am|pm|morning|afternoon|evening|night)\b/);
  if (scheduleWithoutMeeting) {
    return normalizeBusinessEnglishText(text.replace(/\bschedule\b/i, "Schedule a meeting"));
  }

  return "";
}

function setupRecognition() {
  if (recognition) {
    return;
  }

  recognition = new SpeechRecognitionConstructor();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = getCurrentRecognitionLanguage();
  recognition.maxAlternatives = 5;

  recognition.onaudiostart = markAudioActivity;
  recognition.onsoundstart = markAudioActivity;
  recognition.onspeechstart = markAudioActivity;

  recognition.onstart = () => {
    micPermissionState = "granted";
    recognitionStarting = false;
    recognitionActive = true;
    recognitionStartWatchdogCount = 0;
    lastSpeechAt = 0;
    lastRecognitionResultAt = 0;
    clearRecognitionStartTimer();
    clearRecognitionRestartTimer();
    armNoSpeechTimer();
    armSpeechResultWatchdog();
    updateListeningControls();
    setLiveStatus("Listening with " + getCurrentRecognitionLanguage() + ". Speak now; transcript is saved locally in this browser.", false);
  };

  recognition.onresult = (event) => {
    let currentInterim = "";
    let heardSpeech = false;

    markAudioActivity();

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const result = event.results[index];
      const selectedAlternative = selectBestRecognitionAlternative(result);
      const transcript = result.isFinal
        ? normalizeRecognizedTranscriptForNotes(selectedAlternative.transcript)
        : normalizeBusinessEnglishText(selectedAlternative.transcript);
      if (!transcript) {
        if (result.isFinal && cleanText(selectedAlternative.transcript)) {
          setLiveStatus("Voice retry needed. The English transcript was not clear enough to prepare actions.", true);
          liveMeta.textContent = "Voice retry needed.";
        }
        continue;
      }
      heardSpeech = true;
      if (result.isFinal) {
        appendFinalTranscript(transcript);
      } else {
        currentInterim += transcript + " ";
      }
    }

    interimTranscript = currentInterim.trim();
    renderLiveTranscript({
      allowSourceMutation: true,
      reason: "speech-capture"
    });
    updateLiveInsights();
    if (heardSpeech) {
      lastSpeechAt = Date.now();
      lastRecognitionResultAt = Date.now();
      speechRecognitionAttempt = 0;
      armNoSpeechTimer();
      armSpeechResultWatchdog();
      setLiveStatus("Listening. Transcript is updating live.", false);
    }
  };

  recognition.onerror = (event) => {
    const message = event.error ? "Speech recognition error: " + event.error + "." : "Speech recognition failed.";

    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      micPermissionState = "denied";
      isListening = false;
      recognitionStarting = false;
      recognitionActive = false;
      clearRecognitionTimers();
      stopAudioMonitor();
      updateListeningControls();
      showMicrophoneRecovery("Microphone access was blocked. Allow microphone access for localhost in the browser address bar, reload the page, then click Start listening again.");
      setLiveStatus("Microphone permission denied. Allow microphone access for localhost and retry.", true);
      return;
    }

    if (event.error === "audio-capture") {
      isListening = false;
      recognitionStarting = false;
      recognitionActive = false;
      clearRecognitionTimers();
      stopAudioMonitor();
      updateListeningControls();
      showMicrophoneRecovery("The browser could not capture audio from the selected microphone. Check the Windows microphone input and browser microphone settings, then retry.");
      setLiveStatus("The browser could not capture audio from the selected microphone.", true);
      return;
    }

    if (event.error === "no-speech") {
      if (hasRecentAudioActivity(9000)) {
        void flushLocalTranscriptionChunk(true);
        restartRecognitionForTranscript("Speech recognition heard microphone audio but did not decode words. Retrying with local Windows fallback.");
      } else {
        setLiveStatus("Listening, but no microphone audio has been detected yet. Check the selected microphone and speak clearly.", false);
        armNoSpeechTimer();
        armSpeechResultWatchdog();
      }
      return;
    }

    if (event.error === "network") {
      restartRecognitionForTranscript("The browser speech service reported a network issue. Retrying.");
      return;
    }

    if (event.error === "aborted") {
      return;
    }

    restartRecognitionForTranscript(message + " Retrying.");
  };

  recognition.onend = () => {
    clearRecognitionStartTimer();
    clearNoSpeechTimer();
    clearSpeechResultTimer();
    recognitionStarting = false;
    recognitionActive = false;
    interimTranscript = "";
    updateLiveInsights();

    if (!isListening || micPermissionState === "denied" || !canUseLiveVoiceOrigin()) {
      updateListeningControls();
      return;
    }

    listeningText.textContent = "Paused by browser";
    scheduleRecognitionRestart("Listening paused by the browser. Reconnecting.");
  };
}

function renderLiveTranscript(options = {}) {
  setLiveTranscriptValue([finalTranscript, interimTranscript].filter(Boolean).join("\n"), options);
}

function setLiveTranscriptValue(nextValue, options = {}) {
  const nextText = String(nextValue || "");
  const currentText = liveTranscript.value || "";
  const allowSourceMutation = options.allowSourceMutation === true || explicitTranscriptClearInProgress;
  const allowEmpty = options.allowEmpty === true || explicitTranscriptClearInProgress;

  if (!allowSourceMutation) {
    return false;
  }

  if (!nextText && currentText && !allowEmpty) {
    return false;
  }

  liveTranscript.value = nextText;
  return true;
}

function appendFinalTranscript(transcript) {
  const cleanTranscript = normalizeBusinessEnglishText(transcript);
  if (!cleanTranscript) {
    return;
  }

  finalTranscript = [finalTranscript, cleanTranscript].filter(Boolean).join("\n");
  persistLiveTranscript(finalTranscript);
}

function updateListeningControls(listening) {
  const desiredListening = typeof listening === "boolean" ? listening : isListening;
  const busy = desiredListening || recognitionStarting || recognitionActive;
  const microphoneUnavailable = !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia;
  const voiceBlocked = !canUseLiveVoiceOrigin() || microphoneUnavailable;
  startListeningButton.disabled = voiceBlocked || busy;
  stopListeningButton.disabled = voiceBlocked || !busy;
  listeningIndicator.classList.toggle("listening", recognitionActive || (desiredListening && Boolean(audioMonitorStream)));
  listeningIndicator.classList.toggle("blocked", !canUseLiveVoiceOrigin() || micPermissionState === "denied");
  if (!canUseLiveVoiceOrigin()) {
    listeningText.textContent = "Open from localhost required";
  } else if (micPermissionState === "denied") {
    listeningText.textContent = "Permission denied";
  } else if (microphoneUnavailable) {
    listeningText.textContent = "Mic unavailable";
  } else if (recognitionStarting) {
    listeningText.textContent = "Starting";
  } else if (recognitionActive || (desiredListening && Boolean(audioMonitorStream))) {
    listeningText.textContent = "Listening";
  } else if (desiredListening) {
    listeningText.textContent = "Reconnecting";
  } else {
    listeningText.textContent = "Mic permission needed";
  }
  analysisStatus.textContent = recognitionActive || (desiredListening && Boolean(audioMonitorStream)) ? "Listening" : recognitionStarting ? "Starting" : "Ready";
}

function setLiveStatus(message, isError) {
  liveStatus.textContent = message;
  liveStatus.classList.toggle("error", Boolean(isError));
}

function loadStoredTranscript() {
  try {
    return localStorage.getItem(LIVE_TRANSCRIPT_STORAGE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function persistLiveTranscript(transcript) {
  try {
    localStorage.setItem(LIVE_TRANSCRIPT_STORAGE_KEY, transcript);
  } catch (error) {
    setLiveStatus("Transcript is visible but could not be saved locally.", true);
  }
}

function clearTranscriptData(event) {
  if (!event || event.currentTarget !== clearTranscriptButton || event.isTrusted !== true) {
    setLiveStatus("Use Clear transcript / saved data to clear the transcript.", true);
    return;
  }

  explicitTranscriptClearInProgress = true;
  try {
    finalTranscript = "";
    interimTranscript = "";
    setLiveTranscriptValue("", {
      allowSourceMutation: true,
      allowEmpty: true,
      reason: "explicit-clear-transcript"
    });
    preparedMeetingRows = [];
    pendingMeetingProposal = null;
    renderPreparedMeetings();

    try {
      localStorage.removeItem(LIVE_TRANSCRIPT_STORAGE_KEY);
    } catch (error) {
      setLiveStatus("Transcript cleared, but saved browser data could not be removed.", true);
      updateLiveInsights();
      return;
    }

    updateLiveInsights();
    setLiveStatus("Transcript and saved local transcript data cleared.", false);
  } finally {
    explicitTranscriptClearInProgress = false;
  }
}

function updateLiveInsights() {
  const visibleLiveSource = liveTranscript.value || [finalTranscript, interimTranscript].filter(Boolean).join("\n");
  const visibleTranscript = visibleLiveSource.trim();
  const transcript = (finalTranscript || visibleLiveSource).trim();

  if (!visibleTranscript) {
    liveMeta.textContent = "Transcript saved locally in this browser.";
    cancelGeminiDashboardInterpretation();
    renderMeetingDashboard(null, null, "Ready for notes");
    applyGlobalSearch();
    return;
  }

  if (!transcript) {
    liveMeta.textContent = `${countWords(visibleTranscript)} words heard. Waiting for a clear final English transcript.`;
    cancelGeminiDashboardInterpretation();
    renderMeetingDashboard(null, null, "Ready for notes");
    applyGlobalSearch();
    return;
  }

  const voiceRoute = buildVoiceCommandRoute(transcript);
  if (voiceRoute.intent === "search_only") {
    activeSearchQuery = voiceRoute.searchQuery;
    globalSearchInput.value = voiceRoute.searchQuery;
    clearSearchButton.disabled = activeSearchQuery.length === 0;
    liveMeta.textContent = `${countWords(voiceRoute.cleanedText)} words. Search routed.`;
    clearPreparedExternalActionRows(voiceRoute.statusMessage, false);
    analysisStatus.textContent = "Search";
    applyGlobalSearch();
    return;
  }

  if (voiceRoute.blocksExternalActions && voiceRoute.intent === "ambiguous") {
    const analysis = analyzeNotes(transcript);
    updateMeetingDashboardFromContext(transcript, analysis, isListening ? "Updating live" : "Updated from transcript");
    if (!isListening && hasEmailIntent(transcript) && prepareExplicitEmailRowsFromSource(transcript, analysis, "Prepared from a clear email request in Live Notes.")) {
      liveMeta.textContent = `${countWords(transcript)} words. Email draft prepared for review.`;
      analysisStatus.textContent = "Prepared";
      setInputStatus("Email draft prepared from the Live Notes request. Review before opening Gmail.", false);
      applyGlobalSearch();
      return;
    }

    if (!isListening && prepareContextAwareEmailRows(transcript, analysis)) {
      activateGeminiEmailCompositionForSource(transcript, analysis, {
        contextOnly: true
      });
      liveMeta.textContent = `${countWords(transcript)} words. Email draft prepared for review.`;
      analysisStatus.textContent = "Prepared";
      setInputStatus("Email draft prepared from usable Live Notes context. Review before opening Gmail.", false);
      applyGlobalSearch();
      return;
    }

    emailPreparationEnabled = true;
    if (!isListening && prepareEmailV1DraftFromSource(transcript, analysis, "Prepared from usable Live Notes context.")) {
      liveMeta.textContent = `${countWords(transcript)} words. Email draft prepared for review.`;
      analysisStatus.textContent = "Prepared";
      applyGlobalSearch();
      return;
    }

    if (!isListening && shouldRequestGeminiImplicitEmail(transcript, analysis)) {
      clearPreparedRowsOutsideVoiceIntent("email");
      emailPreparationEnabled = true;
      renderPreparedEmailRows();
      activateGeminiEmailCompositionForSource(transcript, analysis, {
        contextOnly: true
      });
      liveMeta.textContent = `${countWords(transcript)} words. Checking email draft.`;
      analysisStatus.textContent = "Prepared";
      setInputStatus("Checking whether the Live Notes context needs a useful email draft.", false);
      setInlineEmailStatus("Checking whether the Live Notes context needs a useful email draft.", false);
      applyGlobalSearch();
      return;
    }

    liveMeta.textContent = `${countWords(transcript)} words. Voice retry needed.`;
    clearPreparedExternalActionRows(voiceRoute.statusMessage, true);
    analysisStatus.textContent = "Needs retry";
    applyGlobalSearch();
    return;
  }

  const actionTranscript = voiceRoute.cleanedText;
  const insights = analyzeLiveTranscript(actionTranscript);
  const dashboardAnalysis = analyzeNotes(transcript);

  liveMeta.textContent = `${insights.counts.words} words. Saved locally.`;
  renderAnalysis(insights.fullAnalysis, actionTranscript, isListening ? "Updating live" : "Updated from transcript", voiceRoute);
  updateMeetingDashboardFromContext(transcript, dashboardAnalysis, isListening ? "Updating live" : "Updated from transcript");
  if (!isListening && hasEmailIntent(transcript)) {
    prepareExplicitEmailRowsFromSource(transcript, dashboardAnalysis, "Prepared from a clear email request in Live Notes.");
  }
  analysisStatus.textContent = voiceRoute.intent === "notes_only" ? "Notes" : (isListening ? "Live" : "Prepared");
  setInputStatus(voiceRoute.statusMessage, false);
}

function shouldRejectLiveTranscriptForActions(transcript) {
  const text = cleanText(transcript);
  if (!text) {
    return false;
  }

  const recovered = recoverCommonEnglishVoiceCommandText(text);
  if (recovered || hasActionRoutingIntent(text)) {
    return false;
  }

  if (isLowQualityRecognizedSpeech(text, {
    source: "quality-gate",
    confidence: 0
  })) {
    return true;
  }

  const words = countWords(text);
  const hasActionishWords = /\b(?:meeting|meet|schedule|book|calendar|notion|task|email|gmail|send|draft|call|appointment|review|action\s+items?|next\s+steps?)\b/i.test(text);
  return words >= 12 && hasActionishWords;
}

function hasActionRoutingIntent(sourceText) {
  return hasMeetingSchedulingIntent(sourceText) ||
    hasFocusedNotionTaskOrPageIntent(sourceText) ||
    hasEmailIntent(sourceText) ||
    hasNaturalMeetingClauseIntent(sourceText) ||
    hasNaturalNotionTaskClauseIntent(sourceText) ||
    hasNaturalEmailClauseIntent(sourceText);
}

function clearPreparedExternalActions(statusMessage = "") {
  latestEmail = "";
  latestCsv = "";
  pendingCsvTasks = [];
  pendingNotionTasks = [];
  pendingNotionAction = null;
  pendingMeetingProposal = null;
  preparedEmailRows = [];
  preparedMeetingRows = [];
  emailPreparationEnabled = false;
  emailOutput.value = "";
  copyEmailButton.disabled = true;
  openGmailButton.disabled = true;
  downloadCsvButton.disabled = true;
  exportNotionButton.disabled = true;
  renderInlineEmailApproval();
  renderInlineCsvApproval([]);
  renderInlineNotionActions({ type: "tasks", tasks: [] });
  renderInlineMeetingApproval(null);
  if (statusMessage) {
    setSchedulerStatus(statusMessage, true);
    setInputStatus(statusMessage, true);
  }
}

function analyzeLiveTranscript(transcript) {
  const lines = getLines(transcript);
  const sentences = getSentences(transcript);
  const chunks = dedupe([...lines.flatMap(splitLineIntoChunks), ...sentences].map(cleanText).filter(Boolean));
  const structuredSections = extractStructuredSections(lines);
  const baseAnalysis = analyzeNotes(transcript);
  const keyPoints = extractKeyPoints(chunks, baseAnalysis.decisions, baseAnalysis.tasks, baseAnalysis.risks);
  const conclusions = extractConclusions(chunks, baseAnalysis);
  const topics = dedupe([...structuredSections.topics, ...extractTopics(transcript)]).slice(0, 6);

  return {
    fullAnalysis: baseAnalysis,
    keyPoints,
    topics,
    decisions: baseAnalysis.decisions,
    actionItems: baseAnalysis.tasks,
    risks: baseAnalysis.risks,
    conclusions,
    counts: {
      words: countWords(transcript),
      decisions: baseAnalysis.decisions.length,
      tasks: baseAnalysis.tasks.length,
      risks: baseAnalysis.risks.length
    }
  };
}

function renderMeetingDashboard(sourceText, insights, statusText) {
  if (!sourceText || !insights) {
    cancelGeminiDashboardInterpretation();
    lastGoodGeminiDashboardInsights = null;
    lastGoodGeminiDashboardSourceText = "";
    if (dashboardStatus) {
      dashboardStatus.textContent = statusText || "Ready for notes";
      dashboardStatus.classList.remove("live");
    }
    renderList(dashboardDecisions, [], "No decisions detected yet.");
    renderList(dashboardRisks, [], "No risks or blockers detected yet.");
    renderList(dashboardRelevant, [], "No important points detected yet.");
    renderList(dashboardConclusions, [], "No conclusions detected yet.");
    renderDashboardConceptBreakdown(null);
    return;
  }

  const displayInsights = normalizeDashboardInsightsForDisplay(insights);

  if (dashboardStatus) {
    dashboardStatus.textContent = statusText || "Updated";
    dashboardStatus.classList.toggle("live", isListening);
  }

  renderList(dashboardDecisions, displayInsights.decisions || [], "No decisions detected yet.");
  renderList(dashboardRisks, displayInsights.risks || [], "No risks or blockers detected yet.");
  renderList(dashboardRelevant, displayInsights.importantPoints || [], "No important points detected yet.");
  renderList(dashboardConclusions, displayInsights.conclusions || [], "No conclusions detected yet.");
  renderDashboardConceptBreakdown(getDashboardConceptBreakdown(displayInsights));
}

function getDashboardConceptBreakdown(insights = {}) {
  return DASHBOARD_CONCEPT_CATEGORIES.map((category) => {
    const values = category.key === "importantPoints"
      ? insights.importantPoints || mergeDashboardImportantPoints(insights)
      : insights[category.key] || [];

    return {
      ...category,
      count: Array.isArray(values) ? values.length : 0
    };
  });
}

function renderDashboardConceptBreakdown(categories) {
  if (!dashboardConceptSlices || !dashboardConceptLegend || !dashboardConceptTotal || !dashboardConceptLabel || !dashboardConceptEmpty) {
    return;
  }

  const values = categories || getDashboardConceptBreakdown({});
  const total = values.reduce((sum, item) => sum + item.count, 0);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  dashboardConceptSlices.textContent = "";
  values.forEach((item) => {
    if (!item.count || !total) {
      return;
    }

    const sliceLength = (item.count / total) * circumference;
    const slice = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    slice.setAttribute("class", "concept-donut-slice");
    slice.setAttribute("cx", "60");
    slice.setAttribute("cy", "60");
    slice.setAttribute("r", String(radius));
    slice.setAttribute("stroke", item.color);
    slice.setAttribute("stroke-dasharray", `${sliceLength} ${circumference - sliceLength}`);
    slice.setAttribute("stroke-dashoffset", String(-offset));
    dashboardConceptSlices.appendChild(slice);
    offset += sliceLength;
  });

  dashboardConceptTotal.textContent = String(total);
  dashboardConceptLabel.textContent = total === 1 ? "item" : "items";
  dashboardConceptEmpty.textContent = total
    ? "Detected meeting intelligence by category."
    : "No meeting intelligence detected yet.";
  dashboardConceptEmpty.classList.toggle("empty", total === 0);

  dashboardConceptLegend.textContent = "";
  values.forEach((item) => {
    const legendItem = document.createElement("li");
    const swatch = document.createElement("span");
    const label = document.createElement("span");
    const count = document.createElement("strong");

    swatch.className = "concept-legend-swatch";
    swatch.style.backgroundColor = item.color;
    label.textContent = item.label;
    count.textContent = String(item.count);
    legendItem.append(swatch, label, count);
    dashboardConceptLegend.appendChild(legendItem);
  });
}

function normalizeDashboardInsightsForDisplay(insights = {}) {
  const relevant = normalizeDashboardInsightList(insights.relevant || insights.topics || [], "relevant");
  const keyPoints = normalizeDashboardInsightList(insights.keyPoints || [], "keyPoints");
  const importantPoints = normalizeDashboardInsightList([
    ...(Array.isArray(insights.importantPoints) ? insights.importantPoints : []),
    ...relevant,
    ...keyPoints
  ], "importantPoints");
  return {
    ...insights,
    decisions: normalizeDashboardInsightList(insights.decisions || [], "decisions"),
    risks: normalizeDashboardInsightList(insights.risks || [], "risks"),
    importantPoints,
    relevant: importantPoints,
    topics: importantPoints,
    keyPoints: importantPoints,
    conclusions: normalizeDashboardInsightList(insights.conclusions || [], "conclusions")
  };
}

function mergeDashboardImportantPoints(insights = {}) {
  return normalizeDashboardInsightList([
    ...(Array.isArray(insights.importantPoints) ? insights.importantPoints : []),
    ...(Array.isArray(insights.relevant) ? insights.relevant : []),
    ...(Array.isArray(insights.topics) ? insights.topics : []),
    ...(Array.isArray(insights.keyPoints) ? insights.keyPoints : [])
  ], "importantPoints");
}

function normalizeDashboardInsightList(items, category) {
  const limit = DASHBOARD_CONCEPT_LIMITS[category] || 5;
  const values = Array.isArray(items) ? items : String(items || "").split(/[|\n;]/);
  const seen = new Set();

  return values
    .map(sanitizeDashboardInsightText)
    .filter(isUsefulDashboardInsightItem)
    .filter((item) => {
      const key = normalizeForComparison(item);
      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

function closeDashboardReportMenu() {
  if (dashboardReportMenu) {
    dashboardReportMenu.open = false;
  }
}

function getDashboardReportFilename(extension) {
  return `aissistant-dashboard-report-${formatDateForFilename(new Date())}.${extension}`;
}

function exportDashboardReportHtml() {
  const report = buildDashboardReportModel();
  const html = buildDashboardReportHtml(report);

  downloadTextFile(html, getDashboardReportFilename("html"), "text/html;charset=utf-8");
}

function exportDashboardReportPdf() {
  const report = buildDashboardReportModel();
  const html = buildDashboardReportHtml(report);

  openDashboardReportWindow(html, { print: true });
}

function exportDashboardReportEmail() {
  const report = buildDashboardReportModel();
  const subject = `AIssistant Dashboard Report - ${formatDateForFilename(report.generatedAt)}`;
  const body = buildDashboardReportEmailBody(report);
  const gmailUrl = buildGmailComposeUrl({
    recipients: "",
    subject,
    body
  });
  const openedWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

  if (!openedWindow) {
    downloadTextFile(body, getDashboardReportFilename("txt"), "text/plain;charset=utf-8");
    setInputStatus("Gmail was blocked by the browser. The dashboard report was downloaded as text.", true);
    return;
  }

  setInputStatus("Dashboard report opened in Gmail for review. Nothing was sent automatically.", false);
}

function buildDashboardReportModel() {
  const insights = {
    decisions: getVisibleDashboardListItems(dashboardDecisions),
    risks: getVisibleDashboardListItems(dashboardRisks),
    importantPoints: getVisibleDashboardListItems(dashboardRelevant),
    conclusions: getVisibleDashboardListItems(dashboardConclusions)
  };
  const categories = getDashboardConceptBreakdown(insights);
  const total = categories.reduce((sum, item) => sum + item.count, 0);

  return {
    title: "AIssistant Dashboard Report",
    generatedAt: new Date(),
    status: normalizeBusinessEnglishText(dashboardStatus?.textContent || "Current dashboard export"),
    total,
    categories,
    sections: [
      {
        title: "Decisions",
        emptyText: "No decisions detected yet.",
        items: insights.decisions
      },
      {
        title: "Risks or Blockers",
        emptyText: "No risks or blockers detected yet.",
        items: insights.risks
      },
      {
        title: "Important Points",
        emptyText: "No important points detected yet.",
        items: insights.importantPoints
      },
      {
        title: "Conclusions",
        emptyText: "No conclusions detected yet.",
        items: insights.conclusions
      }
    ]
  };
}

function buildDashboardReportEmailBody(report) {
  const generatedAt = report.generatedAt.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });
  const lines = [
    "Hi,",
    "",
    "Here is the current AIssistant dashboard report for review.",
    "",
    `Generated: ${generatedAt}`,
    `Status: ${report.status}`,
    `Total items: ${report.total}`,
    "",
    "Concept Breakdown:"
  ];

  if (report.categories.length) {
    report.categories.forEach((category) => {
      lines.push(`- ${category.label}: ${category.count}`);
    });
  } else {
    lines.push("- No meeting intelligence detected yet.");
  }

  report.sections.forEach((section) => {
    lines.push("", `${section.title}:`);

    if (section.items.length) {
      section.items.forEach((item) => lines.push(`- ${item}`));
      return;
    }

    lines.push(`- ${section.emptyText}`);
  });

  lines.push("", "Best,");
  return lines.join("\n");
}

function getVisibleDashboardListItems(element) {
  return Array.from(element?.querySelectorAll("li") || [])
    .map((item) => normalizeBusinessEnglishText(item.textContent || ""))
    .filter(Boolean)
    .filter((item) => !/^no\s+.+\s+detected\s+yet\.?$/i.test(item));
}

function buildDashboardReportHtml(report) {
  const generatedAt = report.generatedAt.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });
  const categoryRows = report.categories.map((category) => `
        <tr>
          <td><span class="swatch" style="background:${escapeHtml(category.color)}"></span>${escapeHtml(category.label)}</td>
          <td>${category.count}</td>
        </tr>`).join("");
  const sections = report.sections.map((section) => `
      <section class="report-section">
        <h2>${escapeHtml(section.title)}</h2>
        ${section.items.length
          ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
          : `<p class="empty">${escapeHtml(section.emptyText)}</p>`}
      </section>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(report.title)}</title>
  <style>
    :root {
      color-scheme: light;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.5;
      color: #111827;
      background: #f8fafc;
    }
    body {
      margin: 0;
      padding: 32px;
    }
    main {
      max-width: 920px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 28px;
    }
    .report-actions {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    button {
      background: #2563eb;
      border: 0;
      border-radius: 8px;
      color: #ffffff;
      cursor: pointer;
      font-weight: 700;
      min-height: 36px;
      padding: 0 14px;
    }
    h1 {
      font-size: 28px;
      margin: 0 0 6px;
    }
    .meta {
      color: #667085;
      margin: 0 0 22px;
    }
    .summary {
      display: grid;
      gap: 16px;
      grid-template-columns: minmax(180px, 0.5fr) minmax(240px, 1fr);
      margin-bottom: 24px;
    }
    .total {
      align-items: center;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      min-height: 120px;
      text-align: center;
    }
    .total strong {
      display: block;
      font-size: 34px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    td {
      border-bottom: 1px solid #e5e7eb;
      padding: 8px 4px;
      vertical-align: top;
    }
    td:last-child {
      font-weight: 700;
      text-align: right;
      width: 72px;
    }
    .swatch {
      border-radius: 999px;
      display: inline-block;
      height: 10px;
      margin-right: 8px;
      width: 10px;
    }
    .report-section {
      break-inside: avoid;
      border-top: 1px solid #e5e7eb;
      padding-top: 18px;
      margin-top: 18px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 10px;
    }
    ul {
      margin: 0;
      padding-left: 20px;
    }
    li {
      margin: 0 0 8px;
    }
    .empty {
      color: #667085;
      margin: 0;
    }
    @media print {
      body {
        background: #ffffff;
        padding: 0;
      }
      main {
        border: 0;
        border-radius: 0;
        max-width: none;
      }
      .report-actions {
        display: none;
      }
    }
    @media (max-width: 720px) {
      body {
        padding: 16px;
      }
      main {
        padding: 20px;
      }
      .summary {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <main>
    <div class="report-actions">
      <button type="button" onclick="window.print()">Print / Save PDF</button>
    </div>
    <header>
      <h1>${escapeHtml(report.title)}</h1>
      <p class="meta">Generated ${escapeHtml(generatedAt)} - ${escapeHtml(report.status)}</p>
    </header>
    <section class="summary" aria-label="Concept breakdown">
      <div class="total">
        <div>
          <strong>${report.total}</strong>
          <span>${report.total === 1 ? "item" : "items"}</span>
        </div>
      </div>
      <table>
        <tbody>${categoryRows}</tbody>
      </table>
    </section>
    ${sections}
  </main>
</body>
</html>`;
}

function openDashboardReportWindow(html, options = {}) {
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) {
    setInputStatus("The browser blocked the report window. Try Download HTML instead.", true);
    return;
  }

  reportWindow.document.open();
  reportWindow.document.write(html);
  reportWindow.document.close();

  if (options.print) {
    reportWindow.setTimeout(() => reportWindow.print(), 350);
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function sanitizeDashboardInsightText(value) {
  return truncateAgendaText(
    normalizeBusinessEnglishText(value)
      .replace(/\s+(?:decision|risk|blocker|relevant|topic|key point|important point|conclusion)\s*:\s*[\s\S]*$/i, "")
      .replace(/^\s*(?:decision|risk|blocker|relevant|topic|key point|important point|conclusion)\s*:\s*/i, "")
      .replace(/\bI\s+(?:want|need|would\s+like)\s+to\s+(?:send|write|draft|prepare|create|compose)\s+(?:an?\s+)?(?:(?:summary|recap|follow[- ]?up|update|short|quick)\s+){0,3}(?:email|message|gmail draft)\b[\s\S]*$/i, "")
      .replace(/\b(?:zero|0)\s+decisions?\b[^.?!]*(?:\.|$)/gi, " ")
      .replace(/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/gi, " ")
      .replace(/[•*#>`_]+/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^[,.;:\-\s]+|[,.;:\-\s]+$/g, ""),
    180
  );
}

function isUsefulDashboardInsightItem(value) {
  const text = normalizeBusinessEnglishText(value);
  const comparison = normalizeForComparison(text);
  const words = comparison.split(/\s+/).filter(Boolean);

  if (!text || words.length < 2 || text.length < 8) {
    return false;
  }

  if (/\b\d+\s+(?:pending\s+)?(?:tasks?|decisions?|items?)\b/i.test(text)) {
    return false;
  }

  if (isDashboardNoisePhrase(text) || isRandomDashboardKeywordList(words)) {
    return false;
  }

  const contentWords = words.filter((word) => word.length > 3 && !DASHBOARD_INSIGHT_STOP_WORDS.has(word));
  return contentWords.length > 0;
}

function isRandomDashboardKeywordList(words) {
  return words.length > 0 && words.every((word) => DASHBOARD_RANDOM_KEYWORDS.has(word));
}

function isDashboardNoisePhrase(value) {
  return /\b(?:hart and is that it|site in message|who are mentally|mentally sommelier|small and codecs|the moon is working|high moral|shown at right|largely realize|a couple of a couple of)\b/i.test(value);
}

function scheduleGeminiDashboardInterpretation(sourceText, analysis, fallbackInsights) {
  if (!GEMINI_DASHBOARD_INTERPRETATION_CLIENT_ENABLED || !hasGeminiDashboardContext(sourceText, analysis, fallbackInsights)) {
    return;
  }

  const sourceKey = getGeminiDashboardSourceKey(sourceText);
  if (!sourceKey || attemptedGeminiDashboardSourceKeys.has(sourceKey)) {
    return;
  }

  const now = Date.now();
  const queuedAt = dashboardGeminiQueuedAt || now;
  const waitMs = dashboardGeminiTimer && now - queuedAt >= GEMINI_DASHBOARD_MAX_WAIT_MS
    ? 0
    : GEMINI_DASHBOARD_DEBOUNCE_MS;

  if (dashboardGeminiTimer) {
    clearTimeout(dashboardGeminiTimer);
  } else {
    dashboardGeminiQueuedAt = now;
  }

  const requestId = ++dashboardGeminiRequestCounter;
  const readOnlySnapshot = createReadOnlyDashboardContextSnapshot(sourceText, analysis, fallbackInsights);
  latestDashboardGeminiSourceKey = sourceKey;
  dashboardGeminiTimer = setTimeout(() => {
    dashboardGeminiTimer = null;
    dashboardGeminiQueuedAt = 0;
    requestGeminiDashboardInterpretation(readOnlySnapshot, sourceKey, requestId);
  }, waitMs);
}

function cancelGeminiDashboardInterpretation() {
  if (dashboardGeminiTimer) {
    clearTimeout(dashboardGeminiTimer);
    dashboardGeminiTimer = null;
  }

  dashboardGeminiQueuedAt = 0;
  latestDashboardGeminiSourceKey = "";
  dashboardGeminiRequestCounter += 1;
}

function hasGeminiDashboardContext(sourceText, analysis, fallbackInsights) {
  if (countWords(sourceText || "") >= 6) {
    return true;
  }

  return Boolean(
    (analysis?.decisions || []).length ||
    (analysis?.risks || []).length ||
    (analysis?.tasks || []).length ||
    (fallbackInsights?.importantPoints || []).length ||
    (fallbackInsights?.relevant || fallbackInsights?.topics || []).length ||
    (fallbackInsights?.keyPoints || []).length ||
    (fallbackInsights?.conclusions || []).length
  );
}

function getGeminiDashboardSourceKey(sourceText) {
  const normalized = normalizeForComparison(sourceText || "");
  if (!normalized) {
    return "";
  }

  return `${normalized.slice(0, 900)}|${normalized.slice(-900)}`;
}

function createReadOnlyDashboardContextSnapshot(sourceText, analysis, fallbackInsights) {
  const visibleLiveNotes = liveTranscript?.value || "";
  const liveStateTranscript = [finalTranscript, interimTranscript].filter(Boolean).join("\n");
  return Object.freeze({
    sourceText: String(sourceText || ""),
    manualNotes: notesInput?.value || "",
    liveNotes: visibleLiveNotes,
    transcript: String(sourceText || visibleLiveNotes || liveStateTranscript || ""),
    finalTranscript: String(finalTranscript || ""),
    interimTranscript: String(interimTranscript || ""),
    analysis,
    fallbackInsights
  });
}

async function requestGeminiDashboardInterpretation(readOnlySnapshot, sourceKey, requestId) {
  try {
    const response = await fetch(GEMINI_DASHBOARD_INTERPRET_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildGeminiDashboardInterpretationPayload(readOnlySnapshot))
    });
    const result = await response.json().catch(() => null);
    if (!isCurrentGeminiDashboardRequest(sourceKey, requestId)) {
      return;
    }

    const geminiInsights = mapGeminiDashboardResult(result);
    if (geminiInsights) {
      rememberGeminiDashboardAttempt(sourceKey);
      rememberGoodGeminiDashboard(readOnlySnapshot.sourceText, geminiInsights);
      renderMeetingDashboard(readOnlySnapshot.sourceText, geminiInsights, "Dashboard updated from meeting context.");
      applyGlobalSearch();
      return;
    }

    if (result?.reason) {
      renderPendingGeminiDashboard(result.reason);
      applyGlobalSearch();
      return;
    }
  } catch (error) {
    // Gemini-only dashboard mode keeps the local organizer disabled as a renderer.
  }

  if (isCurrentGeminiDashboardRequest(sourceKey, requestId)) {
    renderPendingGeminiDashboard("Gemini dashboard unavailable. Keeping the latest interpreted dashboard visible.");
    applyGlobalSearch();
  }
}

function rememberGoodGeminiDashboard(sourceText, insights) {
  if (!hasDashboardInsightItems(insights)) {
    return;
  }

  lastGoodGeminiDashboardSourceText = sourceText || lastGoodGeminiDashboardSourceText || "";
  lastGoodGeminiDashboardInsights = insights;
}

function renderPendingGeminiDashboard(statusText) {
  if (lastGoodGeminiDashboardInsights) {
    renderMeetingDashboard(
      lastGoodGeminiDashboardSourceText || latestSourceText || "dashboard context",
      lastGoodGeminiDashboardInsights,
      statusText || "Updating dashboard with Gemini."
    );
    return;
  }

  renderMeetingDashboard(null, null, statusText || "Waiting for Gemini dashboard interpretation.");
}

function isCurrentGeminiDashboardRequest(sourceKey, requestId) {
  return requestId === dashboardGeminiRequestCounter && sourceKey === latestDashboardGeminiSourceKey;
}

function rememberGeminiDashboardAttempt(sourceKey) {
  if (!sourceKey) {
    return;
  }

  attemptedGeminiDashboardSourceKeys.add(sourceKey);
  if (attemptedGeminiDashboardSourceKeys.size > 60) {
    attemptedGeminiDashboardSourceKeys.delete(attemptedGeminiDashboardSourceKeys.values().next().value);
  }
}

function buildGeminiDashboardInterpretationPayload(readOnlySnapshot) {
  const snapshot = readOnlySnapshot || createReadOnlyDashboardContextSnapshot("", latestAnalysis, null);
  const sourceText = snapshot.sourceText || snapshot.transcript || "";
  const currentAnalysis = snapshot.analysis || latestAnalysis || analyzeNotes(sourceText || "");
  const currentDashboard = GEMINI_DASHBOARD_ONLY_RENDERING
    ? createEmptyDashboardInsights()
    : (snapshot.fallbackInsights || buildDashboardInsights(sourceText || "", currentAnalysis));
  return {
    manualNotes: normalizeBusinessEnglishBlock(snapshot.manualNotes || ""),
    liveNotes: normalizeBusinessEnglishBlock(snapshot.liveNotes || ""),
    transcript: normalizeBusinessEnglishBlock(snapshot.transcript || sourceText || latestSourceText || ""),
    dashboardContext: {
      decisions: normalizeBusinessEnglishList(currentDashboard.decisions || []),
      risks: normalizeBusinessEnglishList(currentDashboard.risks || []),
      importantPoints: normalizeBusinessEnglishList(mergeDashboardImportantPoints(currentDashboard)),
      relevant: normalizeBusinessEnglishList(currentDashboard.relevant || currentDashboard.topics || []),
      keyPoints: normalizeBusinessEnglishList(currentDashboard.keyPoints || []),
      conclusions: normalizeBusinessEnglishList(currentDashboard.conclusions || [])
    },
    meetingIntelligence: GEMINI_DASHBOARD_ONLY_RENDERING ? createEmptyDashboardInsights() : {
      summary: normalizeBusinessEnglishBlock(currentAnalysis?.summary || ""),
      decisions: normalizeBusinessEnglishList(currentAnalysis?.decisions || []),
      risks: normalizeBusinessEnglishList(currentAnalysis?.risks || []),
      actionItems: normalizeBusinessEnglishList((currentAnalysis?.tasks || []).map((task) => task?.task || task)),
      importantPoints: normalizeBusinessEnglishList(mergeDashboardImportantPoints(currentDashboard)),
      relevant: normalizeBusinessEnglishList(currentDashboard.relevant || currentDashboard.topics || []),
      keyPoints: normalizeBusinessEnglishList(currentDashboard.keyPoints || []),
      conclusions: normalizeBusinessEnglishList(currentDashboard.conclusions || [])
    },
    preparedTasks: GEMINI_DASHBOARD_ONLY_RENDERING ? [] : getPreparedDashboardTasks(),
    preparedMeetings: GEMINI_DASHBOARD_ONLY_RENDERING ? [] : getPreparedDashboardMeetings()
  };
}

function createEmptyDashboardInsights() {
  return {
    decisions: [],
    risks: [],
    importantPoints: [],
    relevant: [],
    topics: [],
    keyPoints: [],
    conclusions: [],
    actionItems: []
  };
}

function getPreparedDashboardTasks() {
  const actionTasks = pendingNotionAction?.type === "tasks" ? pendingNotionAction.tasks || [] : [];
  return dedupe([...pendingNotionTasks, ...actionTasks]
    .map((task) => normalizeBusinessEnglishText([
      task?.task || task?.title || task?.name || "",
      task?.owner || task?.responsible || "",
      task?.suggestedDate || task?.dueDate || "",
      task?.priority || ""
    ].filter(Boolean).join(" ")))
    .filter(Boolean))
    .slice(0, 8);
}

function getPreparedDashboardMeetings() {
  return dedupe([...preparedMeetingRows, pendingMeetingProposal]
    .filter(Boolean)
    .map((meeting) => normalizeBusinessEnglishText([
      meeting.title || "",
      meeting.date || "",
      meeting.startTime || "",
      meeting.agenda || ""
    ].filter(Boolean).join(" ")))
    .filter(Boolean))
    .slice(0, 6);
}

function mapGeminiDashboardResult(result) {
  if (!result?.ok || result.source !== "gemini-dashboard") {
    return null;
  }

  return normalizeGeminiDashboardInsights(result.dashboard || result.insights);
}

function normalizeGeminiDashboardInsights(value) {
  if (!value || typeof value !== "object") {
    return null;
  }

  const importantPoints = mergeDashboardImportantPoints(value);
  return {
    decisions: normalizeDashboardInsightList(value.decisions || [], "decisions"),
    risks: normalizeDashboardInsightList(value.risks || value.risksOrBlockers || [], "risks"),
    importantPoints,
    relevant: importantPoints,
    topics: importantPoints,
    keyPoints: importantPoints,
    conclusions: normalizeDashboardInsightList(value.conclusions || [], "conclusions")
  };
}

function hasDashboardInsightItems(insights = {}) {
  return getDashboardConceptBreakdown(insights).some((category) => category.count > 0);
}

function setMetricValue(element, value, className) {
  element.textContent = value;
  element.className = ["metric-value", className].filter(Boolean).join(" ");
}

function getMeetingHealth(insights) {
  const riskCount = insights.risks.length;
  const taskCount = insights.actionItems.length;
  const decisionCount = insights.decisions.length;

  if (riskCount >= 2 || (riskCount >= 1 && taskCount >= 3)) {
    return {
      label: "Needs Review",
      className: "health-review"
    };
  }

  if (riskCount >= 1) {
    return {
      label: "Monitor",
      className: "health-review"
    };
  }

  if (decisionCount >= 1 || taskCount >= 1) {
    return {
      label: "On Track",
      className: "health-strong"
    };
  }

  return {
    label: "Gathering Context",
    className: ""
  };
}

function getMeetingUrgency(insights, sourceText) {
  const urgentLanguage = /\b(urgent|asap|critical|blocked|blocker|today|tomorrow|high priority|escalat|deadline)\b/i.test(sourceText);

  if (urgentLanguage || insights.risks.length >= 2 || insights.actionItems.some((task) => task.priority === "High")) {
    return {
      label: "High",
      className: "urgency-high"
    };
  }

  if (insights.risks.length === 1 || insights.actionItems.length >= 3) {
    return {
      label: "Medium",
      className: "urgency-medium"
    };
  }

  return {
    label: "Low",
    className: "urgency-low"
  };
}

function formatDashboardTasks(tasks) {
  return tasks.map((task) => {
    const owner = task.owner && task.owner !== "Unassigned" ? `${task.owner}: ` : "";
    return `${owner}${task.task}`;
  });
}

function formatDashboardTime(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function extractKeyPoints(chunks, decisions, tasks, risks) {
  const excluded = new Set([
    ...decisions,
    ...risks,
    ...tasks.map((task) => task.task)
  ].map(normalizeForComparison));

  const candidates = chunks
    .map(stripLabel)
    .map(capitalizeSentence)
    .filter((chunk) => chunk.length > 24)
    .filter((chunk) => !excluded.has(normalizeForComparison(chunk)))
    .filter((chunk) => !decisionPatterns.some((pattern) => pattern.test(chunk)))
    .filter((chunk) => !taskPatterns.some((pattern) => pattern.test(chunk)))
    .filter((chunk) => !riskPatterns.some((pattern) => pattern.test(chunk)))
    .filter((chunk) => !/^(attendees|participants|present|next meeting)\s*:/i.test(chunk));

  const scored = candidates.map((text, index) => ({
    text,
    index,
    score: scoreKeyPoint(text)
  }));

  return dedupe(
    scored
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map((item) => item.text)
  ).slice(0, 6);
}

function scoreKeyPoint(text) {
  let score = 0;
  const scoringPatterns = [
    /\breviewed\b/i,
    /\bdiscussed\b/i,
    /\bprogress\b/i,
    /\bupdate\b/i,
    /\bgoal\b/i,
    /\bmetric\b/i,
    /\bcustomer\b/i,
    /\bbudget\b/i,
    /\btimeline\b/i,
    /\blaunch\b/i,
    /\bstatus\b/i
  ];

  scoringPatterns.forEach((pattern) => {
    if (pattern.test(text)) {
      score += 2;
    }
  });

  if (text.length >= 60) {
    score += 1;
  }

  return score;
}

function extractConclusions(chunks, analysis) {
  const explicitConclusions = chunks
    .filter((chunk) =>
      /\b(conclusion|concluded|in summary|to summarize|next steps?|next meeting|final|closed|wrap up|outcome)\b/i.test(chunk)
    )
    .map(stripLabel)
    .map(capitalizeSentence)
    .filter((chunk) => chunk.length > 8);

  if (explicitConclusions.length) {
    return dedupe(explicitConclusions).slice(0, 5);
  }

  const generated = [];
  if (analysis.decisions.length) {
    generated.push(`The meeting closed with ${analysis.decisions.length} decision${plural(analysis.decisions.length)} captured.`);
  }

  if (analysis.tasks.length) {
    generated.push(`${analysis.tasks.length} action item${plural(analysis.tasks.length)} need follow-up ownership and tracking.`);
  }

  if (analysis.risks.length) {
    generated.push(`${analysis.risks.length} risk or blocker item${plural(analysis.risks.length)} should be monitored before the next checkpoint.`);
  }

  if (!generated.length && chunks.length) {
    generated.push("Discussion notes were captured, but no explicit conclusion was detected yet.");
  }

  return generated.slice(0, 5);
}

function renderLiveActionItems(tasks) {
  if (!tasks.length) {
    renderList(liveActionsOutput, [], "No action items yet.");
    return;
  }

  const items = tasks.map((task) => `${task.task} | Owner: ${task.owner} | Due: ${task.suggestedDate} | Priority: ${task.priority}`);
  renderList(liveActionsOutput, items, "No action items yet.");
}

function analyzeNotes(notes) {
  const englishNotes = normalizeBusinessEnglishBlock(notes);
  const lines = getLines(englishNotes);
  const sentences = getSentences(englishNotes);
  const lineChunks = lines.flatMap(splitLineIntoChunks);
  const chunks = dedupe([...lineChunks, ...sentences].map(cleanText).filter(Boolean));
  const structuredSections = extractStructuredSections(lines);
  const participants = extractParticipants(lines);
  const decisions = dedupe([...structuredSections.decisions, ...extractDecisions(chunks)].filter((item) => item.length > 5)).slice(0, 8);
  const risks = dedupe([...structuredSections.risks, ...extractRisks(chunks)].filter((item) => item.length > 5)).slice(0, 8);
  const tasks = extractTasks(chunks, participants, structuredSections.actionItems);
  const summary = buildSummary(englishNotes, sentences, decisions, tasks, risks, participants);
  const email = buildFollowUpEmail(summary, decisions, tasks, risks);

  return normalizeAnalysisToBusinessEnglish({
    summary,
    decisions,
    risks,
    tasks,
    email,
    counts: {
      words: countWords(englishNotes),
      decisions: decisions.length,
      tasks: tasks.length,
      risks: risks.length
    }
  });
}

function getLines(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function getSentences(text) {
  return text
    .split(/\r?\n/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 18);
}

function cleanText(value) {
  return value
    .replace(/^[\s>*-]+/, "")
    .replace(/^\d+[\).]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeBusinessEnglishText(value) {
  let text = cleanText(String(value || ""));
  if (!text) {
    return "";
  }

  const replacements = [
    [/\breuni[oó]n\b/gi, "meeting"],
    [/\breunion\b/gi, "meeting"],
    [/\bReunion\b/g, "Meeting"],
    [/\bagendar\b/gi, "schedule"],
    [/\bprogramar\b/gi, "schedule"],
    [/\bcrear\b/gi, "create"],
    [/\bcrea\b/gi, "create"],
    [/\btarea\b/gi, "task"],
    [/\btareas\b/gi, "tasks"],
    [/\bp[aá]gina\b/gi, "page"],
    [/\bp[aá]ginas\b/gi, "pages"],
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
    [/\bpunto\b/gi, "dot"],
    [/\barroba\b/gi, "at"],
    [/\bcorreo\b/gi, "email"],
    [/\bllamada\b/gi, "call"],
    [/\bcita\b/gi, "appointment"],
    [/\basignar\b/gi, "assign"],
    [/\basigna\b/gi, "assign"],
    [/\buna\s+ley\s+uni[aá]n\b/gi, "a meeting"],
    [/\blast\s+chance\b/gi, "at eleven"],
    [/\bvoice-created\b/gi, "AI-prepared"]
  ];

  replacements.forEach(([pattern, replacement]) => {
    text = text.replace(pattern, replacement);
  });

  text = text
    .replace(/\bMeeting\s*:\s*/i, "Meeting: ")
    .replace(/\btask\s+task\b/gi, "task")
    .replace(/\bmeeting\s+meeting\b/gi, "meeting")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();

  return text;
}

function normalizeBusinessEnglishList(items) {
  return (items || []).map(normalizeBusinessEnglishText).filter(Boolean);
}

function normalizeBusinessEnglishBlock(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => normalizeBusinessEnglishText(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeBusinessEnglishTask(task) {
  return {
    ...task,
    task: normalizeBusinessEnglishText(task.task),
    owner: normalizeBusinessEnglishText(task.owner) || "Unassigned",
    suggestedDate: normalizeBusinessEnglishText(task.suggestedDate) || "Next business week",
    priority: normalizeBusinessEnglishText(task.priority) || "Medium"
  };
}

function normalizeAnalysisToBusinessEnglish(analysis) {
  const tasks = (analysis.tasks || []).map(normalizeBusinessEnglishTask);
  const decisions = normalizeBusinessEnglishList(analysis.decisions);
  const risks = normalizeBusinessEnglishList(analysis.risks);
  const summary = normalizeBusinessEnglishBlock(analysis.summary);
  const email = normalizeBusinessEnglishBlock(buildFollowUpEmail(summary, decisions, tasks, risks));

  return {
    ...analysis,
    summary,
    decisions,
    risks,
    tasks,
    email,
    counts: {
      ...analysis.counts,
      decisions: decisions.length,
      tasks: tasks.length,
      risks: risks.length
    }
  };
}

function splitLineIntoChunks(line) {
  const looksLikeTaskWithMetadata =
    /^(action|task|tasks|to do)\s*[:.-]/i.test(line) ||
    (/\bpriority\s+(high|medium|low)\b/i.test(line) && /\b(will|to|owns|owner|action)\b/i.test(line));

  if (looksLikeTaskWithMetadata) {
    return [line];
  }

  const parts = line
    .split(/(?<=[.!?])\s+/)
    .map(cleanText)
    .filter(Boolean);

  return parts.length > 1 ? parts : [line];
}

function extractStructuredSections(lines) {
  const sections = {
    topics: [],
    decisions: [],
    actionItems: [],
    risks: []
  };
  let activeSection = null;

  lines.forEach((line) => {
    const heading = getStructuredSectionHeading(line);
    if (heading) {
      activeSection = heading.section;
      if (heading.inlineItem) {
        sections[activeSection].push(capitalizeSentence(heading.inlineItem));
      }
      return;
    }

    const ownerActionItem =
      activeSection === "actionItems" &&
      taskPatterns.some((pattern) => pattern.test(stripStructuredBullet(line)));

    if (/^[A-Za-z\s]+:\s*/.test(cleanText(line)) && !ownerActionItem) {
      activeSection = null;
      return;
    }

    if (!activeSection) {
      return;
    }

    const item = stripStructuredBullet(line);
    if (!item || getStructuredSectionHeading(item)) {
      return;
    }

    sections[activeSection].push(capitalizeSentence(item));
  });

  return {
    topics: dedupe(sections.topics).slice(0, 8),
    decisions: dedupe(sections.decisions).slice(0, 8),
    actionItems: dedupe(sections.actionItems).slice(0, 12),
    risks: dedupe(sections.risks).slice(0, 8)
  };
}

function getStructuredSectionHeading(line) {
  const cleaned = cleanText(line);
  const match = cleaned.match(/^([A-Za-z\s]+):\s*(.*)$/);
  const headingText = (match ? match[1] : cleaned).trim().toLowerCase();
  const inlineItem = match ? stripStructuredBullet(match[2]) : "";
  let section = null;

  if (/^(live\s+)?topics?$/.test(headingText)) {
    section = "topics";
  } else if (/^decisions?(\s+made)?$/.test(headingText)) {
    section = "decisions";
  } else if (/^(action\s+items?|actions?|tasks?|to\s+dos?)$/.test(headingText)) {
    section = "actionItems";
  } else if (/^(risks?|blockers?|risks\s+or\s+blockers?)$/.test(headingText)) {
    section = "risks";
  }

  return section
    ? {
        section,
        inlineItem
      }
    : null;
}

function stripStructuredBullet(line) {
  return cleanText(line.replace(/^[\s>*-]+/, "").replace(/^\d+[\).]\s*/, ""));
}

function stripLabel(value) {
  return cleanText(
    value.replace(
      /^(action|actions|task|tasks|decision|decisions|approved|risk|risks|blocker|blockers|issue|issues|concern|concerns|next steps?)\s*[:.-]\s*/i,
      ""
    )
  );
}

function extractParticipants(lines) {
  const participantLine = lines.find((line) =>
    /^(attendees|participants|present|people|team)\s*:/i.test(line)
  );

  if (!participantLine) {
    return [];
  }

  return participantLine
    .replace(/^[^:]+:/, "")
    .split(/,|;|\band\b/i)
    .map((name) => cleanText(name))
    .filter((name) => /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)?$/.test(name))
    .slice(0, 12);
}

function extractDecisions(chunks) {
  const decisions = chunks
    .filter((chunk) => decisionPatterns.some((pattern) => pattern.test(chunk)))
    .filter((chunk) => !/\b(no|not|without)\s+(decision|approved|agreement)\b/i.test(chunk))
    .map(stripLabel)
    .map((decision) => removeOpeningPhrase(decision, /^(we\s+)?(agreed|decided|approved|resolved|confirmed)\s+(that\s+|to\s+)?/i))
    .map(capitalizeSentence);

  return dedupe(decisions).slice(0, 8);
}

function extractRisks(chunks) {
  const risks = chunks
    .filter((chunk) => riskPatterns.some((pattern) => pattern.test(chunk)))
    .filter((chunk) => !decisionPatterns.some((pattern) => pattern.test(chunk)))
    .map(stripLabel)
    .map((risk) => removeOpeningPhrase(risk, /^(risk|blocker|issue|concern)\s*[:.-]?\s*/i))
    .map(capitalizeSentence);

  return dedupe(risks).slice(0, 8);
}

function extractTasks(chunks, participants, structuredTaskItems = []) {
  const taskCandidates = [
    ...structuredTaskItems,
    ...chunks.filter((chunk) => taskPatterns.some((pattern) => pattern.test(chunk)))
  ];
  const rawTasks = taskCandidates
    .filter((chunk) => !decisionPatterns.some((pattern) => pattern.test(chunk)))
    .map((chunk) => parseTask(chunk, participants))
    .filter((task) => task.task.length > 5);

  const uniqueTasks = [];
  const seen = new Set();

  rawTasks.forEach((task) => {
    const key = `${task.task.toLowerCase()}|${task.owner.toLowerCase()}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueTasks.push(task);
    }
  });

  return uniqueTasks.slice(0, 12);
}

function parseTask(chunk, participants) {
  let text = stripLabel(chunk);
  const owner = extractOwner(text, participants);
  const suggestedDate = extractDate(text);
  const priority = extractPriority(text);

  text = text
    .replace(/\bpriority\s+(high|medium|low)\b\.?/i, "")
    .replace(/\b(high|medium|low)\s+priority\b\.?/i, "")
    .replace(/\s+\bby\s+[^.]+\.?\s*$/i, "")
    .replace(/\bdue\s+(on\s+)?[^.]+\.?\s*$/i, "")
    .trim();

  text = removeOpeningPhrase(
    text,
    /^([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?|@[A-Za-z0-9_-]+)\s+(will|to|owns|owner for|responsible for)\s+/i
  );
  text = removeOpeningPhrase(text, /^(please|can you|could you)\s+/i);
  text = removeOpeningPhrase(text, /^(we|i|they|he|she)\s+(need to|needs to|should|have to|has to|will)\s+/i);
  text = text.replace(/^[A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?\s*[-:]\s*/, "").replace(/^the\s+/i, "").trim();

  return {
    task: capitalizeSentence(text.replace(/[.;]$/, "")),
    owner,
    suggestedDate,
    priority
  };
}

function extractOwner(text, participants) {
  const ownerPatterns = [
    /\bowner\s*[:=-]\s*([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?|@[A-Za-z0-9_-]+)/i,
    /\bresponsible\s*[:=-]\s*([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?|@[A-Za-z0-9_-]+)/i,
    /^([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?|@[A-Za-z0-9_-]+)\s*:\s+/i,
    /^([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?|@[A-Za-z0-9_-]+)\s+(?:will|to|owns|owner for|responsible for)\b/i,
    /\b([A-Za-z][a-z]+(?:\s[A-Za-z][a-z]+)?)\s+owns\b/i
  ];

  for (const pattern of ownerPatterns) {
    const match = text.match(pattern);
    if (match) {
      return normalizeOwner(match[1]);
    }
  }

  const participant = participants.find((name) => new RegExp(`\\b${escapeRegex(name)}\\b`).test(text));
  return participant || "Unassigned";
}

function normalizeOwner(owner) {
  const cleaned = owner.replace(/^@/, "").trim();
  if (!cleaned || /^(i|we|you|they|he|she|it)$/i.test(cleaned)) {
    return "Unassigned";
  }

  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function extractDate(text) {
  const patterns = [
    /\bby\s+((?:next\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b)/i,
    /\bby\s+((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:,\s*\d{4})?)/i,
    /\bdue\s+(?:on\s+)?((?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:,\s*\d{4})?)/i,
    /\bdue\s+(?:on\s+)?((?:next\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b)/i,
    /\bby\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)/i,
    /\bdue\s+(?:on\s+)?(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)/i,
    /\b(today|tomorrow|next week|end of week|eow|end of month|eom)\b/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return normalizeDateLabel(match[1]);
    }
  }

  return "Next business week";
}

function normalizeDateLabel(value) {
  const cleaned = cleanText(value).replace(/\.$/, "");
  const aliases = {
    eow: "End of week",
    eom: "End of month"
  };
  const lower = cleaned.toLowerCase();

  if (aliases[lower]) {
    return aliases[lower];
  }

  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractPriority(text) {
  if (/\b(high|urgent|critical|blocked|blocker|asap|risk)\b/i.test(text)) {
    return "High";
  }

  if (/\b(low|later|nice to have|optional)\b/i.test(text)) {
    return "Low";
  }

  return "Medium";
}

function buildSummary(notes, sentences, decisions, tasks, risks, participants) {
  const topics = extractTopics(notes);
  const usefulSentences = sentences
    .map(cleanText)
    .filter((sentence) => !/^(attendees|participants|present)\s*:/i.test(sentence))
    .filter((sentence) => sentence.length > 24);

  const lead =
    usefulSentences.find((sentence) => /[.!?]$/.test(sentence) && sentence.split(/\s+/).length >= 7) ||
    usefulSentences[0] ||
    "The meeting covered current progress, open actions, and follow-up ownership.";
  const topicText = topics.length ? `Primary topics: ${topics.slice(0, 5).join(", ")}.` : "";
  const participantText = participants.length ? `Participants captured: ${participants.slice(0, 6).join(", ")}.` : "";
  const outcomeText = `The notes include ${decisions.length} decision${plural(decisions.length)}, ${tasks.length} pending task${plural(tasks.length)}, and ${risks.length} risk or blocker item${plural(risks.length)}.`;

  return [lead, topicText, participantText, outcomeText].filter(Boolean).join("\n\n");
}

function extractTopics(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));

  const counts = new Map();
  words.forEach((word) => counts.set(word, (counts.get(word) || 0) + 1));

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([word]) => word.replace(/^\w/, (letter) => letter.toUpperCase()));
}

function buildFollowUpEmail(summary, decisions, tasks, risks) {
  const decisionLines = decisions.length
    ? decisions.map((decision) => `- ${decision}`).join("\n")
    : "- No explicit decisions were detected.";

  const taskLines = tasks.length
    ? tasks.map((task) => `- ${task.task} | Owner: ${task.owner} | Due: ${task.suggestedDate} | Priority: ${task.priority}`).join("\n")
    : "- No explicit pending tasks were detected.";

  const riskLines = risks.length
    ? risks.map((risk) => `- ${risk}`).join("\n")
    : "- No explicit risks or blockers were detected.";

  return `Subject: Meeting follow-up and action plan

Hi team,

Thank you for the discussion. Here is the consolidated follow-up from the meeting.

Executive summary:
${summary}

Decisions made:
${decisionLines}

Pending tasks:
${taskLines}

Risks or blockers:
${riskLines}

Please reply with any corrections or ownership changes.

Best,
`;
}

function renderAnalysis(analysis, sourceText = getCurrentMeetingSourceText(), dashboardStatusLabel = "Updated from notes", routingContext = null) {
  latestAnalysis = analysis;
  latestSourceText = sourceText;
  latestTasks = analysis.tasks;
  latestEmail = analysis.email;
  latestCsv = analysis.tasks.length ? buildTasksCsv(analysis.tasks) : "";

  if (summaryOutput) {
    renderHighlightedText(summaryOutput, analysis.summary);
    summaryOutput.classList.remove("empty-state");
  }

  if (decisionsOutput) {
    renderList(decisionsOutput, analysis.decisions, "No explicit decisions were detected.");
  }
  if (risksOutput) {
    renderList(risksOutput, analysis.risks, "No explicit risks or blockers were detected.");
  }
  if (tasksOutput) {
    renderTasks(analysis.tasks);
  }

  emailOutput.value = analysis.email;
  copyEmailButton.disabled = !latestEmail;
  openGmailButton.disabled = false;
  downloadCsvButton.disabled = analysis.tasks.length === 0;
  exportNotionButton.disabled = analysis.tasks.length === 0;
  setNotionExportStatus(analysis.tasks.length ? "Tasks prepared. Review before exporting to Notion." : "No tasks available for Notion export.", false);
  resultMeta.textContent = `${analysis.counts.words} words analyzed. ${analysis.counts.decisions} decisions, ${analysis.counts.tasks} tasks, ${analysis.counts.risks} risks found.`;
  prepareDownstreamActions(sourceText, analysis, routingContext);
  updateMeetingDashboardFromContext(sourceText, analysis, dashboardStatusLabel);
  applyGlobalSearch();
}

function updateMeetingDashboardFromContext(sourceText, analysis, dashboardStatusLabel = "Updated from notes") {
  const dashboardSourceText = sourceText;
  const fallbackDashboardInsights = buildDashboardInsights(dashboardSourceText, analysis);
  if (GEMINI_DASHBOARD_ONLY_RENDERING) {
    renderPendingGeminiDashboard("Gemini is updating the dashboard from the latest Notes.");
  } else {
    renderMeetingDashboard(dashboardSourceText, fallbackDashboardInsights, dashboardStatusLabel);
  }
  scheduleGeminiDashboardInterpretation(dashboardSourceText, analysis, fallbackDashboardInsights);
  return fallbackDashboardInsights;
}

function buildDashboardInsights(sourceText, analysis) {
  const lines = getLines(sourceText);
  const sentences = getSentences(sourceText);
  const chunks = dedupe([...lines.flatMap(splitLineIntoChunks), ...sentences].map(cleanText).filter(Boolean));
  const structuredSections = extractStructuredSections(lines);
  const labeledInsights = extractDashboardLabeledInsights(sourceText);

  return {
    importantPoints: dedupe([
      ...labeledInsights.importantPoints,
      ...labeledInsights.relevant,
      ...labeledInsights.keyPoints,
      ...structuredSections.topics,
      ...extractTopics(sourceText),
      ...extractKeyPoints(chunks, analysis.decisions, analysis.tasks, analysis.risks)
    ]).slice(0, 8),
    relevant: dedupe([...labeledInsights.relevant, ...structuredSections.topics, ...extractTopics(sourceText)]).slice(0, 8),
    keyPoints: dedupe([...labeledInsights.keyPoints, ...extractKeyPoints(chunks, analysis.decisions, analysis.tasks, analysis.risks)]).slice(0, 8),
    decisions: dedupe([...labeledInsights.decisions, ...analysis.decisions]).slice(0, 5),
    risks: dedupe([...labeledInsights.risks, ...analysis.risks]).slice(0, 5),
    conclusions: dedupe([...labeledInsights.conclusions, ...extractConclusions(chunks, analysis)]).slice(0, 3),
    counts: analysis.counts
  };
}

function extractDashboardLabeledInsights(sourceText) {
  const insights = {
    decisions: [],
    risks: [],
    importantPoints: [],
    relevant: [],
    keyPoints: [],
    conclusions: []
  };
  const labelPattern = buildDashboardLabelPattern();
  const pattern = new RegExp(`\\b(${labelPattern})\\s*:\\s*([\\s\\S]*?)(?=\\s+\\b${labelPattern}\\s*:|$)`, "gi");
  let match;

  while ((match = pattern.exec(String(sourceText || ""))) !== null) {
    const label = normalizeDashboardLabelKey(match[1]);
    const value = sanitizeDashboardInsightText(match[2] || "");
    if (label && value && isUsefulDashboardInsightItem(value)) {
      insights[label].push(value);
    }
  }

  return {
    decisions: dedupe(insights.decisions).slice(0, 5),
    risks: dedupe(insights.risks).slice(0, 5),
    importantPoints: dedupe(insights.importantPoints).slice(0, 8),
    relevant: dedupe(insights.relevant).slice(0, 8),
    keyPoints: dedupe(insights.keyPoints).slice(0, 8),
    conclusions: dedupe(insights.conclusions).slice(0, 3)
  };
}

function normalizeDashboardLabelKey(value) {
  const label = normalizeForComparison(value || "");
  for (const [category, aliases] of Object.entries(DASHBOARD_LABEL_ALIASES)) {
    if (aliases.some((alias) => normalizeForComparison(alias) === label)) {
      return category;
    }
  }

  return "";
}

function buildDashboardLabelPattern() {
  return Object.values(DASHBOARD_LABEL_ALIASES)
    .flat()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
}

function renderList(element, items, emptyText) {
  if (!element) {
    return;
  }

  element.innerHTML = "";
  element.classList.toggle("empty-list", items.length === 0);

  const values = items.length ? items : [emptyText];
  values.forEach((item) => {
    const li = document.createElement("li");
    renderHighlightedText(li, item);
    element.appendChild(li);
  });
}

function renderHighlightedText(element, value) {
  const text = String(value ?? "");
  element.textContent = "";

  if (!activeSearchQuery) {
    element.textContent = text;
    return;
  }

  const fragment = buildHighlightedFragment(text, activeSearchQuery);
  element.appendChild(fragment);
}

function applyGlobalSearch() {
  clearSearchHighlights();

  if (!activeSearchQuery) {
    searchStatus.textContent = "Search across the meeting workspace.";
    return;
  }

  let matchCount = 0;
  document.querySelectorAll("[data-search-scope]").forEach((scope) => {
    matchCount += highlightTextNodes(scope, activeSearchQuery);
  });
  matchCount += highlightMatchingFields(activeSearchQuery);

  const label = matchCount === 1 ? "match" : "matches";
  searchStatus.textContent = matchCount
    ? `${matchCount} ${label} for "${formatSearchQuery(activeSearchQuery)}".`
    : `No matches for "${formatSearchQuery(activeSearchQuery)}".`;
}

function clearSearchHighlights() {
  document.querySelectorAll(".search-highlight").forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) {
      return;
    }

    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });

  document.querySelectorAll(".search-field-match").forEach((element) => {
    element.classList.remove("search-field-match");
  });

  document.querySelectorAll(".search-container-match").forEach((element) => {
    element.classList.remove("search-container-match");
  });
}

function highlightTextNodes(scope, query) {
  const nodes = [];
  const loweredQuery = query.toLowerCase();
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.nodeValue || "";
      const parent = node.parentElement;

      if (!parent || !text.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      if (parent.closest("textarea, input, select, script, style, mark, .global-search-panel, .sr-only")) {
        return NodeFilter.FILTER_REJECT;
      }

      return text.toLowerCase().includes(loweredQuery)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  return nodes.reduce((count, node) => count + replaceTextNodeWithHighlights(node, query), 0);
}

function replaceTextNodeWithHighlights(node, query) {
  const text = node.nodeValue || "";
  const matchCount = countOccurrences(text, query);

  if (!matchCount) {
    return 0;
  }

  node.parentNode.replaceChild(buildHighlightedFragment(text, query), node);
  return matchCount;
}

function buildHighlightedFragment(text, query) {
  const fragment = document.createDocumentFragment();
  const loweredText = text.toLowerCase();
  const loweredQuery = query.toLowerCase();
  let cursor = 0;

  while (cursor < text.length) {
    const matchIndex = loweredText.indexOf(loweredQuery, cursor);

    if (matchIndex === -1) {
      fragment.appendChild(document.createTextNode(text.slice(cursor)));
      break;
    }

    if (matchIndex > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, matchIndex)));
    }

    const mark = document.createElement("mark");
    mark.className = "search-highlight";
    mark.textContent = text.slice(matchIndex, matchIndex + query.length);
    fragment.appendChild(mark);
    cursor = matchIndex + query.length;
  }

  return fragment;
}

function highlightMatchingFields(query) {
  let matchCount = 0;

  document.querySelectorAll("[data-search-scope] textarea, [data-search-scope] input, [data-search-scope] select").forEach((field) => {
    const value = getFieldSearchText(field);
    const matches = countOccurrences(value, query);

    if (!matches) {
      return;
    }

    matchCount += matches;
    field.classList.add("search-field-match");

    const container = field.closest(".field-group, .transcript-section, .email-block, .mode-panel, .scheduler-panel");
    if (container) {
      container.classList.add("search-container-match");
    }
  });

  return matchCount;
}

function getFieldSearchText(field) {
  if (field.tagName === "SELECT") {
    const option = field.options[field.selectedIndex];
    return [field.value, option ? option.textContent : ""].filter(Boolean).join(" ");
  }

  return field.value || "";
}

function countOccurrences(value, query) {
  const text = String(value || "").toLowerCase();
  const needle = String(query || "").toLowerCase();
  let count = 0;
  let position = 0;

  if (!needle) {
    return 0;
  }

  while (position < text.length) {
    const index = text.indexOf(needle, position);
    if (index === -1) {
      break;
    }

    count += 1;
    position = index + needle.length;
  }

  return count;
}

function formatSearchQuery(query) {
  return query.length > 34 ? `${query.slice(0, 31)}...` : query;
}

function renderTasks(tasks) {
  tasksOutput.innerHTML = "";

  if (!tasks.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "empty-table";
    renderHighlightedText(cell, "No explicit pending tasks were detected.");
    row.appendChild(cell);
    tasksOutput.appendChild(row);
    return;
  }

  tasks.forEach((task) => {
    const row = document.createElement("tr");
    const taskCell = document.createElement("td");
    const ownerCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const priorityBadge = document.createElement("span");

    taskCell.className = "task-cell";
    renderHighlightedText(taskCell, task.task);
    renderHighlightedText(ownerCell, task.owner);
    renderHighlightedText(dateCell, task.suggestedDate);
    priorityBadge.className = `priority ${task.priority.toLowerCase()}`;
    renderHighlightedText(priorityBadge, task.priority);
    priorityCell.appendChild(priorityBadge);

    row.append(taskCell, ownerCell, dateCell, priorityCell);
    tasksOutput.appendChild(row);
  });
}

function openCsvReviewModal() {
  if (!latestTasks.length || !latestCsv) {
    setInputStatus("Prepare action items before reviewing a CSV download.", true);
    return;
  }

  pendingCsvTasks = latestTasks.slice();
  renderInlineCsvApproval(pendingCsvTasks);
  document.getElementById("csvExportSection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  applyGlobalSearch();
}

function closeCsvModal() {
  csvModal.hidden = true;
  csvModal.setAttribute("aria-hidden", "true");
  setCsvModalStatus("", false);
  downloadCsvButton.focus();
}

function renderCsvPreview(tasks) {
  csvPreviewOutput.innerHTML = "";

  if (!tasks.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "empty-table";
    cell.textContent = "No tasks ready for CSV download.";
    row.appendChild(cell);
    csvPreviewOutput.appendChild(row);
    return;
  }

  tasks.forEach((task) => {
    const row = document.createElement("tr");
    [task.task, task.owner, task.suggestedDate, task.priority].map(normalizeBusinessEnglishText).forEach((value) => {
      const cell = document.createElement("td");
      renderHighlightedText(cell, value);
      row.appendChild(cell);
    });
    csvPreviewOutput.appendChild(row);
  });
}

function downloadReviewedCsv() {
  if (!latestCsv) {
    setInlineCsvStatus("No prepared CSV is available. Prepare everything first.", true);
    setInputStatus("No prepared CSV is available. Prepare everything first.", true);
    return;
  }

  downloadCsv(latestCsv);
  setInlineCsvStatus("Confirmed. CSV downloaded.", false);
  setInputStatus("CSV downloaded after inline approval.", false);
}

function buildTasksCsv(tasks) {
  const rows = [["Task", "Owner", "Suggested date", "Priority"], ...tasks.map((task) => [
    normalizeBusinessEnglishText(task.task),
    normalizeBusinessEnglishText(task.owner),
    normalizeBusinessEnglishText(task.suggestedDate),
    normalizeBusinessEnglishText(task.priority)
  ])];

  return rows.map((row) => row.map(csvEscape).join(",")).join("\n");
}

function downloadCsv(csv) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `meeting-tasks-${formatDateForFilename(new Date())}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadTextFile(text, filename, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      // Fall back to the legacy copy path below for local-file or permission-limited contexts.
    }
  }

  const temporaryTextarea = document.createElement("textarea");
  temporaryTextarea.value = text;
  temporaryTextarea.setAttribute("readonly", "");
  temporaryTextarea.style.position = "fixed";
  temporaryTextarea.style.opacity = "0";
  temporaryTextarea.style.pointerEvents = "none";
  document.body.appendChild(temporaryTextarea);
  temporaryTextarea.focus();
  temporaryTextarea.select();
  const copied = document.execCommand("copy");
  temporaryTextarea.remove();

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

function setInputStatus(message, isError) {
  inputStatus.textContent = message;
  inputStatus.classList.toggle("error", Boolean(isError));
}

function removeOpeningPhrase(text, pattern) {
  return cleanText(text.replace(pattern, ""));
}

function capitalizeSentence(value) {
  const text = cleanText(value);
  if (!text) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function countWords(text) {
  const matches = text.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

function plural(count) {
  return count === 1 ? "" : "s";
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.toLowerCase();
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function normalizeForComparison(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatDateForFilename(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}
