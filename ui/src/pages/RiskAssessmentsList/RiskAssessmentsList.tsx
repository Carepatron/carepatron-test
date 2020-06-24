import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, Grid, ListItemText, AppBar, Typography, Toolbar, Paper } from '@material-ui/core';

import { theme } from '../../util/theme';
import { mapRiskAssessmentToName } from '../../util/riskAssessments';
import BasePage from '../../components/BasePage';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			marginTop: theme.spacing(1),
		},
		title: {
			flexGrow: 1,
			color: 'white',
		},
		item: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		clickableItem: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			'&:hover': {
				boxShadow:
					'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
			},
		},
	})
);

export interface IProps {
	riskAssessments: RiskAssessmentType[];
	isLoading: boolean;
	fetchRiskAssessments: () => void;
}

export function RiskAssessmentsList(props: IProps) {
	const classes = useStyles(theme);

	const { riskAssessments, isLoading, fetchRiskAssessments } = props;

	React.useEffect(() => {
		fetchRiskAssessments();
	}, [fetchRiskAssessments]);

	if (isLoading) {
		return <div>....Loading</div>;
	}

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Carepatron
					</Typography>
				</Toolbar>
			</AppBar>
			<BasePage maxPageWidth='md'>
				<Paper className={classes.root}>
					<List dense>
						{riskAssessments.map((assessment) => (
							<ListItem button className={classes.clickableItem}>
								<ListItemText primary={mapRiskAssessmentToName(assessment)} />
							</ListItem>
						))}
					</List>
				</Paper>
			</BasePage>
		</>
	);
}

export default React.memo(RiskAssessmentsList);
