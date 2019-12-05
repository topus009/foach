import { bool, func, number, shape, string } from 'prop-types';

import React from 'react';
import cn from 'classnames';

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

  const completedClasses = cn('worker_status', {
    completed: Completed,
  });

  const completedText = Completed ? 'Да' : 'Нет';

  return (
    <tr className={cn('worker', { checked })}>
      <td className="worker_action">
        <input type="checkbox" onChange={() => onSelect(ID)} checked={checked} />
      </td>
      <td className="worker_id">{ID}</td>
      <td>{Title}</td>
      <td className={completedClasses} onClick={() => toggleCompleted([ID])}>
        {completedText}
      </td>
    </tr>
  );
};

Worker.propTypes = propTypes;

export default Worker;
