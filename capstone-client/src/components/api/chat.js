import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const sendChat = async chatData => {
    return await axios.post(`${url}/api/chats`, chatData);
}

export const getConversation = async conversation => {
    return await axios.post(`${url}/api/chats/conversation`, conversation);
}