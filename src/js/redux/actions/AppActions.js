import Api from '../../api';
import constants from '../constants/App';

const { GETWORKERS, PENDING, TOGGLEVACATIONCOMPLETED, GETWORKERSERROR } = constants;

export function getWorkers() {
  return dispatch => {
    dispatch({ type: PENDING });
    return Api.workers
      .getWorkers()
      .then(data => {
        dispatch({
          type: GETWORKERS,
          payload: data,
        });
      })
      .catch(err => {
        console.error({ err });
        return dispatch({ type: GETWORKERSERROR });
      });
  };
}

export function toggleVacationCompleted(payload) {
  return {
    type: TOGGLEVACATIONCOMPLETED,
    payload,
  };
}
