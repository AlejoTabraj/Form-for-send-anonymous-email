import React from 'react';
import { sendMessageAction } from './services/actions/action.js'
import './index.css';
import { useFormik } from 'formik';

export default () => {

  const formik = useFormik({
    initialValues : {
      email: '',
      subject: '',
      text: ''
    },

    onSubmit : async (values) => {
       await sendMessageAction(values.email, values.subject, values.text)
    },

    validate: values => {
      if(!values.email){
        console.log('este campo debe estar escrito')
      }
    }

  })

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>A que mail quiere enviar el mensaje?*</label>
            <input type='email' 
            id='email'
            name='email' 
            value={formik.values.email}
            onChange={formik.handleChange} />
            <label htmlFor='subject' className='subject'>Subject:* <p>algo llamativo para que le destinatarie lo lea</p> </label>
            <input 
            type='text' 
            id='subject'
            name='subject'
            onChange={formik.handleChange}
            value={formik.values.subject}/>
            <label htmlFor='message'>Message:*</label>
            <textarea 
            id='message' 
            name='message'
            onChange={formik.handleChange}
            value={formik.values.message}/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}