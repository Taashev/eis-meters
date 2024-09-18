import { ReactNode } from 'react';
import styled from 'styled-components';

const TitleStyles = styled.h1`
  margin: 0 0 ${({ theme }) => theme.unit.unitX4};

  font-size: 24px;
  font-weight: 500;

  line-height: 1.333;
`;

type TitleProps = {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Title({ children, as = 'h1', className }: TitleProps) {
  return (
    <TitleStyles as={as} className={className}>
      {children}
    </TitleStyles>
  );
}
