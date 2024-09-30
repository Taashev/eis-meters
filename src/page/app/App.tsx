import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyle/GlobalStyle';
import { theme } from '../../styles/theme/theme';
import { MetersPage } from '../metersPage/MetersPage';
import { NotFoundPage } from '../notFoundPage/NotFoundPage';
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
