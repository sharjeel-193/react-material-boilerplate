import React from 'react'
import Modal from 'react-awesome-modal'
import {Field, Form, Formik, ErrorMessage} from 'formik' 
import {addUserSchema} from '../userFormSchema'
import { Box, Button, OutlinedInput, InputLabel, Typography, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {addUser} from '../../../redux-store/Users/users'



const useStyles = makeStyles((theme) => ({
    cancelModalBtn: {
        backgroundColor: theme.palette.error.light,
        color: 'white',
        '&:hover':{
            backgroundColor: theme.palette.error.main
        },
        width:100
    },
    addModalBtn: {
        backgroundColor: theme.palette.success.main,
        color: 'white', 
        '&:hover':{
            backgroundColor: theme.palette.success.dark
        },
        width:100
    }
}))

function AddModal(props) {
    const {visible, closeModal} = props
    const dispatch = useDispatch()
    const classes = useStyles()
    const handleUserAdd = (values) => {
        const userToAdd  = {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone,
            email: values.email,
            isActive: true
        }
        console.log({'Add': userToAdd})
        dispatch(addUser(userToAdd))
        closeModal()
    }
    const AddUserForm = () => {
        return(
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    phone: '', 
                    email: ''
                }}
                validationSchema={addUserSchema}
                onSubmit={values => {
                    handleUserAdd(values)
                }}
            >
                {({errors, touched}) => {
                    return(
                        <Form>
                            <Box mb={2}>
                                <InputLabel style={{marginBottom:'5px'}}>First Name</InputLabel>
                                <Field type="text" name="first_name" as={OutlinedInput} fullWidth error={errors.first_name} />
                                <ErrorMessage name="first_name">
                                    {error =><Typography color="error" variant="subtitle2">{error}</Typography>}
                                </ErrorMessage>
                            </Box>
                            <Box mb={2}>
                                <InputLabel style={{marginBottom:'5px'}}>Last Name</InputLabel>
                                <Field type="text" name="last_name" as={OutlinedInput} fullWidth error={errors.last_name} />
                                <ErrorMessage name="last_name">
                                    {error =><Typography color="error" variant="subtitle2">{error}</Typography>}
                                </ErrorMessage>
                            </Box>
                            <Box mb={2}>
                                <InputLabel style={{marginBottom:'5px'}}>Email</InputLabel>
                                <Field type="text" name="email" as={OutlinedInput} fullWidth error={errors.email} />
                                <ErrorMessage name="email">
                                    {error =><Typography color="error" variant="subtitle2">{error}</Typography>}
                                </ErrorMessage>
                            </Box>
                            <Box mb={2}>
                                <InputLabel style={{marginBottom:'5px'}}>Phone No</InputLabel>
                                <Field type="text" name="phone" as={OutlinedInput} fullWidth error={errors.phone} />
                                <ErrorMessage name="phone">
                                    {error =><Typography color="error" variant="subtitle2">{error}</Typography>}
                                </ErrorMessage>
                            </Box>
                            <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
                                <Button variant="contained" className={classes.cancelModalBtn} onClick={closeModal}>Cancel</Button>
                                <Button type="submit" variant="contained" className={classes.addModalBtn}>Add</Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
        )
    }
    return (
        <Modal visible={visible} width="500" effect="fadeInUp" onClickAway={closeModal}>
            <div className="modal-container">
                <Typography variant="h4" color="primary" mb={3}>Add User</Typography>
                <hr className="modal-line" />
                <AddUserForm />
            </div>
        </Modal>
    )
}

export default AddModal
