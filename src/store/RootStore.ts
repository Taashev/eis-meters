import { types } from 'mobx-state-tree';
import { AddressesStore } from './AddressesStore';
import { MetersStore } from './MetersStore';

const RootStore = types.model({
  metersStore: MetersStore,
  addressesStore: AddressesStore,
});

export const rootStore = RootStore.create({
  metersStore: {
    data: null,
  },
  addressesStore: {
    data: null,
  },
});
