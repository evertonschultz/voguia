import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.106:3333', //10.0.0.103
})

export default api;
