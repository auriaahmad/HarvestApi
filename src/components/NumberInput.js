// import { useState } from 'react';

function NumberInput({label, placeholder, onChange, isDisabled}) {

  // cosnt [number, setGreaterNumber] = useState("");
  // const handleFirstNumberChange = (e) => {
  //   const value = parseFloat(e.target.value);
  //   if ( value >= 0) {
  //     setFirstNumber(value);
  //   }
  // };

  // const handleSecondNumberChange = (e) => {
  //   const value = parseFloat(e.target.value);
  //   if ( value >= 0 && value >= firstNumber) {
  //     setSecondNumber(value);
  //   }
  // };

  return (
    <div>
      <label className="block text-[20px] font-semibold  text-white mt-[10px]">{label}</label>
      <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-white text-lg placeholder:italic placeholder:text-slate-400 block bg-white"
        placeholder={placeholder}
        type="number"
        onChange={
          (e) => {
            onChange(e.target.value)
          }
        }
        disabled={isDisabled}
      />
    </div>
  );
}

export default NumberInput;
