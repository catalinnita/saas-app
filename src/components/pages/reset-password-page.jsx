import React from 'react';
import ResetPasswordBox from '../organisms/reset-password-box'

const ResetPasswordPage = () => (
    <div className="page page--reset-password">
        <h1>Reset Password</h1>
        <ResetPasswordBox 
            clickCallback={() => { console.log('click'); }}
        />
    </div>
);

export default ResetPasswordPage;

