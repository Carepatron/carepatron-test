import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

function configureStore() {
	const store = createStore(
		createRootReducer(history), // root reducer with router state
		compose(
			applyMiddleware(
				routerMiddleware(history) // for dispatching history actions
				// ... other middlewares ...
			)
		)
	);

	return store;
}

export default configureStore();
