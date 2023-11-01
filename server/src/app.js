const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect(process.env.DB_URi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Handle MongoDB connection events and errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api", require("./routes/selected"));

module.exports = app;
