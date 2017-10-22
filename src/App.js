import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as userActions from './actions/userActions'

const firebase = window.firebase;

class App extends Component {
	componentWillMount() {
		firebase.auth().onAuthStateChanged( user => {
      console.log('Auth State Changed:', user);
			this.props.userActions.setUser( user )
		})
	}
	render() {
		return (
			<div className="App">

				<AppBar />

				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		user: state.user
	}
}
function mapDispatchToProps(dispatch){
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

App = withRouter(connect( mapStateToProps, mapDispatchToProps )(App))

export default App;
