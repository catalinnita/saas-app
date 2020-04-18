import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Store } from './Store.js';
import LoginPage from './components/pages/login-page';
import RegisterPage from './components/pages/register-page';
import ResetPasswordPage from './components/pages/reset-password-page';
import AccountPage from './components/pages/account-page';
import DashboardPage from './components/pages/dashboard-page';
import PaymentPage from './components/pages/payment-page';

import './App.css';

const LoggedInRouter = () => (
  <Switch>
    <Route path="/dashboard" component={DashboardPage} />
    <Route path="/account" component={AccountPage} />
    <Route path="/">
      <Redirect to="/dashboard" />
    </Route>
  </Switch>
);

const CheckoutRouter = () => (
  <Switch>
    <Route path="/payment" component={PaymentPage} />
    <Route path="/">
      <Redirect to="/payment" />
    </Route>
  </Switch>
);

const LoggedOutRouter = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/reset-password" component={ResetPasswordPage} />
    <Route path="/">
      <Redirect to="/register" />
    </Route>
  </Switch>
);

const App = () => {
  const globalState = useContext(Store);
  const { state } = globalState;

  if (state.userStatus === 'checkout') {
    return <CheckoutRouter />
  } else if (state.userStatus === 'loggedIn') {
    return <LoggedInRouter />
  } else {
    return <LoggedOutRouter />
  }
}


export default App;
