// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { md3 } from 'vuetify/blueprints'
import colors from 'tailwindcss/colors'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    blueprint: md3,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            test1: colors.yellow[300],
            test2: '#2196F3'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
