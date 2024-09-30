import { Instance } from 'mobx-state-tree';
import { createContext } from 'react';
import { rootStore } from '../store/RootStore';

export const StoreContext = createContext<Instance<typeof rootStore> | null>(
  null
);
