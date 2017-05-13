import React from 'react'
import {render} from 'react-dom'

import Application from './application/Main'

render(<Application userAgent={navigator.userAgent} />, document.getElementById('root'))

if (module.hot)
	module.hot.accept()