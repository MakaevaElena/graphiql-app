import { useContext } from 'react';
import { DataContext } from './DataContext';

export const useDataContext = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error(
      "Can not use 'useDataContext' outside of the 'DataContextProvider'"
    );
  }

  return data;
};
