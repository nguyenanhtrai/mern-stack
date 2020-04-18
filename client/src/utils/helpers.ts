import Cookies from 'js-cookie'
import MobileDetect from 'mobile-detect'
import _ from 'lodash'

const JWT_TOKEN_KEY = 'jwtToken'

/**
 * Get token on cookies.
 *
 * @returns {*}
 */
export const getToken = () => {
  return Cookies.get(JWT_TOKEN_KEY) || null
}

/**
 * Set token on cookies.
 *
 * @param token
 * @param expires (Values is minutes)
 */
export const setToken = (token: string, expires: number) => {
  const day = Number(expires) / 60 / 24

  Cookies.set(JWT_TOKEN_KEY, token, {expires: day})
}

/**
 * Remove Token on cookies.
 */
export const removeToken = () => {
  Cookies.remove(JWT_TOKEN_KEY)
}

/**
 * Check if has token.
 * @returns {boolean}
 */
export const hasToken = () => {
  return getToken() !== null
}

export const isMobile = () => {
  const device = new MobileDetect(window.navigator.userAgent)
  return !_.isEmpty(device.phone())
}

export const showLoadingSpinner = () => {
  let loading = document.getElementById('spinner-loading')

  if(loading) {
    loading.classList.remove("spinner-hide")
    loading.classList.add("spinner-show")
  }
}

export const hideLoadingSpinner = () => {
  let loading = document.getElementById('spinner-loading')

  if(loading) {
    loading.classList.remove("spinner-show")
    loading.classList.add("spinner-hide")
  }
}

// export const formatMoneyJP = (money: number) => {
//   return formatMoney(Number(money), {symbol: "円", precision: 0, thousand: ",", format: "%v%s"})
// }

export const isMobileSafari = (navigator: any) => {
  return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
}

export const getCurrentUrl = () => {
  const location = window.location

  return `${location.origin}${location.pathname}`
}

export const getOriginUrl = () => {
  const location = window.location

  return `${location.origin}`
}
