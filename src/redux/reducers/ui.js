import { TOGGLE_DIALOG } from '../../types'

const defaultState = {
  dialogOpen: {},
}

export default function ui(
  state = defaultState,
  action
) {
  switch (action.type) {
  case TOGGLE_DIALOG: {
    return {
      ...state,
      dialogOpen: {
        ...state.dialogOpen,
        [action.payload.dialog]: !state.dialogOpen[action.payload.dialog],
      },
    }
  }

  default:
    return state
  }
}
