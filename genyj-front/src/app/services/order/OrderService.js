import toastr from 'toastr';
import { createOrder } from '../../../api/order/orderApi';

class OrderService {
  validate(orderState) {
    if (orderState.size === null) {
      toastr.error('Please select the desired size.')

      return false;
    }

    if (orderState.slim === null) {
      toastr.error('Please select the desired slim.')

      return false;
    }

    if (orderState.length === null) {
      toastr.error('Please select the desired length.')

      return false;
    }

    if (orderState.productId === null) {
      toastr.error('Product not selected please refresh the page and try again.')

      return false;
    }

    return true;
  }

  createOrder(orderState) {
    const formData = new FormData();
    formData.set('product_id', orderState.productId)
    formData.set('size', orderState.size)
    formData.set('slim', orderState.slim)
    formData.set('length', orderState.length)

    return createOrder(formData)
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