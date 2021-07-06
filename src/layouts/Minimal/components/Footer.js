import { Typography } from '@material-ui/core'
import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    footer:{
        backgroundColor: theme.palette.secondary.dark,
        textAlign: 'center',
        padding: '10px'
    },
    footerText: {
        color: 'white',
    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Typography variant="subtitle1" className={classes.footerText}>
                &copy; Copyrights 2021 - Made with &hearts; by M. Sharjeel
            </Typography>
        </Box>
    )
}

export default Footer
