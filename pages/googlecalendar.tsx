import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Calendar() {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (session) {
      fetch('/api/calendar')
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setEvents(data.result);
        }
        console.log("data", data)
        });
    }
  }, [session]);

  if (!session) {
    return <button onClick={() => signIn()}>Sign in with Google</button>;
  }

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
      <h1>Your Google Calendar Events</h1>
      <ul>
        {events.map((event) => (

          <li key={event.id}>
            <strong>{event.summary}</strong><br />
            {new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
