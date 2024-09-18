import styled from 'styled-components';
import { ContainerStyles } from '../../components/container/Container.styles';
import { MetersSection } from '../meters-section/MetersSection';

const MainStyles = styled(ContainerStyles)`
  flex-grow: 1;
`;

export function Main() {
  return (
    <MainStyles as="main">
      <MetersSection />
    </MainStyles>
  );
}
