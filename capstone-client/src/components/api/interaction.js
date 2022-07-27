import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const likePost = async post_id => {
  return await axios.post(`${url}/api/interactions/like/${post_id}`);
}

export const unlikePost = async post_id => {
  return await axios.post(`${url}/api/interactions/unlike/${post_id}`);
}

export const followUser = async following_id => {
  return await axios.post(`${url}/api/interactions/follow/${following_id}`);
}

export const unfollowUser = async following_id => {
  return await axios.post(`${url}/api/interactions/unfollow/${following_id}`);
}

export const chatUser = async chatData => {
  return await axios.post(`${url}/api/interactions/chat`, chatData);
}