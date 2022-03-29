import React from 'react';
import './ProductItem.scss';
import WashingDegreeLabel from '../WashingDegreeLabel/WashingDegreeLabel';
import { Link } from 'react-router-dom';

export default function ProductItem({ product, showWashingDegrees = true }) {
  return (
    <div className='col-lg-4 col-sm-6 col-xs-12'>
      <div className='product-item'>
        <Link to={'/product/' + product.id}>
          <div className='thumbnail-wrapper'>
            <img
              className={'product-img'}
              src={
                'http://127.0.0.1:8000/storage/products_thumbnails/' +
                product.thumbnail
              }
              alt='Black Black Jean'
            />
          </div>
          <h4 className='title'>{product.title}</h4>
        </Link>
        <div className='price'>
          {product.discount && product.discount > 0 ? (
            <>
              <span className='current-price'>
                MAD{' '}
                {(
                  (product.price - (product.price * product.discount) / 100) /
                  100
                ).toFixed(2)}
              </span>
              <span className='old-price'>
                MAD {(product.price / 100).toFixed(2)}
              </span>
            </>
          ) : (
            <span className='current-price'>
              MAD {(product.price / 100).toFixed(2)}
            </span>
          )}
        </div>

        {/* {showWashingDegrees ? (
          <>
            <h6 className={'washing-degree-title'}>Washing Degrees</h6>
            <div className='available-degrees d-flex flex-wrap'>
              <WashingDegreeLabel text={'Raw'} />
              <WashingDegreeLabel text={'Light'} />
              <WashingDegreeLabel text={'Medium'} />
              <WashingDegreeLabel text={'Hard'} />
            </div>
          </>
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
}
