/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react'
import loadable from '../../components/Loadable'
import LoadingIndicator from '../../components/LoadingIndicator'

export default loadable(() => import('./view'), {
  fallback: <LoadingIndicator />,
})
