import '../../styles/styles.scss';
import { Header } from '../header/Header';
import { QuestContainer } from '../questContainer/QuestContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './AppRouter';

export const App = () => {


  return (
    <div className="container_wrapp">
      <div className="container">
        <Router>
          <AppRouter />
        </Router>
      </div>
    </div>
  );
};
