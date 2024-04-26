import { useState } from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = () => {

  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const clearState = () => this.setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,message);
    const userData = {
      name: name,
      email: email,
      message: message
    };

    axios.post('/api/contact', userData)
      .then(res => {
        document.getElementById('success').innerHTML='Thank you for contacting me. I will get back shortly.';
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('message').value='';
        clearState();
      });

    }
  
  // const [{ name, email, message }, setState] = useState(initialState)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }
  // const clearState = () => setState({ ...initialState })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }  
  //     )
  // }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send me an email and I will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <p></p>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='successss'>
                  <p id='success'></p>
                </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href='https://www.facebook.com/parthshah021097/' target='blank'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/parthu_210/' target='blank'>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://api.whatsapp.com/send/?phone=%2B15194043898&text&app_absent=0' target='blank'>
                      <i className='fa fa-whatsapp'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Parth Shah (Student at Cumberland University)
          </p>
        </div>
      </div>
    </div>
  )
}
