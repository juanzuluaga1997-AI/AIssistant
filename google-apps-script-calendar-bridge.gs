const BRIDGE_SECRET_PROPERTY = "CALENDAR_BRIDGE_SECRET";
const DEFAULT_TIME_ZONE = "America/Bogota";
const DEFAULT_SELF_ATTENDEE = "juan.zuluaga1997@gmail.com";

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const storedSecret = PropertiesService.getScriptProperties().getProperty(BRIDGE_SECRET_PROPERTY);

    if (!storedSecret || payload.secret !== storedSecret) {
      return jsonResponse({
        ok: false,
        message: "Unauthorized calendar bridge request."
      });
    }

    if (payload.confirmed !== true) {
      return jsonResponse({
        ok: false,
        message: "Scheduling requires confirmed: true."
      });
    }

    const validation = validatePayload(payload);
    if (!validation.ok) {
      return jsonResponse(validation);
    }

    const eventResult = createCalendarEvent(payload);
    const meetLink = extractMeetLink(eventResult);
    const eventLink = eventResult.htmlLink || "";

    return jsonResponse({
      ok: true,
      eventId: eventResult.id || "",
      eventLink,
      meetLink,
      message: meetLink
        ? "Meeting scheduled on Google Calendar with a Google Meet link."
        : "Meeting scheduled on Google Calendar, but Google Meet link creation was not available."
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: `Calendar bridge failed: ${error.message}`
    });
  }
}

function createCalendarEvent(payload) {
  const timeZone = payload.timeZone || Session.getScriptTimeZone() || DEFAULT_TIME_ZONE;
  const attendees = normalizeAttendees(payload.attendees);
  const eventResource = {
    summary: cleanText(payload.title),
    description: buildDescription(payload),
    start: {
      dateTime: payload.startDateTime || `${payload.date}T${payload.startTime}:00`,
      timeZone
    },
    end: {
      dateTime: payload.endDateTime,
      timeZone
    },
    attendees: attendees.map((email) => ({
      email
    })),
    conferenceData: {
      createRequest: {
        requestId: Utilities.getUuid(),
        conferenceSolutionKey: {
          type: "hangoutsMeet"
        }
      }
    }
  };

  if (typeof Calendar !== "undefined" && Calendar.Events) {
    return Calendar.Events.insert(eventResource, "primary", {
      conferenceDataVersion: 1,
      sendUpdates: "all"
    });
  }

  const calendarEvent = CalendarApp.getDefaultCalendar().createEvent(
    eventResource.summary,
    new Date(eventResource.start.dateTime),
    new Date(eventResource.end.dateTime),
    {
      description: eventResource.description,
      guests: attendees.join(","),
      sendInvites: Boolean(attendees.length)
    }
  );

  return {
    id: calendarEvent.getId(),
    htmlLink: "",
    hangoutLink: ""
  };
}

function validatePayload(payload) {
  if (!cleanText(payload.title)) {
    return {
      ok: false,
      message: "Meeting title is required."
    };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(payload.date || ""))) {
    return {
      ok: false,
      message: "Date must use YYYY-MM-DD format."
    };
  }

  if (!/^\d{2}:\d{2}$/.test(String(payload.startTime || ""))) {
    return {
      ok: false,
      message: "Start time must use HH:MM format."
    };
  }

  if (!payload.endDateTime) {
    return {
      ok: false,
      message: "End date/time is required."
    };
  }

  const attendees = normalizeAttendees(payload.attendees);
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

function buildDescription(payload) {
  const parts = [];

  if (cleanText(payload.agenda)) {
    parts.push(`Agenda:\n${cleanText(payload.agenda)}`);
  }

  if (cleanText(payload.summary)) {
    parts.push(`Prepared summary:\n${cleanText(payload.summary)}`);
  }

  parts.push("Created by Codex 2026 Meeting Assistant.");
  return parts.join("\n\n");
}

function extractMeetLink(eventResult) {
  if (eventResult.hangoutLink) {
    return eventResult.hangoutLink;
  }

  const entryPoints = eventResult.conferenceData && eventResult.conferenceData.entryPoints;
  if (!Array.isArray(entryPoints)) {
    return "";
  }

  const videoEntry = entryPoints.find((entry) => entry.entryPointType === "video");
  return videoEntry ? videoEntry.uri || "" : "";
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizeAttendees(attendees) {
  const values = Array.isArray(attendees)
    ? attendees
    : String(attendees || "").split(/[\s,;]+/);
  const seen = {};
  const cleaned = values
    .map((email) => String(email || "").trim().toLowerCase())
    .filter(Boolean)
    .filter((email) => {
      if (seen[email]) {
        return false;
      }
      seen[email] = true;
      return true;
    });

  return cleaned.length ? cleaned : [DEFAULT_SELF_ATTENDEE];
}

function isValidEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !isLikelyScheduleTimeEmailArtifact(email);
}

function isLikelyScheduleTimeEmailArtifact(email) {
  const parts = String(email || "").toLowerCase().split("@");
  const local = parts[0] || "";
  const domain = parts[1] || "";
  const temporalLocal = /^(today|tomorrow|tonight|monday|tuesday|wednesday|thursday|friday|saturday|sunday|meeting|schedule|calendar)$/;
  const timeDomain = /^(\d{1,4}(am|pm)?|(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(am|pm)?)\.(am|pm)$/;

  return temporalLocal.test(local) && timeDomain.test(domain);
}
