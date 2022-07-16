import axios from 'axios';

const http = 'http://'
const hostname = 'localhost';
const port = 3001;

// gets all status in database
export const getAllPosts = async () => {
  return await axios.get(`${http}${hostname}:${port}/api/status`);
}

// adds a new status in database
// expected postData content
// {
//   user_id, (required)
//   content, (required)
//   reply_id, (optional)
//   date, (optional)
// }
export const addPost = async postData => {
  return await axios.post(`${http}${hostname}:${port}/api/status`, postData);
}

// edit status in database
// expected postData content
// {
//   status_id, (required)
//   content, (required)
// }
export const editPost = async postData => {
  return await axios.put(`${http}${hostname}:${port}/api/status/${postData.status_id}`, postData);
}

// delete status from database
// expected status_id
// status_id (INT required)
export const deletePost = async status_id => {
  return await axios.delete(`${http}${hostname}:${port}/api/status/${status_id}`);
}

// search status in database
// expected search_query
// search_query (STRING required)
export const searchPosts = async search_query => {
  return await axios.get(`${http}${hostname}:${port}/status/${search_query}`);
}