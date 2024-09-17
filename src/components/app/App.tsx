import { useEffect } from 'react';
import { getAddresses, getMeters } from '../../utils/api';
import { LIMIT, OFFSET } from '../../utils/constants';
import { formatAddressQuery } from '../../utils/formatAddressQuery';
import { parseAddressIds } from '../../utils/parseAddressIds';
import styles from './App.module.css';

function App() {
  async function handleGetMeters(offset: number, limit: number = LIMIT) {
    return await getMeters(offset, limit);
  }

  async function handleGetAddress(queryAddressIds: string) {
    return await getAddresses(queryAddressIds);
  }

  useEffect(() => {
    // handleGetMeters(OFFSET)
    //   .then((meters) => {
    //     const addressIds = parseAddressIds(meters.results);

    //     const queryAddressIds = formatAddressQuery(addressIds);

    //     return handleGetAddress(queryAddressIds);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return <div className={styles.app}></div>;
}

export default App;
