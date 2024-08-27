const express = require('express');
const router = express.Router();
const { createDonation, getDonations } = require('../controllers/donationController');

router.post('/', createDonation);

// Get Donations Route
router.get('/', getDonations);

module.exports = router;
