import { createMuiTheme } from '@material-ui/core/styles';

const color = {
	primary: {
		main: '#415FDD',
		light: '#82D0EF',
		dark: '#001057',
	},
	secondary: {
		main: '#657583',
		light: '#d7d9df',
		dark: '#314658',
	},
};

export const theme = createMuiTheme({
	palette: {
		background: {
			default: '#e9ebee',
		},
		...color,
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: 'none',
			},
		},
		MuiButtonBase: {
			root: {
				textTransform: 'none',
			},
		},
		MuiTypography: {
			root: {
				color: color.secondary.dark,
			},
		},
	},
});
