const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
        unique: true,
    },
    task: {
        type: String,
        required: true,
    },
    minimumHours: {
        type: Number,
        required: true,
    },
    maximumHours: {
        type: Number,
        required: true,
    },
    formatedStartDate: {
        type: Date,
        required: true,
    },
    formatedEndDate: {
        type: Date,
        required: true,
    }
}
    ,
    {
        timestamps: true
    }
);

const Selected = mongoose.model('Selected', userSchema);

module.exports = Selected

;