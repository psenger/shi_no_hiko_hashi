
import React from 'react';
import ReactDOM from 'react-dom';
// import store from './store/index';
import { Provider } from 'react-redux';
import App from './containers/index';

/**
 *     <Provider store={store}>

 </Provider>
 */
ReactDOM.render(
  <div className='container' data-component-name='index'>
    <App />
  </div>,
  document.getElementById('root'));

// registerServiceWorker();
