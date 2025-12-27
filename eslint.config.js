import leadingCommas from './.eslint-rules/leading-commas.js'

export default [
  {
    ignores: [
      "**/node_modules/**"
      , "**/dist/**"
      , "**/.astro/**"
      , "**/public/**"
    ]
  }
  , {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"]
    , plugins: {
      local: {
        rules: {
          "leading-commas": leadingCommas
        }
      }
    }
    , languageOptions: {
      ecmaVersion: "latest"
      , sourceType: "module"
      , parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    }
    , rules: {
      "local/leading-commas": "error"
      , "semi": ["error", "never"]
      , "comma-style": ["error", "first"]
      , "comma-spacing": ["error", { "before": false, "after": true }]
      , "comma-dangle": ["error", "never"]
      , "space-before-function-paren": ["error", "never"]
      , "block-spacing": ["error", "always"]
      , "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }]
      , "no-unused-vars": "warn"
      , "indent": "off"
      , "function-paren-newline": "off"
      , "function-call-argument-newline": "off"
      , "object-curly-newline": "off"
      , "object-property-newline": "off"
      , "array-element-newline": "off"
      , "array-bracket-newline": "off"
      , "brace-style": "off"
    }
  }
]
