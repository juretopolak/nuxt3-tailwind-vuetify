export const useDrawerStore = defineStore('DrawerStore', {
  state: () => {
    return {
      drawer: true,
      rail: false
    }
  },
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDrawerStore, import.meta.hot))
}
