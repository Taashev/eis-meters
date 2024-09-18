import styled from 'styled-components';

export const AppStyles = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth}px;
  min-width: ${({ theme }) => theme.minWidth}px;
  height: 100%;

  margin: 0 auto;
`;
