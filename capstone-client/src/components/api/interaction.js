import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

export const likePost = async ({ access_token, post_id }) => {
  return await axios.post(`${url}:${port}/api/interactions/like/${post_id}`, access_token);
}

export const followUser = async ({ access_token, following_id }) => {
  return await axios.post(`${url}:${port}/api/interactions/follow/${following_id}`, access_token);
}

// expected parameter
// {
//   access_token, // get from user.access_token
//   chatData: {
//     content // message,
//     recipient_id // recipient user_id
//   }
// }
export const chatUser = async ({ access_token, chatData }) => {
  return await axios.post(`${url}:${port}/api/interactions/chat`, { ...chatData, access_token });
}