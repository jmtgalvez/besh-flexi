import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

axios.defaults.withCredentials = true;

export const getAllComments = async post_id => {
    return await axios.get(`${url}:${port}/api/comments/${post_id}`);
} 

export const submitComment = async commentData => {
    return await axios.post(`${url}:${port}/api/comments/${commentData.reply_id}`, commentData);
}