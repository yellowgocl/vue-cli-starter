import MutationTypes from '@/store/types'

export default {
	created() {
    const currentRouteName = this.$route.name
    const leftContent = currentRouteName === 'index' ? 'logo' : 'back'
    const { commit } = this.$store
		commit(MutationTypes.ToolbarMutationTypes.CENTER,
      { center: `${currentRouteName} page` })
    commit(MutationTypes.ToolbarMutationTypes.LEFT,
      { left: leftContent  })
	},

}
