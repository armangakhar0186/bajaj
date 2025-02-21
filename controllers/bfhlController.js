exports.postData = (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

        res.json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
};

exports.getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

