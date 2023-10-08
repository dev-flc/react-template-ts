import { type Theme } from '@mui/material/styles'
import { themeDark } from './themeDark'
import { themeLight } from './themeLigth'

export const MODE_PALETTE = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const themeMui = (themeMode: string): Theme => {
  return themeMode === MODE_PALETTE.DARK ? themeDark : themeLight
}
