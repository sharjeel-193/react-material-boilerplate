/*  eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import Topbar from './components/Topbar';
import Footer from './components/Footer';

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

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}>
      <Topbar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node
};

export default Minimal;
