import React, { useContext } from 'react';
import { Store } from '../../Store.js';
import RegisterBox from '../organisms/register-box'
import Cookies from 'js-cookie'
import { loginServices, registerService } from '../../services/authentication'

const RegisterPage = () => {
  const globalState = useContext(Store);
  const { state, dispatch } = globalState;

  const doRegister = async (parameters) => {
    try {
      await registerService(parameters);
      const { token } = await loginServices(parameters);
      Cookies.set('UID', token);
      dispatch({
        type: 'SET_LOGIN',
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

