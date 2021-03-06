import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => (
  <button
    aria-label={props.ariaLabel}
    className={`button ${props.classNames}`}
    onClick={props.clickCallback}
  >{props.text}</button>
);

Button.defaultProps = {
  ariaLabel: '',
  classNames: [],
  clickCallback: null,
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  clickCallback: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
