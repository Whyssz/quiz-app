import '../../styles/styles.scss';
import { Header } from '../header/Header';
import { QuestContainer } from '../questContainer/QuestContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './AppRouter';

export const App = () => {
  // const onFetch = async () => {
  //   const res = await fetch(
  //     'https://quizapi.io/api/v1/questions?apiKey=fL6AYo5FW5uUcql80I9HXMcPlo2WhM2w10a0vabf&category=devops&difficulty=Easy&limit=10'
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

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
