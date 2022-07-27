import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const getAllComments = async post_id => {
    return await axios.get(`${url}/api/comments/${post_id}`);
} 

export const submitComment = async commentData => {
    return await axios.post(`${url}/api/comments/${commentData.reply_id}`, commentData);
}