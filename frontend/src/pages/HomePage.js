import React from 'react';
import EventList from '../components/EventList';
import JobBoard from '../components/JobBoard';
import SuccessStories from '../components/SuccessStories';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Alumni Association Platform</h1>
      <EventList />
      <JobBoard />
      <SuccessStories />
    </div>
  );
}

export default HomePage;
