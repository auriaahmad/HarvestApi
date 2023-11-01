import axios from "axios";
import React, { useEffect, useState } from "react";
import shapes from "../assets/shapes.svg";
import { axiosClient } from "../helpers/axios";
import CustomInput from "./CustomInput";
import Dropdown from "./Dropdown";

const SubmitionForm = ({
  data,
  setData,
  clients,
  setClients,
  projects,
  setProjects,
  tasks,
  setTasks,
  setSuccess,
}) => {
  const [submittingForm, setSubmittingForm] = useState(false);
  useEffect(() => {
    const getClients = async () => {
      const response = await axiosClient.get("/clients");
      if (response) {
        console.log(response.data.clients);
        setClients([...response.data.clients]);
      }
    };
    getClients();
  }, []);

  const onClientSelect = async event => {
    setData(pS => ({
      ...pS,
      client: event.target.value,
    }));
    const response = await axiosClient.get(
      `/projects?client_id=${event.target.value}`
    );
    if (response) {
      console.log(response.data.projects);
      setProjects([...response.data.projects]);
    }
  };

  const handleProjectSelect = async event => {
    setData(pS => ({
      ...pS,
      project: event.target.value,
    }));
    const response = await axiosClient.get(
      `/projects/${event.target.value}/task_assignments`
    );
    if (response) {
      console.log(response.data.task_assignments);
      setTasks([...response.data.task_assignments]);
    }
  };

  const changeHandler = event => {
    const { name, value } = event.target;
    setData(pS => ({
      ...pS,
      [name]: name.includes("Date") ? new Date(value) : value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (submittingForm) return;

    if (parseInt(data.minimumHours) > parseInt(data.maximumHours))
      return alert("Mimimum hours should be less then Maximum hours!");

    setSubmittingForm(true);
    try {
      const response = await axiosClient.post(`/time_entries`, {
        project_id: data.project,
        task_id: data.task,
        spent_date: data.endDate,
      });
      let dataToSave = {};
      if (response) {
        dataToSave.client = response.data.client;
        dataToSave.project = response.data.project;
        dataToSave.task = response.data.task;
        dataToSave.task_assignment = response.data.task_assignment;
        dataToSave.user_assignment = response.data.user_assignment;
        dataToSave.user = response.data.user;
        dataToSave.minimumHours = data.minimumHours;
        dataToSave.maximumHours = data.maximumHours;
        dataToSave.startDate = data.startDate;
        dataToSave.endDate = data.endDate;
        dataToSave.entryId = response.data.id;
      } else {
        return alert("Something went wrong!");
      }

      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/selected`,
        {
          ...dataToSave,
        }
      );
      if (res) {
        setSuccess(true);
        alert(res.data.message);
      }
    } catch (err) {
      alert(err);
    } finally {
      setSubmittingForm(false);
    }
  };

  return (
    <div className='w-full lg:px-[50px] md:w-[50%] h-full bg-[#333] flex items-center justify-center relative'>
      <img
        className='rotate-[0deg] translate-x-[100px] md:translate-x-[0] w-[100%] absolute top-[0px] left-[-150px]'
        src={shapes}
        alt=''
      />
      <img
        className='rotate-[-160deg] translate-x-[100px] md:translate-x-[0] w-[100%] absolute top-[200px] left-[-150px]'
        src={shapes}
        alt=''
      />
      <div className='bg-white bg-opacity-10 backdrop-blur-md backdrop-filter absolute p-8 shadow-md w-full max-w-[500px] bg-blend-normal bg-blend-overly  rounded-md'>
        <h1 className='text-[25px] font-semibold text-center text-white mx-auto'>
          Selection Form
        </h1>
        <form className='mt-4' onSubmit={handleSubmit}>
          <Dropdown
            label='Client'
            placeholder='Select a Client'
            name='client'
            id='client'
            options={clients}
            onSelect={onClientSelect}
            required={true}
          />
          <Dropdown
            label='Projects'
            placeholder='Select a Project'
            name='project'
            id='project'
            options={projects}
            onSelect={handleProjectSelect}
            isDisabled={!data.client}
            required={true}
          />
          <Dropdown
            label='Tasks'
            placeholder='Select a Task'
            name='task'
            id='task'
            options={tasks}
            onSelect={changeHandler}
            isDisabled={!data.project}
            required={true}
          />
          <CustomInput
            type='number'
            name='minimumHours'
            id='minimumHours'
            label='Minimum Hours'
            placeholder='Set Minumum Hours...'
            onChange={changeHandler}
            required={true}
          />

          <CustomInput
            type='number'
            label='Maximum Hours'
            name='maximumHours'
            id='maximumHours'
            placeholder='Set Maximum Hours...'
            onChange={changeHandler}
            isDisabled={!data.minimumHours}
            required={true}
          />

          <div className='flex justify-between w-full'>
            <div className='w-[48%]'>
              <CustomInput
                label='Start Date'
                type='date'
                name='startDate'
                id='startDate'
                onChange={changeHandler}
                defaultValue={
                  data?.startDate?.toLocaleDateString("en-CA") || ""
                }
                required={true}
              />
            </div>
            <div className='w-[48%]'>
              <CustomInput
                label='End Date'
                type='date'
                name='endDate'
                id='endDate'
                onChange={changeHandler}
                defaultValue={data?.endDate?.toLocaleDateString("en-CA") || ""}
                required={true}
              />
            </div>
          </div>

          <button className=' text-white text-[14px] flex justify-center items-center w-full h-[40px]  rounded-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300 mt-5 font-semibold  bg-gradient-to-r from-cyan-500 to-purple-500'>
            {submittingForm ? <span className='loader'></span> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitionForm;
