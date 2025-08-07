// server/routes/data.js

const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

// --- @desc    Get user's app data ---
// --- @route   GET /api/data ---
router.get('/', async (req, res) => {
    try {
        // req.user is added by our auth middleware
        const user = await User.findById(req.user.id).select('appData');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.appData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// --- @desc    Save or update user's app data ---
// --- @route   POST /api/data ---
router.post('/', async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Update the appData field with the data from the request body
        user.appData = req.body;
        await user.save();

        res.json({ message: 'Data saved successfully', appData: user.appData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;