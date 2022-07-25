import axios from 'axios';
import { BASE_URL } from '../Constants';

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use((config) => {
  if (config !== undefined && config.headers !== undefined)
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
