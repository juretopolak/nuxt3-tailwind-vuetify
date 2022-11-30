<script setup>
  const showFilter = ref(false)

</script>

<template>
  <div class="">
    <div class="flex flex-row min-h-screen">
      <div class="lg:block w-64 bg-violet-200" :class="{hidden: !showFilter}">
        Filters
      </div>
      <div class="grow bg-violet-100">
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </div>
    <div class="fixed bottom-2 left-2 lg:hidden">
      <v-btn
        variant="outlined"
        icon
        @click="showFilter = !showFilter"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </div>
    
  </div>

</template>


