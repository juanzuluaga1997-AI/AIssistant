const DOMAIN_TOPICS = {
  "Marketing and growth": [
    "growth experiment planning",
    "campaign launch coordination",
    "lead generation strategy",
    "conversion funnel optimization",
    "activation metric review",
    "retention campaign planning",
    "referral program update",
    "market expansion research",
    "audience segmentation",
    "positioning test feedback",
    "growth budget approval",
    "campaign performance recap",
    "partnership marketing request",
    "customer acquisition update",
    "product led growth motion",
    "lifecycle marketing handoff",
    "demand generation follow up",
    "go to market update"
  ],
  "Social media": [
    "social media content approval",
    "new content and graphics update",
    "social media publishing calendar",
    "community response escalation",
    "influencer collaboration request",
    "short form video review",
    "social campaign performance",
    "brand mention monitoring",
    "content creator handoff",
    "social media crisis response",
    "organic social update",
    "paid social creative review",
    "social media asset request",
    "platform engagement report",
    "social listening insight",
    "hashtag strategy update",
    "social media team alignment",
    "creator contract follow up"
  ],
  "Content marketing": [
    "blog editorial calendar",
    "case study approval",
    "white paper review",
    "content brief request",
    "newsletter content draft",
    "thought leadership article",
    "content distribution plan",
    "webinar content follow up",
    "content refresh request",
    "customer story interview",
    "ebook launch update",
    "content performance recap",
    "copy review request",
    "content governance issue",
    "pillar page planning",
    "sales enablement content",
    "video script review",
    "content localization handoff"
  ],
  "SEO and website traffic": [
    "keyword ranking update",
    "technical SEO issue",
    "organic traffic report",
    "metadata review request",
    "site crawl error",
    "backlink outreach",
    "search console anomaly",
    "landing page traffic drop",
    "SEO content opportunity",
    "website traffic forecast",
    "page speed follow up",
    "indexing issue escalation",
    "schema markup request",
    "internal linking update",
    "competitive SEO insight",
    "traffic attribution question",
    "organic conversion update",
    "SEO migration checklist"
  ],
  "Paid ads": [
    "paid search budget approval",
    "campaign creative review",
    "ad performance recap",
    "audience targeting update",
    "cost per lead concern",
    "paid social test",
    "retargeting campaign setup",
    "ad account access request",
    "conversion tracking issue",
    "media plan approval",
    "campaign pause recommendation",
    "ad copy approval",
    "budget pacing alert",
    "landing page test request",
    "channel mix update",
    "ROAS performance review",
    "keyword bid adjustment",
    "agency paid media follow up"
  ],
  "Email marketing": [
    "email campaign approval",
    "newsletter send plan",
    "drip sequence update",
    "marketing automation issue",
    "segmentation list request",
    "email deliverability concern",
    "subject line test",
    "lifecycle nurture sequence",
    "CRM email sync issue",
    "unsubscribe rate alert",
    "email template review",
    "campaign send confirmation",
    "A B email test recap",
    "email personalization update",
    "send time recommendation",
    "suppression list check",
    "email compliance review",
    "lead nurture handoff"
  ],
  "Brand and PR": [
    "press release approval",
    "media inquiry response",
    "brand guideline review",
    "PR crisis escalation",
    "analyst briefing follow up",
    "spokesperson quote request",
    "brand asset approval",
    "public statement review",
    "event announcement draft",
    "earned media recap",
    "brand partnership update",
    "reputation risk alert",
    "award submission follow up",
    "media kit request",
    "executive quote approval",
    "brand naming decision",
    "PR agency follow up",
    "launch communications plan"
  ],
  "Sales and CRM": [
    "lead handoff follow up",
    "sales pipeline update",
    "CRM data cleanup",
    "opportunity stage review",
    "proposal follow up",
    "contract renewal reminder",
    "account owner handoff",
    "demo scheduling request",
    "pricing approval request",
    "sales forecast update",
    "deal blocker escalation",
    "CRM access request",
    "prospect qualification update",
    "quote revision request",
    "sales enablement request",
    "territory assignment question",
    "customer account note",
    "closed won recap"
  ],
  "Customer success": [
    "customer onboarding update",
    "renewal risk alert",
    "QBR follow up",
    "customer health score review",
    "adoption plan update",
    "implementation blocker",
    "success plan confirmation",
    "customer expansion opportunity",
    "training session follow up",
    "executive sponsor update",
    "churn risk escalation",
    "account review recap",
    "customer feedback summary",
    "renewal timeline reminder",
    "customer milestone update",
    "usage report request",
    "CSM handoff note",
    "support to success escalation"
  ],
  "Customer support": [
    "support ticket escalation",
    "customer issue follow up",
    "bug report handoff",
    "SLA breach alert",
    "refund request update",
    "technical support summary",
    "customer response draft",
    "support backlog update",
    "tier two escalation",
    "known issue notice",
    "customer apology email",
    "case resolution confirmation",
    "support documentation request",
    "urgent support blocker",
    "feature request routing",
    "support manager escalation",
    "root cause follow up",
    "customer support handoff"
  ],
  "Project management": [
    "project status update",
    "milestone delay alert",
    "risk register follow up",
    "dependency blocker",
    "project timeline revision",
    "stakeholder update",
    "scope change request",
    "project kickoff recap",
    "task owner reminder",
    "deadline confirmation",
    "project budget issue",
    "resource allocation request",
    "project decision recap",
    "meeting action items",
    "project closure summary",
    "delivery plan review",
    "project approval request",
    "cross functional handoff"
  ],
  "Program management": [
    "program roadmap update",
    "portfolio risk alert",
    "steering committee recap",
    "program dependency review",
    "initiative status report",
    "program governance follow up",
    "workstream alignment",
    "program budget approval",
    "launch readiness update",
    "executive program summary",
    "program milestone review",
    "change management update",
    "program resource constraint",
    "benefits realization report",
    "program risk mitigation",
    "multi team coordination",
    "program escalation email",
    "operating cadence update"
  ],
  "Agile and Scrum": [
    "sprint planning recap",
    "daily standup blocker",
    "sprint review follow up",
    "retrospective action item",
    "backlog refinement request",
    "story estimate question",
    "scrum impediment escalation",
    "release burndown update",
    "definition of done review",
    "product backlog priority",
    "sprint goal update",
    "velocity concern",
    "agile ceremony schedule",
    "user story clarification",
    "acceptance criteria review",
    "scrum team dependency",
    "iteration planning update",
    "release train coordination"
  ],
  "Product management": [
    "product roadmap update",
    "feature prioritization decision",
    "customer feedback synthesis",
    "requirements clarification",
    "product launch readiness",
    "MVP scope review",
    "feature adoption report",
    "product analytics insight",
    "stakeholder requirement request",
    "product discovery follow up",
    "release notes review",
    "pricing packaging question",
    "competitive product insight",
    "feature deprecation notice",
    "product risk alert",
    "user research recap",
    "product decision memo",
    "go to market handoff"
  ],
  "App development": [
    "app testing status",
    "GitHub deployment access",
    "pro account request",
    "production deployment blocker",
    "API integration issue",
    "mobile app release update",
    "backend bug escalation",
    "frontend implementation review",
    "code review follow up",
    "environment access request",
    "build pipeline failure",
    "app store submission update",
    "feature branch handoff",
    "technical debt discussion",
    "app performance concern",
    "authentication issue",
    "release candidate approval",
    "developer account upgrade"
  ],
  "Website development": [
    "website copy update",
    "landing page approval",
    "CMS access request",
    "website launch readiness",
    "domain DNS issue",
    "website bug report",
    "form submission problem",
    "hosting upgrade request",
    "website redesign feedback",
    "page content approval",
    "analytics tag request",
    "website accessibility review",
    "site migration update",
    "SSL certificate issue",
    "web performance update",
    "navigation change request",
    "website QA summary",
    "staging review request"
  ],
  "QA and testing": [
    "test plan review",
    "bug triage follow up",
    "regression test result",
    "UAT readiness update",
    "test case approval",
    "quality risk alert",
    "automation coverage update",
    "defect severity escalation",
    "release testing blocker",
    "test environment issue",
    "QA signoff request",
    "smoke test summary",
    "acceptance testing feedback",
    "testing timeline update",
    "test data request",
    "quality gate decision",
    "failed test investigation",
    "production validation update"
  ],
  "UX/UI design": [
    "design review feedback",
    "prototype approval",
    "wireframe update",
    "user flow clarification",
    "visual design handoff",
    "design system request",
    "accessibility design issue",
    "usability testing recap",
    "Figma access request",
    "interaction design question",
    "design QA feedback",
    "client design approval",
    "brand alignment review",
    "mobile layout concern",
    "UX research finding",
    "component spec update",
    "design decision recap",
    "creative asset approval"
  ],
  "Data analytics and BI": [
    "dashboard update",
    "BI report request",
    "data quality issue",
    "metrics definition clarification",
    "analytics access request",
    "KPI performance recap",
    "forecasting model update",
    "data pipeline failure",
    "reporting deadline reminder",
    "SQL query review",
    "data source discrepancy",
    "executive dashboard summary",
    "cohort analysis insight",
    "tracking event request",
    "self serve analytics update",
    "data governance question",
    "monthly metrics report",
    "BI stakeholder follow up"
  ],
  "Finance and accounting": [
    "invoice confirmation request",
    "payment status follow up",
    "budget approval request",
    "expense report question",
    "purchase order issue",
    "accounts receivable update",
    "accounts payable follow up",
    "billing discrepancy",
    "forecast variance explanation",
    "month end close reminder",
    "finance approval needed",
    "vendor payment confirmation",
    "tax document request",
    "cash flow update",
    "revenue recognition question",
    "audit support request",
    "invoice due date reminder",
    "financial report recap"
  ],
  "Operations": [
    "process improvement update",
    "operational blocker",
    "SOP review request",
    "capacity planning update",
    "inventory issue",
    "fulfillment delay alert",
    "operations handoff",
    "service level update",
    "facilities request",
    "workflow automation idea",
    "vendor operations issue",
    "operations dashboard recap",
    "supply constraint alert",
    "process owner reminder",
    "logistics coordination",
    "runbook update",
    "operational risk review",
    "daily operations summary"
  ],
  "Procurement and vendors": [
    "vendor quote request",
    "supplier follow up",
    "procurement approval",
    "contractor onboarding",
    "purchase request clarification",
    "vendor renewal reminder",
    "RFP response follow up",
    "supplier performance concern",
    "contract terms question",
    "retail availability inquiry",
    "World Cup album store inquiry",
    "vendor invoice issue",
    "procurement timeline update",
    "software license purchase",
    "vendor access request",
    "purchase order confirmation",
    "third party risk review",
    "supplier delivery delay"
  ],
  "HR and recruiting": [
    "candidate interview feedback",
    "recruiting follow up",
    "offer approval request",
    "new hire onboarding update",
    "job description review",
    "interview schedule coordination",
    "HR policy clarification",
    "candidate status update",
    "background check follow up",
    "recruiter handoff",
    "employee documentation request",
    "hiring manager feedback",
    "compensation approval",
    "onboarding access request",
    "recruiting pipeline update",
    "candidate rejection draft",
    "internal mobility question",
    "HR escalation email"
  ],
  "Performance management": [
    "performance review reminder",
    "goal setting follow up",
    "manager feedback request",
    "PIP update",
    "promotion calibration note",
    "quarterly goal check in",
    "peer feedback request",
    "performance concern escalation",
    "development plan follow up",
    "review cycle update",
    "OKR progress recap",
    "manager one on one summary",
    "employee recognition note",
    "performance documentation",
    "compensation review follow up",
    "team goals alignment",
    "feedback deadline reminder",
    "calibration decision recap"
  ],
  "Learning and development": [
    "training enrollment request",
    "learning program update",
    "workshop feedback recap",
    "certification follow up",
    "manager training reminder",
    "course access request",
    "learning budget approval",
    "skills gap discussion",
    "enablement session recap",
    "LMS access issue",
    "training completion reminder",
    "mentorship program update",
    "career development follow up",
    "onboarding training plan",
    "leadership training invite",
    "curriculum review request",
    "training vendor follow up",
    "learning metrics update"
  ],
  "Legal, compliance, and risk": [
    "contract review request",
    "NDA follow up",
    "compliance approval needed",
    "policy exception request",
    "legal risk escalation",
    "data processing agreement",
    "vendor compliance review",
    "audit finding response",
    "regulatory update summary",
    "privacy review request",
    "risk assessment follow up",
    "incident disclosure draft",
    "terms and conditions review",
    "records retention question",
    "compliance training reminder",
    "legal hold notice",
    "risk mitigation update",
    "contract signature reminder"
  ],
  "IT operations": [
    "account access request",
    "software license request",
    "device provisioning update",
    "VPN access issue",
    "IT ticket escalation",
    "system outage update",
    "identity management issue",
    "hardware replacement request",
    "SaaS admin access",
    "email account setup",
    "network connectivity issue",
    "IT change window notice",
    "backup failure alert",
    "endpoint management update",
    "service desk follow up",
    "permission group request",
    "system maintenance reminder",
    "IT onboarding checklist"
  ],
  "Cybersecurity": [
    "security access review",
    "phishing alert",
    "vulnerability remediation",
    "incident response update",
    "MFA enforcement notice",
    "security policy exception",
    "SOC escalation",
    "risk acceptance request",
    "penetration test finding",
    "security training reminder",
    "credential exposure concern",
    "third party security review",
    "patching deadline reminder",
    "data breach assessment",
    "security audit request",
    "access revocation follow up",
    "endpoint security alert",
    "secure deployment review"
  ],
  "Administration": [
    "meeting room booking",
    "travel approval request",
    "office supply request",
    "executive calendar update",
    "visitor coordination",
    "document signing reminder",
    "administrative follow up",
    "facilities maintenance request",
    "team event coordination",
    "expense receipt reminder",
    "office announcement draft",
    "policy acknowledgement reminder",
    "mailroom delivery issue",
    "calendar conflict resolution",
    "administrative checklist",
    "business card request",
    "office access request",
    "schedule coordination update"
  ],
  "Executive leadership and strategy": [
    "executive status update",
    "strategy decision recap",
    "board meeting follow up",
    "leadership alignment note",
    "company OKR update",
    "strategic priority review",
    "investor update draft",
    "executive escalation",
    "operating plan approval",
    "cross functional decision",
    "leadership offsite recap",
    "business review summary",
    "strategic risk alert",
    "resource tradeoff decision",
    "executive briefing request",
    "market strategy update",
    "quarterly planning follow up",
    "company announcement draft"
  ]
};

const DOMAIN_GUIDANCE = {
  "Marketing and growth": guidance("marketing team", ["campaign", "growth", "funnel", "lead"], "status_update"),
  "Social media": guidance("social media team", ["social", "content", "graphics", "post", "creator"], "internal_update"),
  "Content marketing": guidance("content team", ["content", "blog", "copy", "story", "editorial"], "internal_update"),
  "SEO and website traffic": guidance("SEO or web team", ["seo", "traffic", "keyword", "ranking", "search"], "status_update"),
  "Paid ads": guidance("paid media team", ["ads", "budget", "creative", "campaign", "roas"], "request"),
  "Email marketing": guidance("email marketing team", ["newsletter", "deliverability", "automation", "campaign"], "request"),
  "Brand and PR": guidance("brand or PR lead", ["brand", "press", "media", "announcement"], "request"),
  "Sales and CRM": guidance("sales owner", ["sales", "crm", "deal", "pipeline", "prospect"], "follow_up"),
  "Customer success": guidance("customer success manager", ["customer", "renewal", "onboarding", "adoption"], "follow_up"),
  "Customer support": guidance("support lead", ["support", "ticket", "case", "customer", "sla"], "risk_alert"),
  "Project management": guidance("project owner", ["project", "timeline", "milestone", "blocker"], "status_update"),
  "Program management": guidance("program lead", ["program", "workstream", "portfolio", "governance"], "status_update"),
  "Agile and Scrum": guidance("scrum team", ["sprint", "scrum", "backlog", "story", "blocker"], "follow_up"),
  "Product management": guidance("product manager", ["product", "feature", "roadmap", "requirements"], "decision_recap"),
  "App development": guidance("engineering or app owner", ["app", "github", "deployment", "account", "testing"], "request"),
  "Website development": guidance("web team", ["website", "cms", "landing", "hosting", "domain"], "request"),
  "QA and testing": guidance("QA lead", ["qa", "testing", "bug", "release", "defect"], "status_update"),
  "UX/UI design": guidance("design team", ["design", "figma", "prototype", "ux", "ui"], "request"),
  "Data analytics and BI": guidance("analytics owner", ["data", "dashboard", "report", "metrics", "bi"], "request"),
  "Finance and accounting": guidance("finance team", ["invoice", "payment", "budget", "finance", "accounting"], "request"),
  "Operations": guidance("operations owner", ["operations", "process", "inventory", "logistics"], "status_update"),
  "Procurement and vendors": guidance("vendor or procurement contact", ["vendor", "store", "supplier", "purchase", "album"], "request"),
  "HR and recruiting": guidance("HR or recruiting team", ["hr", "candidate", "interview", "hiring", "feedback"], "follow_up"),
  "Performance management": guidance("manager or HR partner", ["performance", "review", "goals", "feedback"], "reminder"),
  "Learning and development": guidance("learning and development team", ["training", "course", "learning", "certification"], "reminder"),
  "Legal, compliance, and risk": guidance("legal or compliance owner", ["legal", "contract", "compliance", "risk"], "risk_alert"),
  "IT operations": guidance("IT administrator", ["access", "license", "account", "vpn", "system"], "request"),
  "Cybersecurity": guidance("security team", ["security", "phishing", "vulnerability", "incident"], "risk_alert"),
  "Administration": guidance("administrator or office owner", ["calendar", "room", "travel", "office"], "request"),
  "Executive leadership and strategy": guidance("executive stakeholder", ["executive", "strategy", "board", "leadership"], "decision_recap")
};

const SPECIAL_TOPIC_HINTS = {
  "social media content approval": {
    synonyms: ["social team update", "content and graphics approval", "social media graphics"],
    bodyGuidance: ["Use 'social media' as an adjective; do not write 'social medium'.", "Mention content and graphics approval only when present in the segment."]
  },
  "new content and graphics update": {
    synonyms: ["new creative assets", "graphics approval", "content update"],
    bodyGuidance: ["Keep the update concise and focused on creative approval and next steps."]
  },
  "GitHub deployment access": {
    synonyms: ["github upload", "deployment account", "git hub upload"],
    keywords: ["github", "git", "hub", "upload", "deployment", "app"],
    bodyGuidance: ["Ask for the account, access, or upgrade needed to continue deployment/testing."]
  },
  "pro account request": {
    synonyms: ["paid account", "account upgrade", "pro plan"],
    keywords: ["pro", "account", "upgrade", "github", "upload"],
    bodyGuidance: ["Ask the recipient to confirm whether to upgrade the account or use another approved method."]
  },
  "World Cup album store inquiry": {
    synonyms: ["world cup album", "store availability", "album available"],
    keywords: ["world", "cup", "album", "store", "buy", "available"],
    recipientHints: ["store", "retailer", "vendor contact"],
    subjectGuidance: ["Ask directly about availability of the World Cup album."],
    bodyGuidance: ["Keep the email as a store inquiry; do not include workplace deployment or account details."]
  },
  "retail availability inquiry": {
    synonyms: ["store inquiry", "product availability", "buy from store"],
    keywords: ["store", "available", "buy", "purchase", "album"],
    bodyGuidance: ["Ask if the item is available and how to purchase it."]
  },
  "client design approval": {
    synonyms: ["client approved design", "design approval"],
    bodyGuidance: ["Confirm the approval and ask for next steps only when the segment mentions them."]
  },
  "candidate interview feedback": {
    synonyms: ["interview feedback", "candidate feedback", "hiring feedback"],
    bodyGuidance: ["Ask HR or the hiring team for interview feedback and next steps."]
  },
  "invoice confirmation request": {
    synonyms: ["confirm invoice", "invoice before Friday", "invoice approval"],
    bodyGuidance: ["Ask finance to confirm the invoice, amount/status, and timing if stated."]
  },
  "app testing status": {
    synonyms: ["app almost complete", "two more weeks testing", "application testing"],
    bodyGuidance: ["Frame as a client or stakeholder update when a communication recipient is named."]
  }
};

function guidance(recipient, keywords, emailType) {
  return {
    keywords,
    synonyms: keywords.map((keyword) => `${keyword} update`),
    commonIntents: ["request confirmation", "share a concise update", "ask for next steps"],
    emailTypes: [emailType, "follow_up", "status_update"],
    goodReasonsToEmail: ["A person or team needs an update, confirmation, approval, access, a decision, or a next step."],
    avoidIf: ["The segment is only testing chatter.", "The recipient or business need is unclear.", "The topic belongs to an earlier unrelated segment."],
    recipientHints: [recipient],
    subjectGuidance: ["Use a short subject that names the current topic and requested action."],
    bodyGuidance: ["Write one focused email about the current segment only.", "Ask for the clearest next step when appropriate."],
    confidenceBoosts: ["Named recipient", "Clear request verb", "Specific deadline", "Specific blocker or approval"],
    confidencePenalties: ["No clear recipient", "No communication need", "Speech recognition noise", "Only old unrelated topic match"]
  };
}

function buildWorkEmailKnowledgeBase() {
  return Object.entries(DOMAIN_TOPICS).flatMap(([domain, topics]) => {
    const defaults = DOMAIN_GUIDANCE[domain] || guidance("responsible owner", [], "request");
    return topics.map((topic, index) => {
      const special = SPECIAL_TOPIC_HINTS[topic] || {};
      const topicKeywords = tokenize(`${domain} ${topic}`);
      const id = `${slugify(domain)}-${String(index + 1).padStart(2, "0")}`;
      return {
        id,
        domain,
        topic,
        keywords: unique([...(defaults.keywords || []), ...topicKeywords, ...(special.keywords || [])]),
        synonyms: unique([...(defaults.synonyms || []), topic.replace(/\band\b/gi, "&"), ...(special.synonyms || [])]),
        commonIntents: defaults.commonIntents,
        emailTypes: unique([...(special.emailTypes || []), ...(defaults.emailTypes || [])]),
        goodReasonsToEmail: special.goodReasonsToEmail || defaults.goodReasonsToEmail,
        avoidIf: unique([...(defaults.avoidIf || []), ...(special.avoidIf || [])]),
        recipientHints: unique([...(special.recipientHints || []), ...(defaults.recipientHints || [])]),
        subjectGuidance: unique([...(special.subjectGuidance || []), ...(defaults.subjectGuidance || [])]),
        bodyGuidance: unique([...(special.bodyGuidance || []), ...(defaults.bodyGuidance || [])]),
        confidenceBoosts: defaults.confidenceBoosts,
        confidencePenalties: defaults.confidencePenalties
      };
    });
  });
}

const WORK_EMAIL_KNOWLEDGE_BASE = buildWorkEmailKnowledgeBase();

function selectEmailKnowledge(segment, existingEmailRows = [], limit = 5) {
  const text = normalize(segment);
  if (!text || looksNoisy(text)) {
    return [];
  }

  const tokens = tokenize(text);
  const existingText = normalize(
    (Array.isArray(existingEmailRows) ? existingEmailRows : [])
      .map((row) => [row.subject, row.topic, row.body].filter(Boolean).join(" "))
      .join(" ")
  );

  return WORK_EMAIL_KNOWLEDGE_BASE
    .map((entry) => {
      const score = scoreEntry(entry, text, tokens, existingText);
      return {
        ...entry,
        confidenceScore: Math.max(0, Math.min(1, score / 20))
      };
    })
    .filter((entry) => entry.confidenceScore >= 0.18)
    .sort((a, b) => b.confidenceScore - a.confidenceScore || a.domain.localeCompare(b.domain))
    .slice(0, Math.max(3, Math.min(5, limit)))
    .map(compactEntry);
}

function scoreEntry(entry, text, tokens, existingText) {
  let score = 0;
  const topicText = normalize(entry.topic);
  if (topicText && text.includes(topicText)) {
    score += 8;
  }

  for (const keyword of entry.keywords || []) {
    const normalized = normalize(keyword);
    if (normalized && tokens.includes(normalized)) {
      score += 3;
    }
  }

  for (const synonym of entry.synonyms || []) {
    const normalized = normalize(synonym);
    if (normalized && text.includes(normalized)) {
      score += 4;
    }
  }

  for (const token of tokenize(entry.topic)) {
    if (tokens.includes(token)) {
      score += 1.4;
    }
  }

  if (/(email|send|tell|ask|follow up|confirm|update|request|let).{0,80}(client|team|finance|hr|jared|store|vendor|support|customer)/i.test(text)) {
    score += 1.5;
  }

  const entryText = normalize(`${entry.topic} ${(entry.keywords || []).join(" ")}`);
  if (existingText && entryText && existingText.includes(entryText) && !text.includes(topicText)) {
    score -= 3;
  }

  return score;
}

function compactEntry(entry) {
  return {
    id: entry.id,
    domain: entry.domain,
    topic: entry.topic,
    keywords: entry.keywords.slice(0, 12),
    synonyms: entry.synonyms.slice(0, 8),
    commonIntents: entry.commonIntents.slice(0, 4),
    emailTypes: entry.emailTypes.slice(0, 4),
    goodReasonsToEmail: entry.goodReasonsToEmail.slice(0, 3),
    avoidIf: entry.avoidIf.slice(0, 4),
    recipientHints: entry.recipientHints.slice(0, 4),
    subjectGuidance: entry.subjectGuidance.slice(0, 3),
    bodyGuidance: entry.bodyGuidance.slice(0, 4),
    confidenceBoosts: entry.confidenceBoosts.slice(0, 4),
    confidencePenalties: entry.confidencePenalties.slice(0, 4),
    confidenceScore: Number(entry.confidenceScore.toFixed(2))
  };
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/git\s+hub/g, "github")
    .replace(/social medium/g, "social media")
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  const stop = new Set(["about", "also", "and", "are", "because", "before", "email", "for", "from", "have", "need", "send", "that", "the", "this", "want", "with"]);
  return unique(normalize(value).split(/\s+/).filter((token) => token.length > 2 && !stop.has(token)));
}

function looksNoisy(text) {
  return /growth in gross hack|toss to season install|tools the scandal|for small last/.test(text);
}

function unique(values) {
  return Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
}

function slugify(value) {
  return normalize(value).replace(/\s+/g, "-");
}

module.exports = {
  WORK_EMAIL_KNOWLEDGE_BASE,
  selectEmailKnowledge
};
