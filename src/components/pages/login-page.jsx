import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import Cookies from 'js-cookie'
import LoginBox from '../organisms/login-box';
import { loginServices } from '../../services/authentication'

import './page.scss';

const LoginPage = () => {
  const globalState = useContext(Store);
  const { state, dispatch } = globalState;

  const doLogin = async (parameters) => {
    try {
      const userData = await loginServices(parameters);
      Cookies.set('UD', userData);
      dispatch({
        type: 'SET_LOGIN',
      });
    }
    catch(err) {
      dispatch({
        type: 'SET_STATE',
        payload: {
          errorMessage: err.message,
        },
      });
    }
  }

  const loginSubmit = async (event) => {
    event.preventDefault();
    const parameters = state[event.target.id];

    doLogin(parameters);
  };

  return (
    <div className="page page--login">
      <h1>Login</h1>
      <LoginBox
        errorMessage={state.errorMessage}
        submitCallback={loginSubmit}
      />
    </div>
  )
};

export default LoginPage;

