module.exports = {
  extends: [
    "eslint-config-react-app",
    "standard",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    'eslint:recommended',
  ],
  plugins: [
    "flowtype",
    "react",
    "prettier",
    "standard"
  ],
  rules: {
    "jsx-a11y/href-no-hash": "off",
    'react/no-string-refs':'off',
    'no-console': 'off',
    // 'semi': ["error", "never"]
  },
}
