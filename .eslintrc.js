/** @type {import('eslint').Linter.Config} */
process.env.ESLINT_TSCONFIG = "./tsconfig.json";
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  root: true,
  extends: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
