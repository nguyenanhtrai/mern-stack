import React from 'react'
import { Route } from 'react-router-dom'

import CookieHandlerInstance from '../../utils/cookie'

const PublicRoute = ({component: Component, location, ...rest}: any) => (
  <Route {...rest} render={ props => {
    if (!CookieHandlerInstance.checkCookie(process.env.COOKIE_NAME || 'token')) {
      return <Component {...props} {...rest} />
    }

    return <Component {...props} {...rest} />
  }} />
)

export default PublicRoute
