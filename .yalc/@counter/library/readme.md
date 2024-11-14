- mkdir
- npm init (then show package.json)

Initial package json is

```json
{
  "name": "counter-library",
  "version": "1.0.0",
  "description": "Example Counter Component for React Native",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}
```

https://stackoverflow.com/questions/26737819/why-use-peer-dependencies-in-npm-for-plugins

npm install react react-native --save-dev but then update to `peerDependencies` in package.json

isntall jest: npm install --save-dev jest
npm init jest@latest (choose all the defaults)
npm install --save-dev babel-jest @babel/core @babel/preset-env



install testing library: npm install -D @testing-library/react-native


  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], in `jest.config.js`

  import '@testing-library/react-native/extend-expect'; in `jest.setup.ts`

https://www.totaltypescript.com/how-to-create-an-npm-package

only do ts build step and distribution first, save testing for follow up step.

add @types/react

add are the types wrong: https://www.totaltypescript.com/how-to-create-an-npm-package#5-exports-main-and-arethetypeswrongcli

todo: get index up a level in the source folder.