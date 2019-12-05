import { withStyles } from '@material-ui/core/styles';

export const withCheckboxStyles = Component =>
  withStyles({
    root: {
      padding: 0,
    },
  })(Component);
