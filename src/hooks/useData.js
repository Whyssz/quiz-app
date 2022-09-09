import { useContext } from 'react';
import { DataContex } from '../context';

export const useData = () => useContext(DataContex);
