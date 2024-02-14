
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Basic Routing
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Use Env Port or 3000
const port = process.env.PORT || 3000;

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
