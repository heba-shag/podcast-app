import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/Auth-context';
import i18n from './I18n';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n.init().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/podcast-app">
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
});