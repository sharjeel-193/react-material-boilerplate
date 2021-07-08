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
    switch(action.type){
        case types.ADD_ADMIN:
            console.log({'Add Admin Payload': action.payload})
            return {
                ...state,
                admins: state.admins.concat(action.payload)
            }
        default:
            return state
    }
}

export default adminReducer