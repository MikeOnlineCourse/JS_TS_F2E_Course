/**
 * typescript 的設定檔
 * https://typescript-eslint.io/getting-started/
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    commonjs: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  plugins: ["import", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 規則說明 ( https://eslint.org/docs/latest/use/configure/rules )
  // 所有的規則 ( https://eslint.org/docs/latest/rules/ )
  rules: {
    "no-console": "off",
    "no-promise-executor-return": "off",
    "no-plusplus": "off",
    "no-loop-func": "off",
    "array-callback-return": "error",
    "object-curly-newline": "off",
    "max-len": ["error", { code: 140 }],
    quotes: ["error", "double"],
    "arrow-body-style": "off",

    // import 副檔名是否需要 ( https://github.com/import-js/eslint-plugin-import#eslint-plugin-import )
    "import/extensions": "off",

    // 模組是否要導出預設值 ( https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md )
    "import/prefer-default-export": "off",

    // 隱式箭頭換行符 ( https://eslint.org/docs/latest/rules/implicit-arrow-linebreak )
    "implicit-arrow-linebreak": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["vite.config.ts"] },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // 關閉 any ( https://typescript-eslint.io/rules/no-explicit-any/ )
    "@typescript-eslint/no-explicit-any": "off",
    // 關閉 ignore ( https://typescript-eslint.io/rules/ban-ts-comment/ )
    "@typescript-eslint/ban-ts-comment": "off",

    // https://stackoverflow.com/questions/37826449/expected-linebreaks-to-be-lf-but-found-crlf-linebreak-style
    "linebreak-style": ["off", "windows"],
  },
};
