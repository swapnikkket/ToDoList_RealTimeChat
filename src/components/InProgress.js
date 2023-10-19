import React from 'react';

const InProgress = ({ task, onMoveToDone, onDelete }) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={onMoveToDone}>Move to Done</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default InProgress;
