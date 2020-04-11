import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import { Provider } from 'react-redux'
// import store from './store'
import TottyApp from './TottyApp';
ReactDOM.render(
  //<Provider store={store}>
  //  <App />
    <TottyApp />
 // </Provider>
  , document.getElementById('root'));
