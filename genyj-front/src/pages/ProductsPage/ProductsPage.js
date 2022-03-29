import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductItem from '../../components/ProductItem/ProductItem';
import './ProductsPage.scss';
import Pagination from '../../components/Pagination/Pagination';
import ContactUs from '../../components/ContactUs/ContactUs';
import { getPaginated } from '../../api/product/productApi';

export default function ProductsPage() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPaginated(page).then((response) => {
      setProducts(response.data.products);
    });
  }, [page]);

  return (
    <section id={'store-page'}>
      <Navbar />
      <section id={'products'} className={'section-push'}>
        <h1 className={'section-title text-center'}>Our Store</h1>
        <div className='container'>
          <div className='row'>
            {products !== null && products.data.length > 0
              ? products.data.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              : ''}
          </div>
        </div>
        {products !== null && products.data.length > 0 ? (
          <Pagination paginator={products} setPage={setPage} />
        ) : (
          ''
        )}
      </section>

      <ContactUs />
    </section>
  );
}
