import React, {Fragment, useEffect, forwardRef, useState} from 'react'
import {Typography, Box, makeStyles, Button, Paper, FormControlLabel, Switch} from '@material-ui/core'
import MaterialTable from 'material-table'
import { useSelector, useDispatch } from 'react-redux'
import {changeUserActive} from '../../redux-store/Users/users'
import {AddModal, EditModal} from './components'
import Helmet from 'react-helmet'
import { AddBox, FirstPage, LastPage, ChevronLeft, ChevronRight, Search, ArrowDownward, Clear, Check, Edit, DeleteOutline, SaveAlt, FilterList, Remove, ViewColumn, Add } from '@material-ui/icons'
import Swal from 'sweetalert2'
import { useTheme } from '@material-ui/core'
const useStyle = makeStyles((theme) => ({
    addBtn: {
        '&:hover':{
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    }
}))

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  }

function Users(props) {
    const state = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const classes  = useStyle()
    const theme = useTheme()
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [modalUser, setModalUser] = useState({})
    useEffect(() => {
        console.log({'State in Users': state})
    }, [props])
    const handleEditModal = (rowData) => {
        setModalUser(rowData)
        setEditModal(true)
    }
    const changeUserStatus = (user) => {
        Swal.fire({
            title: 'Confirm',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: theme.palette.success.main,
            cancelButtonText: 'No',
            cancelButtonColor: theme.palette.error.main,
            // text: `Do you really want to change status of ${admin.first_name +" "+ admin.last_name}?`,
            text: `Do you really want to change status of ${user.first_name +" "+ user.last_name} ?`
        }).then((result) => {
            if(result.isConfirmed){
                // changeStatus(user.phone, !user.isActive)
                dispatch(changeUserActive({email: user.email, status: !user.isActive}))
            }
        })
    }
    return (
        <Fragment>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <div className="main-layout-content">
                <Box className="headings-box">
                    <Typography variant="h1" component="h1">Users</Typography>
                    <Button variant="outlined" color="primary" className={classes.addBtn} startIcon={<Add />} onClick={() => setAddModal(true)} >
                        Add User
                    </Button>
                </Box>
                <Paper className="table-container" elevation={1}>
                    <MaterialTable
                        title=""
                        icons={tableIcons}             
                        columns={[
                            {title: 'First Name', field: 'first_name'},
                            {title: 'Last Name', field: 'last_name'},
                            {title: 'Email', field: 'email'},
                            {title: 'Phone No', field: 'phone'},
                            {title: 'Status', field: 'isActive', filtering:false}
                        ]}
                        options={{
                            toolbar: false,
                            actionsColumnIndex: -1,
                            headerStyle: {
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.secondary.light,
                                fontWeight: 600,
                                fontSize: 16
                            },
                            rowStyle:{
                                alignItems: 'center',
                            },
                            search: false,
                                    filtering: true,
                                    title: false,
                        }}  
                        actions={[
                            {
                                icon: Edit,
                                tooltip: 'Edit User',
                                onClick: (event, rowData) => {
                                    handleEditModal(rowData)
                                }
                            }
                        ]}
                        data={state.users.map((user) => {
                            return {
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email,
                                phone: user.phone,
                                isActive: (
                                    <FormControlLabel
                                        control={<Switch  checked={user.isActive? true:false} onChange={() => changeUserStatus(user)} />}
                                        label={<Typography variant="body2" style={{color:user.isActive?'green':'red' }} >{user.isActive?'Active':'De Active'}</Typography>}
                                    />
                                )
                            }
                        })}
                    >

                    </MaterialTable>
                </Paper>
                <AddModal visible={addModal} closeModal={() => setAddModal(false)}  />
                <EditModal visible={editModal} closeModal={() => setEditModal(false)} currentUser={modalUser}  />
            </div>
        </Fragment>
    )
}

export default Users
