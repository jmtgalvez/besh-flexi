import axios from 'axios';

const http = 'http://'
const hostname = 'localhost';
const port = 3001;

export const register = async user => {
  console.log(user);
  return axios.post(`${http}${hostname}:${port}/register`, user);
}