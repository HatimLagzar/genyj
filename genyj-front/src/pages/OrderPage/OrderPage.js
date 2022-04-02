import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import orderService from '../../app/services/order/OrderService';
import './OrderPage.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import AddressForm from '../../components/AddressForm/AddressForm';
import Spinner from '../../components/Spinner/Spinner';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

const stripePromise = loadStripe('pk_test_XMEN2RYVp2gz0oe2Tkdnqyzs00vfPlL5tJ');

export default function() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [addressSubmitted, setAddressSubmitted] = useState(false);

  function handleAddressSubmit(addressState) {
    return orderService.saveAddress(addressState, order.id).then((response) => {
      if (response.status === 200) {
        setAddressSubmitted(true);
      }
    });
  }

  useEffect(() => {
    if (order === null) {
      orderService.getOrderWithPaymentIntent(id).then(response => {
        setOrder(response.data.order);
        setClientSecret(response.data.clientSecret);
      });
    }
  });

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#000000'
    }
  };

  const options = {
    clientSecret,
    appearance
  };

  return <section id={'order-page'}>
    <Navbar />
    {
      order !== null
        ? <section className={'section-push'} id={'order-details'}>
          <div className='container'>
            <Link to={'/product/' + order.product.id} id={'back-to-store'}
                  className={'btn btn-outline-dark mx-0'}>
              <i className={'fas fa-chevron-left me-2'} /> Back to Product
            </Link>

            <div className='row'>
              <div className='col-lg-6'>
                {
                  addressSubmitted === false
                    ? <AddressForm handleSubmit={handleAddressSubmit} />
                    : clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm order={order} />
                    </Elements>
                  )
                }
              </div>
              <div className='col' />
              <OrderDetails order={order} />
            </div>
          </div>
        </section>
        : <section className={'section-push'}>
          <Spinner />
        </section>
    }
  </section>;
}