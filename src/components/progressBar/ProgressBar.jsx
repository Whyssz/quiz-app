import styles from './progressBar.module.scss';

export const ProgressBar = ({ number = 10 }) => {
  return (
    <nav className="pt-10">
      <ul className="flex">
        <li className={styles.circle}>1</li>
        <li className={styles.circle}>2</li>
        <li className={styles.circle}>3</li>
        <li className={styles.circle}>4</li>
        <li className={styles.circle}>5</li>
      </ul>
    </nav>
  );
};
