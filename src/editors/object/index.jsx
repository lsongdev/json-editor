import React, { useState } from 'react';
import { FieldEditor } from '../field';

export const ObjectEditor = ({ value, onChange }) => {
  value = typeof value === 'object' && !Array.isArray(value) ? value : { value };
  const [obj, setObject] = useState(value);
  const keys = Object.keys(obj);
  const submit = () => {
    setObject(obj);
    onChange && onChange({ type: 'object', value: obj });
  };
  const handleAddKey = () => {
    obj[''] = '';
    submit();
  };
  const handleRemove = key => {
    return () => {
      delete obj[key];
      submit();
    };
  };
  const handleChange = key => {
    return ({ value }) => {
      obj[key] = value;
      submit();
    };
  };
  const handleChangeKey = (oldKey, newKey) => {
    const value = obj[oldKey];
    delete obj[oldKey];
    obj[newKey] = value;
    submit();
  };
  return (
    <div className="object-editor" >
      <ul>
        {
          keys.map(key => (
            <li >
              <div className="field" >
                <span>Key:</span>
                <input name="key" value={key} onChange={e => handleChangeKey(key, e.target.value)} />
                <FieldEditor value={obj[key]} onChange={handleChange(key)} />
                <button onClick={handleRemove(key)} >remove key</button>
              </div>
            </li>
          ))
        }
      </ul>
      <button onClick={handleAddKey} >add key</button>
    </div>
  );
};
