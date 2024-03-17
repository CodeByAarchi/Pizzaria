const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const multer = require('multer');
const upload = multer();
const session = require('express-session');

dotenv.config();

const app = express();

// Configure session middleware
app.use(session({
    secret: 'aarchi',
    resave: false,
    saveUninitialized: true
}));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("public"));
app.use(cookieParser());
app.use(upload.none());

// Import user routes
const userRoutes = require('./src/routes/user.routes');

app.use("/api/v1/user", userRoutes);

module.exports = app;
