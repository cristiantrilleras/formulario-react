import React, {useRef} from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUS = () => {

  const refForm = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refForm);
    const serviceId= "service_5dez18r"
    const templateId= "template_3u40o1p"
    const apikey = "tx21-w-OJDoTfP_8k"

    emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
    .then(result => console.log(result.text))
    .catch(error => console.error(error))

  }

  return (
    <form ref={refForm} action=""onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>contact us</h2>
        <p>please fill this form</p>
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='username' type="text" id='email' placeholder='ej: cristian trilleras' required/>
      </fieldset>

      <fieldset className='field-email'>
        <label className='symbol-required' name='email' >Email</label>
        <input name='email' id='email' type="email" placeholder='ej: cristian trilleras@gmail.com' required/>
      </fieldset>

      <fieldset className='field-message'>
        <label className='symbol-required'>Mensaje</label>
        <textarea maxLength="500" placeholder='type your message' name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <button className='btn-send'>Send</button>
    </form>
  )
}
