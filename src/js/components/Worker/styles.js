import { makeStyles } from '@material-ui/core/styles';

export const useWorkerStyles = makeStyles(theme => ({
  worker: {
    '&:hover': {
      backgroundColor: theme.palette.colors.worker_hover_bg_color,
    },
  },
  worker_status: {
    cursor: 'pointer',
    color: theme.palette.colors.worker_status_color,
  },
  completed: {
    color: theme.palette.colors.worker_status_completed_color,
  },
  checked: {
    backgroundColor: theme.palette.colors.worker_checked_bg_color,
    '&:hover': {
      backgroundColor: theme.palette.colors.worker_checked_hover_bg_color,
    },
  },
}));
