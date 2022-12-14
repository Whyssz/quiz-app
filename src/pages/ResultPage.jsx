import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useData } from '../hooks/useData';

import { QuestContainer } from '../components/questContainer/QuestContainer';

export const ResultPage = () => {
  const [load, setLoad] = useState(true);
  const [answers, setAnswers] = useState(0);
  const [wrongs, setWrongs] = useState([]);

  const { data, status } = useData();

  useEffect(() => {
    setLoad(!load);
    renderResult(data, status);
    checkHeight();
  }, []);

  const renderResult = (data, status) => {
    if (status.length < 10) {
      while (status.length !== 10) {
        status.push(false);
      }
    }

    status.forEach((value, i) => {
      if (value === 'true') {
        setAnswers((answ) => answ + 1);
      } else {
        setWrongs((wrong) => [...wrong, data[i].question]);
      }
    });
  };

  const checkHeight = () => {
    const elHeight = document.querySelector('.result-box')?.clientHeight;
    if (elHeight > 600 && window.innerWidth < 1000) {
      document.body.style.height = '100%';
    }
  };

  const wrongsList = wrongs.map((item) => (
    <li
      className="cursor-default w-full my-2 py-2 px-5 font-medium border-salty-100 rounded-2xl text-lg tablet:text-xl border-[1px]"
      key={item}
    >
      {item}
    </li>
  ));

  return (
    <CSSTransition in={!load} timeout={500} classNames="render">
      <div className="result-box">
        {data.length <= 0 ? (
          <h2 className="pt-20 font-bold text-3xl text-black">
            It's too early for that =)
            <Link
              className="block mt-5 font-medium text-blue-700 cursor-pointer"
              to="/"
            >
              Go home
            </Link>
          </h2>
        ) : wrongs.length === 0 ? (
          <div className="tablet:pt-10">
            <div
              className="py-3 tablet:py-10 px-4
       mx-auto relative bg-white tablet:px-[25px] tablet:pt-10 tablet:pb-10 tablet:rounded-3xl min-h-[100vh] tablet:min-h-[500px]"
            >
              <h2 className="mt-5 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7] cursor-pointer animate-bounce">
                <Link to="/">Result</Link>
              </h2>
              <h3 className="my-5 font-medium text-3xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7]">
                <span className="text-green-500">{answers}</span> / 10
              </h3>
              <h2 className="pt-10 font-bold text-3xl text-green-500">
                Good job, you did it without mistakes!
              </h2>
            </div>
          </div>
        ) : (
          <div className="tablet:pt-10">
            <div
              className="py-3 tablet:py-10 px-4
       mx-auto relative bg-white tablet:px-[25px] tablet:pt-10 tablet:pb-10 tablet:rounded-3xl min-h-[88.5vh] tablet:min-h-[500px]"
            >
              <h2 className="mt-5 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7] cursor-pointer animate-bounce">
                <Link to="/">Result</Link>
              </h2>
              <h3 className="my-5 font-medium text-3xl bg-clip-text bg-gradient-to-r from-[#3550dc] to-[#27e9f7]">
                <span className="text-green-500">{answers}</span> / 10
              </h3>
              <h4 className="w-full py-1 font-bold text-2xl">
                You answered incorrectly:
              </h4>
              <ul className=" py-3 px-5 flex flex-wrap justify-center items-center">
                {wrongsList}
              </ul>
            </div>
          </div>
        )}
      </div>
    </CSSTransition>
  );
};
