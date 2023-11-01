import React from "react";

const DataLine = ({ title, value }) => {
  return (
    <div className='h-[60px] border-b border-black-600 flex flex-col justify-center transition-all'>
      <h1 className='text-[16px] font-semibold '>
        {title}
        {value && (
          <span className='text-[14px] block text-[rgba(95, 95, 95,0.6)] font-normal fadeIn'>
            {value}
          </span>
        )}
      </h1>
    </div>
  );
};

export default DataLine;
