import { DetailedHTMLProps } from 'react';
import { TrashIcon } from '../trashIcon/TrashIcon';
import { DeleteButtonStyles } from './DeleteButton.styles';

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
      <TrashIcon />
    </DeleteButtonStyles>
  );
}
