import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.harvestapp.com/v2",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    "Harvest-Account-ID": process.env.REACT_APP_HARVEST_ACCOUNT_ID,
  },
});
