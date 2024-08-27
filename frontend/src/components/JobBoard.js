import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h2>Job Board</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobBoard;
