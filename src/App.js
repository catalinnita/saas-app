import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/pages/login-page';
import RegisterPage from './components/pages/register-page';
import ResetPasswordPage from './components/pages/reset-password-page';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
    </Switch>
  );
}

export default App;
