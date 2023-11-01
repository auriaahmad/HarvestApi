const express = require("express");

const Selected = require("../models/selected");

const router = express.Router();

router.post("/selected", async (req, res) => {
  const {
    client,
    project,
    task,
    minimumHours,
    maximumHours,
    startDate,
    endDate,
    user,
    task_assignment,
    user_assignment,
    entryId,
  } = req.body;
  // Implement your signup logic here

  try {
    const newSelected = new Selected({
      client,
      project,
      task,
      minimumHours,
      maximumHours,
      startDate,
      endDate,
      user,
      task_assignment,
      user_assignment,
      entryId,
    });
    // Save the user document to the database
    const response = await newSelected.save();

    return res
      .status(201)
      .json({ message: "User entry saved successfully!", entry: response });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred during registration" });
  }
});

module.exports = router;
