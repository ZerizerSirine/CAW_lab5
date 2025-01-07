import React, { useState } from 'react';

const AddDivForm = ({ addDiv }) => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width && color) {
      addDiv({ height, width, color }); 
      setHeight('');
      setWidth('');
      setColor('');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Height (px):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Width (px):
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Background Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Div</button>
    </form>
  );
};

export default AddDivForm;