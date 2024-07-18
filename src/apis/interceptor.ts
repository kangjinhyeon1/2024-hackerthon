import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 30000,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);
