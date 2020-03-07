import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Store } from './Store.js';
import LoginPage from './components/pages/login-page';
import RegisterPage from './components/pages/register-page';
import ResetPasswordPage from './components/pages/reset-password-page';
import './App.css';

const LoggedInRouter = () => {
  return (
    <div>
      Logged In
    </div>
  );
}

const LoggedOutRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
    </Switch>
  );
}

const Wrapper = (props) => {
  if (props.isLoggedIn) {
    return <LoggedInRouter />
  } else {
    return <LoggedOutRouter />
  }
}

const App = () => {
  const globalState = useContext(Store);
  const { state } = globalState;
  return (
    <Wrapper isLoggedIn={state.isLoggedIn} />
  )
}


export default App;
