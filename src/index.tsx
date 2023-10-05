import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client'
import { convertTextUpperOrLower } from './utils/utils'

import { App } from './app'

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
        <App/>
  </StrictMode>)