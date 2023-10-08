import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { themeMui } from 'Constants/theme/themeMui'
import { ThemeProvider } from '@mui/material/styles'

import { Router } from 'Routers/router'
import { useStore } from 'Hook/store/useStore'

const App = (): JSX.Element => {
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
