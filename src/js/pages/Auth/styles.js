import { makeStyles } from '@material-ui/core/styles';

export const useAuthStyles = makeStyles({
  auth: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    '& input': {
      margin: '10px 0',
    },
    '& button': {
      margin: '10px 0',
      cursor: 'pointer',
    },
  },
});
