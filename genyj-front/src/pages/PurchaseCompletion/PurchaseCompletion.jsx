import React, { useEffect, useState } from 'react';
import { getOrder } from '../../api/order/orderApi';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import toastr from 'toastr';
import Navbar from '../../components/Navbar/Navbar';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

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
          : <div className={'container'}>
            <div className='row'>
              <div className='col-lg-7 col-sm-12'>
                <h1 className={'mb-3'}><img className={'me-3'} style={{verticalAlign: 'baseline'}} width={35} src='/img/congrats.png' alt='' />Felicitation, ta commande est passe avec success.</h1>
                <p>Le produit sera livre cette semaine, notre agent de service client va vous appeller pour confirmer la date et l'heure de livraison.</p>
                <p>Voici les details de la commande.</p>
                <p>Si vous avez des questions, appellez-nous sur +2126 95 30 58 00.</p>
              </div>
              <div className='col'></div>
              <OrderDetails order={order} />
            </div>
          </div>
      }
    </section>
  </>;
}