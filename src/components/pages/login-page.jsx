import React from 'react';
import LoginBox from '../organisms/login-box'

const LoginPage = () => (
    <div>
        <h1>Login</h1>
        <LoginBox 
            clickCallback={() => { console.log('click'); }}
        />
    </div>
);

export default LoginPage;

