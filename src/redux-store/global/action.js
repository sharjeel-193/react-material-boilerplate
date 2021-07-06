import types from '../types';
import { copy } from '../../utils';

const loading = val => (dispatch, getState) => {
	const state = copy(getState().global);
	if (state.loading !== val) state.loading = val;
	dispatch({
		type: types.GLOBAL,
		value: state
	});
};
const update_status = ({ success = null, info = null, warning = null, error = null } = {}) => (dispatch, getState) => {
	const state = copy(getState().global);
	dispatch({
		type: types.GLOBAL,
		value: {
			...state, success, info, warning, error
		}
	});
}



export default { loading, update_status }
