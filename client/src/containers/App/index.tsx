/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import routes from '../../routes'
import AppConfig from "../../constants/AppConfig";

const AppWrapper = styled.div`
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate={`%s - ${AppConfig.appName}`}
        defaultTitle={AppConfig.appName}
      >
        <meta name="description" content={AppConfig.appName} />
      </Helmet>
      {routes}
      {/* <GlobalStyle /> */}
    </AppWrapper>
  )
}

export default App
