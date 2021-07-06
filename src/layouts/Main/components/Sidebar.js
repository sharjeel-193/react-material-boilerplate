import React, { Fragment } from 'react'
import {MdDashboard} from 'react-icons/md'
import {RiAdminFill} from 'react-icons/ri'
import {ImUsers} from 'react-icons/im'
import {Drawer, makeStyles} from '@material-ui/core'
import SidebarNav from './SidebarNav'
import clsx from 'clsx';

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
}));

function Sidebar(props) {
    const { open, variant, onClose, className, ...rest } = props;
    const classes = useStyles()
    const pages = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: <MdDashboard />

        },
        {
            title: 'Admins',
            path: '/admins',
            icon: <RiAdminFill />

        },
        {
            title: 'Users',
            path: '/users',
            icon: <ImUsers />

        },
    ]

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
                    <SidebarNav className={classes.nav} pages={pages} />


                </div>
            </Drawer>
        </Fragment>
    )
}

export default Sidebar
