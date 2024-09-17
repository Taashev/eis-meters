import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;

    margin: 0;

    background: ${(props) => props.theme.light.colorBackground.primary ?? '#f8f9fa'};

    color: ${(props) => props.theme.light.colorText.primary ?? '#1f2939'};

    font-family:
      'Roboto',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
