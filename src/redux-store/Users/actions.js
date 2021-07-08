import types from '../types'

const addUser = (user) => {
    console.log('Dispatching Add User Action')
    return{
        type: types.ADD_USER,
        payload: user
    }
}


export default {addUser}