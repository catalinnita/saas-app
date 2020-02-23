import React from 'react';
import PropTypes from 'prop-types';

import Label from '../atoms/label';
import Input from '../atoms/input';

const FieldText = props => (
  <fieldset>
  	<Label 
  		text={props.label}
  	/>
  	<Input 
  		classNames={['input--text']}
  		name={props.name}
  		placeholder={props.placeholder}
		type='text'
  		value={props.value}
  	/>
  </fieldset>
);

FieldText.defaultProps = {
  placeholder: '',
  value: '',
};

FieldText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,  
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default FieldText;
