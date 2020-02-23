import React from 'react';
import PropTypes from 'prop-types';

const Message = props => (
  <div
    onClick={props.clickCallback}
    className={props.classNames.join(' ')}
    ariaLabel={props.ariaLabel}
  >{props.text}</div>
);

Message.defaultProps = {
  ariaLabel: '',
  classNames: '',
};

Message.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  clickCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
