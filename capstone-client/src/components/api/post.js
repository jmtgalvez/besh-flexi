import axios from 'axios';

const http = 'http://'
const hostname = 'localhost';
const port = 3001;

export const getAllPosts = async () => {
  return await axios.get(`${http}${hostname}:${port}/api/status`);
}

export const addPost = async postData => {
  return await axios.post(`${http}${hostname}:${port}/api/status`, postData);
}

export const editPost = async postData => {
  return await axios.put(`${http}${hostname}:${port}/api/status/${postData.status_id}`, postData);
}

export const deletePost = async status_id => {
  return await axios.delete(`${http}${hostname}:${port}/api/status/${status_id}`);
}