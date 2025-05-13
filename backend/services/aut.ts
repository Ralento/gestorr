import API from './api';

// Registro de usuario
export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

// Inicio de sesión de usuario
export const loginUser = async (userData: { email: string; password: string }) => {
  const response = await API.post('/auth/login', userData);
  return response.data;
};