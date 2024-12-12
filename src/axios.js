// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // URL do backend Django
  headers: {
    'Content-Type': 'application/json',
  },
});
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;


export default api;
