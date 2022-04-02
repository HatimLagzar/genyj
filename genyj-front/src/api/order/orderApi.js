import axios from 'axios';

export const createOrder = (formData, token = null) => {
  let config = {
    headers: {
    }
  }

  if (token !== null) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return axios.post('/api/order', formData, config);
};

export const getOrder = (id) => {
  return axios.get('/api/order/' + id);
}

export const getOrderWithPaymentIntent = (id) => {
  return axios.get('/api/order/' + id + '/paymentIntent');
}

export const saveAddress = (id, formData) => {
  return axios.post('/api/order/' + id + '/address', formData);
}

export const updateStatus = (id) => {
  return axios.put('/api/order/' + id + '/status');
}

export const updatePaymentType = (id, formData) => {
  return axios.post('/api/order/' + id + '/paymentType', formData)
}
