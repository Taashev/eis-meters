import { DetailedHTMLProps, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export type ContainerProps = {
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  margin?: keyof DefaultTheme['unit'];
  padding?: keyof DefaultTheme['unit'];
  as?: keyof JSX.IntrinsicElements; // Типизируем, чтобы передавать валидные HTML теги
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
