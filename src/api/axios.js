import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-node-w3e9.onrender.com/api",
  withCredentials: true,
});

export default instance;
