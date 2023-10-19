import React from 'react';

const Todo = ({ task, onMoveToInProgress, onDelete }) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={onMoveToInProgress}>Move to In Progress</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
