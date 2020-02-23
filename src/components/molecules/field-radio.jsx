import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '@components/label';
import Input from '@components/input';

class FieldRadio extends Component {
  render() {
  	const options = props.options.map((option) => {
	  	<Input 
	  		classNames='input--radio'
	  		name={props.name}
	  		type='radio'  		
	  		value={option.value}
	  	/>{option.text}
  	});

  	return(
	  <fieldset>
	  	<Label 
	  		text={props.label}
	  	/>
	  	{options}
	  </fieldset>
  	)
  }
};

FieldRadio.propTypes = {
  label: PropTypes.string.required,
  name: PropTypes.string.required,  
  options: PropTypes.arrayOf(
  	PropTypes.shape({
		value: PropTypes.value.required,
		text: PropTypes.text.required,
  	})
  ),
};

export default FieldRadio;
