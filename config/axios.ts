import axios from "axios";

const server = useRuntimeConfig().baseUrl

const axiosInstance = axios.create({
    baseURL: `${server}/api/`,
    timeout: 100000,
    
  });

  export { axiosInstance }