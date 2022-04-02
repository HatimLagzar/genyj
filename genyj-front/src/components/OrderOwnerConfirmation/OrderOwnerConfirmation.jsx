import React from 'react';
import './OrderOwnerConfirmation.scss';

export default function({ handleAuthenticateClick, handleContinueAsGuestClick }) {
  return <div
    id={'order-owner-confirmation'}
    className={'d-none'}
  >
    <p>Continuez tant que invité ou s'identifier ?</p>
    <button
      onClick={handleAuthenticateClick}
      type={'button'}
      className={'btn btn-dark'}
    >
      S'identifier
    </button>
    <button
      onClick={handleContinueAsGuestClick}
      type={'button'}
      className={'btn btn-light'}
    >
      Invité
    </button>
  </div>;
}