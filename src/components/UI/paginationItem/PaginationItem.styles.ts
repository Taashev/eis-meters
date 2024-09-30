import styled from 'styled-components';

interface PaginationButtonProps {
  selected: boolean;
}

export const PaginationItemStyles = styled.li``;

export const PaginationButtonStyles = styled.button<PaginationButtonProps>`
  padding: ${({ theme }) => theme.unit.unitX2}
    ${({ theme }) => theme.unit.unitX3};

  background: ${({ selected, theme }) =>
    selected
      ? theme.light.colorForeground.primary
      : theme.light.colorBackground.white};

  border: 1px solid #ced5de;
  border-radius: 6px;

  transition: 0.1s;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.primary};

    transition: 0.1s;

    cursor: pointer;
  }
`;
