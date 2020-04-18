import AxiosClient from '../utils/axios'

const LOGIN_ENDPOINT = '/login'
const LOGOUT_ENDPOINT = '/logout'
const REGISTER_ENDPOINT = '/users'

export const loginRequest = (email: string, password: string ) => {
  return AxiosClient.post(LOGIN_ENDPOINT, { email, password })
}

export const logoutRequest = () => {
  return AxiosClient.post(LOGOUT_ENDPOINT, {})
}

export const registerByEmail = (data: object) => {
  return AxiosClient.post(REGISTER_ENDPOINT, data)
}
