import { withStyles, createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {},
      input: {
        padding: '10px',
        height: '1rem',
      },
    },
  },
  typography: {
    fontSize: 12,
  },
});

export default withStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
})(() => null);
