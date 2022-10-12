module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        'airbnb',
        'airbnb-typescript',
        "plugin:react/jsx-runtime"
    ],
    overrides: [
        {
          files: ['*.ts', '*.tsx'], // Your TypeScript files extension
          extends: [
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
          ],
          parserOptions: {
            project: ['./tsconfig.json'], // Specify it only for TypeScript files
          },
        },
      ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname

    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": 0,
        "max-len": ["error", { "code": 80 }],
        "react/function-component-definition": [2, {"namedComponents": "arrow-function",  "unnamedComponents": "arrow-function"}]

    }
}