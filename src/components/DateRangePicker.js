import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangePicker({ startDate: initialStartDate, endDate: initialEndDate, onDatesChange }) {
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
    <div>
      <label className="block font-bold text-gray-600">Start Date:</label>
      <DatePicker className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        />
      <label className="block font-bold text-gray-600">End Date:</label>
      <DatePicker className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default DateRangePicker;
