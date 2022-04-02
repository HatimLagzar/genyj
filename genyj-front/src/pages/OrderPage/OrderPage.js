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
              <div className='col-lg-4'>
                <h4 className={'mb-3'}>{order.product.title}</h4>
                <div className='row mb-2'>
                  <div className='col'>
                    <h6>Taille</h6>
                  </div>
                  <div className='col text-end'>
                    <h6>{order.size}</h6>
                  </div>
                </div>

                <div className='row  mb-2'>
                  <div className='col'>
                    <h6>Longueur</h6>
                  </div>
                  <div className='col text-end'>
                    <h6>{order.length} cm</h6>
                  </div>
                </div>

                <div className='row  mb-2'>
                  <div className='col'>
                    <h6>Slimage</h6>
                  </div>
                  <div className='col text-end'>
                    <h6>{order.slim} cm</h6>
                  </div>
                </div>

                <div className='row  mb-2'>
                  <div className='col'>
                    <h6>Discount</h6>
                  </div>
                  <div className='col text-end'>
                    <h6>{order.product.discount}%</h6>
                  </div>
                </div>

                <div className='row mb-2'>
                  <div className='col'>
                    <h6>Prix Normal</h6>
                  </div>
                  <div className='col text-end'>
                    <h6>{order.product.priceFormatted}</h6>
                  </div>
                </div>

                <div className='row  mb-2'>
                  <div className='col'>
                    <h5>Prix total</h5>
                  </div>
                  <div className='col text-end'>
                    <h5>{order.product.priceDiscountedFormatted}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        : <section className={'section-push'}>
          <Spinner />
        </section>
    }
  </section>;
}