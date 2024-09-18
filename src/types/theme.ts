type Colors = {
  white: string;
  black: string;
  gray: string;
  darkGray: string;
  red: string;
  darkRed: string;
  pink: string;
  darkPink: string;
};

type ColorText = {
  primary: string;
  secondary: string;
};

type ColorBackground = {
  primary: string;
  secondary: string;
  white: string;
};

type ColorForeground = {
  primary: string;
  red: string;
  darkRed: string;
  pink: string;
  darkPink: string;
};

export type Unit = {
  unitX1: string;
  unitX2: string;
  unitX3: string;
  unitX4: string;
};

export type LightThemeType = {
  colors: Colors;
  colorText: ColorText;
  colorBackground: ColorBackground;
  colorForeground: ColorForeground;
  unit?: Partial<Unit>;
};

export type ThemeType = {
  light: LightThemeType;
  maxWidth: number;
  minWidth: number;
  unit: Unit;
};
