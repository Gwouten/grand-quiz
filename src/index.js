import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';

import './styles.scss';

const jsx =
 <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>

const target = document.querySelector('#root')

render(jsx, target)
