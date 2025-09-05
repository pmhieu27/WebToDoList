const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
// Register a new user
const register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ id: uuidv4(), email, username, password_hash: hashedPassword });

        res.status(201).json({ message: 'User registered', username: username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(401).json({ error: 'Account not found' });

        // Check password
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.cookie('auth_token', token, {
            httpOnly: true,
            maxAge: 86_400_000,
        });

        return res.status(200).json({
            message: "Login successed",
            success: true
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Example getProfile implementation
const getProfile = async (req, res) => {
    res.status(200).json({ message: 'Profile route works!' });
};

module.exports = {
    register,
    login,
    getProfile
}