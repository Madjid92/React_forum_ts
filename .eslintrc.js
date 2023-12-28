// .eslintrc.js example
module.exports = {
    ignorePatterns: ["node_modules/**/*", "dist/**/*"],
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions : {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    overrides: [
      {
        files: [".eslintrc.js","webpack.config.js"],
        parserOptions : {
          ecmaVersion: "latest",
          sourceType: "commonjs"
        },
        env : {
          node : true
        }
      },
      {
        files: ["src/**/*"],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@typescript-eslint/recommended'],
      }
    ],
    extends: ["eslint:recommended"],
    rules: {
        semi: "error",
        "prefer-const": "error"
    },
    
  };