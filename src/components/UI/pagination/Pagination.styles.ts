import styled from 'styled-components';

export const PaginationStyles = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.unit.unitX2};
`;

export const PaginationButtonStyles = styled.button`
  padding: ${({ theme }) => theme.unit.unitX2}
    ${({ theme }) => theme.unit.unitX3};

  background: #fff;

  border: 1px solid #ced5de;
  border-radius: 6px;

  transition: 0.1s;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.primary};

    transition: 0.1s;

    cursor: pointer;
  }
`;
