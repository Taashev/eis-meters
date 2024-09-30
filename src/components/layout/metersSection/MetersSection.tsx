import { observer } from 'mobx-react-lite';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { TableMetersHeader } from '../../UI/tableMetersHeader/TableMetersHeader';
import { Title } from '../../../components/UI/title/Title';
import { useStore } from '../../../hooks/useStore';
import { Pagination } from '../../UI/pagination/Pagination';
import { TableMetersItem } from '../../UI/tableMetersItem/TableMetersItem';
import { Table } from '../../UI/table/Table';
import { TableBody } from '../../UI/table/TableBody';
import { TableFooter } from '../../UI/table/TableFooter';
import { MetersSectionStyles } from './MetersSection.styles';

export const MetersSection = observer(function MetersSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { metersStore, addressesStore, metersPaginationStore } = useStore();

  const { currentPageToString } = metersPaginationStore;

  const addressesMap = new Map(
    addressesStore.data.map((address) => [address.id, address])
  );

  async function handlerButtonPagination(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const buttonId = event.currentTarget.id;

    if (buttonId === currentPageToString) {
      return;
    }

    setSearchParams({ page: buttonId });
  }

  return (
    <MetersSectionStyles as="section" padding={4}>
      <Title>Список счетчиков</Title>
      <Table className="meters-table">
        <TableMetersHeader />
        <TableBody>
          {metersStore.loading === 'loading' ? (
            <Skeleton height={66} count={13} />
          ) : (
            metersStore.data.map((meter, index) => {
              const address = addressesMap.get(meter.area.id);

              return (
                address && (
                  <TableMetersItem
                    key={meter.id}
                    as="li"
                    index={index + 1}
                    meter={meter}
                    address={address}
                  />
                )
              );
            })
          )}
        </TableBody>
        <TableFooter>
          {metersStore.loading === 'loading' ? (
            <Skeleton
              count={40}
              containerClassName="skeleton"
              className="skeleton__item"
            />
          ) : (
            <Pagination onPageClick={handlerButtonPagination} />
          )}
        </TableFooter>
      </Table>
    </MetersSectionStyles>
  );
});
