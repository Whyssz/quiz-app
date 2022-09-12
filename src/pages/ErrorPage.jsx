import { Link } from 'react-router-dom';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';

export const ErrorPage = () => {
  document.body.style.overflow = 'hidden';
  return (
    <div className="bg-white p-5 mt-20 rounded-xl mx-auto max-w-2xl">
      <h1 className="font-bold text-2xl text-black my-4">
        Ups... Error... Please, check your URL links.
      </h1>
      <ErrorMessage />
      <Link className="text-xl font-medium text-blue-500 cursor-pointer" to="/">
        Go home
      </Link>
    </div>
  );
};
