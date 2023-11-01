import React, { useMemo } from "react";
import DataLine from "./Dataline";
import moment from "moment";

const DetailGlass = ({ data, clients, projects, tasks }) => {
  const client = useMemo(
    () => clients.find(cl => cl.id == data.client)?.name || "",
    [data.client]
  );
  const project = useMemo(
    () => projects.find(project => project.id == data.project)?.name || "",
    [data.project]
  );
  const task = useMemo(
    () => tasks.find(task => task.task.id == data.task)?.task.name || "",
    [data.task]
  );

  return (
    <div className='hidden md:block bg-white bg-opacity-10 backdrop-blur-md backdrop-filter absolute p-8 shadow-md w-full max-w-[500px] bg-blend-normal bg-blend-overly rounded-md'>
      <DataLine title='Client' value={client} />
      <DataLine title='Project' value={project} />
      <DataLine title='Task' value={task} />
      <DataLine title='Minimum Hours' value={data.minimumHours} />
      <DataLine title='Maximum Hours' value={data.maximumHours} />
      <DataLine
        title='Start Date'
        value={moment(data.startDate).format("MMMM Do YYYY")}
      />
      <DataLine
        title='End Date'
        value={moment(data.endDate).format("MMMM Do YYYY")}
      />
    </div>
  );
};

export default DetailGlass;
