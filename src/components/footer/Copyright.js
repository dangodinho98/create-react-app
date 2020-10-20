import { Link, Typography } from '@material-ui/core';
import React from 'react';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Todos os direitos reservados.'}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website © 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }