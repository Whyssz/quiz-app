import styles from './Header.module.scss';

export const Header = ({ title, timer = '00:00' }) => {
  return (
    <div className="flex justify-between items-center px-6 pt-10 pb-[25px]">
      <h1 className="text-2xl text-white">{title}</h1>
      <div className={styles.timer}>{timer}</div>
    </div>
  );
};
