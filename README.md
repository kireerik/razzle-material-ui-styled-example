<h1 align="center">Razzle Material-UI Styled Example</h1>

<p align="center">
	<a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="104.49" height="64"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svghttps://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" width="142.708" height="64"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Razzle" href="https://github.com/jaredpalmer/razzle"><img alt="Razzle" src="https://cloud.githubusercontent.com/assets/4060187/26326651/1fc65eca-3f0a-11e7-9f45-02c2bf950418.png" width="222.813" height="64"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Express" href="https://expressjs.com/"><img alt="Express" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" width="219.771" height="64"></a>
</p>

<p align="center">
	<a title="React" href="https://facebook.github.io/react/"><img alt="React" src="https://cdn.worldvectorlogo.com/logos/react.svg" width="267.135" height="240"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Styled Components" href="https://www.styled-components.com/"><img alt="Styled Components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="240" height="240"></a>
	&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a title="Material-UI" href="http://www.material-ui.com/#/"><img alt="Material-UI" src="https://cdn.worldvectorlogo.com/logos/material-ui.svg" width="295.417" height="240"></a>
</p>

<p align="center">
	<br><a title="CodeRelease.io" href="https://coderelease.io/">CodeRelease.io</a>
	<br>⭐ Star and get notified about new releases via email.
</p>

## Features
- <a title="Razzle" href="https://github.com/jaredpalmer/razzle"><img alt="Razzle" src="https://cloud.githubusercontent.com/assets/4060187/26326651/1fc65eca-3f0a-11e7-9f45-02c2bf950418.png" width="" height="18"></a>
	- **S**erver **S**ide **R**endering
	- **H**ot **M**odule **R**eplacement for both client and server side <a title="React" href="https://facebook.github.io/react/"><img alt="React" src="https://cdn.worldvectorlogo.com/logos/react.svg" width="" height="18"></a>[React](https://facebook.github.io/react/) components
	- Up to date JavaScript ([**E**CMA](https://en.wikipedia.org/wiki/Ecma_International)**S**cript 6 (2015)) support
	- Single route static site generation
- <a title="Express" href="https://expressjs.com/"><img alt="Express" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" width="" height="18"></a> server with gzip [compression](https://github.com/expressjs/compression)
	- HTML and inline CSS and JS minification with [HTMLMinifier](https://github.com/kangax/html-minifier)
	- <a title="Styled Components" href="https://www.styled-components.com/"><img alt="Styled Components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="18" height="18"></a> [Styled Components](https://www.styled-components.com/)
	- <a title="Material-UI" href="http://www.material-ui.com/#/"><img alt="Material-UI" src="https://cdn.worldvectorlogo.com/logos/material-ui.svg" width="" height="18"></a> [Material-UI](http://www.material-ui.com/#/)

## Getting Started
- Initial steps
	- Install <a title="Node.js" href="https://nodejs.org/en/"><img alt="Node.js" src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" width="" height="18"></a> and <a title="Yarn" href="https://yarnpkg.com/lang/en/"><img alt="Yarn" src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.svghttps://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" width="" height="18"></a>.
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

### Single route static site generation
Generate a static site:
```shell
yarn static
```
Open the `index.html` within the `static` folder to access the web application. The folder name can be modified with the `RAZZLE_STATIC_PATH` environment variable.

## Idea behind the example
This project is based on the [basic razzle example](https://github.com/jaredpalmer/razzle/tree/master/examples/basic). This repository also satisfies the following 2 entry points requred by Razzle:
- `src/index.js` for the server
- `src/client.js` for the browser
