import { useState, useEffect } from 'react';
import { useQuestServices } from '../services/QuestServices';
import { useData } from '../hooks/useData';

import { Header } from '../components/header/Header';
import { ProgressBar } from '../components/progressBar/ProgressBar';
import { QuestContainer } from '../components/questContainer/QuestContainer';
import { QuestAsk } from '../components/questAsk/QuestAsk';
import Spinner from '../components/UI/spinner/Spinner';

export const QuestHTML = () => {
  const [currData, setCurrData] = useState([]);
  const [currAsk, setCurrAsk] = useState(0);

  const { setValues } = useData([]);
  const { process, setProcess, getHTMLQuestions } = useQuestServices();

  const timer = {
    minutes: 10,
  };

  useEffect(() => {
    onRequest(10);
  }, []);

  const onRequest = (limit) => {
    getHTMLQuestions(limit)
      .then(setData)
      .then(() => setProcess('confirmed'));
  };

  const setData = (data) => {
    setValues(data);
    setCurrData(data);
  };

  const onNext = () => {
    setCurrAsk(currAsk + 1);
  };

  return (
    <>
      <Header title="Start" timer={timer} />
      <QuestContainer>
        <div className="tablet:px-10">
          <ProgressBar current={currAsk + 1} count={10} />
          {process !== 'confirmed' ? (
            <Spinner />
          ) : (
            <QuestAsk onNext={onNext} current={currAsk} data={currData} />
          )}
        </div>
      </QuestContainer>
    </>
  );
};
