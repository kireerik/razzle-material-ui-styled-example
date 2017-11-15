import React from 'react'
import {hydrate} from 'react-dom'

import Application from './application/Main'

hydrate(<Application userAgent={navigator.userAgent} />, document.getElementById('root'))

if (module.hot)
	module.hot.accept()