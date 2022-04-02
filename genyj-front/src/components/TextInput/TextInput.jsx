import React from 'react';
import './TextInput.scss';

export default function({
  placeholder,
  onChange = () => {},
  required = false,
  className = 'form-control',
  type = 'text'
}) {
  return <div className='form-group text-input-group'>
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  </div>;
}