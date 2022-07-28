import axios from './axios';

export const getAllComments = async post_id => {
    return await axios.get(`/api/comments/${post_id}`);
} 

export const submitComment = async commentData => {
    return await axios.post(`/api/comments/${commentData.reply_id}`, commentData);
}