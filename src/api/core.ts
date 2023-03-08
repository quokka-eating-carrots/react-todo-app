import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_API_KEY,
    username: import.meta.env.VITE_API_USER_NAME,
  },
  timeout: 10000,
};

export const requestAPI = axios.create(axiosConfig);
