import { DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { ReactComponent as Drop } from '../../images/drop.svg';
import { MeterType } from '../../types/meter';
import { getTypeMeter } from '../../utils/getTypeMeter';
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
  data: MeterType;
  index: number;
  as?: keyof JSX.IntrinsicElements; // Типизируем, чтобы передавать валидные HTML теги
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TableMetersItem({
  index,
  data,
  ref,
  ...props
}: TableItemProps) {
  const typeMeter = getTypeMeter(data._type);

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
      <TableCell body>{data.installation_date}</TableCell>
      <TableCell body>{data.is_automatic}</TableCell>
      <TableCell body>{data.initial_values[0]}</TableCell>
      <TableCell body>
        г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1
      </TableCell>
      <TableCell body>{data.description}</TableCell>
      <DeleteButton
        tabIndex={1}
        className="meter-button-delete"
        onDelete={() => {}}
      />
    </TableMetersItemStyles>
  );
}
