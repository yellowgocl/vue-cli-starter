import { getCurrency } from '@utils/currency'
import { toNumber } from 'lodash'

export const currency = (val, isAddSymbol) => {
  const currency = getCurrency()
  val = toNumber(val) * currency.value
  return isAddSymbol ? `${currency.symbol}${val}` : `${val}`
}
