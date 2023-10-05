import { ACTIONS_TITLE } from './../../constants/store/store'

const reducerTitle = (state = {}, action : { type:string, payload: object }) => {
  if (!state) {
    return null
  }

  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_TITLE.SET_ACTION_TITLE) {
    newState = payload
  }

  return newState
}

export { reducerTitle }
