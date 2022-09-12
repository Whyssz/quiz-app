import styles from './MyButton.module.scss';

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={`${styles.btn} btn`}>
      {children}
    </button>
  );
};
