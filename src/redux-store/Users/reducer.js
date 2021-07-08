import types from '../types'

const initialState = {
    users: [
        {
            first_name: 'Naveed',
            last_name: 'Raza',
            phone: '03457897172',
            isActive: true
        },
        {
            first_name: 'Jacob',
            last_name: 'Neilson',
            phone: '03001234567',
            isActive: false
        }
    ],
    error: {
        message: '',
        value: false
    },
    info: {
        message: '',
        value: false
    }
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case types.ADD_USER:
            console.log({'Add User Payload': action.payload})
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        default:
            return state
    }
}

export default userReducer