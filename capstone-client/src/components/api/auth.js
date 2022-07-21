import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

export const getAllUser = async() => {
    return await axios.get(`${url}:${port}/api/Home`);
}

export const register = async user => {
    return await axios.post(`${url}:${port}/api/register`, user);
}

export const login = async credentials => {
    return await axios.post(`${url}:${port}/api/login`, credentials);
}

export const getAccessToken = async refresh_token => {
    return await axios.post(`${url}:${port}/api/getAccessToken`, {refresh_token});
}