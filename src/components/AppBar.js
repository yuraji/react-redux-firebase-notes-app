import React from 'react'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const firebase = window.firebase;

class Appbar extends React.Component{
	login = e => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	}
	logout = e => firebase.auth().signOut()
	goto = path => e => {
		this.props.history.push(path);
	}
	render(){
		const { user } = this.props;
		return (
			<AppBar position="static">
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" >
							Title
						</Typography>

						<Button color="contrast" onClick={this.goto('/')}>Home</Button>
						<Button color="contrast" onClick={this.goto('/notes')}>Notes</Button>
						{
							user ?
							<Button color="contrast" onClick={this.logout}>Logout [{user.email}]</Button> :
							<Button color="contrast" onClick={this.login}>Login</Button>
						}
					</Toolbar>
				</AppBar>
		)
	}
} 

function mapStateToProps(state){
	return {
		user: state.user
	}
};
// const mapStateToProps = (state) => { return { user: state.user }  }
// const mapStateToProps = ({user}) => { return { user: user }  }
// const mapStateToProps = ({user}) => ({ user: user })
// const mapStateToProps = ({user})=>({user});

Appbar = withRouter( connect( mapStateToProps )( Appbar ) );

export default Appbar;