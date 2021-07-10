import types from '../types'

const addUser = (user) => {
    console.log('Dispatching Add User Action')
    return{
        type: types.ADD_USER,
        payload: user
    }
}

const editUser = (phone, user) => {
    console.log('Dispatchinf Edit User Action')
    return {
        type: types.UPDATE_USER,
        payload: {phone, user}
    }
}


export default {addUser, editUser}