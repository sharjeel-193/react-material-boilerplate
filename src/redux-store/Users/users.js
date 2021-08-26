import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'Users',
    initialState:{
        users: [
            {
                first_name: 'Naveed',
                last_name: 'Raza',
                email: 'naveed.raza@gmail.com',
                phone: '03457897172',
                isActive: true
            },
            {
                first_name: 'Jacob',
                last_name: 'Neilson',
                email: 'jacob.neilson@gmail.com',
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
        addUser: (state, action) => {
            console.log({'Add User Action': action.payload})
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        },
        updateUser: (state, action) => {
            console.log({'Update User Action': action.payload})
            const index = state.users.findIndex((user) => user.email==action.payload.email)
            const newUsers = [...state.users]
            const updatedUser = {
                ...newUsers[index],
                first_name: action.payload.user.first_name,
                last_name: action.payload.user.last_name,
                phone: action.payload.user.phone,
            }
            newUsers[index] = updatedUser
            return {
                ...state,
                users: newUsers
            }
        },
        changeUserActive: (state, action) => {
            console.log({'Change User Status Action': action.payload})
            const index = state.users.findIndex((user) => user.email==action.payload.email)
            const newUsers = [...state.users]
            const updatedUser = {
                ...newUsers[index],
                isActive: action.payload.status
            }
            newUsers[index] = updatedUser
            return {
                ...state,
                users: newUsers
            }
        }
    }
})

export const {addUser, updateUser, changeUserActive} = userSlice.actions
export default userSlice.reducer