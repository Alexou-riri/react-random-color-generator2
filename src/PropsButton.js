//  Import useState
import React, { useState } from 'react';
import './App.css';

// function for random color
export default function RandomColor() {
  const [color, setColor] = useState('#000'); // update color
  const getRgb = () => Math.floor(Math.random() * 256); // generate random numbers
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const generateColor = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <div>
      <button
        class="glow-on-hover"
        style={{ color: 'white' }} // create button
        onClick={generateColor}
      >
        <div className="click">
          <p style={{ fontFamily: 'Verdana' }}> Click</p>
          <p style={{ fontFamily: 'Verdana' }}>Don't be shy</p>
        </div>
      </button>

      <div style={{ backgroundColor: color }} className="container">
        <p>Generated Color : {color}</p>
      </div>
    </div>
  );
}
