const Donation = require('../models/Donation');

exports.createDonation = async (req, res) => {
  try {
    const { amount, donorName, message } = req.body;
    const donation = new Donation({ amount, donorName, message });
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create donation' });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
};
