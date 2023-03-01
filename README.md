## ESLint config
Personal ESLint config for my projects.
Based on [Airbnb](https://github.com/iamturns/eslint-config-airbnb-typescript), has rules for:
- [Mithril](https://www.npmjs.com/package/eslint-plugin-mithril)
- [TypeScript](http://github.com/typescript-eslint/typescript-eslint)

## Installation
### NPM
```shell
npm install --save-dev @maicol07/eslint-config
```
### Yarn
```shell
yarn add --dev @maicol07/eslint-config
```

### PNPM (recommended)
```shell
pnpm add -D @maicol07/eslint-config
```
You have to add `*eslint*` to the public-hoist-patterns in your `.npmrc` file to avoid hoisting issues (if you had already it set). Otherwise, it's all handled by PNPM.

## Usage
Add this to your `.eslintrc` file:
```json
{
  "extends": "@maicol07"
}
```

## License
MIT

## Contributing
Feel free to open an issue or a PR.

## Credits
- [TypeScript](https://www.typescriptlang.org/)
- [Mithril](https://mithril.js.org/)
- [ESLint](https://eslint.org/)
- [Inertia](https://inertiajs.com/)
- [PNPM](https://pnpm.io/)
