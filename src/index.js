import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Notes from './routes/Notes';
import NotesAdd from './routes/NotesAdd';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = createStore( reducers );

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/notes" component={Notes} />
					<Route exact path="/notes/add" component={NotesAdd} />
				</Switch>
			</App>
		</Router>
	</Provider>
	, document.getElementById('root'));
