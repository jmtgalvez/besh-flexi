import axios from './axios';

export const likePost = async post_id => {
  return await axios.post(`/api/interactions/like/${post_id}`);
}

export const unlikePost = async post_id => {
  return await axios.post(`/api/interactions/unlike/${post_id}`);
}

export const followUser = async following_id => {
  return await axios.post(`/api/interactions/follow/${following_id}`);
}

export const unfollowUser = async following_id => {
  return await axios.post(`/api/interactions/unfollow/${following_id}`);
}

export const chatUser = async chatData => {
  return await axios.post(`/api/interactions/chat`, chatData);
}