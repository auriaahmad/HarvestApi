const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    client: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    task_assignment: {
      type: Object,
    },
    user_assignment: {
      type: Object,
    },
    user: {
      type: Object,
    },
    entryId: {
      type: String,
    },
    minimumHours: {
      type: Number,
      required: true,
    },
    maximumHours: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Selected = mongoose.model("Selected", userSchema);

module.exports = Selected;
