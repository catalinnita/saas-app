import React from 'react';
import LoginBox from '../organisms/login-box';

import './page.scss';

const LoginPage = () => (
    <div className="page page--login">
        <h1>Login</h1>
        <LoginBox 
            clickCallback={() => { console.log('click'); }}
        />
    </div>
);

export default LoginPage;

