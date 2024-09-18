import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../components/global-style/GlobalStyle';
import { theme } from '../../theme/theme';
import { getAddresses, getMeters } from '../../utils/api';
import { LIMIT } from '../../utils/constants';
import { Main } from '../main/Main';
import { AppStyles } from './App.styles';

function App() {
  async function handleGetMeters(offset: number, limit: number = LIMIT) {
    return await getMeters(offset, limit);
  }

  async function handleGetAddress(queryAddressIds: string) {
    return await getAddresses(queryAddressIds);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyles>
        <Main />
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
