import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/header/Header';
import { ProgressBar } from '../components/progressBar/ProgressBar';
import { QuestAsk } from '../components/questAsk/QuestAsk';
import { QuestContainer } from '../components/questContainer/QuestContainer';
import { useQuestServices } from '../services/QuestServices';
import { useData } from '../hooks/useData';
import Spinner from '../components/UI/spinner/Spinner';

export const QuestJS = () => {
  const { data, setValues, status, setStep } = useData([]);
  const [currData, setCurrData] = useState([]);

  const [limit, setLimit] = useState(10);
  const [currAsk, setCurrAsk] = useState(0);
  const { process, setProcess, getJSQuestions } = useQuestServices();

  useEffect(() => {
    onRequest(limit);
  }, []);

  const onRequest = (limit) => {
    // getJSQuestions(limit).then((data) => {
    //   setValues(data);
    //   setProcess('confirmed');
    // });
    getJSQuestions(limit)
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
      <Header title="Question" timer="30:00" />
      <QuestContainer>
        <ProgressBar current={currAsk + 1} count={10} />
        {process !== 'confirmed' ? (
          <Spinner />
        ) : (
          <QuestAsk onNext={onNext} current={currAsk} data={currData} />
        )}
      </QuestContainer>
    </>
  );
};
