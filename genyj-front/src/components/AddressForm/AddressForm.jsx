import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import authService from '../../app/services/auth/AuthService';

export default function({ handleSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const addressState = {
      phone,
      email: authService.isExpired() === false ? authService.getUser().email : email,
      city,
      address,
      address2
    };

    handleSubmit(addressState).then(() => setIsLoading(false)).catch(() => setIsLoading(false));
  }

  return <form onSubmit={handleFormSubmit}>
    <TextInput
      type={'tel'}
      placeholder={'Phone'}
      required={true}
      onChange={e => setPhone(e.currentTarget.value)}
    />
    {
      authService.isExpired() === true
        ? <TextInput
          type={'email'}
          placeholder={'Email'}
          required={true}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        : ''
    }

    <TextInput
      type={'text'}
      placeholder={'Ville'}
      required={true}
      onChange={e => setCity(e.currentTarget.value)}
    />

    <TextInput
      type={'text'}
      placeholder={'Adresse'}
      required={true}
      onChange={e => setAddress(e.currentTarget.value)}
    />

    <TextInput
      type={'text'}
      placeholder={'Adresse Ligne 2'}
      required={false}
      onChange={e => setAddress2(e.currentTarget.value)}
    />

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