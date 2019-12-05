import React, { useCallback, useEffect, useState } from 'react';
import { bool, func, number, objectOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';

import { getWorkers, toggleVacationCompleted } from '../../redux/actions/AppActions';
import Worker from '../../components/Worker';
import { convertArrayToString } from '../../helpers/common';
import { useWorkersStyles } from './styles';
import { useCommonStyles } from '../../../styles/common';

const propTypes = {
  workers: objectOf(
    shape({
      ID: number,
      UserName: string,
      Completed: bool,
    })
  ),
  loading: bool,
  getWorkers: func.isRequired,
  toggleVacationCompleted: func.isRequired,
};

const defaultProps = {
  workers: {},
  loading: false,
};

const Workers = ({ workers, loading, getWorkers, toggleVacationCompleted }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);

  const memoisedGetWorkers = useCallback(() => getWorkers(), [getWorkers]);

  useEffect(() => {
    memoisedGetWorkers();
  }, [memoisedGetWorkers]);

  const workersIds = Object.keys(workers);
  const workersLength = workersIds.length;

  const isSelected = useCallback(id => selectedItems.includes(id), [selectedItems]);

  const handleSelectItem = useCallback(
    ID => {
      if (isSelected(ID)) {
        setSelectedItems(selectedItems.filter(item => item !== ID));
        setSelectedAll(false);
      } else {
        const newSelectedItems = [...selectedItems, ID];
        setSelectedItems(newSelectedItems);
        if (newSelectedItems.length === workersLength) {
          setSelectedAll(true);
        }
      }
    },
    [selectedItems, workersLength, setSelectedAll, isSelected, setSelectedItems]
  );

  const handleSelectAll = useCallback(
    ({ target: { checked } }) => {
      setSelectedAll(checked);
      if (checked) {
        setSelectedItems(workersIds.map(key => workers[key].ID));
      } else {
        setSelectedItems([]);
      }
    },
    [workers, workersIds, setSelectedItems, setSelectedAll]
  );

  const handleToggleWorkerCompleted = useCallback((ids = []) => toggleVacationCompleted(convertArrayToString(ids)), [
    toggleVacationCompleted,
  ]);

  const handleToggleSelectedWorkerCompleted = e => {
    e.stopPropagation();
    toggleVacationCompleted(convertArrayToString(selectedItems));
  };

  const classes = useWorkersStyles();
  const commonClasses = useCommonStyles();

  return (
    <>
      {!loading && workersIds.length ? (
        <table className={cn(classes.workers, commonClasses.container)}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={handleSelectAll} checked={selectedAll} />
              </th>
              <th>
                <Typography>ID</Typography>
              </th>
              <th>
                <Typography>Работники</Typography>
              </th>
              <th className={classes.workers_header_status}>
                <Typography>В отпуске</Typography>
                {selectedItems.length ? (
                  <button
                    type="button"
                    className={classes.workers_header_status_btn}
                    onClick={handleToggleSelectedWorkerCompleted}
                    disabled={!selectedItems.length}
                  >
                    Изменить
                  </button>
                ) : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {workersIds.map(key => {
              const item = workers[key];
              return (
                <Worker
                  key={item.ID}
                  item={item}
                  onSelect={handleSelectItem}
                  checked={isSelected(item.ID)}
                  toggleCompleted={handleToggleWorkerCompleted}
                />
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ app }) => {
  const { workers, loading } = app;
  return {
    workers,
    loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWorkers: () => dispatch(getWorkers()),
    toggleVacationCompleted: params => dispatch(toggleVacationCompleted(params)),
  };
};

Workers.propTypes = propTypes;
Workers.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Workers);
