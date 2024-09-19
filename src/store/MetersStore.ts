import { cast, flow, Instance, types } from 'mobx-state-tree';
import { ResponseMeterType } from '../types/meter';
import { deleteMeters, getMeters } from '../utils/api';
import { LIMIT } from '../utils/constants';

export type MeterModelInstance = Instance<typeof MeterModel>;

// Описание модели
export const MeterModel = types.model({
  id: types.string,
  _type: types.array(types.string),
  area: types.model({
    id: types.string,
  }),
  is_automatic: types.maybeNull(types.boolean),
  communication: types.string,
  description: types.maybeNull(types.string),
  serial_number: types.string,
  installation_date: types.string,
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.array(types.number),
});

export const MetersStore = types
  .model({
    data: types.maybeNull(types.array(MeterModel)),
  })
  .actions((self) => ({
    fetchGetMeters: flow(function* (offset: number, limit: number = LIMIT) {
      try {
        const response: ResponseMeterType = yield getMeters(offset, limit);
        const meters = response.results.map((meter) =>
          MeterModel.create(meter)
        );
        self.data = cast(meters);
      } catch (error) {
        throw new Error(`Ошибка загрузки счетчиков: ${error}`);
      }
    }),
    removeById: flow(function* (id: string) {
      try {
        yield deleteMeters(id);
      } catch (error) {
        console.error(`Не удалось удалить счетчик: ${error}`);
      }
    }),
  }));
