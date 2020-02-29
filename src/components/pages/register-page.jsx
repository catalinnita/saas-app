import React from 'react';
import RegisterBox from '../organisms/register-box'

const RegisterPage = () => (
    <div className="page page--register">
        <h1>Create account</h1>
        <RegisterBox 
            clickCallback={() => { console.log('click'); }}
        />
    </div>
);

export default RegisterPage;

