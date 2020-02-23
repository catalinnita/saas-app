import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <input
    aria-label={props.ariaLabel}
	  className={props.classNames}
    name={props.name}
    placeholder={props.placeholder}
    type={props.type}
    defaultValue={props.value}
  />
);

Input.defaultProps = {
  ariaLabel: '',
  classNames: [],
  placeholder: '',
  type: 'text',
  value: '',
};

Input.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'checkbox', 'radio']),
  value: PropTypes.string,
};

export default Input;
