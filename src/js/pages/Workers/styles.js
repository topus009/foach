import { makeStyles } from '@material-ui/core/styles';

export const useWorkersStyles = makeStyles(theme => ({
  workers: {
    borderCollapse: 'separate',
    borderSpacing: '10px 0',
    color: theme.palette.colors.worker_color,
  },
  workers_header_status: {
    display: 'flex',
  },
  workers_header_status_btn: {
    marginLeft: '10px',
    lineHeight: '14px',
    color: theme.palette.colors.workers_header_status_btn_color,
    backgroundColor: theme.palette.colors.workers_header_status_btn_bg_color,
    padding: '0 2px',
    textTransform: 'none',
  },
}));
