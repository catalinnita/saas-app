import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
import FieldPassword from '../molecules/field-password';
import Button from '../atoms/button';

import './form-box.scss';

const EmailFieldProps = {
  name: 'Email',
  label: 'Email',
  placeholder: 'Email',
  ariaLabel: 'Email',
}

const PasswordFieldProps = {
  name: 'Password',
  label: 'Password',
  placeholder: 'Password',
  ariaLabel: 'Password',
}

const LoginBox = props => (
  <div className='box'>
    <FieldText {...EmailFieldProps} />
    <FieldPassword {...PasswordFieldProps} />
    <Button 
      clickCallback={props.clickCallback}
      text='Login'
    />
  </div>
);

LoginBox.propTypes = {
  clickCallback: PropTypes.func.isRequired,
};

export default LoginBox;
