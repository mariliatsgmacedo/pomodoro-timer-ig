import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
// sobrescrever a definição de tipos do sc
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
