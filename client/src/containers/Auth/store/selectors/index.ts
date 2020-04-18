/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'
import { initialState } from '../reducers'

const selectAuth = (state: any) => state.auth || initialState

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectAuth,
    isAuthenticated => isAuthenticated,
  )


export { selectAuth, makeSelectIsAuthenticated }
