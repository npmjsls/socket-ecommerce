import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LocaleProvider from './contexts/LocaleProvider'
import ReduxProvider from './contexts/ReduxProvider'
import LocaleProvider from './contexts/LocaleProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocaleProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </LocaleProvider>
  </React.StrictMode>
);
