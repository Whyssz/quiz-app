import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/header/Header';
import { ProgressBar } from '../components/progressBar/ProgressBar';
import { QuestAsk } from '../components/questAsk/QuestAsk';
import { QuestContainer } from '../components/questContainer/QuestContainer';
import { useQuestServices } from '../services/QuestServices';
import { MyButton } from '../components/UI/button/MyButton';

export const QuestJS = () => {
  const [limit, setLimit] = useState(10);
  const [currAsk, setCurrAsk] = useState(1);
  const { process, setProcess, clearError, getJSQuestions } =
    useQuestServices();

  // useEffect(() => {
  //   onRequest(limit);
  // }, []);

  // const onRequest = (limit) => {
  //   getJSQuestions(limit)
  //     .then((data) => console.log(data))
  //     .then(setProcess('confirmed'));
  // };

  return (
    <>
      <Header title="Question" timer="30:00" />
      <QuestContainer>
        <ProgressBar current={currAsk} count={10} />
        <QuestAsk />
        <div className="mt-10">
          {currAsk === 10 ? (
            <MyButton>End</MyButton>
          ) : (
            <MyButton>Next</MyButton>
          )}
        </div>
      </QuestContainer>
    </>
  );
};
