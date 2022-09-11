import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App />
  </Fragment>
);
