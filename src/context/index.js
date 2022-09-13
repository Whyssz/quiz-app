import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([
  ]);

  const clearData = () => {
    setData([]);
    setStatus([]);
  };

  const setStep = (value) => {
    setStatus((prevStatus) => [...prevStatus, value]);
  };

  const setValues = (value) => {
    setData([...value]);
  };

  return (
    <DataContext.Provider
      value={{ data, setValues, status, setStep, clearData }}
    >
      {children}
    </DataContext.Provider>
  );
};
