import React, { useState, useEffect } from "react";
import axios from "axios";

function Dropdown({
  label,
  placeholder,
  apiEndpoint,
  data,
  onSelect,
  isDisabled,
  parameter,
}) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const HARVEST_ACCOUNT_ID = 1633271;
      const ACCESS_TOKEN =
        "Bearer 2829824.pt.lSsEC5D6idLsGayxYq4XIZGPVjRDyIZQBUa0Bu3ZntApaK4Y-ghJj7WN60ZGpnqii1FmwQlm35CgVDAlClp1SA";

      try {
        const response = await axios.get(apiEndpoint, {
          headers: {
            Authorization: ACCESS_TOKEN,
            "Harvest-Account-ID": HARVEST_ACCOUNT_ID,
          },
        });

        const clientData = response.data[data];
        setOptions(clientData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <label className="block text-[20px] font-semibold  text-white mt-[10px]">
        {label}
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg font-normal bg-transparent"
          onChange={(e) => {
            setSelectedOption(e.target.value);
            onSelect(e.target.value);
          }}
          disabled={isDisabled}
        >
          <option className="bg-transparent" value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option className="text-black" key={option.id} value={ option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;
