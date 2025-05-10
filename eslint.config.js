import eslintPluginAstro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier/flat'

export default [
  ...eslintPluginAstro.configs.recommended,
  ...prettier,
  {
    rules: {
      'prettier/prettier': ['error'],
    },
  },
]
