import React from 'react';
import Header from '../../components/Header/Header';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Newsletter from '../../components/Newsletter/Newsletter';
import ContactUs from '../../components/ContactUs/ContactUs';
import './Home.scss';

export default function Home() {
  return (
    <section id={'home-page'}>
      <Header />
      <FeaturedProducts />
      <Newsletter />
      <ContactUs />
    </section>
  );
}
