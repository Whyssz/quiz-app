import { useEffect } from 'react';
import { useHttp } from '../../hooks/useHttp';
import AppRouter from '../AppRouter/AppRouter';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { Header } from '../header/Header';
import { MainConteiner } from '../mainConteiner/MainConteiner';
import { ProgressBar } from '../progressBar/ProgressBar';
import TempleQuest from '../templeQuest/TempleQuest';

import Spinner from '../UI/spinner/Spinner';

const App = () => {
  // const { request, process, setProcess } = useHttp();

  // useEffect(() => {
  //   request('http://localhost:3001/questions').then((data) =>
  //     console.log(data)
  //   );
  // }, []);

  return (
    <>
      <Header />
      <AppRouter />
      {/* <Spinner /> */}
      {/* <ErrorMessage /> */}
    </>
  );
};

export default App;
