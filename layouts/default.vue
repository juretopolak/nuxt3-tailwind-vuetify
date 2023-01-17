<script setup lang="ts">
const themeStore = useThemeStore()
const drawerStore = useDrawerStore()
</script>

<template>
  <v-app :theme="themeStore.theme">
    <v-app-bar clipped-left app color="test2">
      <div class="pl-4 text-2xl">
        App Layout
      </div>
      <div class="grow" />
      <div class="m-2">
        <UserMenu />
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerStore.drawer"
      :rail="drawerStore.rail"
      expand-on-hover
      color=""
      permanent
    >
      <div class="flex flex-col min-h-full">
        <MainMenu />
        <div class="flex-1" />
        <v-divider />
        <MainMenuBottom />
      </div>
    </v-navigation-drawer>
    <v-main>
      <div class="p-4 pt-1">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>
