import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ObjectEditor } from './editors';

import './main.css';

const App = () => {
  const [obj, setObject] = useState('');
  return (
    <div>
      <h1>JSON Editor</h1>
      <ObjectEditor value={{ a: 1 }} onChange={setObject} />
      <pre>
        {JSON.stringify(obj, null, 2)}
      </pre>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
