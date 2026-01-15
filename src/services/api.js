import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        console.log("Request: ", config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = new Error(
      error.response?.data?.message || "API error"
    );

    apiError.status = error.response?.status;
    apiError.data = error.response?.data;

    return Promise.reject(apiError);
  }
);

export default api;