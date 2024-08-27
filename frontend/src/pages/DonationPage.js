import React, { useState } from 'react';
import axios from 'axios';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donations', { amount, donorName, message });
      alert('Donation successful');
      setAmount('');
      setDonorName('');
      setMessage('');
    } catch (error) {
      console.error('Failed to make donation', error);
      alert('Donation failed');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message (optional)"
      />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
