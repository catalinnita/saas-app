import React from 'react';
import PropTypes from 'prop-types';

import FieldText from '../molecules/field-text';
import Button from '../atoms/button';

const ResetPasswordBox = props => (
  <div className='box'>
    <FieldText 
      label='Email'
      placeholder='Email'
    />
    <Button 
      clickCallback={props.clickCallback}
      text='Reset'
    />
  </div>
);

ResetPasswordBox.propTypes = {
  clickCallback: PropTypes.func.isRequired,
};

export default ResetPasswordBox;
