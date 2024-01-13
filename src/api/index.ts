import api from "axios";
const BASE_URL = "https://dummyjson.com";

const axios = api.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
});

export default axios;
