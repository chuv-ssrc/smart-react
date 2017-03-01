
This project is based on the React app template 
[react-static-boilerplate](https://github.com/kriasoft/react-static-boilerplate), MIT licensed.


### Getting Started


**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer and
[Yarn](https://yarnpkg.com/) installed on your development machine.

**Step 2**. Clone this repository, then install dependencies witn yarn:

```shell
$ yarn install                  # Install project dependencies listed in package.json
```

**Step 3**. Compile and launch your app by running:

```shell
$ yarn start                    # Compiles the app and opens it in a browser with "live reload"
```

You can also test your app in release (production) mode by running `yarn start -- --release` or
with HMR and React Hot Loader disabled by running `yarn start -- --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).


### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ yarn lint                     # Check JavaScript and CSS code for potential issues
$ yarn test                     # Run unit tests. Or, `yarn run test:watch`
```


### How to Deploy

The project can be published to Firebase. For that, see 
[react-static-boilerplate's docs](https://github.com/kriasoft/react-static-boilerplate).

To build the project without publishing it, simply run:

```shell
$ yarn build                    # Compiles the app into the /public/dist folder
```
