import { cast, flow, Instance, types } from 'mobx-state-tree';
import { AddressIdsType, ResponseAddressType } from '../types/address';
import { apiGetAddressByIds } from '../utils/api';

export type AddressModelInstance = Instance<typeof AddressModel>;

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
    data: types.array(AddressModel),
  })
  .actions((self) => {
    const filterRequestAddressIds = (addressIds: AddressIdsType) => {
      const addressIdsStore = self.data.map((address) => address.id);

      return addressIds.filter((id) => !addressIdsStore.includes(id));
    };

    const formatQueryAddresses = (addressIds: AddressIdsType): string => {
      let queryAddressIds = '';

      if (addressIds.length) {
        queryAddressIds = 'id__in=' + addressIds.join('&id__in=');
      }

      return queryAddressIds;
    };

    const fetchGetAddress = flow(function* (addressIds: AddressIdsType) {
      const preparingAddressIds = filterRequestAddressIds(addressIds);

      if (preparingAddressIds.length === 0) {
        console.log('Нет новых ID для запроса адресов');
        return null;
      }

      const queryAddressIds = formatQueryAddresses(preparingAddressIds);

      try {
        const response: ResponseAddressType =
          yield apiGetAddressByIds(queryAddressIds);

        const addressesResponse = response.results.map((address) =>
          AddressModel.create(address)
        );

        const uniqueAddresses = new Set([...self.data, ...addressesResponse]);

        const addresses = Array.from(uniqueAddresses);

        self.data = cast(addresses);
      } catch (error) {
        throw new Error(`Ошибка при загрузке адресов: ${error}`);
      }
    });

    return { fetchGetAddress };
  });
