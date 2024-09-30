import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import { useStore } from '../../../hooks/useStore';
import {
  PaginationButtonStyles,
  PaginationItemStyles,
} from './PaginationItem.styles';

type PaginationItemProps = {
  children: ReactNode;
  id?: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const PaginationItem = observer(function ({
  children,
  id,
  onClick,
}: PaginationItemProps) {
  const { metersPaginationStore } = useStore();

  let isSelected = metersPaginationStore.currentPageToString === id;

  return (
    <PaginationItemStyles>
      <PaginationButtonStyles id={id} selected={isSelected} onClick={onClick}>
        {children}
      </PaginationButtonStyles>
    </PaginationItemStyles>
  );
});
