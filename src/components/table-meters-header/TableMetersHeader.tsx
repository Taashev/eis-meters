import { TableCell } from '../table/TableCell';
import { TableMetersHeaderStyles } from './TabelMetersHeader.styles';

export function TableMetersHeader() {
  return (
    <TableMetersHeaderStyles as="header">
      <TableCell>№</TableCell>
      <TableCell>Тип</TableCell>
      <TableCell>Дата установки</TableCell>
      <TableCell>Автоматический</TableCell>
      <TableCell>Текущие показания</TableCell>
      <TableCell>Адрес</TableCell>
      <TableCell>Примечание</TableCell>
    </TableMetersHeaderStyles>
  );
}
