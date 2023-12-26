import { useContext, useRef } from 'react';

import classes from './newsletter-registration.module.css';
import NotificationContext from '@/store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const contextData = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    contextData.showNotification({
      title:'Sended',
      message:'Data sended,Please wait...',
      status:'pending'
    });
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("notify",data)
        // { title, message, status }
        contextData.showNotification({
          title:'Success!',
          message:'Newsletter registeratin done successfully!',
          status:'success'
        });
        emailInputRef.current.value = '';
      }).catch(err=>{
        contextData.showNotification({
          title:'Error!',
          message:'Error in registeration.',
          status:'error'
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
