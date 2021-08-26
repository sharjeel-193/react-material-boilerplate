import {MdDashboard} from 'react-icons/md'
import {RiAdminFill} from 'react-icons/ri'
import {ImUsers} from 'react-icons/im'

const menu = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />

    },
    {
        title: 'Admins',
        path: '/admins',
        icon: <RiAdminFill />

    },
    {
        title: 'Users',
        path: '/users',
        icon: <ImUsers />

    },
]

export default menu