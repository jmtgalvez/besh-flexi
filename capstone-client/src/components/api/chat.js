import axios from './axios';

export const sendChat = async chatData => {
    return await axios.post(`/api/chats`, chatData);
}

export const getConversation = async conversation => {
    return await axios.post(`/api/chats/conversation`, conversation);
}