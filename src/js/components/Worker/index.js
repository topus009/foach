import React from 'react';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import { bool, func, number, shape, string } from 'prop-types';

import { useWorkerStyles } from './styles';

const propTypes = {
  item: shape({
    ID: number,
    UserName: string,
    Completed: bool,
  }),
  onSelect: func.isRequired,
  checked: bool.isRequired,
  toggleCompleted: func.isRequired,
};

const Worker = props => {
  const { item, onSelect, checked, toggleCompleted } = props;
  const { Title, ID, Completed } = item;

  const completedText = Completed ? 'Да' : 'Нет';

  const classes = useWorkerStyles();
  const composedStyles = cn(classes.worker, checked && classes.checked);
  const composedCompletedStyles = cn(classes.worker_status, Completed && classes.completed);

  return (
    <tr className={composedStyles}>
      <td>
        <input type="checkbox" onChange={() => onSelect(ID)} checked={checked} />
      </td>
      <td>
        <Typography>{ID}</Typography>
      </td>
      <td>
        <Typography>{Title}</Typography>
      </td>
      <td className={composedCompletedStyles} onClick={() => toggleCompleted([ID])}>
        <Typography>{completedText}</Typography>
      </td>
    </tr>
  );
};

Worker.propTypes = propTypes;

export default Worker;
