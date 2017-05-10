import express from 'express'
import app from './server'

if (module.hot) {
	module.hot.accept('./server', () => {
		console.log('HMR Reloading "./server":')
	})

	console.info('Server-side HMR Enabled.')
}

export default express()
	.use((request, response) => app.handle(request, response))
	.listen(process.env.PORT, (error) => {
		if (error) {
			console.error(error)

			return
		}

		console.log('> Server started on port ' + process.env.PORT)
	})