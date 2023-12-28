
module.exports = {
    ignorePatterns: ["node_modules/**/*", "dist/**/*"],
    env: {
        browser: true,
        es2021: true,
    },
    settings:{
      react : {
        version : "detect"
      }
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
        extends: [
          "plugin:@typescript-eslint/recommended", 
          "plugin:react/recommended",
          "plugin:react-hooks/recommended",
          "plugin:jsx-a11y/recommended",
          "plugin:import/typescript",
          "plugin:import/errors",
          "plugin:import/warnings",
        ],
        /*parserOptions: {
          ecmaFeatures: {
            "jsx": true
          }
        },*/
        rules: {
          "react/jsx-uses-react": "off",
          "react/react-in-jsx-scope": "off"
         }
      }
    ],
    extends: ["eslint:recommended"],
    rules: {
        semi: "error",
        "prefer-const": "error"
    },
    
  };