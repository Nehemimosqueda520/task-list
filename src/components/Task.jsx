import React from 'react';
import '../css/Task.css';

export function Task({ task, onDelete, onMark }) {
  return (
    <div className="task-container">
      <div className="task" style={{ textDecoration: task.marked ? 'underline' : 'none' }}>{task}</div>
      <div className="delete" onClick={onDelete}>
        x
      </div>
      <div className="marker" onClick={onMark}>
        {/* Add your marker UI here */}
      </div>
    </div>
  );
}