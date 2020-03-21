import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FieldEmail from '../molecules/field-email';
import FieldPassword from '../molecules/field-password';
import Button from '../atoms/button';
import Message from '../atoms/message';

import './form-box.scss';

const EmailFieldProps = {
  name: 'email',
  label: 'Email',
  placeholder: 'Email',
  ariaLabel: 'Email',
}

const PasswordFieldProps = {
  name: 'password',
  label: 'Password',
  placeholder: 'Password',
  ariaLabel: 'Password',
}

const LoginBox = props => (
  <form className='box' onSubmit={props.submitCallback}>
    { props.errorMessage &&
    <Message 
      type="error"
      text={props.errorMessage}
    /> }
    <FieldEmail {...EmailFieldProps} />
    <FieldPassword {...PasswordFieldProps} />
    <Button 
      text='Login'
    />
    <div>
      <Link to="/register">Don't have an account, create one</Link>
    </div>
  </form>
);

LoginBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginBox;
