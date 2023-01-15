<script lang="ts" setup>
import { graphql } from '@/generated'

// const query = gql`
//   query Posts {
//     posts {
//       id
//       title
//       published
//       author {
//         id
//         email
//         role
//       }
//     }
//   }
// `
// const { data } = await useAsyncQuery(query)

const PostsQuery = graphql(`
  query Posts {
    posts {
      id
      title
      published
      author {
        id
        email
        role
      }
    }
  }
`)

const { result } = useQuery(PostsQuery)

</script>
<template>
  <div>
    <div v-for="post of data.posts" :key="post.id">
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
      <div>{{ post.author.email }}</div>
    </div>
  </div>
</template>
