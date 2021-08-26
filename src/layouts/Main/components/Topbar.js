import React from 'react'
import {makeStyles, AppBar, Toolbar, Box, LinearProgress, Button, IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Hidden } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import {FaUserCircle, FaSignOutAlt} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
	appbar:{
    backgroundColor: theme.palette.primary.main
  },
  logo: {
    height: 70,
    margin: '5px 0',
    [theme.breakpoints.down('md')]: {
      height: 60
    }
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  signOutBtn:{
    
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
          <Toolbar className={classes.toolbar}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Box className={classes.logoBox}>
                  <img
                    className={classes.logo}
                    src="assets/images/logo-footer.png"
                    alt="Logo"
                    srcset=""
                  />
                </Box>
              </Link>
              <Hidden only={['xs','sm','md']}>
                <Button color="secondary" variant="outlined"  endIcon={<FaSignOutAlt />} className={classes.signOutBtn}>Log Out</Button>
              </Hidden>
              <Hidden only={['lg', 'xl']}>
                  <IconButton onClick={onSidebarOpen}>
                      <Menu />
                  </IconButton>
              </Hidden>
            </Toolbar>
          
        </AppBar>
    
    )
}

export default Topbar
