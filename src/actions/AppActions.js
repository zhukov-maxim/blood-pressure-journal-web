import { SET_CURRENT_SCREEN } from '../constants/App'

export function setCurrentScreen(screen) {

  return {
    type: SET_CURRENT_SCREEN,
    payload: screen
  }

}
