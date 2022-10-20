import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import styles from './timer.module.scss';

export const Timer = ({ timer }) => {
  const [time, setTime] = useState(timer.minutes * 60);
  const endTimer = useNavigate();

  const { data } = useData();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);

    if (time === 0) {
      endTimer('/result');
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, data]);

  const minutes = addZero(Math.floor(time / 60));
  const seconds = addZero(time - minutes * 60);

  function addZero(num) {
    if (num > 10) return num;
    return num.toString().padStart(2, '0');
  }

  return (
    <div className={styles.timer}>
      {minutes} : {seconds}
    </div>
  );
};
