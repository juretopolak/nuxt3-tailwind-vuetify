<script setup type="ts">
import { mdiAccount } from '@mdi/js'
const items = reactive([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' }
])
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        variant="tonal"
        color=""
        density="comfortable"
      >
        <v-icon>
          {{ mdiAccount }}
        </v-icon>
      </v-btn>
    </template>
    <v-list class="mt-2">
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
