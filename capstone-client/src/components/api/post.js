import axios from 'axios';

const url = 'https://besh-flexi.herokuapp.com';

axios.defaults.withCredentials = true;

export const getAllPosts = async () => {
  return await axios.get(`${url}/api/status/`);
}

export const searchPosts = async search_query => {
  return await axios.get(`${url}/api/status/search/${search_query}`);
}

export const addPost = async postData => {
  return await axios.post(`${url}/api/status`, postData);
}

export const editPost = async postData => {
  return await axios.put(`${url}/api/status/${postData.status_id}`, postData);
}

export const deletePost = async status_id => {
  return await axios.delete(`${url}/api/status/${status_id}`);
}

export const getPost = async status_id => {
  return await axios.get(`${url}/api/status/${status_id}`);
}

export const getTrending = async () => {
  return await axios.get(`${url}/api/status/trending`)
}