import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import RegisterBox from '../organisms/register-box'

const registerService = (data) => {
    fetch('http://sdata-api-gateway.herokuapp.com/auth/register', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    })
}

const RegisterPage = () => {
    const globalState = useContext(Store);
    const { state } = globalState;

    const registerSubmit = (event) => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input');
        const names = [...inputs].map(input => input.name);
        const parameters = Object.keys(state)
          .filter(key => names.includes(key))
          .reduce((obj, key) => {
            obj[key] = state[key];
            return obj;
          }, {});
        
        registerService(parameters);
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

