import styled from 'styled-components';
import { ContainerStyles } from '../../../components/UI/container/Container.styles';

export const MetersSectionStyles = styled(ContainerStyles)`
  flex-grow: 1;

  .meters-table {
    height: calc(100dvh - 80px);
    max-height: 944px;
  }
`;
