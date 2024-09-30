import { AddressIdsType } from '../types/address';
import { MeterItemResponseType } from '../types/meter';

export function parseAddressIds(
  meters: Array<MeterItemResponseType>
): AddressIdsType {
  const addressIds: AddressIdsType = [];

  for (let i = 0; i < meters.length; i++) {
    const addressId = meters[i].area.id;

    if (addressId) {
      addressIds.push(addressId);
    }
  }

  const uniqueAddressIds: AddressIdsType = Array.from(new Set(addressIds));

  return uniqueAddressIds;
}
