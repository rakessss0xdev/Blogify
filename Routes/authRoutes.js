const express = require('express');
const router = express.Router();
const { User } = require('../config/db'); // Import User model
const { hashedPassword, generateToken, comparePassword } = require('../authetication/auth'); // Import auth functions

// **Signup Route**
router.post('/Signup', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).send('All fields are required.');
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).send('User already exists. Please choose a different username.');
        }

        // Hash password
        const hashedPwd = await hashedPassword(password);

        // Save new user in the database
        const newUser = new User({ username, email, password: hashedPwd });
        await newUser.save();

        console.log('User registered successfully');

        // Render Home Page after successful signup
        res.status(201).render('Home/home');
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).send('An error occurred during signup.');
    }
});

// **Signin Route**
router.post('/Signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log('Request body:', req.body);

        // Validate input
        if (!username || !password) {
            return res.status(400).send('All fields are required.');
        }

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send('Username not found.');
        }

        // Compare passwords
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Invalid credentials.');
        }

        // Generate a JWT Token
        const token = generateToken(user._id);

        // Set Token in Cookie (optional)
        res.cookie('token', token, { httpOnly: true });

        console.log('User signed in successfully');

        // Render Home Page after successful sign-in
        res.status(200).render('Home/home');
    } catch (err) {
        console.error('Error during signin:', err);
        res.status(500).send('An error occurred during signin.');
    }
});

module.exports = router;
