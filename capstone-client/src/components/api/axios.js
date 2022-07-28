import axios from 'axios';

export default axios.create({
    baseURL: 'https://besh-flexi.herokuapp.com',
    // baseURL: 'http://localhost:3001',
    withCredentials: true,
})