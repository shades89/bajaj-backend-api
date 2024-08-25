const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const PORT = process.env.PORT || 3000;

// POST route to handle the logic
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = null;

    // Iterate through data and categorize
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercaseAlphabet || item > highestLowercaseAlphabet)) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    // Prepare the response
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",  // Replace with dynamic values as needed
        email: "john@xyz.com",          // Replace with dynamic values as needed
        roll_number: "ABCD123",         // Replace with dynamic values as needed
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).json(response);
});

// GET route to return a hardcoded operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
