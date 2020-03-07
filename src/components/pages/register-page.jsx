import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import RegisterBox from '../organisms/register-box'
import Cookies from 'js-cookie'
import {loginServices, registerService} from '../../services/authentication'

const RegisterPage = () => {
    const globalState = useContext(Store);
    const { state, dispatch } = globalState;

    const registerSubmit = async (event) => {
        event.preventDefault();
        
        // build the parameters
        const inputs = event.target.querySelectorAll('input');
        const names = [...inputs].map(input => input.name);
        const parameters = Object.keys(state)
          .filter(key => names.includes(key))
          .reduce((obj, key) => {
            obj[key] = state[key];
            return obj;
          }, {});
        
        // do register
        const register = await registerService(parameters);
        if (register.status !== 200) {
            // do some error messaging here then go out
            return;
        }

        // redirect to cc info form

        // create a subscription in stripe

        // if register works fine do login
        const login = await loginServices(parameters);
        if (login.status !== 200) {
            // do some error messaging here then go out
            return;
        }

        // set the token
        login.json().then(res => { 
            Cookies.set('UID', res);
        });
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

