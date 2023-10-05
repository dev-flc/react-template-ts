import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client'

import { convertTextUpperOrLower } from './utils/utils'

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
        <h1>{convertTextUpperOrLower("FOREVER")[0]}</h1>
  </StrictMode>)