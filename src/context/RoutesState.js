import React, { useReducer } from 'react';
import RoutesContext from './routesContext';
import RoutesReducer from './routesReducer';

const RoutesState = ({ children }) => {
  const initialState = {
    routes: [
      { name: 'What we do', href: '#what-we-do' },
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Register', href: 'register' },
      { name: 'Login', href: 'login' },
    ],
  };

  return (
    <RoutesContext.Provider
      value={{
        routes: initialState.routes,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesState;
