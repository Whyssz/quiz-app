import { QuestContainer } from '../components/questContainer/QuestContainer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import js from '../assets/img/js1.jpg';
import devops from '../assets/img/devops.jpg';
import html from '../assets/img/html.jpg';

export const StartPage = () => {
  const [start, setStart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <CSSTransition in={start} timeout={500} classNames="render">
      <div className="pt-40">
        <QuestContainer>
          <h1 className="mt-5 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7]">
            Quiz App
          </h1>
          <ul className="my-10 p-5 grid grid-cols-3 grid-rows-1 justify-center items-center h-[300px] gap-7">
            <li
              className="relative h-full w-w-full cursor-pointer transition-all hover:brightness-[170%]"
              onClick={() => {
                navigate('/js');
              }}
            >
              <h3 className="absolute font-bold text-white text-5xl top-[100px] left-[50%] translate-x-[-50%] z-[3]">
                JavaScript
              </h3>
              <h4 className="absolute font-medium text-xl text-slate-200 top-[160px] left-[50%] translate-x-[-50%] z-[3]">
                10 questions
              </h4>
              <img
                className="absolute brightness-[30%] z-[1] top-0 bottom-0 left-0 right-0 h-full object-cover w-full rounded"
                src={js}
                alt="Question JS"
              />
            </li>
            <li
              className="relative h-full w-w-full cursor-pointer transition-all hover:brightness-[170%]"
              onClick={() => {
                navigate('/html');
              }}
            >
              <h3 className="absolute font-bold text-white text-5xl top-[100px] left-[50%] translate-x-[-50%] z-[3]">
                HTML
              </h3>
              <h4 className="absolute font-medium text-xl text-slate-200 top-[160px] left-[50%] translate-x-[-50%] z-[3]">
                10 questions
              </h4>
              <img
                className="absolute brightness-[30%] rounded z-[1] top-0 bottom-0 left-0 right-0 h-full object-cover w-full"
                src={html}
                alt="Question HTML"
              />
            </li>
            <li
              className="relative h-full w-w-full cursor-pointer  transition-all hover:brightness-[170%]"
              onClick={() => {
                navigate('/dev-ops');
              }}
            >
              <h3 className="absolute font-bold text-white text-5xl top-[100px] left-[50%] translate-x-[-50%] z-[3]">
                DevOps
              </h3>
              <h4 className="absolute font-medium text-xl text-slate-200 top-[160px] left-[50%] translate-x-[-50%] z-[3]">
                10 questions
              </h4>
              <img
                className="absolute brightness-[30%] rounded z-[1] top-0 bottom-0 left-0 right-0 h-full object-cover w-full"
                src={devops}
                alt="Question DevOps"
              />
            </li>
          </ul>
        </QuestContainer>
      </div>
    </CSSTransition>
  );
};
