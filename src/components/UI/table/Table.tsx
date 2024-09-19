import { ReactNode } from 'react';
import styled from 'styled-components';
import { ContainerStyles } from '../container/Container.styles';

const TableStyles = styled(ContainerStyles)`
  background: ${({ theme }) => theme.light.colorBackground.white};

  border: 1px solid #e0e5eb;
  border-radius: 8px;
`;

type TableProps = {
  children?: ReactNode;
  className?: string;
};

export function Table({ children, className }: TableProps) {
  return <TableStyles className={className}>{children}</TableStyles>;
}
