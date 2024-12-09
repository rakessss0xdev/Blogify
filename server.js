const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('../Routes/authRoutes'); // Import authentication routes
const { connectToDB } = require('../config/db');
connectToDB(); // Ensure this is called before server starts



const app = express();
const port = 8080;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Frontend'));
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data
app.use(express.static(path.join(__dirname, '../Frontend')));

// Mount Authentication Routes
app.use('/auth', router); // Prefix all routes in router with /auth

// Render Signup and Signin Pages
app.get('/Signup', (req, res) => {
    res.render('Signup');
    console.log('Signup page rendered');
});

app.get('/Signin', (req, res) => {
    res.render('Signin');
    console.log('Signin page rendered');
});

// Dashboard Route
app.get('/Dashboard', (req, res) => {
    res.render('Dashboard');
});

// Default Route
app.get('/', (req, res) => {
    res.json('Welcome to our Blog application');
    console.log('Dashboard Rendered');
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
