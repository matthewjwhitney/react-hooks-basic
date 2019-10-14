import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  stateprop1: false,
  stateprop2: 0
}

export const HooksReducer1 = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          stateprop1: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          stateprop1: false
        }
      case ACTION_TYPES.INC_GLOBAL_STATE:
        return {
          ...state,
          stateprop2: state.stateprop2 + 1
        }
      case ACTION_TYPES.DEC_GLOBAL_STATE:
        return {
          ...state,
          stateprop2: state.stateprop2 - 1
        }
      default:
        return state
    }
}
