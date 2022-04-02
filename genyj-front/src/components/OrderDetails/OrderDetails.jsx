import React from 'react';

export default function({order}) {
  return <div className='col-lg-4 col-sm-12 mt-lg-0 mt-5'>
    <h2 className={'mb-3'}>Detail de la commande</h2>
    <div className='row mb-2'>
      <h6>{order.product.title}</h6>
    </div>

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
}