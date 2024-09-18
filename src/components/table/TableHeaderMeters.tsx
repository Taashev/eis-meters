import styled from 'styled-components';
import { TableCell } from './TableCell';
import { TableItemMeterStyles } from './TableItemMeter';

const TableHeaderMetersStyles = styled.header`
  padding: 0 ${({ theme }) => `calc(${theme.unit.unitX1} * .5)`};

  color: ${({ theme }) => theme.light.colorText.secondary};

  font-size: 13px;
  font-weight: 500;

  line-height: 1.23;

  background: ${({ theme }) => theme.light.colorBackground.secondary};
`;

export function TableHeaderMeters() {
  return (
    <TableHeaderMetersStyles>
      <TableItemMeterStyles>
        <TableCell>№</TableCell>
        <TableCell>Тип</TableCell>
        <TableCell>Дата установки</TableCell>
        <TableCell>Автоматический</TableCell>
        <TableCell>Текущие показания</TableCell>
        <TableCell>Адрес</TableCell>
        <TableCell>Примечание</TableCell>
      </TableItemMeterStyles>
    </TableHeaderMetersStyles>
  );
}
