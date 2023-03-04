import axios from "axios";

const instance = axios.create({
  baseURL: "https://cineclube.onrender.com",
  withCredentials: false,
});

export default instance;
