import { ReactNode } from 'react';
import styled from 'styled-components';

const TableBodyStyles = styled.ul`
  display: flex;

  flex-direction: column;
  flex-grow: 1;

  margin: 0;
  padding: 0;

  list-style: none;

  overflow-y: scroll;
  overflow-x: hidden;

  /* убираем полосу прокрутки */
  overflow: scroll;
  -ms-overflow-style: none; /* Для Internet Explorer и Edge */
  scrollbar-width: none; /* для Firefox */

  /* убираем полосу прокрутки для Webkit */
  &::-webkit-scrollbar {
    display: none;
  }
`;

type TableBodyProps = {
  children?: ReactNode;
};

export function TableBody({ children }: TableBodyProps) {
  return <TableBodyStyles>{children}</TableBodyStyles>;
}
