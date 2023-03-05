import axios from "axios";

const instance = axios.create({
  baseURL: "https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev",
  withCredentials: true,
});

export default instance;
