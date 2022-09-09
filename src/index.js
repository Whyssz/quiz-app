import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './context';

import App from './components/app/App';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
