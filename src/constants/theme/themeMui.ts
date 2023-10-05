import { createTheme } from '@mui/material/styles'
import { themeDark } from './themeDark'
import { themeLight } from './themeLigth'

export const MODE_PALETTE = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const themeMui = (themeMode: string) => {
  const theme = themeMode === MODE_PALETTE.DARK ? themeDark : themeLight

  return createTheme(theme)
}
