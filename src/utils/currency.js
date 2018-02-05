import * as session from './session.js'
import { find } from 'lodash'
export const list = [
  { symbol: '$', value: 1, key: 'usd' },
  { symbol: '$', value: 7, key: 'hkd' },
  { symbol: '￥', value: 6, key: 'rmb' }
]

/**
 * 获取对应汇率内容
 * @param  {string} key 对应汇率的key
 * @return {object}     对应list内的汇率数据
 */
export const findCurrency = (key) => {
  return find(list, (o) => o.key === key)
}

export const hasCurrency = (key) => {
  return findCurrency((key)) !== undefined
}

/**
 * 尝试从session内获取用户设置过的汇率标记，没有的话默认使用list数组的第一个汇率数据
 * @return {object}     对应list内的汇率数据
 */
export const getCurrency = () => {
  const cache = findCurrency(session.getCurrency())
  return cache ? cache : list[0]
}

export default list
