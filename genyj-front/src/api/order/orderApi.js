import axios from 'axios';

export const createOrder = (formData) => {
  return axios.post('/api/order', formData);
};