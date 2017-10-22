import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const firebase = window.firebase;

class NotesAdd extends Component {
	state = { title: '', text: '' }

	handleChange = name => e => {
		this.setState({
			[name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		let uid = this.props.user && this.props.user.uid;
		console.log('submit', uid);
		if(!uid) { return; }
		firebase.database().ref(`notes/${uid}`).push({
			title: this.state.title,
			text: this.state.text,
		});
		this.props.history.push('/notes');
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<TextField
					id="title"
					label="Title"
					value={this.state.title}
					onChange={this.handleChange('title')}
					margin="normal"
				/>
				<TextField
					id="textfield"
					label="Text"
					multiline
					rowsMax="10"
					value={this.state.text}
					onChange={this.handleChange('text')}
					margin="normal"
				/>
				<Button onClick={this.handleSubmit}>Add New Note</Button>
			</form>
		)
	}
}

const mapStateToProps = ({user})=>({user});
export default withRouter(connect(mapStateToProps)(NotesAdd));