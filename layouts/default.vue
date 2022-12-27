<script setup>
import { mdiChevronLeft, mdiHome } from '@mdi/js'
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawer = ref(true)
const rail = ref(false)

const toggleTheme = computed({
  get () {
    return theme.global.current.value.dark
  },
  set () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
})
</script>

<template>
  <v-layout>
    <v-app-bar clipped-left app color="test2">
      <v-btn
        icon
        variant="flat"
        color=""
        density="comfortable"
        :class="{'rotate-180': rail}"
        @click="rail = !rail"
      >
        <v-icon>
          {{ mdiChevronLeft }}
        </v-icon>
      </v-btn>
      <div class="pl-6 text-2xl">
        App Layout
      </div>
      <div class="grow" />
      <div class="m-2">
        <v-switch
          v-model="toggleTheme"
          hide-details
        />
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      color=""
      permanent
    >
      <MainMenu />
    </v-navigation-drawer>
    <v-main>
      <div class="p-4 pt-1">
        <slot />
      </div>
    </v-main>
  </v-layout>
</template>
