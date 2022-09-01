import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cryptic-plains-86672.herokuapp.com/api",
});

export default axiosInstance;
