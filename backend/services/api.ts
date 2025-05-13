import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/', // Cambia esto si tu backend está en otro puerto o dominio.
});

// Interceptor para incluir el token JWT en las solicitudes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;