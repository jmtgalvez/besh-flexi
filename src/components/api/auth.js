import axios from 'axios';

const http = 'http://'
const hostname = 'localhost';
const port = 3001;

export const register = async user => {
  return axios.post(`${http}${hostname}:${port}/user/add`, user);
}