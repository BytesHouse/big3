import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@csstools/normalize.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from './core/redux/store/index.ts';

const setupStore = store();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={setupStore}>
    <App />
  </Provider>
);
