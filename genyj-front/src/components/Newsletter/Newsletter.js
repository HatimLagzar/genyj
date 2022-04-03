import React, { useState } from 'react';
import './Newsletter.scss';
import newsletterService from '../../app/services/newsletter/NewsletterService';
import toastr from 'toastr';

export default function Newsletter() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    newsletterService.subscribe(email).then(response => {
      setIsLoading(false);
      if (response.status !== 200) {
        return;
      }

      toastr.success(response.data.message);
      setEmail('');
    });
  }

  return <section id={'newsletter'} className={'section-push'}>
    <h3 className='text-center section-title'>Stay Tuned</h3>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-sm-12 mx-auto'>
          <p>Subscribe to our mailing list to stay updated, you will get notified about our new
            products and discount.</p>
          <form action='#' method={'POST'} onSubmit={handleSubmit}>
            <div className='form-group'>
              <input type='email' className='form-control' placeholder={'Email Address'}
                     value={email}
                     onChange={e => setEmail(e.currentTarget.value)} required={true} />
            </div>
            <button className='btn btn-dark' disabled={isLoading}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>;
}
