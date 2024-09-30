import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import styled from 'styled-components';
import { MetersSection } from '../../components/layout/metersSection/MetersSection';
import { ContainerStyles } from '../../components/UI/container/Container.styles';
import { useStore } from '../../hooks/useStore';
import { parseAddressIds } from '../../utils/parseAddressIds';

const MetersPageStyles = styled(ContainerStyles)`
  flex-grow: 1;
`;

export const MetersPage = observer(function () {
  const { metersPaginationStore, metersStore, addressesStore } = useStore();

  useEffect(() => {
    metersStore
      .fetchGetMeters(metersPaginationStore.offset)
      .then((response) => {
        const addressesIds = parseAddressIds(response.results);

        addressesStore.fetchGetAddress(addressesIds);

        return response;
      })
      .then((response) => {
        metersStore.updateMetersStore(response.results);
        metersPaginationStore.setTotalPages(response.count);
        metersPaginationStore.setDisplayedPageNumbers(1);

        metersStore.setLoading('success');
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [metersPaginationStore.offset]);

  return (
    <MetersPageStyles as="main">
      <MetersSection />
    </MetersPageStyles>
  );
});
