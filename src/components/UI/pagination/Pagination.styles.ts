import styled from 'styled-components';

export const PaginationListStyles = styled.ul`
  display: flex;

  gap: ${({ theme }) => theme.unit.unitX2};
  margin: 0;
  padding: 0;

  list-style: none;

  /* убираем полосу прокрутки */
  overflow: scroll;
  -ms-overflow-style: none; /* Для Internet Explorer и Edge */
  scrollbar-width: none; /* для Firefox */

  /* убираем полосу прокрутки для Webkit */
  &::-webkit-scrollbar {
    display: none;
  }
`;
