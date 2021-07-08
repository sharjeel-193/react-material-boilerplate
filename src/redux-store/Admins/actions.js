import types from '../types'

const addAdmin = (admin) => {
    console.log('Dispatching Add Admin Action')
    return{
        type: types.ADD_ADMIN,
        payload: admin
    }
}


export default {addAdmin}