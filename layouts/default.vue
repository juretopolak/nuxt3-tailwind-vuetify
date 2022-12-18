<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script>
import { mdiFormatListBulletedSquare, mdiWindowClose } from '@mdi/js'

export default {
  data: () => ({
    items: [
      {
        text: 'Real-Time',
        icon: mdiFormatListBulletedSquare,
        to: '/'
      },
      {
        text: 'Audience',
        icon: mdiWindowClose,
        to: '/test'
      }
    ]
  })
}
</script>
<template>
  <v-layout>
    <v-app-bar color="secondary">
      app bar
    </v-app-bar>
    <v-navigation-drawer color="" permanent>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
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

          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
