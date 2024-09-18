import { ReactNode } from 'react';
import styled from 'styled-components';

const TableFooterStyles = styled.footer`
  display: flex;

  justify-content: end;

  padding: ${({ theme }) => theme.unit.unitX2};

  border-top: 1px solid #e0e5eb;
`;

type TableFooterProps = {
  children?: ReactNode;
};

export function TableFooter({ children }: TableFooterProps) {
  return <TableFooterStyles>{children}</TableFooterStyles>;
}
