import classNames from 'classnames';

import styles from './progressBar.module.scss';

export const ProgressBar = ({ current, count }) => {
  const list = (count) => {
    const tabs = [];
    for (let i = 1; i <= count; i++) {
      //mb will be need more func
      tabs.push({ id: i });
    }

    if (current === 7) {
      document.querySelector('.test').scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth',
      });
    }
    return (
      <ul className="flex justify-center px-[10px] w-[570px] desktop:w-[550px] mx-auto h-[60px] reletive">
        {tabs.map(({ id }) => {
          const defStyle = id >= 10 ? styles.bigNum : styles.number;
          const classes = classNames(defStyle, {
            active: id === current,
            passed: id < current,
          });

          if (id > current) {
            return (
              <li disabled key={id} className={classes}>
                {id}
              </li>
            );
          }

          return (
            <li key={id} className={classes}>
              {id}
            </li>
          );
        })}
      </ul>
    );
  };

  const render = list(count);

  return (
    <div className="test overflow-x-auto scroll overflow-hidden">{render}</div>
  );
};
