import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';

import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const jsx =
 <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <App />
    </div>
  </ConnectedRouter>
</Provider>

const target = document.querySelector('#root')

render(jsx, target)
