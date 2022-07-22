import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

axios.defaults.withCredentials = true;

export const likePost = async post_id => {
  return await axios.post(`${url}:${port}/api/interactions/like/${post_id}`);
}

export const unlikePost = async post_id => {
  return await axios.post(`${url}:${port}/api/interactions/unlike/${post_id}`);
}

export const followUser = async following_id => {
  return await axios.post(`${url}:${port}/api/interactions/follow/${following_id}`);
}

export const unfollowUser = async following_id => {
  return await axios.post(`${url}:${port}/api/interactions/unfollow/${following_id}`);
}

// expected parameter
// {
//   access_token, // get from user.access_token
//   chatData: {
//     content // message,
//     recipient_id // recipient user_id
//   }
// }
export const chatUser = async chatData => {
  return await axios.post(`${url}:${port}/api/interactions/chat`, chatData);
}