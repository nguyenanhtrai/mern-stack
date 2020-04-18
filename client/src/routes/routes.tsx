import {
  PublicRoute,
} from '../components/routes'
import HomeView from '../containers/HomePage'
import LandingView from '../containers/LandingPage'
import AuthView from '../containers/Auth'
import NotFoundView from '../containers/NotFoundPage'

export default [
  {
    path: '/',
    title: 'Home',
    component: HomeView,
    route: PublicRoute,
    roles: [],
    permission: [],
    exact: true
  },
  {
    path: '/landing',
    title: 'Landing Page',
    component: LandingView,
    route: PublicRoute,
    roles: [],
    permission: [],
    exact: true
  },
  {
    path: '/sign-up',
    title: 'Register',
    component: AuthView,
    route: PublicRoute,
    roles: [],
    permission: [],
    exact: true
  },
  {
    path: '/sign-in',
    title: 'Login',
    component: AuthView,
    route: PublicRoute,
    roles: [],
    permission: [],
    exact: true
  },
  {
    path: '/not-found',
    title: 'Not Found - 404',
    component: NotFoundView,
    route: PublicRoute,
    roles: [],
    permission: [],
    exact: true
  },
]