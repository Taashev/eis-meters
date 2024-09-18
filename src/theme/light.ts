import { LightThemeType } from '../types/theme';
import { colors } from './colors';

export const light: LightThemeType = {
  colors,
  colorText: {
    primary: colors.black,
    secondary: colors.darkGray,
  },
  colorBackground: {
    primary: '#f8f9fa',
    secondary: '#f0f3f7',
    white: colors.white,
  },
  colorForeground: {
    primary: colors.gray,
    red: colors.red,
    darkRed: colors.darkRed,
    pink: colors.pink,
    darkPink: colors.darkPink,
  },
};
