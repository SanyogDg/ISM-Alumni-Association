import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('/api/success-stories')
      .then(response => setStories(response.data))
      .catch(error => console.error('Error fetching success stories:', error));
  }, []);

  return (
    <div>
      <h2>Success Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuccessStories;
