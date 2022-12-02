module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
      alias: [
        ["@/components", "./src/components"],
        ["@/constants", "./src/constants"],
        ["@/pages", "./src/pages"],
        ["@/layouts", "./src/layouts"],
        ["@/hooks", "./src/hooks"],
        ["@/types", "./src/types"],
        ["@/schemas", "./src/schemas"],
        ["@/images", "./src/images"],
        ["@/config", "./src/config"],
        ["@/helpers", "./src/helpers"],
        ["@/utils", "./src/utils"],
        ["@/styles", "./src/styles"],
        ["@/contexts", "./src/contexts"],
      ],
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
};
