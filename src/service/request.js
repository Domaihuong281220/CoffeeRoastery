import axios from "axios";

const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json-patch+json",
  },
});
const handlerError = (error) => {
  const { reponse = {} } = error;
  const { data, status, statusText } = reponse;
  return { data, status, statusText };
};
request.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem("token");
  // config.headers.Authorization = "Basic " + btoa("Administrator:");
  return config;
});

request.interceptors.response.use((reponse) => {
  return reponse;
}, handlerError);

export default request;
