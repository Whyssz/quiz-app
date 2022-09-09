import { useForm } from 'react-hook-form';
import { MyButton } from '../UI/button/MyButton';

import styles from './TempleQuestion.module.scss';

const TempleQuest = ({ question = 'title', answers }) => {
  const { request, handleSubmit } = useForm();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{question}</h2>
      <form>
        <div className={styles.list}>
          <button>one</button>
          <button>
            one fdsjai f idsajifo jiodsajf isdiafioj disjfi dsjifaj
            idsfijaifjiodsajfio dsiojfidsjiioudfg uofhg duh
            uoghfduhgusifjgigifjdhs fgds hjgfdug ifdjgis jfdsiiugofdsigifdsigfio
            dsguoig jifdjsiojgiofdj godfhisghfd iosghiojhgierh g80i
            hfdsjgvheirwhviufdsh gr89fhrewugviu9sdfrhgu9rhe idsajifo jiodsajf
            isdiafioj disjfi dsjifaj idsfijaifjiodsajfio dsiojfidsjiioudfg uofhg
            duh uoghfduhgusifjgigifjdhs fgds hjgfdug ifdjgis
            jfdsiiugofdsigifdsigfio dsguoig jifdjsiojgiofdj godfhisghfd
            iosghiojhgierh g80i hfdsjgvheirwhviufdsh gr89fhrewugviu9sdfrhgu9rhe
            idsajifo jiodsajf isdiafioj disjfi dsjifaj idsfijaifjiodsajfio
            dsiojfidsjiioudfg uofhg duh uoghfduhgusifjgigifjdhs fgds hjgfdug
            ifdjgis jfdsiiugofdsigifdsigfio dsguoig jifdjsiojgiofdj godfhisghfd
            iosghiojhgierh g80i hfdsjgvheirwhviufdsh
            gr89fhrewugviu9sdfrhgu9rhenu
          </button>
          <button>one</button>
          <button>one</button>
        </div>
        <div className={styles.btn_wrap}>
          <MyButton className={styles.test}>Next</MyButton>
        </div>
      </form>
    </div>
  );
};

export default TempleQuest;
