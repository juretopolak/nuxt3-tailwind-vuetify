<script lang="ts" setup>
import { graphql } from '@/gql'

const { data } = useAsyncQuery(graphql(`
  query Rockets {
    rockets {
      id
      active
      country
      name
      stages
      success_rate_pct
      type
      first_flight
      description
      company
    }
  }
`))

// const posts = computed(() => data.value?.posts)
const rockets = computed(() => data.value?.rockets)
</script>

<template>
  <div>
    <div
      v-for="(rocket, i) of rockets"
      :key="i"
      class="mt-4"
    >
      <div>{{ rocket?.id }}</div>
      <div>{{ rocket?.name }}</div>
      <div>{{ rocket?.description }}</div>
    </div>
  </div>
</template>
