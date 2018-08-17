module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "16.4.2"
    }
  }
};
