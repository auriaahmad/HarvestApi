import React, { useEffect, useState } from "react";
import successSvg from "../assets/success.svg";
import { intialData } from "../helpers/variables";
import SelectionDetails from "./SelectionDetails";
import SubmitionForm from "./SubmitionForm";

function MainForm() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(intialData);
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setProjects([]);
        setTasks([]);
        setData(intialData);
        setSuccess(false);
      }, 2000);
    }
  }, [success]);

  return (
    <div className='bg-white-500 h-screen flex items-center justify-center'>
      {success ? (
        <div className='flex justify-center items-center'>
          <img src={successSvg} alt='' className='w-[350px] h-[350px]' />
        </div>
      ) : (
        <div className='max-w-[1200px] w-[100%] h-[90%] bg-white flex flex-col md:flex-row items-center justify-center border border-spacing-1 rounded-lg overflow-hidden'>
          <SelectionDetails
            data={data}
            clients={clients}
            projects={projects}
            tasks={tasks}
          />

          <SubmitionForm
            data={data}
            setData={setData}
            clients={clients}
            setClients={setClients}
            projects={projects}
            setProjects={setProjects}
            tasks={tasks}
            setTasks={setTasks}
            setSuccess={setSuccess}
          />
        </div>
      )}
    </div>
  );
}

export default MainForm;
//             <div class="sm:w-1/2 md:w-1/2 lg:w-1/2 sm:h-screen md:h-screen lg:h-screen bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500">
//   Left Side
// </div >
