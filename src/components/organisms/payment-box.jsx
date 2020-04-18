import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';

import Button from '../atoms/button';
import Message from '../atoms/message';

import './form-box.scss';

const PaymentBox = props => (
  <form id="paymentForm" className='box' onSubmit={props.submitCallback}>
    {props.errorMessage &&
      <Message
        type="error"
        text={props.errorMessage}
      />}
    <FieldText
      name='name'
      label='Name on card'
      placeholder=''
    />
    <FieldText
      name='number'
      label='Card number'
      placeholder=''
    />
    <FieldText
      name='expMonth'
      label='Expiration date'
      placeholder=''
    />
    <FieldText
      name='expYear'
      label=''
      placeholder=''
    />
    <FieldText
      name='ccv'
      label='CCV'
      placeholder=''
    />
    <Button
      text='Start Trial'
    />
  </form>
);

PaymentBox.propTypes = {
  submitCallback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default PaymentBox;
