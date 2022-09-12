import { QuestDEV } from '../pages/QuestDEV';
import { QuestHTML } from '../pages/QuestHTML';
import { QuestJS } from '../pages/QuestJS';
import { StartPage } from '../pages/StartPage';
import { ErrorPage } from '../pages/ErrorPage';
import { ResultPage } from '../pages/ResultPage';

export const routers = [
  { path: '/', element: <StartPage /> },
  { path: '/js', element: <QuestJS /> },
  { path: '/devops', element: <QuestDEV /> },
  { path: '/html', element: <QuestHTML /> },
  { path: '/result', element: <ResultPage /> },
  { path: '*', element: <ErrorPage /> },
];
