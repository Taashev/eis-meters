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

type Unit = {
  unitX1: number;
  unitX2: number;
  unitX3: number;
  unitX4: number;
};

export type ThemeType = {
  colors: Colors;
  colorText: ColorText;
  colorBackground: ColorBackground;
  colorForeground: ColorForeground;
  unit: Unit;
};
