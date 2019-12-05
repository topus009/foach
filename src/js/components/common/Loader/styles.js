import { makeStyles } from '@material-ui/core/styles';

export const useLoaderStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 80px)',
  },
  circle: {
    float: 'left',
    marginLeft: 12,
    backgroundColor: theme.palette.colors.loader_circle_bg_color,
    animationName: '$bounce_circle',
    animationDuration: '.6775s',
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
  },
  c_1: {
    animationDelay: '.1s',
  },
  c_2: {
    animationDelay: '.2s',
  },
  c_3: {
    animationDelay: '.3s',
  },
  [`@keyframes bounce_circle`]: {
    '50%': {
      backgroundColor: theme.palette.colors.loader_circle_bounce_bg_color,
    },
  },
}));
