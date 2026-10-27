export interface CalendarEventInput {
  summary: string;
  description?: string;
  startDateTime: string; // ISO string
  endDateTime: string;   // ISO string
  attendeeEmail?: string;
  attendeeName?: string;
  location?: string;
}

export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  htmlLink?: string;
  status?: string;
  organizer?: {
    email?: string;
    displayName?: string;
  };
}
