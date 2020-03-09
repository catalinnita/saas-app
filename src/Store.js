import React, {createContext, useReducer} from 'react';
import Cookies from 'js-cookie';

const getLoggedInStatus = () => {
  return typeof Cookies.get('UID') !== 'undefined';
}

const initialState = () => {
  return {
    isLoggedIn: getLoggedInStatus(),
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
      case 'SET_LOGIN':
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
