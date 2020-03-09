import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
import FieldPassword from '../molecules/field-password';
import Button from '../atoms/button';
import Message from '../atoms/message';

const RegisterBox = props => (
  <form id="registerForm" className='box' onSubmit={props.submitCallback}>
    { props.errorMessage &&
    <Message 
      type="error"
      text={props.errorMessage}
    /> }
    <FieldText
      name='name' 
      label='Name'
      placeholder='Name'
    />
    <FieldText 
      name='email' 
      label='Email'
      placeholder='Email'
    />
    <FieldPassword
      name='password'
      label='Password'
    />
    <Button 
      text='Register'
    />
  </form>
);

RegisterBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default RegisterBox;
