import MutationTypes from '@/store/types'
import Utils from '@utils'
import { find } from 'lodash'
const { CommonMutationTypes } = MutationTypes
const { currency, session } = Utils
const currencyCache = currency.getCurrency()
const state = {
  isLoading: false,
  currency: currencyCache ? currencyCache : currency.list[0]
}

const getters = {
  'common/isLoading': (state) => {
    return state.isLoading
  },
  'common/currency': (state) => {
    return state.currency
  }
}

const actions = {

}

const mutations = {
  [CommonMutationTypes.IS_LOADING](state, val) {
    state.isLoading = val
  },
  [CommonMutationTypes.SET_CURRENCY](state, val) {
    const result = currency.findCurrency(val)
    if (!result) {
      console.warn('不在指定货币设置范围')
      return
    }
    state.currency = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
