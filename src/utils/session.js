/**
 * 操作sessionstorage的简易api
 */
import { find, has } from 'lodash'
import CurrencyList, { hasCurrency } from './currency.js'

export const Keys = {
  AUTHENTICATED: 'cp_sess_key_authenticated',
  USER_INFO: 'cp_sess_key_userInfo',
  CURRENCY: 'cp_sess_key_currency'
}

function _validate(key, value) {
  if (!find(Keys, (v, k, o) => v === key)) {
    console.warn(`key ${key} not contain in Keys`)
    return false
  }
  return true
}

export const set = (key, value) => {
  if (_validate(key) && window) {
    window.sessionStorage.setItem(key, value)
  }
}
export const get = (key) => {
  if (_validate(key) && window) {
    return window.sessionStorage.getItem(key)
  }
  return null
}
export const remove = (key) => {
  if (_validate(key) && window) {
    window.sessionStorage.removeItem(key)
  }
}

export const setCurrency = (value) => {
  const flag = hasCurrency(value)
  if (flag) {
    set(Keys.CURRENCY, value)
  } else {
    console.warn(`currency ${value} not contain in CurrencyList`)
  }
}
export const getCurrency = () => {
  return get(Keys.CURRENCY)
}
export const clearCurrency = () => {
  remove(Keys.CURRENCY)
}

export const setAuthenticated = (value) => {
  set(Keys.AUTHENTICATED, value)
}
export const getAuthenticated = () => {
  return get(Keys.AUTHENTICATED)
}
export const clearAuthenticated = () => {
  remove(Keys.AUTHENTICATED)
  clearUserInfo()
}

export const setUserInfo = (value) => {
  set(Keys.USER_INFO, (value ? JSON.stringify(value) : ''))
}
export const getUserInfo = () => {
  return get(Keys.USER_INFO) ? JSON.parse(get(Keys.USER_INFO)) : {}
}
export const clearUserInfo = () => {
  remove(Keys.USER_INFO)
}

