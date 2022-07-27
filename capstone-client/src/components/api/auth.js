import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const getAllUser = async() => {
    return await axios.get(`${url}/api/Home`);
}

export const register = async user => {
    return await axios.post(`${url}/api/register`, user);
}

export const login = async credentials => {
    return await axios.post(`${url}/api/login`, credentials);
}

export const getAccessToken = async refresh_token => {
    return await axios.post(`${url}/api/getAccessToken`);
}

export const logout = async () => {
    return await axios.post(`${url}/api/logout`);
}