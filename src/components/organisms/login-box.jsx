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
  placeholder: 'name@domain.com',
  ariaLabel: 'Email',
}

const PasswordFieldProps = {
  name: 'password',
  label: 'Password',
  placeholder: 'chosen password',
  ariaLabel: 'Password',
}

const LoginBox = props => (
  <form onSubmit={props.submitCallback}>
    <div className="box">
      { props.errorMessage &&
      <Message
        type="error"
        text={props.errorMessage}
      /> }
      <FieldEmail {...EmailFieldProps} />
      <FieldPassword {...PasswordFieldProps} />
      <Button
        classNames='button--right'
        text='Login'
        />
    </div>
    <div className="box box--nobg">
      <Link className="link" to="/register">Don't have an account, create one</Link>
    </div>
  </form>
);

LoginBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default LoginBox;
