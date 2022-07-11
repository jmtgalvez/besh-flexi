import axios from 'axios';

const http = 'http://'
const hostname = 'localhost';
const port = 3001;

export const register = async user => {
  return await axios.post(`${http}${hostname}:${port}/api/register`, user);
}

export const login = async credentials => {
  return await axios.post(`${http}${hostname}:${port}/api/login`, credentials);
}