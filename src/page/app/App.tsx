import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../components/global-style/GlobalStyle';
import { theme } from '../../theme/theme';
import { MetersPage } from '../meters-page/MetersPage';
import { NotFoundPage } from '../not-found-page/NotFoundPage';
import { AppStyles } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppStyles>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<MetersPage />} />
        </Routes>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
