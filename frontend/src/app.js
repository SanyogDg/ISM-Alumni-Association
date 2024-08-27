import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DonationPage from './pages/DonationPage';
import NetworkingPage from './pages/NetworkingPage';
import JobPortalPage from './pages/JobPortalPage';
import SuccessStory from './pages/SuccessStory';
import EventPage from './pages/EventPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/jobs" element={<JobPortalPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/success-stories" element={<SuccessStory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
