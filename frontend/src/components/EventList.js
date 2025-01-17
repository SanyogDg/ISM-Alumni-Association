import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
