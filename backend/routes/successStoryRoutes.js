const express = require('express');
const { createSuccessStory, getSuccessStories } = require('../controllers/successStoryController');
const router = express.Router();

router.post('/', createSuccessStory);
router.get('/', getSuccessStories);

module.exports = router;
