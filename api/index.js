module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { data } = req.body;

        const numbers = [];
        const alphabets = [];
        let highestLowercaseAlphabet = null;

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

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
        };

        res.status(200).json(response);

    } else if (req.method === 'GET') {
        res.status(200).json({ operation_code: 1 });
    } else {
        res.status(405).send('Method Not Allowed');
    }
};
