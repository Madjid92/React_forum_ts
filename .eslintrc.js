// .eslintrc.js example
module.exports = {
    ignorePatterns: ["node_modules/**/*", "dist/**/*"],
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions : {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    overrides: [
      {
        files: [".eslintrc.js","webpack.config.js"],
        env : {
          node : true
        }
      }],
    extends: "eslint:recommended",
    rules: {
        semi: "error",
        "prefer-const": "error"
    }
  };