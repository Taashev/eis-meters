import { ReactNode } from 'react';
import styled from 'styled-components';

const TableFooterStyles = styled.footer`
  display: flex;

  flex-direction: column;

  justify-content: end;

  padding: ${({ theme }) => theme.unit.unitX2}
    ${({ theme }) => theme.unit.unitX4};

  border-top: 1px solid #e0e5eb;

  box-sizing: border-box;

  .skeleton {
    display: flex;
    gap: 5px;
  }

  .skeleton__item {
    flex-shrink: 0;

    width: 33px;
    height: 33px;
  }
`;

type TableFooterProps = {
  children?: ReactNode;
};

export function TableFooter({ children }: TableFooterProps) {
  return <TableFooterStyles>{children}</TableFooterStyles>;
}
