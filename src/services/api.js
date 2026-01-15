import axios from 'axios';

const api = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

export default api;