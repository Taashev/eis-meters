import { AddressIdsType } from '../types/address';
import { MeterType } from '../types/meter';

export function parseAddressIds(meters: Array<MeterType>): AddressIdsType {
  const addressIds = meters.map((meter) => {
    return meter.area.id;
  });

  const uniqueAddressIds = Array.from(new Set(addressIds));

  return uniqueAddressIds;
}
