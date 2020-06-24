import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
	});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
