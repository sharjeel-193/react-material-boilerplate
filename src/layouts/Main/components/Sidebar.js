import React, { Fragment } from 'react'
import {Avatar, Box, Drawer, makeStyles} from '@material-ui/core'
import SidebarNav from './SidebarNav'
import clsx from 'clsx';
import menu from '../menu'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up("lg")]: {
			marginTop: 64,
			height: "calc(100% - 64px)",
		},
		// [theme.breakpoints.down("md")]: {
		// 	width: "100vw",
		// },
		scrollbarWidth: "none",
	},
	root: {
		backgroundColor: theme.palette.secondary.light,
		display: "flex",
		flexDirection: "column",
		height: "100%",
		padding: theme.spacing(2),
		paddingTop: theme.spacing(5),
	},
	profileBox:{
		textAlign: 'center',
		color: 'white'
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	nav: {
		marginBottom: theme.spacing(2),
	},
	welcome: {
		fontWeight: 300,
		margin: theme.spacing(4),
		textAlign: "center",
	},
	profileBtn:{
		color: 'white'
	}
}));

function Sidebar(props) {
    const { open, variant, onClose, className, ...rest } = props;
    const classes = useStyles()

    return (
        <Fragment>
            <Drawer
                anchor="left"
				classes={{ paper: classes.drawer }}
				onClose={onClose}
				open={open}
				variant={variant}
            >
                <div
                    {...rest}
					className={clsx(classes.root, className)}
					onClick={onClose}
                >
					<Box className={classes.profileBox}>
						<Link to="/profile" style={{textDecoration:'none'}}>
							<Avatar style={{margin: '10px auto'}}>J</Avatar>
							<h2 className={classes.profileBtn}>John Doe</h2>
						</Link>
					</Box>
                    <SidebarNav className={classes.nav} pages={menu} />


                </div>
            </Drawer>
        </Fragment>
    )
}

export default Sidebar
