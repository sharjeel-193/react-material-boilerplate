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
    let index
    let newUsers
    switch(action.type){
        case types.ADD_USER:
            console.log({'Add User Payload': action.payload})
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        case types.UPDATE_USER:
            console.log({'Edit User Payload': action.payload})
            index = state.users.findIndex((user) => user.phone==action.payload.phone)
            newUsers = [...state.users]
            newUsers[index].first_name = action.payload.user.first_name
            newUsers[index].last_name = action.payload.user.last_name
            return {
                ...state,
                users: newUsers
            }
        default:
            return state
    }
}

export default userReducer