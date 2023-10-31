// src/app.js
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const selectedRoute = require("./routes/selected");

app.use(bodyParser.json());
// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/selectedDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events and errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the signup route
app.use("/api", selectedRoute); // This means the signup route will be accessed as /api/signup

module.exports = app;