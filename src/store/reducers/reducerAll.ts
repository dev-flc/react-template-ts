import { combineReducers } from '@reduxjs/toolkit'

import { reducerTheme } from 'Reducers/reducerTheme'
import { reducerTitle } from 'Reducers/reducerTitle'

const allReducers = combineReducers({
  theme: reducerTheme,
  title: reducerTitle
})

export default allReducers
