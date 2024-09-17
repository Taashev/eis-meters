import { AddressIdsType } from '../types/address';

export function formatAddressQuery(addressIds: AddressIdsType): string {
  let queryAddressIds = '';

  if (addressIds.length) {
    queryAddressIds = 'id__in=' + addressIds.join('&id__in=');
  }

  return queryAddressIds;
}
