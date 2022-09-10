import styles from './progressBar.module.scss';
import './progressBar.module.scss';

export const ProgressBar = () => {
  return (
    <ul className="flex justify-center px-[10px] w-[550px] mx-auto h-[60px] reletive">
      <li className={styles.number}>1</li>
      <li className={styles.number}>2</li>
      <li active className={styles.number}>
        3
      </li>
      <li className={`${styles.number} active`}>7</li>
      <li className={styles.number}>7</li>
      <li className={styles.number}>7</li>
      <li className={styles.number}>8</li>
      <li className={styles.number}>9</li>
      <li className={styles.bigNum}>10</li>
    </ul>
  );
};
