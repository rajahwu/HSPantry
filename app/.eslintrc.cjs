module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        paths: ["src", "./"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [
          ["@components", "src/components"],
          ["@layouts", "src/layouts"],
          ["@lib", "src/lib"],
          ["@pages", "src/pages"],
          ["@app/router", "router"],
          ["@routes", "router/routes"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
