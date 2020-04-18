import produce from 'immer'
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../constants'

// The initial state of the App
export const initialState = {
  isAuthenticated: false,
  error: {}
}

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        draft.isAuthenticated = true
        break
      case SIGN_IN_FAILURE:
        draft.error = action.payload
        break
      case SIGN_UP_SUCCESS:
        draft.isAuthenticated = true
        break
      case SIGN_UP_FAILURE:
        draft.error = action.payload
        break
    }
  })

export default authReducer
