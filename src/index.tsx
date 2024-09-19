import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './page/app/App';

import { rootStore } from './store/RootStore';
import { StoreContext } from './store/StoreContext';

import './fonts/roboto/roboto.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
