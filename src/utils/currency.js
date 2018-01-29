import * as session from './session.js'
import { find } from 'lodash'
export const list = [
  { symbol: '$', value: 1, key: 'usd' },
  { symbol: '$', value: 7, key: 'hkd' },
  { symbol: '￥', value: 6, key: 'rmb' }
]

export const findCurrency = (key) => {
  return find(list, (o) => o.key === key)
}

export const hasCurrency = (key) => {
  return findCurrency((key)) !== undefined
}

export const getCurrency = () => {
  const cache = findCurrency(session.getCurrency())
  return cache ? cache : list[0]
}

export default list
