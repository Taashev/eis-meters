import { ContainerStyles } from './Container.styles';
import { ContainerProps } from './Container.types';

export function Container({
  children,
  as = 'div',
  size,
  ...props
}: ContainerProps) {
  return (
    <ContainerStyles size={size} as={as} {...props}>
      {children}
    </ContainerStyles>
  );
}
