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
};

export function Title({ children }: TitleProps) {
  return <TitleStyles>{children}</TitleStyles>;
}
