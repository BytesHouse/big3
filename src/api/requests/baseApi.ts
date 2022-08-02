import axios from 'axios';
import { getUserFromLocalStorage } from '../../core/utils/localStorage';
import { BASE_URL } from '../Constants';

const user = getUserFromLocalStorage();

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use((config) => {
  if (config !== undefined && config.headers !== undefined)
    config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});
