import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import PropTypes from 'prop-types';

import './input.scss';

const Input = props => {
  const globalState = useContext(Store); 
  const { dispatch } = globalState;
 
  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: 'SET_STATE',
      payload: {
        [name]: value,
      }
    });
  }

  return (
    <input
      aria-label={props.ariaLabel}
      className={props.classNames}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.value}
      onChange={handleInputChange}
    />
  );
};

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
