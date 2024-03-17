const express = require('express');
const dotenv = require('dotenv');
const ConnectDB = require('./src/db/connection'); // Make sure to include the file extension
const app = require('./app')
dotenv.config();

const port = process.env.PORT || 2000;

// Connect to MongoDB and start the server
ConnectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on Port ${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    });

module.exports = app;
