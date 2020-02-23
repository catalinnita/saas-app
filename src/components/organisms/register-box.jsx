import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
import FieldPassword from '../molecules/field-password';
import Button from '../atoms/button';

const RegisterBox = props => (
  <div className='box'>
    <FieldText 
      label='Name'
      placeholder='Name'
    />
    <FieldText 
      label='Email'
      placeholder='Email'
    />
    <FieldPassword
      label='Password'
    />
    <Button 
      clickCallback={props.clickCallback}
      text='Register'
    />
  </div>
);

RegisterBox.propTypes = {
  clickCallback: PropTypes.func.isRequired,
};

export default RegisterBox;
