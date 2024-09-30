import { MeterItemResponseType, MeterType } from '../types/meter';
import { formatDate } from './formatDate';

function getValueIsAutomatic(value: boolean | null) {
  switch (value) {
    case false:
      return 'нет';
    case true:
      return 'да';
    default:
      return '-';
  }
}

export function getTypeMeter(type: Array<string>) {
  if (type.includes('ColdWaterAreaMeter')) {
    return 'ColdWaterAreaMeter';
  } else {
    return 'HotWaterAreaMeter';
  }
}

export function serializeMeter(meter: MeterItemResponseType): MeterType {
  const serializeMeter = {} as MeterType;

  serializeMeter.id = meter.id;
  serializeMeter._type = getTypeMeter(meter._type);
  serializeMeter.area = meter.area;
  serializeMeter.is_automatic = getValueIsAutomatic(meter.is_automatic);
  serializeMeter.communication = meter.communication;
  serializeMeter.description = meter.description;
  serializeMeter.serial_number = meter.serial_number;
  serializeMeter.installation_date = formatDate(meter.installation_date);
  serializeMeter.brand_name = meter.brand_name ?? '';
  serializeMeter.model_name = meter.model_name ?? '';
  serializeMeter.initial_values = Number(meter.initial_values[0].toFixed(4));

  return serializeMeter;
}

export function serializeMeters() {}
