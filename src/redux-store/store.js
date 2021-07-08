import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { global_reducer, admin_reducer, user_reducer } from "."

const store = createStore(combineReducers({
	global: global_reducer,
	Admins: admin_reducer,
	Users: user_reducer
}), applyMiddleware(thunk))

export default store;
