// src/app.js
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require('body-parser');
const signupRoute = require('./routes/signup'); 
const signinRoute = require('./routes/signin'); 

app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/registrationDB', {
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
app.use('/api', signupRoute); // This means the signup route will be accessed as /api/signup
app.use('/api', signinRoute);

module.exports = app;
