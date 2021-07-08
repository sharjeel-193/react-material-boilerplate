import React, {forwardRef, useEffect} from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, ListItemIcon, ListItemText, Button, colors, Grid, Box, Typography, Modal, Backdrop, Grow, Hidden, Toolbar, IconButton, Avatar } from '@material-ui/core';
import {Link, NavLink, useLocation} from 'react-router-dom'
import { Menu as MenuIcon, Input as InputIcon } from "@material-ui/icons";
import {Menu, MenuList, MenuItem} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	menuList:{
		width:'100%'
	},
	menuItem:{
		width:'100%',
		padding: 0,
		margin: '5px 0',
		// backgroundColor: 'red'
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
		width:'300px',
		display: 'flex',
		justifyContent: 'flex-start',
		color: theme.palette.primary.dark,
	},
	
	icon: {
		color: theme.palette.icon,
		width: 32,
		height: 32,
		display: 'flex',
		alignItems: 'center',
		marginRight: theme.spacing(1)
	},
	active: {
		backgroundColor: theme.palette.primary.main,
		color:'white',
		'& $icon':{
			color: 'white'
		},
		'&:hover':{
			backgroundColor: theme.palette.primary.main,
			color:'white'
		}
	},
	
	listItemSelected: {
		backgroundColor: 'blue'
	}
}))
const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<Link {...props} />
	</div>
));

const MenuRouterLink = forwardRef((props, ref) => (
	<div ref={ref}>
		<NavLink {...props} />
	</div>
))

function SidebarNav(props) {
    const { pages, className, ...rest } = props;
	const location = useLocation()
    const classes = useStyles()
	useEffect(() => {
		console.log(location.pathname)	
	},[])
	// const renderLink = React.useMemo(
	// 	() => React.forwardRef<HTMLAnchorElement>((itemProps, ref) => <Link to={itemProps.path} ref={ref} {...itemProps} />),
	// 	[itemProps.path],
	//   )
    return (
        <>
			<MenuList className={classes.menuList}>
				{pages.map((page, index) => {
					console.log(page, index)
					return(
						<MenuItem disableGutters className={classes.menuItem} >
							<Button className={classes.menuBtn} to={page.path} component={MenuRouterLink} activeClassName={classes.active}>
								<div className={classes.icon}>{page.icon}</div>
								<Typography variant="inherit">
									{page.title}
								</Typography>
							</Button>
							

						</MenuItem>
					)
				})}
			</MenuList>

			<Hidden lgUp>
				<Toolbar>
				<div className={classes.flexGrow} />
				<IconButton>
					<Avatar>J</Avatar>
				</IconButton>
				<IconButton>
					<InputIcon />
				</IconButton>
				</Toolbar>
			</Hidden>
        </>
    )
}


SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
};

export default SidebarNav
