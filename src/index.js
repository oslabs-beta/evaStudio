import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import store from './store.ts';
import './globals.css';

render(
  <Provider store={store}>
    <HashRouter>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
