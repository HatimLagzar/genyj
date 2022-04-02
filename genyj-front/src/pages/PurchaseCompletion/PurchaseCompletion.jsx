import React, { useEffect, useState } from 'react';
import { getOrder, getOrderWithPaymentIntent } from '../../api/order/orderApi';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import toastr from 'toastr';
import Navbar from '../../components/Navbar/Navbar';

export default function() {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { orderId } = useParams();

  useEffect(() => {
    if (order === null) {
      getOrder(orderId).then(response => {
        if (response.status !== 200) {
          toastr.error('Error occurred!');
        }

        setOrder(response.data.order);
        setIsLoading(false);
      }).catch(() => setIsLoading(false));
    }
  });
  return <>
    <Navbar />
    <section className={'section-push'}>
      {
        isLoading
          ? <Spinner />
          : <>
            <h1>Done</h1>
          </>
      }
    </section>
  </>;
}