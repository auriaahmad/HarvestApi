// src/components/MainForm.js

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import NumberInput from './NumberInput';
import DateRangePicker from './DateRangePicker';

function MainForm() {
    const [client, setClient] = useState('');
    const [project, setProject] = useState('');
    const [task, setTask] = useState('');
    const [minimumHours, setMinimumHours] = useState();
    const [maximumHours, setMaximumHours] = useState();
    const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [endDate, setEndDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0));
    const formatedStartDate = startDate.toLocaleDateString();
    const formatedEndDate = endDate.toLocaleDateString();
    const handleClientSelect = (value) => {
        setClient(value);

    };

    const handleProjectSelect = (value) => {
        setProject(value);

    };
    const handleTaskSelect = (value) => {
        setTask(value);

    };
    const handleMiniHours = (value) => {
        setMinimumHours(value);

    };
    const handleMaxHours = (value) => {
        setMaximumHours(value);

    };

    const handleDateChange = (newStartDate, newEndDate) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
        console.log(formatedStartDate);
        console.log(formatedEndDate);
    };
    const handleSubmit = () => {
        // Implement the submission logic here.
    };

    return (
    

        <div className="bg-white-500 h-screen flex items-center justify-center">
            <div className="bg-white-500 rounded-lg p-8 shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-semibold text-gray-800">Sign Up</h1>
                <form className="mt-4">
                    <Dropdown
                        label="Client"
                        placeholder="Select a Client"
                        apiEndpoint="https://api.harvestapp.com/v2/clients"
                        data='clients'
                        onSelect={handleClientSelect}
                    />
                    <Dropdown
                        label="Projects"
                        placeholder="Select a Project"
                        apiEndpoint="https://api.harvestapp.com/v2/projects"
                        data='projects'
                        onSelect={handleProjectSelect}
                        isDisabled={!client}
                    />
                    <Dropdown
                        label="Tasks"
                        placeholder="Select a Task"
                        apiEndpoint="https://api.harvestapp.com/v2/tasks"
                        data='tasks'
                        onSelect={handleTaskSelect}
                        isDisabled={!project}
                    />
                    <NumberInput label="Minimum Hours" placeholder="Set Minumum Hours" onChange={handleMiniHours} />
                    {
                        minimumHours > maximumHours && <div className="text-red-500">Maximum Hours Should Be Greater</div>
                    }
                    <NumberInput label="Maximum Hours" placeholder="Set Maximum Hours" onChange={handleMaxHours} isDisabled={!minimumHours} />

                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onDatesChange={handleDateChange}
                    />
                    <Button onClick={handleSubmit} isDisabled={!client || !project || !task || !minimumHours || !maximumHours || minimumHours > maximumHours}>
                        Submit
                    </Button>
                </form>

            </div>
            </div>

      





    );
}

export default MainForm;
//             <div class="sm:w-1/2 md:w-1/2 lg:w-1/2 sm:h-screen md:h-screen lg:h-screen bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500">
//   Left Side
// </div >