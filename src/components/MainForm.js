// src/components/MainForm.js

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import NumberInput from "./NumberInput";
import DateRangePicker from "./DateRangePicker";
import shapes from "../assets/shapes.svg";
function MainForm() {
  const [client, setClient] = useState('');
  // const newClient = client[1];
  const [project, setProject] = useState('');
  const [task, setTask] = useState('');
  const [minimumHours, setMinimumHours] = useState();
  const [maximumHours, setMaximumHours] = useState();
  const [startDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [endDate, setEndDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
  );
  const formatedStartDate = startDate.toLocaleDateString();
  const formatedEndDate = endDate.toLocaleDateString();
  const handleClientSelect = (value) => {
    const newClient = value.split(",");
    setClient(newClient);
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
    // <div className="w-full h-[100vh] flex justify-center items-center bg-pink-100">

    // </div>
    <div className="bg-white-500 h-screen flex items-center justify-center">
      <div className="w-[60%] h-[90%] bg-white flex items-center justify-center border border-spacing-1"
      >
        <div className="w-[50%] h-full bg-white flex items-center justify-center relative overflow-hidden">
          <img
            className="rotate-[30deg] w-[100%] absolute top-[-10px] left-[-250px]"
            src={shapes}
            alt=""
          />
          <img
            className="rotate-[240deg] w-[100%] absolute top-[500px] left-[150px]"
            src={shapes}
            alt=""
          />
          <div
             className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter absolute p-8 shadow-md w-full max-w-[500px] bg-blend-normal bg-blend-overly border-solid border-4 "
             style={{
               borderImage: "linear-gradient(to right, purple, cyan)1",
               borderRadius: "10px",
             }}
          >
            <h1 className="text-[25px] mt-[5px] font-semibold">Client: <div className="text-[20px]">{client}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Project: <div className="text-[20px]">{project}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Task: <div className="text-[20px]">{task}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Minimum Hours: <div className="text-[20px]">{minimumHours}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Maximum Hours: <div className="text-[20px]">{maximumHours}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Start Date: <div className="text-[20px]">{formatedStartDate}</div></h1>
            <hr />
            <h1 className="text-[25px] mt-[15px] font-semibold">Start Date: <div className="text-[20px]">{formatedEndDate}</div></h1>
            <hr />
          </div>
        </div>
        <div className="w-[50%] h-full bg-[#333] flex items-center justify-center relative">
          <img
            className="rotate-[0deg] w-[100%] absolute top-[0px] left-[-150px]"
            src={shapes}
            alt=""
          />
          <img
            className="rotate-[-160deg] w-[100%] absolute top-[200px] left-[-150px]"
            src={shapes}
            alt=""
          />
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter absolute p-8 shadow-md w-full max-w-[500px] bg-blend-normal bg-blend-overly border-solid border-4 "
            style={{
              borderImage: "linear-gradient(to right, purple, cyan)1",
              borderRadius: "10px",
            }}
          >
            <h1 className="text-[32px] font-semibold text-white mx-auto">Selection Form</h1>
            <form className="mt-4">
              <Dropdown 
                label="Client"
                placeholder="Select a Client"
                apiEndpoint="https://api.harvestapp.com/v2/clients"
                data="clients"
                onSelect={handleClientSelect}
              />
              <Dropdown
                label="Projects"
                placeholder="Select a Project"
                apiEndpoint="https://api.harvestapp.com/v2/projects"
                data="projects"
                onSelect={handleProjectSelect}
                isDisabled={!client}
                parameter={parseInt(client[0])}
              />
              <Dropdown
                label="Tasks"
                placeholder="Select a Task"
                apiEndpoint="https://api.harvestapp.com/v2/tasks"
                data="tasks"
                onSelect={handleTaskSelect}
                isDisabled={!project}
              />
              <NumberInput
                label="Minimum Hours"
                placeholder="Set Minumum Hours..."
                onChange={handleMiniHours}
              />
              {minimumHours > maximumHours && (
                <div className="text-red-500">
                  Maximum Hours Should Be Greater
                </div>
              )}
              <NumberInput
                label="Maximum Hours"
                placeholder="Set Maximum Hours..."
                onChange={handleMaxHours}
                isDisabled={!minimumHours}
              />

              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onDatesChange={handleDateChange}
              />
              <Button
                onClick={handleSubmit}
                isDisabled={
                  !client ||
                  !project ||
                  !task ||
                  !minimumHours ||
                  !maximumHours ||
                  minimumHours > maximumHours
                }
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
//             <div class="sm:w-1/2 md:w-1/2 lg:w-1/2 sm:h-screen md:h-screen lg:h-screen bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500">
//   Left Side
// </div >
