import { TOGGLE_DIALOG } from '../../types'

export function toggleDialog(dialog) {
  return {
    type: TOGGLE_DIALOG,
    payload: {
      dialog,
    }
  }
}
