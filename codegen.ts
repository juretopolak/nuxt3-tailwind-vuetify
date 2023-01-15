import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // overwrite: true,
  schema: 'http://localhost:4000/',
  // documents: ['./**/*.vue'],
  generates: {
    './generated/': {
      preset: 'client',
      config: {
        useTypeImports: true
      },
      plugins: []
    }
  }
}

export default config
