import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers/';
import './../style/style.scss';

const createdStore = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store = {createdStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));