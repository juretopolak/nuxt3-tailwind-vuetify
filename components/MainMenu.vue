<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script setup>
import { mdiHome, mdiAlphaTBox, mdiRocketLaunch } from '@mdi/js'

const mainMenu = reactive([
  {
    text: 'Home',
    icon: mdiHome,
    to: '/'
  },
  {
    text: 'Rockets',
    icon: mdiRocketLaunch,
    to: '/rockets'
  },
  {
    text: 'Test',
    icon: mdiAlphaTBox,
    to: '/test'
  }
])
</script>
<template>
  <v-list density="compact" nav>
    <v-list-item
      v-for="(item, i) in mainMenu"
      :key="i"
      :value="item"
      :to="item.to"
      active-color=""
      router
      exact
    >
      <template #prepend>
        <v-icon :icon="item.icon" />
      </template>

      <v-list-item-title>
        {{ item.text }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
