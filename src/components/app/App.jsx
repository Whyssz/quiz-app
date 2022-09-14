import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './AppRouter';

import '../../styles/styles.scss';

export const App = () => {
  return (
    <div className="container">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};
