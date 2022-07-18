import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

export const register = async user => {
  return await axios.post(`${url}:${port}/api/register`, user);
}

export const login = async credentials => {
  return await axios.post(`${url}:${port}/api/login`, credentials);
}