import axios from "axios";
import { API_URL } from "@env";

const instance = axios.create({
  baseURL: "http://192.168.100.134:3000/api",
  withCredentials: true,
});

export default instance;
