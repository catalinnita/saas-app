import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <i
    className={props.classNames.join(' ')}
    ariaLabel={props.ariaLabel}
  ></i>
);

Icon.defaultProps = {
  ariaLabel: '',
  classNames: '',
};

Icon.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
};

export default Icon;
