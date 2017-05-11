// In this file, we create a React component which incorporates components provided by Material-UI.
import React, {Component} from 'react'

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
const muiTheme = getMuiTheme({ // it's optional to pass an object
	palette: {
		accent1Color: deepOrange500
	}
})

import {RaisedButton, Dialog, FlatButton} from 'material-ui'
import {deepOrange500} from 'material-ui/styles/colors'

const styles = {
	container: {
		textAlign: 'center'
		, paddingTop: 200
	}
}

class App extends Component {
	constructor(properties, context) {
		super(properties, context)

		this.state = {
			open: false
		}
	}

	handleRequestClose = () => {
		this.setState({
			open: false
		})
	}

	handleTouchTap = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const standardActions = (
			<FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose}/>
		)

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.container}>
					<h1>Material-UI</h1>
					<h2>example project</h2>
					<RaisedButton label="Super Secret Password" secondary={true} onTouchTap={this.handleTouchTap}/>

					<Dialog open={this.state.open} title="Super Secret Password" actions={standardActions} onRequestClose={this.handleRequestClose}>1-2-3-4-5</Dialog>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App