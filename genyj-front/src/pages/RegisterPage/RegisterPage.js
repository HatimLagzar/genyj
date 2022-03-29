import React from 'react';
import './RegisterPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <section id='register-page' className='section-push'>
        <div className='container'>
          <h1 className={'text-center section-title'}>Sign Up</h1>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
