<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script setup>
import { mdiHome, mdiAlphaTBox } from '@mdi/js'

const mainMenu = reactive([
  {
    text: 'Home',
    icon: mdiHome,
    to: '/'
  },
  {
    text: 'Test',
    icon: mdiAlphaTBox,
    to: '/test'
  }
])
</script>
<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in mainMenu"
      :key="i"
      :value="item"
      :to="item.to"
      active-color=""
      variant=""
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
