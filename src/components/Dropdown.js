import React from "react";

function Dropdown({
  label,
  placeholder,
  options,
  onSelect,
  isDisabled,
  name,
  id,
  required,
}) {
  return (
    <div>
      <label className='block text-[14px] mb-2 font-semibold  text-white mt-[10px]'>
        {label}
      </label>
      <select
        className='w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg font-normal bg-transparent'
        onChange={onSelect}
        disabled={isDisabled}
        name={name}
        id={id}
        required={required}
      >
        <option className='bg-transparent' value='' disabled selected>
          {placeholder}
        </option>
        {options.map(option => (
          <option
            className='text-black'
            key={option.id}
            value={name === "task" ? option.task.id : option.id}
          >
            {name === "task" ? option.task.name : option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
