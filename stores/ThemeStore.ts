// import { useTheme } from 'vuetify'
// const theme = useTheme()

export const useThemeStore = defineStore('ThemeStore', {
  state: () => {
    return {
      theme: 'light'
    }
  },
  getters: {},
  actions: {
    toggleTheme () {
      this.theme = (this.theme === 'light') ? 'dark' : 'light'
    }
  },
  persist: true
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
