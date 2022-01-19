import { Theme } from './theme';

export type StyledProps<P extends {} = {}> = {
  theme: Theme;
} & P;
