import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routers/router'

const App = () => {

  return (
      <React.Fragment>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.Fragment>
  )
}

App.displayName = 'App'

export { App }
