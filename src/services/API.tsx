import axios from 'axios';
// import { refresh, refreshErrorHandle } from "./refresh";

const API = axios.create({
    baseURL: '15.164.28.246:8000/api/v1',
    headers: {
        Accept : 'application/json',
        useQueryString: 'true',
    },
});

// API.interceptors.request.use(refresh, refreshErrorHandle);
export default API;