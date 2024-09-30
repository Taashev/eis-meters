import { types } from 'mobx-state-tree';
import { LIMIT, OFFSET } from '../utils/constants';
import { AddressesStore } from './AddressesStore';
import { MetersStore } from './MetersStore';
import { PaginationStore } from './PaginationStore';

const RootStore = types.model({
  metersStore: MetersStore,
  addressesStore: AddressesStore,
  metersPaginationStore: PaginationStore,
});

export const rootStore = RootStore.create({
  metersStore: {
    data: [],
    loading: 'loading',
  },
  addressesStore: {
    data: [],
  },
  metersPaginationStore: {
    totalPages: 0,
    currentPage: 0,
    offset: 0,
    itemsPerPage: LIMIT,
    displayedPageNumbers: [],
  },
});
