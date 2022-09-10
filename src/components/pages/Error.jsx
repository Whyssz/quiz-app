import { Link } from 'react-router-dom';
import err from '../../assets/img/error.gif';

export const Error = () => {
  document.body.style.overflow = 'hidden';
  return (
    <div className="bg-white p-5 mt-20 rounded-xl mx-auto max-w-2xl">
      <h1 className="font-bold text-2xl text-black my-4">
        Ups... Error... Please, check your URL links.
      </h1>
      <img className="mx-auto" src={err} alt="error" />
      <Link className="text-xl font-medium text-blue-500 cursor-pointer" to="/">
        Go to start
      </Link>
    </div>
  );
};
