import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Home = props => (
	<div>
		<h1>Home</h1>
		<Link to="/notes">Notes</Link>
	</div>
)

export default Home;