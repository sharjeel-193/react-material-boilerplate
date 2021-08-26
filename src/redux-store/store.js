
import { configureStore } from "@reduxjs/toolkit";

//Reducers Import

import adminReducer from './Admins/admins'
import userReducer from './Users/users'


//Store Definition

export default configureStore({
	reducer:{
		admin: adminReducer,
		user: userReducer,
		
	}
})

