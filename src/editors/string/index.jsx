import React, { useState } from 'react';

export const StringEditor = ({ value, onChange }) => {
  value = typeof value === 'string' ? value : JSON.stringify(value);
  const [text, setText] = useState(value);
  const handleChange = e => {
    const { value: currentText } = e.target;
    setText(currentText);
    onChange && onChange({ type: 'string', value: currentText });
  };
  return <input value={text} onChange={handleChange} />;
};
