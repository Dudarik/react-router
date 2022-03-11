import { useState } from 'react';

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={handleChange}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: '9px',
            right: '10px',
            width: '100px',
          }}
          onClick={handleSubmit}>
          Найти
        </button>
      </div>
    </div>
  );
}
