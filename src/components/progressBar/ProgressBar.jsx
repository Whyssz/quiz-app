import classNames from 'classnames';

import styles from './progressBar.module.scss';

export const ProgressBar = ({ current, count }) => {
  const list = (count) => {
    const tabs = [];
    for (let i = 1; i <= count; i++) {
      //mb will be need more func
      tabs.push({ id: i });
    }
    return (
      <ul className="flex justify-center px-[10px] w-[550px] mx-auto h-[60px] reletive">
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

  return <div>{render}</div>;

};
