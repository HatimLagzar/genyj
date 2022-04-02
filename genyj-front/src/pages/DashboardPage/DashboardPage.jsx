import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function() {
  return <section id={'dashboard-page'}>
    <Navbar />
    <section className={'section-push'}>
      <div className='container'>
        <h1 className={'text-center'}>Coming Soon!</h1>
      </div>
    </section>
  </section>
}