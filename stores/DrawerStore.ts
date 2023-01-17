
export const useDrawerStore = defineStore('DrawerStore', {
  state: () => {
    return {
      drawer: true,
      rail: false
    }
  },
  getters: {},
  actions: {
    toggleRail () {
      this.rail = !this.rail
    }
  },
  persist: true
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDrawerStore, import.meta.hot))
}
