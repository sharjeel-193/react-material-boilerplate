import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { global_reducer, auth_reducer, static_data_reducer, course_reducer, enrollment_reducer, contact_reducer } from "."

const store = createStore(combineReducers({
	global: global_reducer,
}), applyMiddleware(thunk))

export default store;
