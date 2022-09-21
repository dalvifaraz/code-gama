import React from 'react';
import './Footer.css';
import logo from '../../Assets/logo.png';
export default function Footer() {
  return (
    <React.Fragment>
      <div className='container-fluid text-light footer'>
        <div className='row'>
          <div className='col-2 mt-3 ms-3'>
            <h3 className='pb-3 footer_col'>Company</h3>
            <p className='bg-color'>Our Story</p>
            <p className='bg-color'>Careers</p>
            <p className='bg-color'>Ethics</p>
            <p className='bg-color'>News</p>
            <p className='bg-color'>Testimonial</p>
          </div>
          <div className='col-2 mt-3'>
            <h3 className='pb-3 footer_col'>HELP</h3>
            <p className='bg-color'>FAQ</p>
            <p className='bg-color'>Shipping and Return</p>
            <p className='bg-color'>Privacy Policy</p>
            <p className='bg-color'>Terms of Service</p>
            <p className='bg-color'>Covid Update</p>
          </div>
          <div className='col-3'>
            <h1>Company</h1>
            <div className='logo-row'>
              <img className='logo' src={logo} alt='logo' />
              <h2 className='p-lg-3 p-md-0 ps-md-2 ps-sm-2 code'>
                Code <span className='gama'>Gama</span>
              </h2>
            </div>

            <div className='mt-3'>
              <p>Location : Banglore</p>
              <p>Email : dalvifaraz@gmail.com</p>
              <p>Contact : +91-9892876715</p>
              <span>Call Us In Between 9am to 6pm,</span>
              <br />
              <span>Monday to Fridat</span>
            </div>
          </div>
          <div className='col text-center border rounded-5 mt-2 me-lg-5 me-md-3 me-sm-3'>
            <h3 className='text-center mt-2'>Get In Touch || Write To Us</h3>
            <form className='pt-2'>
              <div className='row'>
                <div className='mb-3 w-50'>
                  <input
                    placeholder='First Name'
                    type='text'
                    className='form-control'
                    id='firstName'
                    aria-describedby='firstName'
                  />
                </div>
                <div className='mb-3 w-50'>
                  <input
                    placeholder='Last Name'
                    type='text'
                    className='form-control'
                    id='lastName'
                    aria-describedby='lastName'
                  />
                </div>
              </div>
              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter Email'
                />
              </div>
              <div className='mb-3'>
                <textarea
                  className='form-control'
                  id='textArea'
                  rows='3'
                  placeholder='What`s on your mind??'
                />
              </div>
              <button
                type='submit'
                onClick={() => alert('Thank You for your Response....')}
                className='btn btn-warning w-100 mb-3'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr />
        <p className='text-center pb-2'>
          © 2022, Code Gama Ecommerce Software by dalvifaraz
        </p>
      </div>
    </React.Fragment>
  );
}
