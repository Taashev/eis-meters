import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './page/app/App';

import './fonts/roboto/roboto.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
