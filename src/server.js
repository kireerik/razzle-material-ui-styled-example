import express from 'express'
import compression from 'compression'
import {minify} from 'html-minifier'

import React from 'react'
import {renderToString} from 'react-dom/server'
import {ServerStyleSheet} from 'styled-components'

import Application from './application/Main'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

export default express()
	.disable('x-powered-by')
	.use(compression())
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (request, response) => {
		const sheet = new ServerStyleSheet()
		, html = renderToString(sheet.collectStyles(<Application userAgent={request.headers['user-agent']} />))
		, css = sheet.getStyleTags()

		response.send(minify(
			`<!DOCTYPE HTML>
			<html lang="en">
				<head>
					<title>Material-UI Example</title>

					<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

					<meta name="description" content="">

					<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">

					` + (assets.client.css ?
						'<link rel="stylesheet" href="' + assets.client.css + '">' : ''
					) + css + `

					<script async src="` + assets.client.js + `"></script>
				</head>
				<body>
					<div id="root">` + html + `</div>
				</body>
			</html>`
		, {
			collapseWhitespace: true
			, removeComments: true
			, minifyCSS: true
			, minifyJS: true
		}))
	})