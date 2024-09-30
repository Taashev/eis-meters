import styled from 'styled-components';
import { ReactComponent as Trash } from '../../../images/trash.svg';

const TrashIconStyles = styled(Trash)`
  width: 16px;
  height: 16px;

  color: #c53030;
`;

type TrashIconProps = {
  className?: string;
};

export function TrashIcon({ className, ...props }: TrashIconProps) {
  return <TrashIconStyles className={className} {...props} />;
}
