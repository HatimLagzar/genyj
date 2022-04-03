import React, { useState } from 'react';
import './ContactUs.scss';
import contactService from '../../app/services/contact-us/ContactService';
import toastr from 'toastr';

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    contactService.contactUs(name, email, subject, message).then(response => {
      setIsLoading(false);

      if (response.status !== 200) {
        return;
      }

      toastr.success(response.data.message);

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    });
  }

  return <section id={'contact-us'} className={'section-push'}>
    <h3 className='text-center section-title'>Contact Us</h3>
    <div className='container'>
      <div className='col-lg-6 col-sm-12 mx-auto'>
        <form action='#' method={'POST'} onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder={'Name'}
                   value={name}
                   onChange={e => setName(e.currentTarget.value)} />
          </div>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder={'Subject'}
                   value={subject}
                   onChange={e => setSubject(e.currentTarget.value)} />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder={'Email Address'}
                   value={email}
                   onChange={e => setEmail(e.currentTarget.value)} />
          </div>
          <div className='form-group'>
            <textarea className='form-control' placeholder={'Message'}
                      value={message}
                      onChange={e => setMessage(e.currentTarget.value)} />
          </div>

          <button className='btn btn-dark' disabled={isLoading}>Send</button>
        </form>
      </div>
    </div>
  </section>;
}
