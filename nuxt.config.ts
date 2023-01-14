import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
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
        httpEndpoint: 'http://localhost:4000'
      }
    }
  }
})
