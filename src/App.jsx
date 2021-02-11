import React from 'react';
import { Grid } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';
import Board from './pages/board/board';
import Navbar from './components/navbar/navbar';
import Drawer from './components/sidenav/sidenav';
import ScratchPad from './components/scratchPadCarosel/scratchPadCarosel';
import NoteArea from './components/noteArea/noteArea';
import styles from './styles/index';
import firebase from './firebase/initi';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
  },
});

export default () => {
  const classes = styles();

  const storage = firebase.storage();

  const storageRef = storage.ref().child('test');

  const file = new Blob(['test'], { type: 'text/plain' });

  storageRef.put(file).then((test) => {
    console.log('test');
    console.log(test);
  }).catch((err) => {
    console.log(err);
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar classes={classes.sideNavContainer} />
      <Grid classes={classes.root} container>
        <Grid item xs={12} md={2} lg={2} xl={2}>
          <Drawer classes={classes.sideNav} />
        </Grid>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <ScratchPad />
          <NoteArea />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
