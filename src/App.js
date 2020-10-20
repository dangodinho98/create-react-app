import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Copyright from './components/footer/Copyright';
import PrimarySearchAppBar from './components/headers/PrimarySearchAppBar';
import ProTip from './ProTip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box fixed>
        <PrimarySearchAppBar />
        <Box my={4} className={classes.Box}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example
         </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Box>
    </div>
  );
}
