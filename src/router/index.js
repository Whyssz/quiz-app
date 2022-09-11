import { QuestDEV } from '../pages/QuestDEV';
import { QuestHTML } from '../pages/QuestHTML';
import { QuestJS } from '../pages/QuestJS';
import { StartPage } from '../pages/StartPage';
import { Error } from '../pages/Error';

export const routers = [
  { path: '/', element: <StartPage /> },
  { path: '/js', element: <QuestJS /> },
  { path: '/devops', element: <QuestDEV /> },
  { path: '/html', element: <QuestHTML /> },
  { path: '*', element: <Error /> },
];
