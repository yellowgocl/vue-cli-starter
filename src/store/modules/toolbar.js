import MutationTypes from '@/store/types'
const { ToolbarMutationTypes } = MutationTypes
const state = {
  left: 'logo',
  center: 'search',
  actions: [],
  right: null
}

const getters = {
  'toolbar/left': (state) => {
    return state.left
  },
  'toolbar/center': (state, getters, rootState) => {
    return state.center
  },
  'toolbar/right': (state, getters, rootState) => {
    return state.right
  },
}

const actions = {
  test({ commit }) {
    //u can use commit to call mutation with any types when u defined, commit(ToolbarMutationTypes.LEFT, { left: 'test left' })
  }
}
const mutations = {
  [ToolbarMutationTypes.LEFT](state, { left }) {
    state.left = left
  },
  [ToolbarMutationTypes.CENTER](state, { center }) {
    state.center = center
  } ,
  [ToolbarMutationTypes.RIGHT](state, { right }) {
    state.right = right
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}