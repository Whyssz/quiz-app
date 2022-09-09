import { MainConteiner } from '../mainConteiner/MainConteiner';
import { ProgressBar } from '../progressBar/ProgressBar';
import TempleQuest from '../templeQuest/TempleQuest';

const AppRouter = () => {
  return (
    <MainConteiner>
      <ProgressBar />
      <TempleQuest />
    </MainConteiner>
  );
};

export default AppRouter;
