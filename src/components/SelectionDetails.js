import React from "react";
import shapes from "../assets/shapes.svg";
import DetailGlass from "./DetailGlass";

const SelectionDetails = ({ data, clients, projects, tasks }) => {
  return (
    <div className='md:w-[50%] hidden md:flex h-full bg-white items-center justify-center relative overflow-hidden'>
      <img
        className='rotate-[30deg]  w-[100%] absolute top-[-10px] left-[-250px]'
        src={shapes}
        alt=''
      />
      <img
        className='rotate-[240deg] w-[100%] absolute top-[500px] left-[150px]'
        src={shapes}
        alt=''
      />
      <DetailGlass
        data={data}
        clients={clients}
        projects={projects}
        tasks={tasks}
      />
    </div>
  );
};

export default SelectionDetails;
