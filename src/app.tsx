import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routers/router'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { themeMui } from './constants/theme/themeMui'

import { useStore } from './hook/store/useStore'

const App = () => {
  const [mapStateToProps] = useStore()
  const { theme } = mapStateToProps
  const { paletteMode } = theme

  return (
    <ThemeProvider theme={themeMui(paletteMode)}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  )
}

App.displayName = 'App'

export { App }
