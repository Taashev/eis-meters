export function getTypeMeter(type: Array<string>) {
  if (type.includes('ColdWaterAreaMeter')) {
    return 'ColdWaterAreaMeter';
  } else {
    return 'HotWaterAreaMeter';
  }
}
