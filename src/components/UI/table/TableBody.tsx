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
`;

type TableBodyProps = {
  children?: ReactNode;
};

export function TableBody({ children }: TableBodyProps) {
  return <TableBodyStyles>{children}</TableBodyStyles>;
}
