const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alumni',
    required: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  skills: [String],
  experience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
    },
  ],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
