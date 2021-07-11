import React from 'react'

import {makeStyles, Typography, AppBar, Toolbar, Box, LinearProgress} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	appbar:{
    backgroundColor: theme.palette.primary.main
  },
  logo: {
    height: 30
  },
  logoBox:{
    padding: '5px 0',
    display: 'flex',
    alignItems: 'center'
  },
  brandName:{
    margin: '0 10px',
    color: theme.palette.secondary.light,
  }
}));

function Topbar() {
    const classes = useStyles()
  const loading = false
    return (
        <AppBar className={classes.appbar} position="fixed">
          <Box   style={{visibility: loading? 'visible': 'hidden'}}>
            <LinearProgress color="secondary" />
          </Box>
          <Toolbar>
            <Link to="/dashboard" style={{textDecoration: 'none'}}>
              <Box className={classes.logoBox}>
                <img
                  className={classes.logo}
                  src="/images/logo.png"
                  alt="Logo"
                  srcset=""
                />
                <Typography variant="h4" className={classes.brandName}>
                  Brand  Name
                </Typography>
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
    
    )
}

export default Topbar
