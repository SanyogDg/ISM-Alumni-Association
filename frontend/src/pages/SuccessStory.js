import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuccessStory = () => {
  const [stories, setStories] = useState([]);
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');

  const fetchStories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/success-stories');
      setStories(response.data);
    } catch (error) {
      console.error('Failed to fetch success stories', error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/success-stories', { title, story, author });
      alert('Success story created successfully');
      setTitle('');
      setStory('');
      setAuthor('');
      fetchStories();
    } catch (error) {
      console.error('Failed to create success story', error);
      alert('Success story creation failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Story"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Create Success Story</button>
      </form>
      <h2>Success Stories</h2>
      <ul>
        {stories.map(story => (
          <li key={story._id}>
            <h3>{story.title}</h3>
            <p>{story.story}</p>
            <p><strong>Author:</strong> {story.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessStory;
