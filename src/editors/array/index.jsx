import React, { useState } from 'react';
import { FieldEditor } from '../field';

export const ArrayEditor = ({ value, onChange }) => {
  value = Array.isArray(value) ? value : [value];
  const [arr, setArr] = useState(value);
  const submit = () => {
    setArr(arr.map(x => x));
    onChange && onChange({ type: 'array', value: arr });
  };
  const handleAdd = () => {
    arr.push(arr.length + 1);
    submit();
  };
  const handleChange = i => {
    return ({ value }) => {
      arr[i] = value;
      submit();
    };
  };
  const handleRemove = i => {
    return () => {
      arr.splice(i, 1);
      submit();
    };
  };
  return (
    <div className="array-editor" >
      <ol>
        {
          arr.map((value, i) => (
            <li key={i} >
              <FieldEditor value={value} onChange={handleChange(i)} />
              <button onClick={handleRemove(i)} >remove item</button>
            </li>
          ))
        }
      </ol>
      <button onClick={handleAdd} >add item</button>
    </div>
  );
};
