import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

const Form = () => {
  return (
    <div className='main-container'>
     <h3>Create Account</h3>
      <div className='container'>
        <form className='form'>
          <div className='input1'>
            <FontAwesomeIcon icon={faUser} />
            <input type='text' placeholder='Name' />
          </div>
          <div className='input1'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type='email' placeholder='Email' />
          </div>
          <div className='input1'>
            <FontAwesomeIcon icon={faLock} />
            <input type='password' placeholder='Password' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
