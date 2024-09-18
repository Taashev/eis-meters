import styled from 'styled-components';
import { Container } from '../../components/container/Container';
import { Table } from '../../components/table/Table';
import { TableBody } from '../../components/table/TableBody';
import { TableFooter } from '../../components/table/TableFooter';
import { TableHeaderMeters } from '../../components/table/TableHeaderMeters';
import { TableItemMeter } from '../../components/table/TableItemMeter';
import { Title } from '../../components/title/Title';

const PaginationContainer = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.unit.unitX2};
`;

const PaginationButton = styled.button`
  padding: ${({ theme }) => theme.unit.unitX2}
    ${({ theme }) => theme.unit.unitX3};

  background: #fff;

  border: 1px solid #ced5de;
  border-radius: 6px;

  transition: 0.1s;

  &:hover {
    background: ${({ theme }) => theme.light.colorForeground.primary};

    transition: 0.1s;

    cursor: pointer;
  }
`;

export function Main() {
  return (
    <Container as="main" style={{ flexGrow: 1 }}>
      <Container as="section" padding={4} style={{ flexGrow: 1 }}>
        <Title>Список счетчиков</Title>
        <Table>
          <TableHeaderMeters />
          <TableBody>
            {new Array(20)
              .fill({
                id: '526a0caae0e34c3e6dda9ba8',
                _type: ['HotWaterAreaMeter', 'AreaMeter'],
                area: { id: '526237d3e0e34c524382c12c' },
                is_automatic: null,
                communication: '5b20f6bb64c0360001ed10b2',
                description: '66',
                serial_number: '',
                installation_date: '2010-05-01T00:00:00',
                brand_name: null,
                model_name: null,
                initial_values: [333467.6636],
              })
              .map((data, index) => {
                return (
                  <TableItemMeter
                    key={data.id}
                    as="li"
                    index={index + 1}
                    data={data}
                  />
                );
              })}
          </TableBody>
          <TableFooter>
            <PaginationContainer>
              <PaginationButton>1</PaginationButton>
              <PaginationButton>2</PaginationButton>
            </PaginationContainer>
          </TableFooter>
        </Table>
      </Container>
    </Container>
  );
}
