const express = require('express');
const router = express.Router();
const { calculateMinCost } = require('./controller');

// Define the POST route for calculating cost
router.post('/calculate_cost', calculateMinCost);

module.exports = router;
