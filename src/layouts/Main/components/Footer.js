import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        textAlign:'center'
    },
    footer:{
        backgroundColor: 'black',
        marginTop: '50px',
        textAlign: 'center',
        color: 'white',
        padding: '20px 0'
    }
}))



function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
            <div className={classes.footer}>
                Copyright &copy; 2020 - Decade 2 Publications
            </div>
        </div>
    )
}

export default Footer
