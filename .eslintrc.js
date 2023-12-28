// .eslintrc.js example
module.exports = {
    "ignorePatterns": [".eslintrc.js", "webpack.config.js","node_modules/**/*", "dist/**/*"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
    },
    rules: {
        "semi": "error",
        "prefer-const": "error"
    }
  };