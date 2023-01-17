import axios from 'axios';

const API = axios.create({
    baseURL: 'http://3.34.68.226:8000/api/v1',
    headers: {
        Accept : 'application/json',
        useQueryString: 'true',
    },
});

export default API;