/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'
import { initialState } from '../reducers'

const selectHome = (state: any) => state.home || initialState

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  )

export { selectHome, makeSelectUsername }
