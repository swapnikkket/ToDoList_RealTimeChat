import React from 'react';

const Done = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Done;
