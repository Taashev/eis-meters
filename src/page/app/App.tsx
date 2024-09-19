import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../components/global-style/GlobalStyle';
import { useStore } from '../../store/StoreContext';
import { theme } from '../../theme/theme';
import { OFFSET } from '../../utils/constants';
import { Main } from '../main/Main';
import { AppStyles } from './App.styles';

const App = observer(function () {
  const { metersStore } = useStore();

  metersStore.fetchGetMeters(OFFSET);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppStyles>
        <Main />
      </AppStyles>
    </ThemeProvider>
  );
});

export default App;
