import React, { useRef } from 'react';
import './contact.css'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {BsDiscord} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gl7r9vc', 'template_1ko258b', form.current, 'F1CwGImlyt7ypchF8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Contact</h5>
      <h2>Talk to me!</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <GoMail className='contact__option-icon'/>
            <h3>Email</h3>
            <h5>thitboxao0909@gmail.com</h5>
            <a href='mailto:thitboxao0909@gmail.com' target='_blank' rel='noreferrer'>Send me a message</a> 
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h3>Messenger</h3>
            <h5>Hoàng Xào</h5>
            <a href='https://m.me/profile.php?id=100006609946869' target='_blank' rel='noreferrer'>Send me a message</a> 
          </article>
          <article className='contact__option'>
            <BsDiscord className='contact__option-icon'/>
            <h3>Discord</h3>
            <h5>thitboxao0909#6206</h5>
             
          </article>
        </div>
        {/* end of contacts */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact