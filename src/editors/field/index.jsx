import React, { useState } from 'react';
import { StringEditor } from '../string';
import { ObjectEditor } from '../object';
import { ArrayEditor } from '../array';

const editors = {
  string: StringEditor,
  number: StringEditor,
  array: ArrayEditor,
  object: ObjectEditor,
};

console.debug('editors:', editors);

export const FieldEditor = ({ value, onChange }) => {
  const [type, setType] = useState(typeof value);
  const Editor = editors[type];
  return (
    <div className="field-editor" >
      <span>Value:</span>
      <select value={type} name="type" onChange={e => setType(e.target.value)} >
        {
          Object.keys(editors).map(ty => <option key={ty} >{ty}</option>)
        }
      </select>
      <Editor value={value} onChange={onChange} />
    </div>
  );
};