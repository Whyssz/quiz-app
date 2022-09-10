import { MyButton } from '../UI/button/MyButton';
import styles from './questAsk.module.scss';

export const QuestAsk = ({ title = 'Smth title =)' }) => {
  return (
    <ul className="flex flex-col">
      <li className="font-bold text-2xl text-center my-3 px-1">{title}</li>
      <li className={styles.quest}>
        <button>1</button>
      </li>
      <li className={styles.quest}>
        <button>
          fasdi jfgiodsjaio fidsjaiofj iojdfgsifdgiojdfiogiojfsdio jgoidd
          iogjfdiosj giodfosgj hoidf jgioj fsdioj gofdsouig odfiugh oifj
          giougdfiogij fdiogjoidf jgoidfg joifdsjg oijdfoisjgiofd
          jsgjfdiojgiojfdoisgjiosdfjgiofds io
        </button>
      </li>
      <li className="mt-20">
        <MyButton>Next</MyButton>
      </li>
    </ul>
  );
};
