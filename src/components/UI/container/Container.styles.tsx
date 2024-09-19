import styled from 'styled-components';
import { LARGE_WIDTH, MEDIUM_WIDTH, SMALL_WIDTH } from '../../../utils/constants';
import { ContainerProps } from './Container.types';

function getContainerWidth(size: string | undefined) {
  switch (size) {
    case 'small':
      return `${SMALL_WIDTH}px`;
    case 'medium':
      return `${MEDIUM_WIDTH}px`;
    case 'large':
      return `${LARGE_WIDTH}px`;
    default:
      return '100%';
  }
}

export const ContainerStyles = styled.div<ContainerProps>`
  display: flex;

  flex-direction: column;

  width: 100%;
  max-width: ${({ size }) => getContainerWidth(size)};

  margin: ${({ margin, theme }) => {
    if (typeof margin === 'string' && margin) {
      return theme.unit[margin]
        ? `calc(${theme.unit[margin]} * 4)`
        : (margin as string);
    }

    if (typeof margin === 'number' && margin) {
      return `calc(${theme.unit.unitX1} * ${margin})`;
    }

    return '0 auto';
  }};

  padding: ${({ padding, theme }) => {
    if (typeof padding === 'string' && padding) {
      return theme.unit[padding] ? `calc(${theme.unit[padding]} * 4)` : padding;
    }

    if (typeof padding === 'number' && padding) {
      return `calc(${theme.unit.unitX1} * ${padding})`;
    }

    return '0';
  }};

  box-sizing: border-box;
`;
