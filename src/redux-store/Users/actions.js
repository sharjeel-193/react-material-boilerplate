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

const changeUserStatus = (phone, status) => {
    console.log('Dispatchinh Change User Status Action')
    return {
        type: types.CHANGE_USER_STATUS,
        payload: {phone, status}
    }
}


export default {addUser, editUser, changeUserStatus}