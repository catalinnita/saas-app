import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
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
    <FieldText {...EmailFieldProps} />
    <FieldPassword {...PasswordFieldProps} />
    <Button 
      text='Login'
    />
  </form>
);

LoginBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginBox;
