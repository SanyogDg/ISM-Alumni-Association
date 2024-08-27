import React, { useState } from 'react';
import axios from 'axios';

const AlumniProfile = () => {
  const [userId, setUserId] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/profiles', {
        userId,
        bio,
        skills: skills.split(','),
        experience: experience.split(';').map(exp => {
          const [company, position, startDate, endDate] = exp.split(',');
          return { company, position, startDate, endDate };
        }),
      });
      alert('Profile updated successfully');
      setUserId('');
      setBio('');
      setSkills('');
      setExperience('');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Profile update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        required
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills (comma-separated)"
      />
      <textarea
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Experience (format: company,position,startDate,endDate;...)"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default AlumniProfile;
