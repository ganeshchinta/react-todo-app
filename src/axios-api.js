import axios from "axios";

const instance = axios.create({
  baseURL: "htts://localhost:7000",
});

export default instance;
