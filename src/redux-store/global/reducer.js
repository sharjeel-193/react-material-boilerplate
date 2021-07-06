import types from '../types';
const initial = {
	loading: false,
	success: null,
	info: null,
	warning: null,
	error: null,
	contact: false,
};
const global_reducer = (state = initial, action) => {
	switch (action.type) {
		case types.GLOBAL:
			return action.value;
		case types.GLOBAL_RESET:
			return initial;
		case types.ACTIVE_CONTACT:
			return {...state, contact: true}
		case types.REMOVE_CONTACT:
			return {...state, contact: false}
		default:
			return state;
	}
};

export default global_reducer
