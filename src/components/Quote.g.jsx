import React from "react";
import PropTypes from "prop-types";

const Quote = ({ idx }) => {
  const r = 550;
  const center = 453;
  const scale = Math.PI / 3;
  const shift = Math.PI / 6;
  let x = 0,
    y = 0;

  if (idx < 3) {
    x = Math.cos(idx * scale - shift) * r + center;
    y = Math.sin(idx * scale - shift) * r + center;
  }

  return (
    <g>
      <text x={x} y={y} font-size="3em" fill="white" dominant-baseline="middle" text-anchor="middle">
        {x}, {y}
      </text>
    </g>
  );
};


Quote.propTypes = {
  idx: PropTypes.number,
};

export default Quote;
