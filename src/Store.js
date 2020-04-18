import React, { createContext, useReducer } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import dotenv from 'dotenv';

const getUserStatus = () => {
  dotenv.config();
  const UD = Cookies.get('UD');
  if (typeof UD === 'undefined') {
    return 'loggedOut';
  } else {
    const { subscriptionId } = jwt.verify(UD, process.env.REACT_APP_SECRET_KEY);
    if (subscriptionId) {
      return 'loggedIn';
    } else {
      return 'checkout';
    }
  }
}

// make the request every time when page is refreshed, use the cookie just for token
const initialState = () => {
  return {
    userStatus: getUserStatus(),
  }
}

const Store = createContext(initialState());
const { Provider } = Store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action = {type: ''}) => {
    switch(action.type) {
      case 'SET_STATE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_USER_STATUS':
        return {
          ...state,
          ...initialState(),
        };
      default:
        return {
          ...state,
        };
    };
  }, initialState());
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Store, StateProvider }
