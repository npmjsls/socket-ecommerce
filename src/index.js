import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LocaleProvider from './contexts/LocaleProvider'
import ReduxProvider from './contexts/ReduxProvider'
import CdnProvider from './contexts/CdnProvider'
import SocketProvider from './contexts/SocketProvider'
import NetworkProvider from './contexts/NetworkProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <NetworkProvider>
        <LocaleProvider>
          <SocketProvider>
            <CdnProvider>
              <App />
            </CdnProvider>
          </SocketProvider>
        </LocaleProvider>
      </NetworkProvider>
    </ReduxProvider>
  </React.StrictMode>
);
