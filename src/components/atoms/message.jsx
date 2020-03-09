import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';


const Message = props => (
  <div
    onClick={props.clickCallback}
    className={`message message--${props.type}`}
    ariaLabel={props.ariaLabel}
  >{props.text}</div>
);

Message.defaultProps = {
  ariaLabel: '',
  type: 'info',
  clickCallback: () => {},
};

Message.propTypes = {
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  clickCallback: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Message;
