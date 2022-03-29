import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import registerService from '../../app/services/auth/RegisterService';
import toastr from 'toastr';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    registerService
      .register(name, email, password, passwordConfirmation)
      .then((response) => {
        toastr.success(response.data.message);
        setIsLoading(false);
        navigator('/login');
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  function handleNameChange(e) {
    setName(e.currentTarget.value);
  }

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  function handlePasswordConfirmationChange(e) {
    setPasswordConfirmation(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder={'Name'}
          onChange={handleNameChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder={'Email Address'}
          onChange={handleEmailChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder={'Password'}
          onChange={handlePasswordChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder={'Confirm Password'}
          onChange={handlePasswordConfirmationChange}
        />
      </div>
      <div className='d-flex flex-column call-to-action'>
        <button
          type='submit'
          className='btn btn-dark'
          disabled={isLoading ? 'disabled' : ''}
        >
          Sign Up
        </button>
        <Link
          to={'/login'}
          className={'btn btn-outline-dark go-to-register-page'}
        >
          I Already Have An Account
        </Link>
      </div>
    </form>
  );
}
