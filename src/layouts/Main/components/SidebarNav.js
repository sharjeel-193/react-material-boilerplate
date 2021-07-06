import React, {forwardRef} from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Grid, Box, Typography, Modal, Backdrop, Grow } from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    item: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: colors.blueGrey[800],
		padding: '10px 8px',
		justifyContent: 'flex-start',
		textTransform: 'none',
		letterSpacing: 0,
		width: '100%',
		fontWeight: theme.typography.fontWeightMedium,
		fontFamily: 'Rubik',
		fontSize: '16px',
		'&:hover':{
			backgroundColor: '#E0E0E0'
		}
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
		fontWeight: theme.typography.fontWeightMedium,
		color: 'red',
		'& $icon': {
			color: theme.palette.primary.contrastText
		},
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		color: theme.palette.primary.contrastText,
		}
	}
}))
const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<Link {...props} />
	</div>
));
function SidebarNav(props) {
    const { pages, className, ...rest } = props;
    const classes = useStyles()
    return (
        <>
            <List {...rest} className={clsx(classes.root, className)}>
                {pages.map((page) => (
                    <ListItem className={classes.item} disableGutters key={page.title}>
                        <Button
							activeClassName={classes.active}
							className={classes.button}
							component={CustomRouterLink}
							
							to={page.path}>
							<div className={classes.icon}>{page.icon}</div>
							{page.title}
						</Button>
						
                    </ListItem>
                ))}
            </List>   
        </>
    )
}


SidebarNav.propTypes = {
	className: PropTypes.string,
	pages: PropTypes.array.isRequired
};

export default SidebarNav
