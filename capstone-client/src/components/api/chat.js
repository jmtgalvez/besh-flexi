import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

axios.defaults.withCredentials = true;

export const sendChat = async chatData => {
    return await axios.post(`${url}:${port}/api/chats`, chatData);
}