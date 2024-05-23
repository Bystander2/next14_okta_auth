import { google } from 'googleapis';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: session.accessToken });

  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const dataset = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    });

    //console.log("events", events.data.items)

    res.status(200).json({ result: dataset.data.items });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch result' });
  }
}
