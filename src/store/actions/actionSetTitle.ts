import { ACTIONS_TITLE } from 'Constants/store/store'

export const actionSetTitle = (payload: any): object => ({
  payload,
  type: ACTIONS_TITLE.SET_ACTION_TITLE
})
