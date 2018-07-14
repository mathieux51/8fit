const path = require("path")

module.exports = {
  env: {
    "shared-node-browser": true,
    es6: true,
    jest: true
  },
  extends: ["react-native"],
  rules: {
    "no-invalid-this": 0,
    "react/jsx-no-bind": 0,
    "import/no-unresolved": 0
  }
}
