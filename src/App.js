import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
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

const App = () => {
  const { token } = Cookies.get('UID') || false;
  if (token) {
    return <LoggedInRouter />
  } else {
    return <LoggedOutRouter />
  }
}

export default App;
