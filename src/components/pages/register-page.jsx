import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import Cookies from 'js-cookie'
import RegisterBox from '../organisms/register-box'
import { registerService } from '../../services/authentication'

import './page.scss';

const RegisterPage = () => {
  const globalState = useContext(Store);
  const { state, dispatch } = globalState;

  const doRegister = async (parameters) => {
    try {
      const user = await registerService(parameters);
      Cookies.set('UD', user);
      dispatch({
        type: 'SET_USER_STATUS',
      });
    }
    catch (err) {
      dispatch({
        type: 'SET_STATE',
        payload: {
          errorMessage: err.message,
        },
      });
    }
  }

  const registerSubmit = (event) => {
    event.preventDefault();
    const parameters = state[event.target.id];

    doRegister(parameters);
  }

  return (
    <div className="page page--register">
        <h1>Create account</h1>
        <RegisterBox
            errorMessage={state.errorMessage}
            submitCallback={registerSubmit}
        />
    </div>
  );
};

export default RegisterPage;

