import React, { useState } from 'react';
import RegisterBox from '../organisms/register-box'

const registerService = (data) => {
    fetch('http://sdata-api-gateway.herokuapp.com/auth/register', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    })
}

const RegisterPage = () => {
    const [ state, setState ] = useState();

    const registerSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input');
        const names = [...inputs].map(input => input.name);

        console.log(state);
    } 

    return (
        <div className="page page--register">
            <h1>Create account</h1>
            <RegisterBox 
                submitCallback={registerSubmit}
            />
        </div>
    );
};

export default RegisterPage;

