import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const addAdminSchema = Yup.object({
    email: Yup.string().email('Email is Invalid').required('Required'),
    first_name: Yup.string().min(3, 'Minimum Characters must be 3').max(20, 'Maximum Characters must be 20').required('Required'),
    last_name: Yup.string().min(3, 'Minimum Characters must be 3').max(20, 'Maximum Characters must be 20').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
})

export const editAdminSchema = Yup.object({
    first_name: Yup.string().min(3, 'Minimum Characters must be 3').max(20, 'Maximum Characters must be 20').required('Required'),
    last_name: Yup.string().min(3, 'Minimum Characters must be 3').max(20, 'Maximum Characters must be 20').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
})