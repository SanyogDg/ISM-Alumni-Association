const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
  try {
    const { userId, bio, skills, experience } = req.body;
    const profile = new Profile({ userId, bio, skills, experience });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create profile' });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate('userId');
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
};
