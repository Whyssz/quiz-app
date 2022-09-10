import { Header } from '../header/Header';
import { ProgressBar } from '../progressBar/ProgressBar';
import { QuestAsk } from '../questAsk/QuestAsk';
import { QuestContainer } from '../questContainer/QuestContainer';

export const QuestJS = () => {
  return (
    <>
      <Header title="Question" timer="30:00" />
      <QuestContainer>
        <ProgressBar />
        <QuestAsk />
      </QuestContainer>
    </>
  );
};
