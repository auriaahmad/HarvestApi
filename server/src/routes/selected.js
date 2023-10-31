const express = require('express')

const Selected = require('../models/selected');

const router = express.Router();


router.post('/selected', async(req, res) => {
  const { client, project, task, minimumHours, maximumHours, formatedStartDate,formatedEndDate } = req.body;
    // Implement your signup logic here
   
        const selected = {
            client, project, task, minimumHours, maximumHours, formatedStartDate, formatedEndDate
        };
        console.log(selected);
    try{
        const newSelected = new Selected(selected);
        // Save the user document to the database
        await newSelected.save();

        return res.status(201).json({ message: 'User entry successfully.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred during registration' });
    }
});

module.exports = router;