import axios from 'axios';

const url = 'http://localhost';
const port = 3001;

// gets all status in database
export const getAllPosts = async () => {
  return await axios.get(`${url}:${port}/api/status`);
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
  return await axios.post(`${url}:${port}/api/status`, postData);
}

// edit status in database
// expected postData content
// {
//   status_id, (required)
//   content, (required)
// }
export const editPost = async postData => {
  return await axios.put(`${url}:${port}/api/status/${postData.status_id}`, postData);
}

// delete status from database
// expected status_id
// status_id (INT required)
export const deletePost = async status_id => {
  return await axios.delete(`${url}:${port}/api/status/${status_id}`);
}

// get a single status by status_id
// expected status_id
// status_id (INT required)
export const getPost = async status_id => {
  return await axios.get(`${url}:${port}/api/status/${status_id}`);
}

// search status in database
// expected search_query
// search_query (STRING required)
export const searchPosts = async search_query => {
  return await axios.get(`${url}:${port}/search/status/${search_query}`);
}