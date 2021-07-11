import types from "../types"

const initialState = {
    admins: [
        {
            first_name: 'M. Sharjeel',
            last_name: 'Maqsood',
            email: 'sharjeel.maqsood@gmail.com',
            phone: '03457897172',
            isActive: true
        },
        {
            first_name: 'Qasim',
            last_name: 'Khan',
            email: 'qasim.khan@gmail.com',
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

const adminReducer = (state=initialState, action) => {
    let index
    let newAdmins
    switch(action.type){
        case types.ADD_ADMIN:
            console.log({'Add Admin Payload': action.payload})
            return {
                ...state,
                admins: state.admins.concat(action.payload)
            }
        case types.UPDATE_ADMIN:
            console.log({'Edit Admin Payload': action.payload})
            index = state.admins.findIndex((admin) => admin.email==action.payload.email)
            newAdmins = [...state.admins]
            newAdmins[index].first_name = action.payload.admin.first_name
            newAdmins[index].last_name = action.payload.admin.last_name
            newAdmins[index].phone = action.payload.admin.phone
            return{
                ...state,
                admins: newAdmins
            }
        case types.CHANGE_ADMIN_STATUS:
            console.log({'Change Admin Status Payload': action.payload})
            index = state.admins.findIndex((admin) => admin.email==action.payload.email)
            newAdmins = [...state.admins]
            newAdmins[index].isActive = action.payload.status
            return{
                ...state,
                admins: newAdmins
            }
        default:
            return state
    }
}

export default adminReducer