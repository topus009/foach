import constants from '../constants/Auth';
import { history } from '../../router/router';

const { AUTH_USER } = constants;

const targetPath = '/workers';

const setUserInfo = () => next => action => {
  const { type } = action;
  if (type === AUTH_USER && history.location.pathname !== targetPath) {
    history.push(targetPath);
  }
  return next(action);
};

export default setUserInfo;
