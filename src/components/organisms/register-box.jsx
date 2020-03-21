import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
import FieldEmail from '../molecules/field-email';
import FieldPassword from '../molecules/field-password';
import Button from '../atoms/button';
import Message from '../atoms/message';

import './form-box.scss';

const RegisterBox = props => (
  <form id="registerForm" className='box' onSubmit={props.submitCallback}>
    {props.errorMessage &&
      <Message
        type="error"
        text={props.errorMessage}
      />}
    <FieldText
      name='name'
      label='Name'
      placeholder='Name'
    />
    <FieldEmail
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
    <div>
      <Link to="/login">Already have an account, please login</Link>
    </div>
  </form>
);

RegisterBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default RegisterBox;
