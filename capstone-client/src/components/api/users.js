import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const getAllUsers = async() => {
    return await axios.get(`${url}/api/users`);
}

export const searchUsers = async search_query => {
    return await axios.get(`${url}/api/users/search/${search_query}`);
}

export const getUserByUserId = async user_id => {
    return await axios.get(`${url}/api/users/${user_id}`);
}

export const editUser = async user => {
    return await axios.put(`${url}/api/users/${user.user_id}`, user);
}

export const deleteUser = async user_id => {
    return await axios.delete(`${url}/api/users/${user_id}`);
}