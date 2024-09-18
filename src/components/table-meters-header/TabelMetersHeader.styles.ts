import styled from 'styled-components';
import { TableMetersItemTemplateStyles } from '../table-meters-item/TableMetersItem.styles';

export const TableMetersHeaderStyles = styled(TableMetersItemTemplateStyles)`
  padding: 0 ${({ theme }) => `calc(${theme.unit.unitX1} * .5)`};

  color: ${({ theme }) => theme.light.colorText.secondary};

  font-size: 13px;
  font-weight: 500;

  line-height: 1.23;

  background: ${({ theme }) => theme.light.colorBackground.secondary};
`;
