import { ReactNode } from 'react';
import styled from 'styled-components';

const TableCellStyles = styled.div`
  padding: 8px 12px;

  box-sizing: border-box;

  &:nth-child(1) {
    text-align: center;
  }
`;

const TableCellBodyStyles = styled(TableCellStyles)`
  padding-top: ${({ theme }) => theme.unit.unitX4};
  padding-bottom: ${({ theme }) => theme.unit.unitX4};
`;

type TableCellProps = {
  children?: ReactNode;
  body?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function TableCell({
  children,
  body = false,
  ref,
  ...props
}: TableCellProps) {
  return (
    <>
      {body ? (
        <TableCellBodyStyles {...props}>{children}</TableCellBodyStyles>
      ) : (
        <TableCellStyles ref={ref} {...props}>
          {children}
        </TableCellStyles>
      )}
    </>
  );
}
