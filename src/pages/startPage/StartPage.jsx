import { QuestContainer } from '../../components/questContainer/QuestContainer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import js from '../../assets/img/js1.jpg';
import devops from '../../assets/img/devops.jpg';
import html from '../../assets/img/html.jpg';
import { useData } from '../../hooks/useData';

import styles from './startPage.module.scss';

export const StartPage = () => {
  const [start, setStart] = useState(false);
  const navigate = useNavigate();

  const { clearData } = useData();

  useEffect(() => {
    setStart(true);
    clearData();
  }, []);

  const classes = window.screen.width < 600 ? 'ask' : 'render';

  return (
    <CSSTransition in={start} timeout={500} classNames={classes}>
      <div className="tablet:py-10 desktop:py-40">
        <QuestContainer>
          <h1 className={styles.title}>Quiz App</h1>
          <ul className={styles.items_wrapper}>
            <li
              className={styles.item}
              onClick={() => {
                navigate('/js');
              }}
            >
              <h3 className={styles.item_title}>JavaScript</h3>
              <h4 className={styles.item_count}>10 questions</h4>
              <img className={styles.item_bg} src={js} alt="Question JS" />
            </li>
            <li
              className={styles.item}
              onClick={() => {
                navigate('/html');
              }}
            >
              <h3 className={styles.item_title}>Html</h3>
              <h4 className={styles.item_count}>10 questions</h4>
              <img className={styles.item_bg} src={html} alt="Question HTML" />
            </li>
            <li
              className={styles.item}
              onClick={() => {
                navigate('/devops');
              }}
            >
              <h3 className={styles.item_title}>DevOps</h3>
              <h4 className={styles.item_count}>10 questions</h4>
              <img
                className={styles.item_bg}
                src={devops}
                alt="Question DevOps"
              />
            </li>
          </ul>
        </QuestContainer>
      </div>
    </CSSTransition>
  );
};
