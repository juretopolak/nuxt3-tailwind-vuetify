<script setup lang="ts">
const drawerStore = useDrawerStore()
</script>

<template>
  <v-layout>
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
  </v-layout>
</template>
