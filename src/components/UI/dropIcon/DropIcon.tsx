import styled from 'styled-components';
import { ReactComponent as Drop } from '../../../images/drop.svg';

const DropIconStyles = styled(Drop)`
  width: 16px;
  height: 16px;

  color: #3698fa;

  &.hot {
    color: #f46b4d;
  }
`;

type DropIconProps = {
  className?: string;
};

export function DropIcon({ className, ...props }: DropIconProps) {
  return <DropIconStyles className={className} {...props} />;
}
