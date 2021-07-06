import React, {useState} from 'react'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: 56,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64
      }
    },
    shiftContent: {
      paddingLeft: 240
    },
    content: {
      height: '100%',
    }
  }));

function Main(props) {
    const { children } = props;

    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
      defaultMatches: true,
    });

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
      setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
      setOpenSidebar(false);
    };

	const shouldOpenSidebar = isDesktop ? true : openSidebar;

    return (
        <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop,
        })}>
        <Topbar onSidebarOpen={handleSidebarOpen} />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? "persistent" : "temporary"}
        />
        <main className={classes.content}>
            {children}
            <Footer />
        </main>
        </div>
    );
}

export default Main
