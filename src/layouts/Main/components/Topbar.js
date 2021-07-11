import React from 'react'

import {makeStyles, Typography, AppBar, Toolbar, Box, LinearProgress, Button, Avatar, IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Hidden } from '@material-ui/core';
import { Menu as MenuIcon, Input as InputIcon } from "@material-ui/icons";

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
  },
  flexGrow:{
    flexGrow: 1
  },
  profilebtn:{
    margin: '0 10px',
    padding: '5px 10px',
    '&:hover':{
      backgroundColor: theme.palette.primary.light
    }
  },
  signOutButton:{
    margin: '0 10px',
    padding: '5px 10px',
    '&:hover':{
      backgroundColor: theme.palette.primary.light
    }
  }
}));

function Topbar(props) {
    const classes = useStyles()
    const { className, onSidebarOpen, ...rest } = props;
    const loading = false
    return (
        <AppBar className={classes.appbar} position="fixed">
          <Box   style={{visibility: loading? 'visible': 'hidden'}}>
            <LinearProgress color="secondary" />
          </Box>
          <Hidden mdDown>
            <Toolbar>
              <Link to="/" style={{textDecoration: 'none'}}>
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
              <div className={classes.flexGrow} />
              <Button
                variant="text"
                className={classes.profilebtn}
                color="white"
                endIcon={<Avatar>J</Avatar>}>
                John Doe
              </Button>
              <Button
                className={classes.signOutButton}
                startIcon={<InputIcon />}
                color="inherit"
                >
                Log out
              </Button>
            </Toolbar>
          </Hidden>
          <Hidden lgUp>
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
                    Brand  Name lLGUP
                  </Typography>
                </Box>
              </Link>
              <div className={classes.flexGrow} />
              <IconButton color="secondary" onClick={onSidebarOpen}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
            {/* <Toolbar>
              <div className={classes.flexGrow} />
              <IconButton>
                <Avatar>J</Avatar>
              </IconButton>
              <IconButton>
                <InputIcon />
              </IconButton>
            </Toolbar> */}
          </Hidden>
        </AppBar>
    
    )
}

export default Topbar
