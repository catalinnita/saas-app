import React, {createContext, useReducer} from 'react';

const initialState = {};
const Store = createContext(initialState);
const { Provider } = Store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SET_STATE':
        return {
          ...state,
          ...action.payload,
        };
        
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Store, StateProvider }