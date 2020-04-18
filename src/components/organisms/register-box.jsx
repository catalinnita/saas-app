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
  <form id="registerForm" onSubmit={props.submitCallback}>
    <div className="box">
      {props.errorMessage &&
        <Message
          type="error"
          text={props.errorMessage}
        />}
      <FieldText
        name='name'
        label='Name'
        placeholder='John Doe'
      />
      <FieldEmail
        name='email'
        label='Email'
        placeholder='name@domain.com'
      />
      <FieldPassword
        name='password'
        label='Password'
        placeholder='min 6 letters, one capital, one number'
      />
      <Button
        classNames={['button--right']}
        text='Register'
      />
    </div>
    <div className="box box--nobg">
      <Link className="link" to="/login">Already have an account, please login</Link>
    </div>
  </form>
);

RegisterBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default RegisterBox;
