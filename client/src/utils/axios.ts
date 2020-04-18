import axios, { AxiosInstance } from 'axios'
import { isEmpty, assign, merge } from 'lodash'

import CookieHandlerInstance from './cookie'
import { UNAUTHORIZED } from './httpStatus'
// import Notifications from './notifications'

const singletonEnforcer = Symbol()

class AxiosClient {
  axiosClient: AxiosInstance
  static axiosClientInstance: AxiosClient

  constructor(enforcer: any) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot initialize Axios client single instance')
    }

    this.axiosClient = axios.create({
      baseURL:
        process.env.API_VERSION !== ''
          ? process.env.API_DOMAIN + '/' + process.env.API_VERSION
          : process.env.API_DOMAIN,
      headers: {
        common: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    })

    if (
      process.env.COOKIE_NAME &&
      CookieHandlerInstance.checkCookie(process.env.COOKIE_NAME)
    ) {
      this.setHeader(CookieHandlerInstance.getCookie(process.env.COOKIE_NAME))
    }

    this.axiosClient.interceptors.request.use(
      (configure: any) => {
        return configure
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )

    this.axiosClient.interceptors.response.use(
      (response: any) => {
        if (response.data.data && response.data.data.data && Array.isArray(response.data.data.data)) {
          response.data.data.dataObject = response.data.data.data.reduce(
            (dataObject: any, item: any) => {
              dataObject[item.id] = item
              return dataObject
            },
            {}
          )
        }
        return response
      },
      (error: any) => {
        let dataErrors = error.response.data
        error.response.errorsObject = {}
        dataErrors.errorsObject = {}

        if (
          dataErrors.errors &&
          Array.isArray(dataErrors.errors)
        ) {
          if(error.response.status === UNAUTHORIZED && dataErrors.errors[0].message === 'UNAUTHENTICATED') {
            CookieHandlerInstance.removeCookie('token')
            window.location.replace('/')
          }
        }
        return Promise.reject(error.response)
      }
    )
  }

  static get instance() {
    if (!this.axiosClientInstance) {
      this.axiosClientInstance = new AxiosClient(singletonEnforcer)
    }

    return this.axiosClientInstance
  }

  setHeader(userToken: string = '') {
    const jwt = /^([A-Za-z0-9\-_~+]+[=]{0,2})\.([A-Za-z0-9\-_~+]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+]+[=]{0,2}))?$/

    if (jwt.test(userToken)) {
      this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`
    }
  }

  get(resource: string, slug = '', config = {}) {
    const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`
    return this.axiosClient.get(requestURL, {
      data: null,
      ...merge({ headers: this.axiosClient.defaults.headers }, config)
    })
  }

  post(resource: string, data: object, config = {}) {
    return this.axiosClient.post(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    )
  }

  update(resource: string, data: object, config = {}) {
    return this.axiosClient.put(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    )
  }

  put(resource: string, data: object, config = {}) {
    return this.axiosClient.put(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    )
  }

  patch(resource: string, data: object, config = {}) {
    return this.axiosClient.patch(
      `${resource}`,
      data,
      assign(config, this.axiosClient.defaults.headers)
    )
  }

  delete(resource: string, data: object, config = {}) {
    return this.axiosClient.delete(`${resource}`, {
      params: data,
      ...assign(config, this.axiosClient.defaults.headers)
    })
  }
}

export default AxiosClient.instance
