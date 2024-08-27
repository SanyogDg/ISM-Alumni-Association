const express = require('express');
const { createProfile, getProfiles } = require('../controllers/profileController');
const router = express.Router();

router.post('/', createProfile);
router.get('/', getProfiles);

module.exports = router;
