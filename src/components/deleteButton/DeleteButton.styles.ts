import styled from 'styled-components';

export const DeleteButtonStyles = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;

  background: ${({ theme }) => theme.light.colorForeground.pink};

  border: none;
  border-radius: 8px;

  box-sizing: border-box;

  transition: 0.1s;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.darkPink};

    transition: 0.1s;

    cursor: pointer;
  }
  &:hover svg {
    color: #9b2c2c;
  }

  &:active {
    background: #f2f5f8;
  }
  &:active svg {
    color: #9da6b4;
  }

  &:disabled {
    background: #f2f5f8;
  }
  &:disabled svg {
    color: #9da6b4;
  }
`;
