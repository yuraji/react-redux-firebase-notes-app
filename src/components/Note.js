import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const firebase = window.firebase;

const styles = theme => ({
  card: {
    minWidth: 275,
  },
});

class Note extends Component {
	render(){
		const { title, text } = this.props;
		return (
			<Card>
				<CardContent>
					<Typography type="headline" component="h2">
						{title}
					</Typography>
					<Typography component="p">
						{text}
					</Typography>
				</CardContent>
			</Card>
			
		)
	}
}

const mapStateToProps = ({user})=>({user});
Note = withRouter( connect( mapStateToProps )( withStyles(styles)(Note) ) );

export default Note;