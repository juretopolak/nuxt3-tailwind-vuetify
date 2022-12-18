<script setup>
import { mdiFormatListBulletedSquare, mdiWindowClose } from '@mdi/js'

const showFilter = ref(false)
</script>

<template>
  <div class="">
    <div class="flex flex-row min-h-screen">
      <div
        class="fixed lg:relative w-full lg:w-80 h-screen lg:block top-full p-4 transition-all bg-violet-200"
        :class="{'top-20': showFilter}"
      >
        <div>
          <h4 class="mb-0">
            Filter heading
          </h4>
          <div class="mt-2 mb-3">
            <div class="flex">
              <div class="flex-1">
                <v-autocomplete
                  label="Min"
                  :items="['2010', '2011', '2012', '2013', '2014', '2015']"
                  hide-details="true"
                />
              </div>
              <div class="w-2" />
              <div class="flex-1">
                <v-autocomplete
                  label="Max"
                  variant="filled"
                  :items="['2010', '2011', '2012', '2013', '2014', '2015']"
                  hide-details="true"
                />
              </div>
            </div>
          </div>
          <v-divider />
        </div>
      </div>
      <div class="grow p-2 bg-gra-100">
        <h1 class="text-3xl font-bold underline">
          Hello world
        </h1>
      </div>
    </div>
    <div class="fixed bottom-2 right-2 lg:hidden">
      <v-btn
        variant="outlined"
        icon
        @click="showFilter = !showFilter"
      >
        <v-icon v-if="showFilter">
          {{ mdiWindowClose }}
        </v-icon>
        <v-icon v-else>
          {{ mdiFormatListBulletedSquare }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>
