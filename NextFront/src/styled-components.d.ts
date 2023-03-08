import 'styled-components';
import { Colors } from './fixture/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: { [key in Colors]: string };
  }
}
