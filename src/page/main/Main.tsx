import styled from 'styled-components';
import { MetersSection } from '../../components/layout/meters-section/MetersSection';
import { ContainerStyles } from '../../components/UI/container/Container.styles';

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
