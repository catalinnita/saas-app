import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Store } from './Store.js';
import LoginPage from './components/pages/login-page';
import RegisterPage from './components/pages/register-page';
import ResetPasswordPage from './components/pages/reset-password-page';
import AccountPage from './components/pages/account-page';
import DashboardPage from './components/pages/dashboard-page';

import './App.css';

const LoggedInRouter = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  );
}

const LoggedOutRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/">
        <Redirect to="/register" />
      </Route>
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
