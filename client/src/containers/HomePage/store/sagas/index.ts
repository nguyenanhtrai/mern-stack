/**
 * Gets the repositories of the user from Github
 */

import {
  // call,
  // put,
  // select,
  takeLatest
} from 'redux-saga/effects'

// import { makeSelectUsername } from '../../../containers/HomePage/selectors'

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  // const username = yield select(makeSelectUsername())

  // try {
  //   console.log('Axios call', username)
  // } catch (err) {
  //   console.log('Handle error')
  // }
  yield
}

export default function* fetchData() {
  yield takeLatest('DISPATCH_KEY', getRepos)
}
