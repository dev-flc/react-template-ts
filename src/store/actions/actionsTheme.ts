import { ACTIONS_THEME } from 'Constants/store/store'

export const actionSetModeIsDark = (payload: any): object => ({
  payload,
  type: ACTIONS_THEME.SET_ACTION_MODE_IS_DARK
})
