import express from 'express'
import {minify} from 'html-minifier'

import React from 'react'
import {renderToString} from 'react-dom/server'

import App from './App'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
, server = express()

server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (request, response) => {
		response.send(minify(
			`<!DOCTYPE HTML>
			<html lang="en">
				<head>
					<title>Welcome to Razzle</title>

					<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

					<meta name="description" content="">

					` + (assets.client.css ?
						'<link rel="stylesheet" href="' + assets.client.css + '">' : ''
					) + `

					<script async src="` + assets.client.js + `"></script>
				</head>
				<body>
					<div id="root">` + renderToString(<App userAgent={request.headers['user-agent']} />) + `</div>
				</body>
			</html>`
		, {
			collapseWhitespace: true
			, minifyCSS: true
			, minifyJS: true
		}))
	})

export default server