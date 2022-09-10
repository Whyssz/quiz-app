import { QuestDEV } from '../components/pages/QuestDEV';
import { QuestHTML } from '../components/pages/QuestHTML';
import { QuestJS } from '../components/pages/QuestJS';
import { StartPage } from '../components/pages/StartPage';
import { Error } from '../components/pages/Error';

export const routers = [
  { path: '/', element: <StartPage /> },
  { path: '/js', element: <QuestJS /> },
  { path: '/dev-ops', element: <QuestDEV /> },
  { path: '/html', element: <QuestHTML /> },
  { path: '*', element: <Error /> },
];
