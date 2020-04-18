import React, { Fragment, useEffect, useState } from 'react'

import loadable from '../../components/Loadable'

const SignInComponent = loadable(() => import('./components/SignInComponent'), {
  fallback: <Fragment />,
})

const SignUpComponent = loadable(() => import('./components/SignUpComponent'), {
  fallback: <Fragment />,
})

function Auth(props: any) {
  const [isSignIn, changeToSignUp] = useState(true)

  useEffect(() => {
    if (window.location.href.includes('sign-up')) {
      changeToSignUp(false)
    }
  }, [changeToSignUp])

  return (
    <Fragment>
      {isSignIn ? <SignInComponent /> : <SignUpComponent/>}
    </Fragment>
  )
}

export default Auth
