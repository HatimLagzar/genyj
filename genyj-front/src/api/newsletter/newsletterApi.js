import axios from 'axios';

export const subscribe = (formData) => {
  return axios.post('/api/subscribe', formData)
};