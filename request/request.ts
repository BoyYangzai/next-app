import { message } from "antd";
import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL);

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error(response.data.error);
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    message.error(error.response?.data.error);
    return Promise.reject(error);
  },
);
