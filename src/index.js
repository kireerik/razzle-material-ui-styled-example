import express from 'express'
import server from './server'

import generateStaticSite from './static'

if (module.hot) {
	module.hot.accept('./server')
	console.info('Server-side HMR Enabled.\n')
}

const mainServer = express()
	.use((request, response) => server.handle(request, response))

, serverInstance = mainServer
	.listen(process.env.PORT, error => {
		if (error) {
			console.error(error)

			return
		}

		console.log('Server started at ' + process.env.HOST + ':' + process.env.PORT + '.\n')

		if (process.env.RAZZLE_STATIC)
			generateStaticSite(serverInstance)
	})

export default mainServer