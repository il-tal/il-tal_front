import axios from "axios";

export const axiosIns = axios.create({
  baseURL: "http://3.35.205.228/",
});

axiosIns.interceptors.request.use((config) => {
  const access_token = sessionStorage.getItem("access_token");
  const refresh_token = sessionStorage.getItem("refresh_token");
  if (access_token) {
    config.headers["Authorization"] = `${access_token}}`;
    config.headers["Refresh_Token"] = `${refresh_token}`;
  }
  return config;
});
