import axios from 'axios';

export const contactUs = (formData) => {
  return axios.post('/api/contact-us', formData)
}
