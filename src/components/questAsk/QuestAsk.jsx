import styles from './questAsk.module.scss';

export const QuestAsk = ({ title = 'Smth title =)', questions = null }) => {
  console.log(title, questions);
  return (
    <ul className="flex flex-col">
      <li className="font-bold text-xl text-center my-3 px-1">{title}</li>
      <li className={styles.quest}>
        <button>1</button>
      </li>

      <li active className={styles.quest}>
        <button>
          fasdi jfgiodsjaio fidsjaiofj iojdfgsifdgiojdfiogiojfsdio jgoidd
          iogjfdiosj giodfosgj hoidf jgioj fsdioj gofdsouig odfiugh oifj
          giougdfiogij fdiogjoidf jgoidfg joifdsjg oijdfoisjgiofd
          jsgjfdiojgiojfdoisgjiosdfjgiofds io
        </button>
      </li>
      <li active className={styles.quest}>
        <button>
          fasdi jfgiodsjaio fidsjaiofj iojdfgsifdgiojdfiogiojfsdio jgoidd
          iogjfdiosj giodfosgj hoidf jgioj fsdioj gofdsouig odfiugh oifj
          giougdfiogij fdiogjoidf jgoidfg joifdsjg oijdfoisjgiofd
          jsgjfdiojgiojfdoisgjiosdfjgiofds io
        </button>
      </li>
      <li active className={styles.quest}>
        <button>
          fasdi jfgiodsjaio fidsjaiofj iojdfgsifdgiojdfiogiojfsdio jgoidd
          iogjfdiosj giodfosgj hoidf jgioj fsdioj gofdsouig odfiugh oifj
          giougdfiogij fdiogjoidf jgoidfg joifdsjg oijdfoisjgiofd
          jsgjfdiojgiojfdoisgjiosdfjgiofds io
        </button>
      </li>
      <li active className={styles.quest}>
        <button>
          fasdi jfgiodsjaio fidsjaiofj iojdfgsifdgiojdfiogiojfsdio jgoidd
          iogjfdiosj giodfosgj hoidf jgioj fsdioj gofdsouig odfiugh oifj
          giougdfiogij fdiogjoidf jgoidfg joifdsjg oijdfoisjgiofd
          jsgjfdiojgiojfdoisgjiosdfjgiofds io
        </button>
      </li>
    </ul>
  );
};
