import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    aria-label={props.ariaLabel}
    className={props.classNames}
    onClick={props.clickCallback}
  >{props.text}</button>
);

Button.defaultProps = {
  ariaLabel: '',
  classNames: [],
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  clickCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
