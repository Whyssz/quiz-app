import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { QuestContainer } from '../components/questContainer/QuestContainer';
import { useData } from '../hooks/useData';

export const ResultPage = () => {
  const { data, status } = useData();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(!load);
  }, []);

  status.forEach((item) => {
    if (item === false) console.log('false');
  });

  return (
    <CSSTransition in={load} timeout={500} classNames="ask">
      <div className="pt-40">
        <QuestContainer>
          <h1 className="mt-5 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7]">
            Result
          </h1>
          <ul className="my-10 p-5 grid grid-cols-3 grid-rows-1 justify-center items-center h-[300px] gap-7"></ul>
        </QuestContainer>
      </div>
    </CSSTransition>
  );
};
