import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jzumcfa', 
      'template_djgunur', 
      form.current, 
      'MGkOpYaTvH-CgCW6r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows={8} />
      <input className="btn" type="submit" value="Send" />
    </form>
  </div>;
}

export default Form;
