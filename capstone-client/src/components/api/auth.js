import axios from './axios';

export const getAllUser = async() => {
    return await axios.get(`/api/Home`);
}

export const register = async user => {
    return await axios.post(`/api/register`, user);
}

export const login = async credentials => {
    return await axios.post(`/api/login`, credentials);
}

export const getAccessToken = async refresh_token => {
    return await axios.post(`/api/getAccessToken`);
}

export const logout = async () => {
    return await axios.post(`/api/logout`);
}