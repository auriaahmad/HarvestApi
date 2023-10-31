import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({
  startDate: initialStartDate,
  endDate: initialEndDate,
  onDatesChange,
}) {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDatesChange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDatesChange(startDate, date);
  };

  return (
    <div className="flex gap-4">
      <div>
        <label className="block text-[20px] font-semibold  text-white mt-[10px]">
          Start Date:
        </label>
        <DatePicker
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-white text-lg"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <label className="block text-[20px] font-semibold  text-white mt-[10px]">
          End Date:
        </label>
        <DatePicker
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-white text-lg"
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
}

export default DateRangePicker;
