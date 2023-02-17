import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // overwrite: true,
  schema: process.env.GRAPHQL_API_URL,
  documents: ['./**/*.vue'],
  generates: {
    './gql/': {
      preset: 'client',
      config: {
        useTypeImports: true
      },
      plugins: []
    }
  }
}

export default config
