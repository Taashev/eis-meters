import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore должен использоваться в рамках провайдера');
  }

  return store;
};
