import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config!.plugins!.push(
        vuetify()
      ) as any)
    }
  ],
})