import MutationTypes from '@store/types'
import Utils from '@utils/'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      'isLogin': 'auth/isLogin',
      'userInfo': 'auth/info',
      'currency': 'common/currency'
    })
  },
  methods: {
    setCurrency(val, isSaveToStorage = false) {
      const { commit } = this.$store
      commit(MutationTypes.CommonMutationTypes.SET_CURRENCY, val)
      if (isSaveToStorage) {
        Utils.session.setCurrency(val)
      }
    },
    showLoading() {
      const { commit } = this.$store
      commit(MutationTypes.CommonMutationTypes.IS_LOADING, true)
    },
    hideLoading() {
      const { commit } = this.$store
      commit(MutationTypes.CommonMutationTypes.IS_LOADING, false)
    },
    login() {
      const { dispatch } = this.$store
      return dispatch('auth/login').then(data => {
        return data
      })
    },
    logout() {
      const { dispatch } = this.$store
      return dispatch('auth/logout').then(data => {
        return data
      })
    }
  }
}
