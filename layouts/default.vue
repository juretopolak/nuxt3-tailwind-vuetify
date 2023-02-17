<script setup lang="ts">
const themeStore = useThemeStore()
const drawerStore = useDrawerStore()
</script>

<template>
  <v-app :theme="themeStore.theme">
    <v-app-bar clipped-left app color="test2">
      <template #prepend>
        <v-app-bar-nav-icon />
      </template>
      <v-app-bar-title>App Layout</v-app-bar-title>
      <template #append>
        <UserMenu />
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerStore.drawer"
      :rail="drawerStore.rail"
      expand-on-hover
      color=""
      permanent
    >
      <MainMenu />
      <v-divider />
      <MainMenuBottom />
    </v-navigation-drawer>
    <v-main>
      <div class="pa-4">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>
