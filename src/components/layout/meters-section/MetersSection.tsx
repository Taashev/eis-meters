import { observer } from 'mobx-react-lite';
import { TableMetersHeader } from '../../../components/UI/table-meters-header/TableMetersHeader';
import { Title } from '../../../components/UI/title/Title';
import { useStore } from '../../../store/StoreContext';
import { Pagination } from '../../UI/pagination/Pagination';
import { TableMetersItem } from '../../UI/table-meters-item/TableMetersItem';
import { Table } from '../../UI/table/Table';
import { TableBody } from '../../UI/table/TableBody';
import { TableFooter } from '../../UI/table/TableFooter';
import { MetersSectionStyles } from './MetersSection.styles';

export const MetersSection = observer(function MetersSection() {
  const { metersStore } = useStore();

  return (
    <MetersSectionStyles as="section" padding={4}>
      <Title>Список счетчиков</Title>
      <Table className="meters-table">
        <TableMetersHeader />
        <TableBody>
          {metersStore.data &&
            metersStore.data.map((meter, index) => {
              return (
                <TableMetersItem
                  key={meter.id}
                  as="li"
                  index={index + 1}
                  meter={meter}
                />
              );
            })}
        </TableBody>
        <TableFooter>
          <Pagination />
        </TableFooter>
      </Table>
    </MetersSectionStyles>
  );
});
