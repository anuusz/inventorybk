import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5005/api', 
});

export const getItems = () => api.get('/items');

export const createItem = (item: any) => api.post('/items', item);