import React from 'react';
import { render } from 'react-dom';

import 'config/i18n';
import 'scss/application.scss';

import App from 'components/App';

import reportWebVitals from './reportWebVitals';

const renderApp = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp();
reportWebVitals();
