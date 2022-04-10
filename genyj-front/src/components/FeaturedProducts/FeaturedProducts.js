import React, { useEffect, useState } from 'react';
import './FeaturedProducts.scss';
import ProductItem from '../ProductItem/ProductItem';
import { getFeaturedProducts } from '../../api/product/productApi';
import Spinner from '../Spinner/Spinner';

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    if (featuredProducts === null) {
      getFeaturedProducts().then((response) => {
        setFeaturedProducts(response.data.products);
      });
    }
  });

  return (
    <section id={'featured-products'} className={'section-push'}>
      <h3 className='text-center section-title'>Featured Products</h3>
      <div className='container'>
        <div className='row'>
          {featuredProducts instanceof Array && featuredProducts.length > 0 ? (
            featuredProducts.map((product) => <ProductItem key={product.id} product={product} />)
          ) : (
            <div className='col-12'>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
