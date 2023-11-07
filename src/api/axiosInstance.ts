import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_STARWARS_API,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export { axiosInstance };
