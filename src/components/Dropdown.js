// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dropdown = ({ path, }) => {
//     const [clients, setClients] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const HARVEST_ACCOUNT_ID = 1633271;
//             const ACCESS_TOKEN = 'Bearer 2829824.pt.lSsEC5D6idLsGayxYq4XIZGPVjRDyIZQBUa0Bu3ZntApaK4Y-ghJj7WN60ZGpnqii1FmwQlm35CgVDAlClp1SA';

//             try {
//                 const response = await axios.get(`https://api.harvestapp.com/v2/clients`, {
//                     headers: {
//                         'Authorization': ACCESS_TOKEN,
//                         'Harvest-Account-ID': HARVEST_ACCOUNT_ID
//                     },
//                 });

//                 const clientData = response.data.clients;
//                 setClients(clientData);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Clients:</h1>
//             <ul>
//                 {clients.map((client) => (
//                     <li key={client.id}>{client.name}</li>
//                 ))}
//             </ul>
//             <label>Client
//                 <select>
//                     <option value="" disabled selected>Select your option</option>
//                     {
//                         clients.map((client) => (
//                             <option value={client.name}>{client.name}</option>
//                         ))
//                     }
//                 </select>
//             </label>
//         </div>
//     );
// };

// export default Dropdown;

// src/components/Dropdown.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dropdown({label, placeholder, apiEndpoint, data, onSelect, isDisabled }) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const HARVEST_ACCOUNT_ID = 1633271;
            const ACCESS_TOKEN = 'Bearer 2829824.pt.lSsEC5D6idLsGayxYq4XIZGPVjRDyIZQBUa0Bu3ZntApaK4Y-ghJj7WN60ZGpnqii1FmwQlm35CgVDAlClp1SA';

            try {
                const response = await axios.get(apiEndpoint, {
                    headers: {
                        'Authorization': ACCESS_TOKEN,
                        'Harvest-Account-ID': HARVEST_ACCOUNT_ID
                    },
                });

                const clientData = response.data[data];
                console.log(clientData);
                setOptions(clientData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  return (
    <div>

    <label className="block text-gray-600">{label}
    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-xl"
      placeholder={placeholder}
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e.target.value);
        onSelect(e.target.value);
      }}
      disabled={isDisabled}
      >
            <option value="" disabled selected>Select your {label}</option>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
      </label>
      </div>
  );
}

export default Dropdown;
