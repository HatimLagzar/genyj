import toastr from 'toastr';
import {
  createOrder,
  getOrder,
  getOrderWithPaymentIntent,
  saveAddress,
  updateStatus
} from '../../../api/order/orderApi';

class OrderService {
  validate(orderState) {
    if (orderState.size === null) {
      toastr.error('Please select the desired size.');

      return false;
    }

    if (orderState.slim === null) {
      toastr.error('Please select the desired slim.');

      return false;
    }

    if (orderState.length === null) {
      toastr.error('Please select the desired length.');

      return false;
    }

    if (orderState.productId === null) {
      toastr.error('Product not selected please refresh the page and try again.');

      return false;
    }

    return true;
  }

  createOrder(orderState, token = null) {
    const formData = new FormData();
    formData.set('product_id', orderState.productId);
    formData.set('size', orderState.size);
    formData.set('slim', orderState.slim);
    formData.set('length', orderState.length);

    return createOrder(formData, token).catch(error => {
      if (error.response) {
        toastr.error(error.response.data.message);

        return;
      }

      console.log(error);
    });
  }

  getOrder(id) {
    return getOrder(id).catch(error => {
      if (error.response) {
        toastr.error(error.response.data.message);

        return;
      }

      console.log(error);
    });
  }

  getOrderWithPaymentIntent(id) {
    return getOrderWithPaymentIntent(id).catch(error => {
      if (error.response) {
        toastr.error(error.response.data.message);

        return;
      }

      console.log(error);
    });
  }

  saveAddress(address, id) {
    const formData = new FormData();
    formData.set('phone', address.phone);
    formData.set('email', address.email);
    formData.set('city', address.city);
    formData.set('address', address.address);
    formData.set('address2', address.address2);

    return saveAddress(id, formData).catch(error => {
      if (error.response) {
        toastr.error(error.response.data.message);

        return;
      }

      console.log(error);
    });
  }

  updateStatus(orderId) {
    return updateStatus(orderId)
      .catch(error => {
        if (error.response) {
          toastr.error(error.response.data.message)

          return
        }

        console.log(error)
    })
  }
}

export default new OrderService();