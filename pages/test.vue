<script lang="ts" setup>
import { graphql } from '@/gql'

const { result } = useQuery(graphql(`
  query Posts {
    posts {
      id
      title
      published
      author {
        id
        name
        email
        role
      }
    }
  }
`))

const posts = computed(() => result.value?.posts)

</script>
<template>
  <div>
    <div
      v-for="post of posts"
      :key="post.id"
    >
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
      <div>{{ post.author.email }}</div>
    </div>
  </div>
</template>
