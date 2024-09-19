import { flow, types } from 'mobx-state-tree';
import { getAddresses } from '../utils/api';

export const AddressModel = types.model({
  id: types.string,
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
  house: types.model({
    id: types.string,
    address: types.string,
    fias_addrobjs: types.array(types.string),
  }),
});

export const AddressesStore = types
  .model({
    data: types.maybeNull(types.array(AddressModel)),
  })
  .actions((self) => ({
    handleGetAddress: flow(function* (queryAddressIds: string) {
      try {
        yield getAddresses(queryAddressIds);
      } catch (error) {
        throw new Error(`Ошибка при загрузке адресов: ${error}`);
      }
    }),
  }));
