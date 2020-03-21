import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/label';
import Input from '../atoms/input';

const FieldEmail = props => (
  <fieldset>
  	<Label 
  		text={props.label}
  	/>
  	<Input 
  		classNames={['input--text']}
  		name={props.name}
  		placeholder={props.placeholder}
			type='email'
  		value={props.value}
  	/>
  </fieldset>
);

FieldEmail.defaultProps = {
  placeholder: '',
  value: '',
};

FieldEmail.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,  
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default FieldEmail;
