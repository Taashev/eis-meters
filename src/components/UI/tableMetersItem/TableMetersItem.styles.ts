import styled from 'styled-components';

export const TableMetersItemTemplateStyles = styled.div`
  display: grid;

  grid-template-columns:
    48px minmax(60px, 120px) minmax(110px, 160px) 128px 146px minmax(
      160px,
      430px
    )
    minmax(150px, 376px);

  align-items: center;

  box-sizing: border-box;
`;

export const TableMetersItemStyles = styled(TableMetersItemTemplateStyles)`
  border-bottom: 1px solid #e0e5eb;

  transition: 0.1s;

  position: relative;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.primary};

    transition: 0.1s;

    cursor: pointer;
  }

  .meter-type {
    display: flex;

    gap: ${({ theme }) => theme.unit.unitX2};
  }

  .meter-button-delete {
    width: 40px;
    height: 40px;

    position: absolute;
    top: 50%;
    right: 20px;

    transform: translateY(-50%);

    opacity: 0;
  }
  &:hover .meter-button-delete {
    opacity: 1;
  }
`;
