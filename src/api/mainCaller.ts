import axios from "axios";
import { message } from "antd";
import { errorMessage, getToken, removeToken } from "../helpers/utils";

export const getMainUrl = () => {
  return import.meta.env.VITE_APP_BASE_URL;
};

const api = axios.create({
  baseURL: getMainUrl(),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const data = error.response?.data;

    if (status === 401) {
      removeToken();
      window.location.replace("/");
    }

    if (data) {
      message.error(errorMessage(data));
    } else {
      message.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
  }
);

export default api;
