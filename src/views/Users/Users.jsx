import React, {Fragment, useEffect, forwardRef, useState} from 'react'
import {Typography, Box, makeStyles, Button, Paper, FormControlLabel, Switch} from '@material-ui/core'
import MaterialTable from 'material-table'
import {connect} from 'react-redux'
import { user_actions } from '../../redux-store'
import {AddModal, EditModal} from './components'
import Helmet from 'react-helmet'
import { AddBox, FirstPage, LastPage, ChevronLeft, ChevronRight, Search, ArrowDownward, Clear, Check, Edit, DeleteOutline, SaveAlt, FilterList, Remove, ViewColumn, Add } from '@material-ui/icons'

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
    const {usersList, addUser, editUser} = props
    const classes  = useStyle()
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [modalUser, setModalUser] = useState({})
    useEffect(() => {
        console.log({'Props in Users': props})
    }, [props])
    const handleEditModal = (rowData) => {
        setModalUser(rowData)
        setEditModal(true)
    }
    return (
        <Fragment>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <div className="main-layout-content">
                <Box className="headings-box">
                    <Typography variant="h1" component="h1">Users Screen</Typography>
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
                            {title: 'Phone No', field: 'phone'},
                            {title: 'Status', field: 'isActive', filtering:false}
                        ]}
                        options={{
                            search: false,
                            filtering: true,
                            title: false,
                            actionsColumnIndex: -1,
                            toolbarButtonAlignment:"left"
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
                        data={usersList.map((user) => {
                            return {
                                first_name: user.first_name,
                                last_name: user.last_name,
                                phone: user.phone,
                                isActive: (
                                    <FormControlLabel
                                        control={<Switch  checked={user.isActive? true:false}/>}
                                        label={<Typography variant="body2" style={{color:user.isActive?'green':'red' }} >{user.isActive?'Active':'De Active'}</Typography>}
                                    />
                                )
                            }
                        })}
                    >

                    </MaterialTable>
                </Paper>
                <AddModal visible={addModal} closeModal={() => setAddModal(false)} addUser={addUser} />
                <EditModal visible={editModal} closeModal={() => setEditModal(false)} currentUser={modalUser} editUser={editUser} />
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        usersList: state.Users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(user_actions.addUser(user)),
        editUser: (phone, user) => dispatch(user_actions.editUser(phone, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
