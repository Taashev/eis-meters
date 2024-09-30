import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerStyles } from '../../components/UI/container/Container.styles';

const NotFoundPageStyles = styled(ContainerStyles)`
  flex-grow: 1;

  justify-content: center;
  align-items: center;
`;

const StatusCodeStyles = styled.div`
  font-size: calc(${({ theme }) => theme.unit.unitX1} * 14);
  font-weight: 600;
`;

const TextStyles = styled.div`
  font-size: calc(${({ theme }) => theme.unit.unitX1} * 6);

  margin-bottom: calc(${({ theme }) => theme.unit.unitX1} * 5);
`;

export function NotFoundPage() {
  return (
    <NotFoundPageStyles>
      <StatusCodeStyles>404</StatusCodeStyles>
      <TextStyles>Страница не найдена</TextStyles>
      <Link to="/">На главную</Link>
    </NotFoundPageStyles>
  );
}
