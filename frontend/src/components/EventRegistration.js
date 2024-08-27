import React, { useState } from 'react';
import axios from 'axios';

function EventRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/events/register', { name, email })
      .then(response => alert('Registered successfully'))
      .catch(error => console.error('Error registering for event:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default EventRegistration;
