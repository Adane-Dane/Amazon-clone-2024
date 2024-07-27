import axios from "axios";

const axiosInstance = axios.create({
  // local
  // baseURL: "http://127.0.0.1:5001/clone-2024-8cd75/us-central1/api",

  // on render.com
  baseURL: "https://amazon-clone-api-14oy.onrender.com/",
});

export { axiosInstance };
