import { useEffect } from 'react';
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useData } from '../../hooks/useData';
import { MyButton } from '../UI/button/MyButton';

import styles from './questAsk.module.scss';
import '../../styles/styles.scss';

export const QuestAsk = ({ current, onNext, data }) => {
  const { setStep } = useData();
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setTrigger(true);
  }, [current]);

  const onChoise = (value, correct, el) => {
    // I considered useRef, but it would not work correctly here
    setStep(value);
    setTrigger(!trigger);
    btnInteraction(el, correct);
  };

  const btnInteraction = (item, correct) => {
    const [...btns] = document.querySelectorAll('.question');

    btns.forEach((btn, i) => {
      if (btn === item.target) btn.classList.add('selected');
      btn.disabled = true;
      i === correct ? btn.classList.add('true') : btn.classList.add('false');
    });
  };

  const renderList = (data) => {
    const { answers, correct } = data;
    const res = Object.values(correct);
    const resCorr = res.indexOf('true');
    const ansList = Object.values(answers).filter((item) => item !== null);

    const list = ansList.map((item, index) => {
      return (
        <CSSTransition key={item} timeout={300} classNames="ask">
          <button
            tabIndex={0}
            onClick={(el) => onChoise(res[index], resCorr, el)}
            className={`${styles.quest} question`}
          >
            {item}
          </button>
        </CSSTransition>
      );
    });

    return (
      <ul className="flex flex-col">
        <TransitionGroup component={null}>{list}</TransitionGroup>
        <CSSTransition timeout={300} classNames="ask">
          <div className="mt-10">
            {current === 9 ? (
              <MyButton disabled={trigger}>End</MyButton>
            ) : (
              <MyButton disabled={trigger} onClick={() => onNext()}>
                Next
              </MyButton>
            )}
          </div>
        </CSSTransition>
      </ul>
    );
  };

  const result = renderList(data[current]);

  return (
    <>
      <h2 className="font-bold text-xl text-center my-3 px-1">
        {data[current].question}
      </h2>
      {result}
    </>
  );
};
