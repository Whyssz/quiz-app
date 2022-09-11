import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/header/Header';
import { ProgressBar } from '../components/progressBar/ProgressBar';
import { QuestAsk } from '../components/questAsk/QuestAsk';
import { QuestContainer } from '../components/questContainer/QuestContainer';
import { useQuestServices } from '../services/QuestServices';
import { MyButton } from '../components/UI/button/MyButton';
import { useData } from '../hooks/useData';
import Spinner from '../components/UI/spinner/Spinner';
import { Result } from 'postcss';

export const QuestJS = () => {
  const { data, setValues, status, setStep } = useData([]);

  const [limit, setLimit] = useState(10);
  const [currAsk, setCurrAsk] = useState(1);
  const { process, setProcess, clearError, getJSQuestions } =
    useQuestServices();

  useEffect(() => {
    onRequest(10);
  }, []);

  const onRequest = (limit) => {
    getJSQuestions(limit).then((data) => {
      setValues(data);
      setProcess('confirmed');
      console.log(data);
    });
  };
  const test = (value) => {
    setStep(value);
  };

  useEffect(() => {
    console.log(status);
  }, [status]);


  return (
    <>
      <Header title="Question" timer="30:00" />
      <QuestContainer>
        <ProgressBar current={currAsk} count={10} />
        {process !== 'confirmed' ? <Spinner /> : <QuestAsk />}
        <div className="mt-10">
          {currAsk === 10 ? (
            <MyButton>End</MyButton>
          ) : (
            <MyButton onClick={() => test(false)}>Next</MyButton>
          )}
        </div>
      </QuestContainer>
    </>
  );
};
