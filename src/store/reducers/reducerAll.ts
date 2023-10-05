import { combineReducers } from '@reduxjs/toolkit'

import { reducerTheme } from './reducerTheme'
import { reducerTitle } from './reducerTitle'

const allReducers = combineReducers({
  theme: reducerTheme,
  title: reducerTitle
})

export default allReducers
