import { DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { ReactComponent as Drop } from '../../images/drop.svg';
import { MeterType } from '../../types/meter';
import { DeleteButton } from '../deleteButton/DeleteButton';
import { TableCell } from './TableCell';

export const TableItemMeterStyles = styled.div`
  display: grid;

  grid-template-columns:
    48px minmax(60px, 120px) minmax(110px, 160px) 128px 146px minmax(
      160px,
      430px
    )
    minmax(150px, 376px);

  align-items: center;

  border-bottom: 1px solid #e0e5eb;

  transition: 0.1s;

  position: relative;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.primary};

    transition: 0.1s;

    cursor: pointer;
  }

  button {
    opacity: 0;
  }
  &:hover button {
    opacity: 1;
  }

  .meter-type {
    display: flex;

    gap: ${({ theme }) => theme.unit.unitX2};
  }
`;

const DropIconStyles = styled(Drop)`
  width: 16px;
  height: 16px;

  color: #3698fa;
`;

type TableItemProps = {
  data: MeterType;
  index: number;
  as?: keyof JSX.IntrinsicElements; // Типизируем, чтобы передавать валидные HTML теги
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TableItemMeter({ index, data, ...props }: TableItemProps) {
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
            <DropIconStyles fill="#F46B4D" /> ДВС
          </>
        );
    }
  };

  function getArialLabelDescriptionMeter(type: string) {
    switch (type) {
      case 'ColdWaterAreaMeter':
        return 'Счетчик холодной воды';
      case 'HotWaterAreaMeter':
        return 'Счетчик горячей воды';
    }
  }

  function getTypeMeter(type: Array<string>) {
    if (type.includes('ColdWaterAreaMeter')) {
      return 'ColdWaterAreaMeter';
    } else {
      return 'HotWaterAreaMeter';
    }
  }

  return (
    <TableItemMeterStyles
      {...props}
      tabIndex={1}
      aria-label={getArialLabelDescriptionMeter(typeMeter)}
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
        onDelete={() => {}}
        style={{
          width: '40px',
          height: '40px',
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
        }}
      />
    </TableItemMeterStyles>
  );
}
