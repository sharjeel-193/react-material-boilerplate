import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';
import overrides from './overrides';
import typography from "./typography"

const theme = responsiveFontSizes(createMuiTheme({
	palette,
	typography,
	overrides,
	zIndex: {
		appBar: 1200,
		drawer: 1100
	},
}));

export default theme;
