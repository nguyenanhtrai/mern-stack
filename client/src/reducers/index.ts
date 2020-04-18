/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../utils/history'
import globalReducer from '../containers/App/reducers'
import SettingsThemes from './settings'


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    settingsThemes: SettingsThemes,
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers,
  } as any)

  return rootReducer
}
