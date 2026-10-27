import { CalendarEventInput, GoogleCalendarEvent } from '../types';

const CALENDAR_API_BASE = 'https://www.googleapis.com/calendar/v3';

export async function fetchUserCalendarEvents(
  accessToken: string,
  timeMin?: string
): Promise<GoogleCalendarEvent[]> {
  const now = timeMin || new Date().toISOString();
  const url = `${CALENDAR_API_BASE}/calendars/primary/events?timeMin=${encodeURIComponent(
    now
  )}&orderBy=startTime&singleEvents=true&maxResults=15`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Error al consultar Google Calendar (${response.status})`
    );
  }

  const data = await response.json();
  return data.items || [];
}

export async function createGoogleCalendarAppointment(
  accessToken: string,
  input: CalendarEventInput
): Promise<GoogleCalendarEvent> {
  const url = `${CALENDAR_API_BASE}/calendars/primary/events`;

  const eventPayload = {
    summary: input.summary,
    description: input.description || 'Consulta legal agendada vía Estudio Jurídico Leandro Rodríguez',
    location: input.location || 'Cofico, Córdoba / Videollamada Google Meet',
    start: {
      dateTime: input.startDateTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Argentina/Cordoba',
    },
    end: {
      dateTime: input.endDateTime,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Argentina/Cordoba',
    },
    attendees: input.attendeeEmail ? [{ email: input.attendeeEmail, displayName: input.attendeeName }] : [],
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 60 },
      ],
    },
  };

  const response = await fetch(`${url}?conferenceDataVersion=1`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventPayload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Error al agendar la cita en Google Calendar (${response.status})`
    );
  }

  return await response.json();
}

export async function deleteGoogleCalendarEvent(
  accessToken: string,
  eventId: string
): Promise<void> {
  const url = `${CALENDAR_API_BASE}/calendars/primary/events/${eventId}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok && response.status !== 204) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Error al eliminar el evento de Google Calendar (${response.status})`
    );
  }
}
