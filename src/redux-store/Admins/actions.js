import types from '../types'

const addAdmin = (admin) => {
    console.log('Dispatching Add Admin Action')
    return{
        type: types.ADD_ADMIN,
        payload: admin
    }
}

const editAdmin = (email, admin) => {
    console.log('Dispatching Edit Admin Action')
    return {
        type: types.UPDATE_ADMIN,
        payload: {email, admin}
    }
}

const changeAdminStatus = (email, status) => {
    console.log('Dispatching Change Admin Status Action')
    return {
        type: types.CHANGE_ADMIN_STATUS,
        payload: {email, status}
    }
}

export default {addAdmin, editAdmin,changeAdminStatus}