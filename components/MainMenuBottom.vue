<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script type="ts" setup>
import { mdiThemeLightDark, mdiLockOpen } from '@mdi/js'

const drawerStore = useDrawerStore()
const themeStore = useThemeStore()

</script>
<template>
  <v-list density="compact" nav>
    <v-list-item
      :active="false"
      value="theme"
      @click="themeStore.toggleTheme"
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
