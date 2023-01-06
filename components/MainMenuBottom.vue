<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script setup>
import { mdiThemeLightDark, mdiLockOpen } from '@mdi/js'
import { useTheme } from 'vuetify'

const drawerStore = useDrawerStore()
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>
<template>
  <v-list density="compact" nav>
    <v-list-item
      :active="false"
      value="theme"
      @click="toggleTheme"
    >
      <template #prepend>
        <v-icon :icon="mdiThemeLightDark" />
      </template>

      <v-list-item-title>
        Dark mode
      </v-list-item-title>
    </v-list-item>
    <v-list-item
      :active="false"
      value="theme"
      @click="drawerStore.toggleRail"
    >
      <template #prepend>
        <v-icon :icon="mdiLockOpen" />
      </template>

      <v-list-item-title>
        Lock menu
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
