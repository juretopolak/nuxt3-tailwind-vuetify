import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@/assets/css/main.scss'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  imports: {
    dirs: ['stores']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    // eslint-disable-next-line require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config!.plugins!.push(
        vuetify()
      ) as any)
    }
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_API_URL
      }
    }
  }
})
