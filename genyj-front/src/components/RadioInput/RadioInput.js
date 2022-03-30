import React from 'react';
import './RadioInput.scss';

export default function RadioInput({
  id,
  text,
  name,
  value,
  disabled = false,
  checked = false,
  required = false,
  handleChange = () => {},
}) {
  return <>
    <input
        id={id}
        className={'radio-input'}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        required={required}
        onChange={handleChange}
    />
    <label htmlFor={id} className="radio-label">
      {text}
    </label>
  </>;
}
