import { createContext, useState } from 'react';

export const DataContex = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const setValues = (values) => {
    setData((prevDaata) => ({
      ...prevDaata,
      ...values,
    }));
  };

  return (
    <DataContex.Provider value={{ data, setValues }}>
      {children}
    </DataContex.Provider>
  );
};
