import React from 'react'

const AuthLayout = (props: any) => {
  return (
    <div>
      <h2>This is auth layout</h2>
      {props.children}
    </div>
  )
}

export default AuthLayout
