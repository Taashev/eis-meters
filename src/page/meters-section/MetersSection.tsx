import { Pagination } from '../../components/pagination/Pagination';
import { TableMetersHeader } from '../../components/table-meters-header/TableMetersHeader';
import { TableMetersItem } from '../../components/table-meters-item/TableMetersItem';
import { Table } from '../../components/table/Table';
import { TableBody } from '../../components/table/TableBody';
import { TableFooter } from '../../components/table/TableFooter';
import { Title } from '../../components/title/Title';
import { MetersSectionStyles } from './MetersSection.styles';

export function MetersSection() {
  return (
    <MetersSectionStyles as="section" padding={4}>
      <Title>Список счетчиков</Title>
      <Table className="meters-table">
        <TableMetersHeader />
        <TableBody>
          {[
            {
              id: '526a0caae0e34c3e6dda9c81',
              _type: ['HotWaterAreaMeter', 'AreaMeter'],
              area: { id: '526237d4e0e34c524382c19b' },
              is_automatic: null,
              communication: '5b20f6a964c0360001ed0fa6',
              description: '410',
              serial_number: '',
              installation_date: '2011-01-01T00:00:00',
              brand_name: null,
              model_name: null,
              initial_values: [486.48],
            },
            {
              id: '526a0caae0e34c3e6dda9c81',
              _type: ['ColdWaterAreaMeter', 'AreaMeter'],
              area: { id: '526237d4e0e34c524382c19b' },
              is_automatic: null,
              communication: '5b20f6a964c0360001ed0fa6',
              description: '410',
              serial_number: '',
              installation_date: '2011-01-01T00:00:00',
              brand_name: null,
              model_name: null,
              initial_values: [486.48],
            },
          ].map((data, index) => {
            return (
              <TableMetersItem
                key={data.id}
                as="li"
                index={index + 1}
                data={data}
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
}
