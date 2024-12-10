// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['x-token'] = token;  // Agrega el token en el header
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
