import { ACTIONS_THEME } from 'Constants/store/store'

const reducerTheme = (
  state = {},
  action: { type: string; payload: object }
): object => {
  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_THEME.SET_ACTION_MODE_IS_DARK) {
    newState = { ...state, paletteMode: payload }
  }

  return newState
}

export { reducerTheme }
