import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginService from '../../app/services/auth/AuthService';
import { setToken, setUser } from '../../app/features/auth/authSlice';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    loginService.login(email, password).then((response) => {
      console.log(response);
      const token = response.data.token;
      const user = jwtDecode(token);

      dispatch(setToken(token));
      dispatch(setUser(user));

      navigator('/');
    });
  }

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  return (
    <form action='' onSubmit={handleFormSubmit}>
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
      <div className='d-flex flex-column call-to-action'>
        <button type='submit' className='btn btn-dark'>
          Sign In
        </button>
        <Link
          to={'/register'}
          className={'btn btn-outline-dark go-to-register-page'}
        >
          Create an account
        </Link>
      </div>
    </form>
  );
}
