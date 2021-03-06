import React from 'react'
import Modal from 'react-awesome-modal'
import {Field, Form, Formik, ErrorMessage} from 'formik' 
import {editAUserSchema} from '../userFormSchema'
import { Box, Button, OutlinedInput, InputLabel, Typography, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {updateUser} from '../../../redux-store/Users/users'

const useStyles = makeStyles((theme) => ({
    cancelModalBtn: {
        backgroundColor: theme.palette.error.main,
        color: 'white',
        '&:hover':{
            backgroundColor: theme.palette.error.dark
        },
        width:100
    },
    updateModalBtn: {
        backgroundColor: theme.palette.warning.light,
        color: 'white', 
        '&:hover':{
            backgroundColor: theme.palette.warning.main
        },
        width:100
    }
}))

function EditModal(props) {
    const {visible, closeModal, currentUser} = props
    const dispatch = useDispatch()
    const classes = useStyles()
    const handleUserEdit = (values) => {
        const userToEdit  = {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone
        }
        console.log({'Edit': userToEdit})
        // editUser(currentUser.phone, userToEdit)
        dispatch(updateUser({email: currentUser.email, user: userToEdit}))
        closeModal()
    }
    const EditUserForm = () => {
        return(
            <Formik
                initialValues={{
                    first_name: currentUser.first_name,
                    last_name: currentUser.last_name,
                    phone: currentUser.phone
                }}
                validationSchema={editAUserSchema}
                onSubmit={values => {
                    handleUserEdit(values)
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
                                <InputLabel style={{marginBottom:'5px'}}>Phone</InputLabel>
                                <Field type="text" name="phone" as={OutlinedInput} fullWidth error={errors.phone} />
                                <ErrorMessage name="phone">
                                    {error =><Typography color="error" variant="subtitle2">{error}</Typography>}
                                </ErrorMessage>
                            </Box>
                            <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
                                <Button variant="contained" className={classes.cancelModalBtn} onClick={closeModal}>Cancel</Button>
                                <Button type="submit" variant="contained" className={classes.updateModalBtn}>Update</Button>
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
                <Typography variant="h4" color="primary" mb={3}>Edit User</Typography>
                <hr className="modal-line" />
                <EditUserForm />
            </div>
        </Modal>
    )
}

export default EditModal
