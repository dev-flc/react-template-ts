import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from './app'
import store from './store/store'

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App/>
      </PersistGate>
    </Provider>
  </StrictMode>
)