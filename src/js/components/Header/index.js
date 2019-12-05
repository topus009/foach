import React from 'react';
import { shape, string, number, bool } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const propTypes = {
  user: shape({
    ID: number,
    UserName: string.isRequired,
    Completed: bool,
  }),
};

const Header = ({ user }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Typography variant="h6" className={classes.user}>
        {user.UserName}
      </Typography>
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;
