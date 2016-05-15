import { SET_CURRENT_SCREEN, LIST_SCREEN } from '../constants/App'

const initialState = {
  currentScreen: LIST_SCREEN
}

export default function app(state = initialState, action) {

  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return { ...state, currentScreen: action.payload }

    default:
      return state;
  }

}
