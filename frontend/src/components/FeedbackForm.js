import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', { feedback })
      .then(response => alert('Feedback submitted successfully'))
      .catch(error => console.error('Error submitting feedback:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
