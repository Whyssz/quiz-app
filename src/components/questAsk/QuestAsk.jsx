import { useEffect } from 'react';
import { useData } from '../../hooks/useData';
import { useQuestServices } from '../../services/QuestServices';
import Spinner from '../UI/spinner/Spinner';
import styles from './questAsk.module.scss';

export const QuestAsk = () => {
  const { data, setValues } = useData();
  // const {process}
  const { process, setProcess, clearError, getJSQuestions } =
    useQuestServices();

  const onLi = (value) => console.log(value);

  const renderList = (data) => {
    return <div>{data[1].question}</div>;
    // const { question, answers, correct } = data;
    // const res = Object.values(correct);

    // const ansList = Object.values(answers);

    // const list = ansList.map((item, i) => (
    //   <li key={item} onClick={() => onLi(res[i])} className="test">
    //     {item}
    //   </li>
    // ));

    // return (
    //   <ul flex flex-col>
    //     <li className="font-bold text-xl text-center my-3 px-1">{question}</li>
    //     {ansList.map()}
    //   </ul>
    // );
  };

  const result = renderList(data);

  return (
    <ul className="flex flex-col">
      <li className="font-bold text-xl text-center my-3 px-1">question</li>
      {result}
      {/* <li className={styles.quest}>
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
      </li> */}
    </ul>
  );
};
