import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Note from '../components/Note'
import './Notes.css'

const firebase = window.firebase;

class Notes extends Component {

	state = { notes: [] }

	componentWillMount(){
		let uid = this.props.user && this.props.user.uid;
		console.log('will mount', uid);
		firebase.database().ref(`notes/${uid}`).once('value', s => {
			const notesData = s.val(); // object, {}
			if(!notesData) { return; }
			// console.log( 'notesData:',  JSON.stringify(notesData));
			const keys = Object.keys( notesData );
			// console.log( 'keys:',  JSON.stringify( keys) );
			const notes = keys.map( id => ({ ...notesData[id], id }) );
			// console.log( 'notes:',  JSON.stringify( notes) );
			this.setState({ notes });
		})
	}
	render(){
		const { notes } = this.state;
		return (
			<div>
				<h1>Notes</h1>
				<Link to="/notes/add">Add Note</Link>
				<div className="NotesContainer">
					{ notes.map( note => <Note key={note.id} {...note}  />  ) }
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({user})=>({user});
export default connect(mapStateToProps)(Notes);