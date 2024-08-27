import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1rem',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ fontSize: '1.5rem' }}>Alumni Association</h1>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/donations" style={linkStyle}>Donation</Link>
        <Link to="/networking" style={linkStyle}>Networking</Link>
        <Link to="/jobs" style={linkStyle}>Jobs</Link>
        <Link to="/events" style={linkStyle}>Events</Link>
        <Link to="/success-stories" style={linkStyle}>Success Stories</Link>
      </div>
    </nav>
  );
};

export default Navbar;
