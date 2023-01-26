import axios from 'axios';
// import { refresh, refreshErrorHandle } from "./refresh";

const API = axios.create({
    baseURL: 'http://15.164.28.246:8000/api/v1',
});

// API.interceptors.request.use(refresh, refreshErrorHandle);
export default API;