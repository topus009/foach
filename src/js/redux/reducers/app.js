import constants from '../constants/App';

const { GETWORKERS, PENDING, TOGGLEVACATIONCOMPLETED, GETWORKERSERROR } = constants;

export const initialState = {
  workers: {},
  loading: false,
};

export default function app(state = initialState, action) {
  const { payload, type } = action;
  if (type === GETWORKERS) {
    const workers = {};
    payload.forEach(worker => {
      workers[worker.ID] = {
        ...worker,
        Title: worker.Title.replace('Activity ', 'Работник_'),
      };
    });
    return {
      ...state,
      workers,
      loading: false,
    };
  }
  if (type === PENDING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === GETWORKERSERROR) {
    return {
      ...state,
      loading: false,
    };
  }
  if (type === TOGGLEVACATIONCOMPLETED) {
    const { workers } = state;
    const changedWorkers = { ...workers };
    payload.forEach(id => {
      changedWorkers[id] = {
        ...changedWorkers[id],
        Completed: !changedWorkers[id].Completed,
      };
    });
    return {
      ...state,
      workers: changedWorkers,
    };
  }
  return state;
}
