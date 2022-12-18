import vuetify from 'vite-plugin-vuetify'
// import eslintPlugin from 'vite-plugin-eslint';

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
  modules: [
    // eslint-disable-next-line require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config!.plugins!.push(
        vuetify()
      ) as any)
    }
  ]
})
