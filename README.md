# Razzle Material UI Styled Example

## Features
- [Razzle](https://github.com/jaredpalmer/razzle)
	- **S**erver **S**ide **R**endering
	- **H**ot **M**odule **R**eplacement for both client and server side [React](https://facebook.github.io/react/) components
	- Up to date JavaScript ([**E**CMA](https://en.wikipedia.org/wiki/Ecma_International)**S**cript 6 (2015)) support
- [Express](https://expressjs.com/) server with gzip [compression](https://github.com/expressjs/compression)
	- HTML and inline CSS and JS minification with [HTMLMinifier](https://github.com/kangax/html-minifier)
	- [Styled Components](https://sc-next-docs.philpl.com/)
	- [Material UI](http://www.material-ui.com/#/)

## Getting Started
- Initial steps
	- Install [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/docs/install).
	- [Download](https://github.com/kireerik/razzle-material-ui-styled-example/archive/master.zip) or [clone](github-windows://openRepo/https://github.com/kireerik/razzle-material-ui-styled-example) this repository.
	- Open a command prompt in the project folder.

> Install dependencies:
> ```shell
> yarn install
> ```

Start the server:
> ```shell
> yarn start
> ```
> This command initiates a build process and starts the server in production mode.

Visit http://localhost/ to access the web application.

### Development
Start the server in development mode:
```shell
yarn dev
```

## Idea behind the example
This project is based on the [basic razzle example](https://github.com/jaredpalmer/razzle/tree/master/examples/basic). This repository also satisfies the following 2 entry points requred by Razzle:
- `src/index.js` for the server
- `src/client.js` for the browser
