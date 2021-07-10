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


export default {addAdmin, editAdmin}