import { combineReducers } from 'redux';
import todos from './todos';

//combine reducers, (only todo reducers i this app) into one reducer for the root index.

const combinedReducer = combineReducers({
	todos
})

export default combinedReducer;