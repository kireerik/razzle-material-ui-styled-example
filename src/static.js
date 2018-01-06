import http from 'http'
import fs from 'fs-extra'

const staticDirectory = process.env.RAZZLE_STATIC_PATH || 'static'

export default server => {
	fs.emptyDirSync(staticDirectory)

	fs.copy(process.env.RAZZLE_PUBLIC_DIR, staticDirectory)

	http.get({url: 'http://' + process.env.HOST + ':' + process.env.PORT
		, headers: {'User-Agent': 'all'}
	}, response =>
		response.on('data', html =>
			fs.writeFile(staticDirectory + '/' + 'index.html', html, error => {
				if (error)
					console.error(error)

				server.close()

				console.log('Static site generated.\n')
			})
		)
	)
}