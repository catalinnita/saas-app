import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import Cookies from 'js-cookie'
import LoginBox from '../organisms/login-box';
import { loginServices } from '../../services/authentication'

import './page.scss';

const LoginPage = () => {
  const globalState = useContext(Store);
  const { state, dispatch } = globalState;

  const loginSubmit = async (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input');
    const names = [...inputs].map(input => input.name);
    const parameters = Object.keys(state)
      .filter(key => names.includes(key))
      .reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});

    const login = await loginServices(parameters);
    if (login.status !== 200) {
      login.json().then(res => {
        dispatch({
          type: 'SET_STATE',
          payload: {
            errorMessage: res.message,
          },
        });
      });
      return;
    }

    login.json().then(res => {
      Cookies.set('UID', res);
      dispatch({
        type: 'SET_LOGIN',
      });
    });
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

