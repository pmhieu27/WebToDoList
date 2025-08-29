const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ username, password: hashedPassword });

        res.status(201).json({ message: 'User registered', userId: user.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ accessToken: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Example getProfile implementation
exports.getProfile = async (req, res) => {
    res.status(200).json({ message: 'Profile route works!' });
};