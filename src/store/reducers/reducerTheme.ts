import { ACTIONS_THEME } from './../../constants/store/store'

const reducerTheme = (state = {}, action : { type:string, payload: object }) => {
  if (!state) {
    return null
  }

  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_THEME.SET_ACTION_MODE_IS_DARK) {
    newState = { ...state, paletteMode: payload }
  }

  return newState
}

export { reducerTheme }
