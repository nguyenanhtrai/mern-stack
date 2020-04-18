import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'

import routes from './routes'

// import MainLayout from '../layouts/MainLayout'

import SaasLayout from '../layouts/MainLayout'
import HelmetComponent from '../components/HelmetComponent'

const RenderRouter = ({
  route: Component,
  layout: Layout = Fragment,
  breadcrumb,
  title,
  ...rest
}: any) => (
  <Fragment>
    {title && <HelmetComponent title={title} />}
    <Layout breadcrumb={breadcrumb} >
      <Component {...rest} />
    </Layout>
  </Fragment>
)

const Router = (
  <Switch>
    {routes.map((routeItem: any, index: number) => {
      return (
        <RenderRouter
          route={routeItem.route}
          key={index}
          path={routeItem.path}
          component={routeItem.component}
          layout={routeItem.layout || SaasLayout}
          roles={routeItem.roles}
          permission={routeItem.permission}
          breadcrumb={routeItem.breadcrumb}
          title={routeItem.title}
          exact={routeItem.exact}
          tabs={routeItem.tabs ? routeItem.tabs : []}
        />
      )
    })}
  </Switch>
)

export default Router
