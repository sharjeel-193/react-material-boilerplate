import React, {forwardRef, useEffect} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Box, Typography, Hidden, } from '@material-ui/core';
import {Link, NavLink, useLocation} from 'react-router-dom'
import {FaSignOutAlt} from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
	menuList:{
		width:'100%',
		marginTop: 20
	},
    item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0,
		margin: '0px',
		width: '100%',
		backgroundColor:'red'
	},
	menuBtn:{
		margin: 0,
		fontSize: 14,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 2,
		display: 'flex',
		justifyContent: 'flex-start',
		color: theme.palette.primary.dark,
	},
	
	icon: {
		color: theme.palette.primary.dark,
		width: 50,
		height: 50,
		display: 'flex',
		alignItems: 'center',
		margin: 0
	},
	active: {
		backgroundColor: theme.palette.primary.main,
		fontWeight: 600,
		color:theme.palette.secondary.light,
		'& $icon':{
			color: theme.palette.secondary.light
		},
		'&:hover':{
			backgroundColor: theme.palette.primary.main,
			color:theme.palette.secondary.light
		}
	},
	logOutBtn:{
		margin: '40px 0',
		padding: '10px 0'
	}
}))
const MenuRouterLink = forwardRef((props, ref) => (
	<div ref={ref}>
		<NavLink {...props} />
	</div>
))

function SidebarNav(props) {
    const { pages, className, ...rest } = props;
	const location = useLocation()
    const classes = useStyles()
	// useEffect(() => {
	// 	console.log(location.pathname)	
	// },[])
    return (
        <>
			<Box className={classes.menuList}>
				{pages.map((page, index) => {
					return(
						<Button className={classes.menuBtn} to={page.path} startIcon={page.icon} component={MenuRouterLink} activeClassName={classes.active}>
								{/* <div className={classes.icon}>{page.icon}</div>
								<Typography variant="inherit" style>
									{page.title}
								</Typography> */}
								{page.title}
							</Button>
					)
				})}
			</Box>

			<Hidden only={['xl','lg']} >
				<Button color="primary" variant="outlined" fullWidth endIcon={<FaSignOutAlt />} className={classes.logOutBtn}>Log Out</Button>
			</Hidden>
        </>
    )
}


SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
};

export default SidebarNav
