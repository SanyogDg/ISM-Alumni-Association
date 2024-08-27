const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

module.exports = SuccessStory;
