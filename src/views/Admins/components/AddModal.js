import React from 'react'
import Modal from 'react-awesome-modal'
import {Field, Form, Formik, ErrorMessage} from 'formik' 
import { addAdminSchema } from '../adminFormSchema'
import { Box, Button, OutlinedInput, InputLabel, Typography, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {addAdmin} from '../../../redux-store/Admins/admins'


const useStyles = makeStyles((theme) => ({
    cancelModalBtn: {
        backgroundColor: theme.palette.error.main,
        color: 'white',
        '&:hover':{
            backgroundColor: theme.palette.error.dark
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
    const handleAdminAdd = (values) => {
        const adminToAdd  = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
            isActive: true
        }
        console.log({'Add': adminToAdd})
        // addAdmin(adminToAdd)
        dispatch(addAdmin(adminToAdd))
        closeModal()
    }
    const AddManagerForm = () => {
        return(
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: ''
                }}
                validationSchema={addAdminSchema}
                onSubmit={values => {
                    handleAdminAdd(values)
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
        <div>
            <Modal visible={visible} width="500" effect="fadeInUp" onClickAway={closeModal}>
                <div className="modal-container">
                    <Typography variant="h4" color="primary" mb={3}>Add Admin</Typography>
                    <hr className="modal-line" />
                    <AddManagerForm />
                </div>
            </Modal>
        </div>
    )
}



export default AddModal
