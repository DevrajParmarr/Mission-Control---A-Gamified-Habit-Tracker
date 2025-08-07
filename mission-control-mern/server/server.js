// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { protect } = require('./middleware/auth.middleware'); // Import the middleware

// --- App Config ---
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error("FATAL ERROR: MONGO_URI is not defined in your .env file.");
    process.exit(1);
}
mongoose.connect(mongoUri)
.then(() => console.log("MongoDB connection established successfully."))
.catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

// --- API Routes ---
app.get('/', (req, res) => {
    res.send('Hello from the Mission Control server!');
});

// Authentication routes (publicly accessible)
app.use('/api/auth', require('./routes/auth'));

// V V V THIS IS THE NEW PART V V V
// Data routes (protected by our 'protect' middleware)
app.use('/api/data', protect, require('./routes/data'));
// ^ ^ ^ END OF NEW PART ^ ^ ^

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});