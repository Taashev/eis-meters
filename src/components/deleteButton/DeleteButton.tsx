import { DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { ReactComponent as Trash } from '../../images/trash.svg';
import { DeleteButtonStyles } from './DeleteButton.styles';

const TrashIconStyles = styled(Trash)`
  width: 16px;
  height: 16px;

  color: #c53030;
`;

type DeleteButtonProps = {
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function DeleteButton({
  onDelete,
  disabled = false,
  ...props
}: DeleteButtonProps) {
  return (
    <DeleteButtonStyles
      onClick={onDelete}
      disabled={disabled}
      {...props}
      aria-label="Удалить"
    >
      <TrashIconStyles />
    </DeleteButtonStyles>
  );
}
