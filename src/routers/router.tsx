import React from 'react'
import { ContainerGlobal } from 'Containers/containerGlobal'
import { Home } from 'View/home/home'

import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
      <Route
        index
        path="*"
        element={
          <ContainerGlobal>
            <Home />
          </ContainerGlobal>
        }
      />
    </Routes>
  )
}
export { Router }
