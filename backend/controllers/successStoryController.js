const SuccessStory = require('../models/SuccessStory');

exports.createSuccessStory = async (req, res) => {
  try {
    const { title, story, author } = req.body;
    const successStory = new SuccessStory({ title, story, author });
    await successStory.save();
    res.status(201).json(successStory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create success story' });
  }
};

exports.getSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.status(200).json(successStories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch success stories' });
  }
};
