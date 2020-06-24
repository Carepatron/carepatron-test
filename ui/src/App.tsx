import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Route } from 'react-router';

import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import './App.css';
import { theme } from './util/theme';

import RiskAssessmentsList from './pages/RiskAssessmentsList';

interface IProps {
	history: History<any>;
}

function App(props: IProps) {
	const { history } = props;

	return (
		<ThemeProvider theme={theme}>
			<ConnectedRouter history={history} context={ReactReduxContext}>
				<Route default component={RiskAssessmentsList} />
			</ConnectedRouter>
		</ThemeProvider>
	);
}

export default App;
