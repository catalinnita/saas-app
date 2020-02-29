import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/label';
import Input from '../atoms/input';

import './fieldset.scss';

const FieldPassword = props => (
  <fieldset>
  	<Label 
  		text={props.label}
  	/>
  	<Input 
  		classNames={['input--password']}
		name={props.name}
		placeholder={props.placeholder}
  		type='password'  		
  	/>
  </fieldset>
);

FieldPassword.defaultProps = {
  placeholder: '',
};

FieldPassword.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default FieldPassword;
