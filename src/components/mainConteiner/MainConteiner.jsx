import TempleQuest from '../templeQuest/TempleQuest';
import styles from './mainConteiner.module.scss';

export const MainConteiner = ({ children }) => {
  return <div className={styles.conteiner}>{children}</div>;
};
