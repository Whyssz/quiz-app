import arrow from '../../assets/img/43.svg';
import { Link } from 'react-router-dom';
import { Timer } from '../timer/Timer';

export const Header = ({ title, timer }) => {
  return (
    <div className=" flex p-5 justify-between items-center tablet:px-6 tablet:pt-10 tablet:pb-[25px]">
      <Link
        className="text-3xl text-white before:absolute pl-10 cursor-pointer relative"
        to="/"
      >
        <img
          className="absolute top-[6%] left-[-1px] "
          width={35}
          src={arrow}
          alt="arrow"
        />
        {title}
      </Link>
      <Timer timer={timer} />
    </div>
  );
};
