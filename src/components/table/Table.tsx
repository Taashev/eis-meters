import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '../container/Container';

const TableStyles = styled(Container)`
  display: flex;

  flex-direction: column;

  max-height: 944px;

  background: ${({ theme }) => theme.light.colorBackground.white};

  border: 1px solid #e0e5eb;
  border-radius: 8px;
`;

type TableProps = {
  children?: ReactNode;
};

export function Table({ children }: TableProps) {
  return <TableStyles>{children}</TableStyles>;
}
