import React from 'react';
import PropTypes from 'prop-types';

const Label = props => (
  <label
    className={props.classNames}
    aria-label={props.ariaLabel}
  >{props.text}</label>
);

Label.defaultProps = {
  ariaLabel: '',
  classNames: [],
};

Label.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
};

export default Label;
