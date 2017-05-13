import express from 'express'
import server from './server'

if (module.hot) {
	module.hot.accept('./server')
	console.info('Server-side HMR Enabled.\n')
}

export default express()
	.use((request, response) => server.handle(request, response))
	.listen(process.env.PORT, (error) => {
		if (error) {
			console.error(error)

			return
		}

		console.log('Server started at ' + process.env.HOST + ':' + process.env.PORT + '\n')
	})