import { observer } from 'mobx-react-lite';
import { DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { ReactComponent as Drop } from '../../../images/drop.svg';
import { MeterModelInstance } from '../../../store/MetersStore';
import { useStore } from '../../../store/StoreContext';
import { getTypeMeter } from '../../../utils/getTypeMeter';
import { DeleteButton } from '../deleteButton/DeleteButton';
import { TableCell } from '../table/TableCell';
import { TableMetersItemStyles } from './TableMetersItem.styles';

const DropIconStyles = styled(Drop)`
  width: 16px;
  height: 16px;

  color: #3698fa;

  &.hot {
    color: #f46b4d;
  }
`;

type TableItemProps = {
  meter: MeterModelInstance;
  index: number;
  as?: keyof JSX.IntrinsicElements; // Типизируем, чтобы передавать валидные HTML теги
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const TableMetersItem = observer(function ({
  index,
  meter,
  ref,
  ...props
}: TableItemProps) {
  const { metersStore } = useStore();

  const typeMeter = getTypeMeter(meter._type);

  const getIcon = function (type: string) {
    switch (type) {
      case 'ColdWaterAreaMeter':
        return (
          <>
            <DropIconStyles /> ХВС
          </>
        );
      case 'HotWaterAreaMeter':
        return (
          <>
            <DropIconStyles className="hot" /> ДВС
          </>
        );
    }
  };

  function getArialLabelMeterDescription(type: string) {
    switch (type) {
      case 'ColdWaterAreaMeter':
        return 'Счетчик холодной воды';
      case 'HotWaterAreaMeter':
        return 'Счетчик горячей воды';
    }
  }

  function getValueIsAutomatic(value: boolean | null) {
    switch (value) {
      case false:
        return 'нет';
      case true:
        return 'да';
      default:
        return '';
    }
  }

  async function handlerDeleteButton() {
    try {
      await metersStore.removeById(meter.id);
      await metersStore.fetchGetMeters(19);
    } catch (error) {
      throw new Error('Ошибка при удалении счетчика');
    }
  }

  return (
    <TableMetersItemStyles
      tabIndex={1}
      aria-label={getArialLabelMeterDescription(typeMeter)}
      {...props}
    >
      <TableCell body>{index}</TableCell>
      <TableCell className="meter-type" body>
        {getIcon(typeMeter)}
      </TableCell>
      <TableCell body>{meter.installation_date}</TableCell>
      <TableCell body>{getValueIsAutomatic(meter.is_automatic)}</TableCell>
      <TableCell body>{meter.initial_values[0]}</TableCell>
      <TableCell body>
        г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1
      </TableCell>
      <TableCell body>{meter.description}</TableCell>
      <DeleteButton
        tabIndex={1}
        className="meter-button-delete"
        onDelete={handlerDeleteButton}
      />
    </TableMetersItemStyles>
  );
});
