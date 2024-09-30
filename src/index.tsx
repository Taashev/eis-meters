import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { StoreContext } from './context/StoreContext';
import { rootStore } from './store/RootStore';

import App from './page/app/App';

import 'react-loading-skeleton/dist/skeleton.css';
import './fonts/roboto/roboto.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    </HashRouter>
  </React.StrictMode>
);
