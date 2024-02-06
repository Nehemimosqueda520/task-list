import React from 'react';
import '../css/Input.css';

export function Input({ value, onChange, onKeyPress }) {
  return (
    <input
      type="text"
      className="input"
      placeholder="Escribe la tarea aquí..."
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}