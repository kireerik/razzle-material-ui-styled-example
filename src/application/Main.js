// In this file, we create a React component which contains components provided by Material-UI.
import React, {Component} from 'react'
import styled, {injectGlobal} from 'styled-components'

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {deepOrange500} from 'material-ui/styles/colors'

import {RaisedButton, Dialog, FlatButton} from 'material-ui'

injectGlobal`
	h1, h2 {
		font-family: 'Roboto', sans-serif;
	}
`

const Div = styled.div`
	text-align: center;
	padding-top: 200px;
`

class Main extends Component {
	constructor(properties, context) {
		super(properties, context)

		this.muiTheme = getMuiTheme({
			palette: {
				accent1Color: deepOrange500
			}
			, userAgent: properties.userAgent
		})

		this.state = {
			open: false
		}
	}

	handleRequestClose = () => this.setState({
		open: false
	})

	handleTouchTap = () => this.setState({
		open: true
	})

	render = () =>
		<MuiThemeProvider muiTheme={this.muiTheme}>
			<Div>
				<h1>Material-UI</h1>
				<h2>example project</h2>
				<RaisedButton label="Super Secret Password" secondary={true} onTouchTap={this.handleTouchTap} />

				<Dialog open={this.state.open} title="Super Secret Password" actions={
					<FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose} />
				} onRequestClose={this.handleRequestClose}>1-2-3-4-5</Dialog>
			</Div>
		</MuiThemeProvider>
}

export default Main