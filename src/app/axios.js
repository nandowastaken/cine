import axios from "axios";

const cors = require("cors");
app.use(cors());

const instance = axios.create({
  baseURL: "https://cineclube.onrender.com",
  withCredentials: true,
});

export default instance;
