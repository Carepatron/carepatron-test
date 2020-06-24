import React from 'react';
import { Grid } from '@material-ui/core';

interface IProps {
	children?: React.ReactNode;
	maxPageWidth?: PageWidth;
}

let pageMaxWidthMap: Map<PageWidth, number> = new Map<PageWidth, number>();
pageMaxWidthMap['sm'] = 4;
pageMaxWidthMap['md'] = 5;
pageMaxWidthMap['lg'] = 6;
pageMaxWidthMap['xl'] = 8;
pageMaxWidthMap['xxl'] = 10;

const defaultMaxPageWidth = 'lg';

export default function BasePage(props: IProps) {
	const { maxPageWidth, ...otherProps } = props;

	const size = pageMaxWidthMap[maxPageWidth || defaultMaxPageWidth];

	return (
		<Grid container justify='center'>
			<Grid item lg={size}>
				{props.children}
			</Grid>
		</Grid>
	);
}
