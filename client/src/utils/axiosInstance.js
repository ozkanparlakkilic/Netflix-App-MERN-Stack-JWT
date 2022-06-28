import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;

let token = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user")).accessToken
  : null;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    token: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!token) {
    token = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : null;
    req.headers.token = `Bearer ${token}`;
  }
  return req;
});

export default axiosInstance;
