import { Provider } from 'react-redux';
import React from 'react';
import Router from '../router';
import configureStore from '../redux/store';
import constants from '../redux/constants/Auth';

const { AUTH_TOKEN } = constants;

export const store = configureStore();

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_TOKEN });
}

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
