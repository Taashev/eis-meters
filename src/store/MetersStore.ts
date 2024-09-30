import { cast, flow, Instance, types } from 'mobx-state-tree';
import { MeterItemResponseType, MetersApiResponseType } from '../types/meter';
import { apiDeleteMeters, apiGetMeters } from '../utils/api';
import { LIMIT } from '../utils/constants';
import { serializeMeter } from '../utils/serialize-meter';

export type MeterModelInstance = Instance<typeof MeterModel>;

// Описание модели
export const MeterModel = types.model({
  id: types.string,
  _type: types.string,
  area: types.model({
    id: types.string,
  }),
  is_automatic: types.string,
  communication: types.string,
  description: types.string,
  serial_number: types.string,
  installation_date: types.string,
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.number,
});

export const MetersStore = types
  .model({
    loading: types.optional(
      types.enumeration('Loading', ['loading', 'success', 'error']),
      'loading'
    ),
    data: types.array(MeterModel),
  })
  .actions((self) => {
    function setLoading(state: 'loading' | 'success' | 'error') {
      self.loading = state;
    }

    const fetchGetMeters = flow(function* (
      offset: number,
      limit: number = LIMIT
    ) {
      try {
        const response: MetersApiResponseType = yield apiGetMeters(
          offset,
          limit
        );

        return response;
      } catch (error) {
        throw new Error(`Ошибка загрузки счетчиков: ${error}`);
      }
    });

    function updateMetersStore(metersResponse: Array<MeterItemResponseType>) {
      const serializeMeters = metersResponse.map((meterResponse) => {
        const meter = serializeMeter(meterResponse);

        return MeterModel.create(meter);
      });

      self.data = cast(serializeMeters);
    }

    const removeById = flow(function* (id: string) {
      try {
        yield apiDeleteMeters(id);
      } catch (error) {
        console.error(`Не удалось удалить счетчик: ${error}`);
      }
    });

    return {
      fetchGetMeters,
      updateMetersStore,
      removeById,
      setLoading,
    };
  });
