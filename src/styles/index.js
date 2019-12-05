import { withStyles, createMuiTheme } from '@material-ui/core';

const colors = {
  white_100: 'white',
  gray_100: '#4a4a4a',
  gray_300: '#bababa',
  black_100: 'black',
  black_200: '#171717',
  green_100: '#00be73',
  green_200: 'green',
  violet_100: '#5f19aa',
  red_100: 'red',
  blue_100: '#00adeb',
  blue_200: '#00bdff',
  blue_300: 'lightblue',
};

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
  palette: {
    colors: {
      worker_color: colors.black_100,
      worker_hover_bg_color: colors.gray_300,
      worker_checked_bg_color: colors.blue_200,
      worker_checked_hover_bg_color: colors.blue_100,
      worker_status_color: colors.red_100,
      worker_status_completed_color: colors.green_200,
      workers_header_status_btn_color: colors.white_100,
      workers_header_status_btn_bg_color: colors.gray_100,
      loader_circle_bg_color: colors.violet_100,
      loader_circle_bounce_bg_color: colors.green_100,
    },
  },
});

export default withStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
})(() => null);
