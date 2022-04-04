import React, { useState } from 'react';
import './ChoosePaymentType.scss';
import orderService from '../../app/services/order/OrderService';
import { useParams } from 'react-router-dom';
import toastr from 'toastr';

export default function ChoosePaymentType({ nextStepCallback }) {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('COD');
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    orderService.updatePaymentType(id, type).then(response => {
      if (response.status !== 200) {
        toastr.error(response.data.message);

        return;
      }

      nextStepCallback(type);
    });
  }

  return <form id={'choose-payment-type'} onSubmit={handleSubmit}>
    <div className='row'>
      <div className='col-lg-6 col-sm-6 col-12 mb-3'>
        <input id='payment-type-cod' type='radio' name='payment-type' value={'COD'}
               defaultChecked={true} onChange={e => setType(e.currentTarget.value)} />
        <label htmlFor='payment-type-cod'>
          <i className='fas fa-boxes-packing' />
          Payez a La Livraison
        </label>
      </div>
      <div className='col-lg-6 col-sm-6 col-12 mb-3'>
        <input id='payment-type-card' type='radio' name='payment-type' value={'CREDIT_CARD'}
               onChange={e => setType(e.currentTarget.value)} />
        <label htmlFor='payment-type-card'>
          <i className='fas fa-credit-card' />
          Payez par Carte Bancaire
        </label>
      </div>
    </div>
    <div className='d-flex flex-column call-to-action'>
      <button
        type='submit'
        className='btn btn-dark mx-0'
        disabled={isLoading}
      >
        Next >
      </button>
    </div>
  </form>;
}