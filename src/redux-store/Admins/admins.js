import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'Admins',
    initialState:{
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
    },
    reducers:{
        addAdmin: (state, action) => {
            console.log({'Add Admin Action': action.payload})
            return {...state, admins: state.admins.concat(action.payload)}
        },
        updateAdmin: (state, action) => {
            console.log({'Update Admin Action': action.payload})
            const index = state.admins.findIndex((admin) => admin.email==action.payload.email)
            const newAdmins = [...state.admins]
            const updatedAdmin = {
                ...newAdmins[index],
                first_name: action.payload.admin.first_name,
                last_name: action.payload.admin.last_name,
                phone: action.payload.admin.phone,
            }
            newAdmins[index] = updatedAdmin
            // newAdmins[index].first_name = action.payload.admin.first_name
            // newAdmins[index].last_name = action.payload.admin.last_name
            // newAdmins[index].phone = action.payload.admin.phone
            return{
                ...state,
                admins: newAdmins
            }
        },
        changeAdminActive: (state, action) => {
            console.log({'Change Admin Status Action': action.payload})
            const index = state.admins.findIndex((admin) => admin.email==action.payload.email)
            const newAdmins = [...state.admins]
            const updatedAdmin = {
                ...newAdmins[index],
                isActive: action.payload.status
            }
            newAdmins[index] = updatedAdmin
            // newAdmins[index].isActive = action.payload.status
            return{
                ...state,
                admins: newAdmins
            }
        }
    }
})

export const {addAdmin, updateAdmin, changeAdminActive} = adminSlice.actions
export default adminSlice.reducer