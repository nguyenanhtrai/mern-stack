import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../constants'

export function signInSuccess(data: any) {
  return {
    type: SIGN_IN_SUCCESS,
    data
  }
}

export function signInFailure(error: any) {
  return {
    type: SIGN_IN_FAILURE,
    error
  }
}

export function signUpSuccess(data: any) {
  return {
    type: SIGN_UP_SUCCESS,
    data
  }
}

export function signUpFailure(error: any) {
  return {
    type: SIGN_UP_FAILURE,
    error
  }
}
