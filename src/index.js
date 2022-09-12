import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { DataProvider } from './context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <DataProvider>
      <App />
    </DataProvider>
  </Fragment>
);
