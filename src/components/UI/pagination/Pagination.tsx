import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../../../hooks/useStore';
import { PaginationItem } from '../pagination-item/PaginationItem';
import { PaginationListStyles } from './Pagination.styles';

type PaginationProps = {
  onPageClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Pagination = observer(function ({ onPageClick }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { metersPaginationStore } = useStore();

  const { displayedPageNumbers } = metersPaginationStore;

  useEffect(() => {
    const pageQueryParam = searchParams.get('page');

    if (pageQueryParam === '1') {
      setSearchParams((prev) => {
        prev.delete('page');
        return prev;
      });
    }

    metersPaginationStore.setCurrentPage(pageQueryParam);
  }, [searchParams]);

  return (
    <PaginationListStyles>
      {displayedPageNumbers.map((item) => {
        return (
          <PaginationItem key={item} id={String(item)} onClick={onPageClick}>
            {item}
          </PaginationItem>
        );
      })}
    </PaginationListStyles>
  );
});
