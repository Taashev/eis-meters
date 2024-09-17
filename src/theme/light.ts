import { ThemeType } from '../types/theme';
import { colors } from './colors';
import { unit } from './unit';

export const light: ThemeType = {
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
  unit,
};
