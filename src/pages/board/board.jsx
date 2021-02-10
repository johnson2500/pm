import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BoardModal from '../../components/boardsModal/boardModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  textarea: {
    width: '10vw',
    height: '10vh',
    resize: 'none',
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <TextField label="Filled" variant="outlined" multiline className={classes.textarea} />
            </Grid>
          ))}
          <BoardModal />
        </Grid>
      </Grid>
    </Grid>
  );
}
