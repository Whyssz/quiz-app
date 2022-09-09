import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/UI/spinner/Spinner';

export const setContentUnic = (process, Component, newItemsLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading':
      return newItemsLoading ? <Component /> : <Spinner />;
    case 'error':
      return <ErrorMessage />;
    case 'confirmed':
      return <Component />;
    default:
      throw new Error('Unexpected process state');
  }
};
