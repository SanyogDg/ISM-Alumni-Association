import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AlumniProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/api/profiles/123') 
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Graduation Year: {profile.graduationYear}</p>
    </div>
  );
}

export default AlumniProfile;
