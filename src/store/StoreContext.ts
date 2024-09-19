import { Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { rootStore } from './RootStore';

export const StoreContext = createContext<Instance<typeof rootStore> | null>(
  null
);

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore должен использоваться в рамках провайдера');
  }

  return store;
};
