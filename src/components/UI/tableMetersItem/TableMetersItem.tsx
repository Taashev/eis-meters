import { observer } from 'mobx-react-lite';
import { DetailedHTMLProps } from 'react';
import { useStore } from '../../../hooks/useStore';
import { AddressModelInstance } from '../../../store/AddressesStore';
import { MeterModelInstance } from '../../../store/MetersStore';
import { parseAddressIds } from '../../../utils/parseAddressIds';
import { DeleteButton } from '../deleteButton/DeleteButton';
import { DropIcon } from '../dropIcon/DropIcon';
import { TableCell } from '../table/TableCell';
import { TableMetersItemStyles } from './TableMetersItem.styles';

type TableItemProps = {
  index: number;
  meter: MeterModelInstance;
  address: AddressModelInstance;
  as?: keyof JSX.IntrinsicElements; // Типизируем, чтобы передавать валидные HTML теги
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const TableMetersItem = observer(function ({
  index,
  meter,
  address,
  ref,
  ...props
}: TableItemProps) {
  const { metersStore, addressesStore, metersPaginationStore } = useStore();

  const getIcon = function (type: string) {
    switch (type) {
      case 'ColdWaterAreaMeter':
        return (
          <>
            <DropIcon /> ХВС
          </>
        );
      case 'HotWaterAreaMeter':
        return (
          <>
            <DropIcon className="hot" /> ДВС
          </>
        );
    }
  };

  async function handlerDeleteButton() {
    try {
      await metersStore.removeById(meter.id);

      const metersResponse = await metersStore.fetchGetMeters(
        metersPaginationStore.offset
      );

      const addressIds = parseAddressIds(metersResponse.results);

      await addressesStore.fetchGetAddress(addressIds);

      metersPaginationStore.setTotalPages(metersResponse.count);

      metersStore.updateMetersStore(metersResponse.results);
    } catch (error: any) {
      console.error(`Ошибка при удалении счетчика: ${error?.message}`);
    }
  }

  return (
    <TableMetersItemStyles {...props}>
      <TableCell body>{index}</TableCell>
      <TableCell className="meter-type" body>
        {getIcon(meter._type)}
      </TableCell>
      <TableCell body>{meter.installation_date}</TableCell>
      <TableCell body>{meter.is_automatic}</TableCell>
      <TableCell body>{meter.initial_values}</TableCell>
      <TableCell body>
        {address.house.address + `, ${address.str_number_full}`}
      </TableCell>
      <TableCell body>{meter.description}</TableCell>
      <DeleteButton
        className="meter-button-delete"
        onDelete={handlerDeleteButton}
      />
    </TableMetersItemStyles>
  );
});
