import 'styled-components';

type ThemeType = {
  colors: Record<string, string>;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}