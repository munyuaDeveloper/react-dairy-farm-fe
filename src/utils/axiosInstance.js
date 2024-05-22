import axios from "axios";

const axiosInstance = axios.create({});

const { token } = JSON.parse(localStorage.getItem("user"));

axiosInstance.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${token}`;
  request.headers["Content-Type"] = "application/json";
  return request;
});

export default axiosInstance;
