import { combineReducers } from 'redux';
// import notes from './notesReducer'
import user from './userReducer'

const rootReducer = combineReducers({
	// notes,
	user
});

export default rootReducer;