import React from "react";
import PropTypes from "prop-types";

const rotate = function(list2, k) {
  let list = list2.slice();
  if(list.length > k){
      list.unshift( ...list.splice(-k))
  } else {
     let i = 0
      while(i < k){
      list.unshift(list.splice(-1))
      i++
      }
  }
  return list;
};


const Quote = ({ idx }) => {
  const r = 460;
  const center = 453;
  const scale = Math.PI / 3;
  const shift = Math.PI / 6;
  let x1 = Math.cos(idx * scale - shift) * r + center;
  let y1 = Math.sin(idx * scale - shift) * r + center;
  const r2 = r + 50;
  const angle = 25/360;
  let x2 = Math.cos(idx * scale - shift - angle) * r2 + center;
  let y2 = Math.sin(idx * scale - shift - angle) * r2 + center;
  let x3 = Math.cos(idx * scale - shift + angle) * r2 + center;
  let y3 = Math.sin(idx * scale - shift + angle) * r2 + center;
  const r3 = r + 286;
  let x4 = Math.cos(idx * scale - shift) * (r3+50) + center;
  let y4 = !((idx + 1) % 3 === 0)
    ? Math.sin(idx * scale - shift) * r3 + center
    : Math.sin(idx * scale - shift) * (r3 - 80) + center;
  const x5 = x4 - 400/2;
  const y5 = y4 - 300/2;
  // rectRotation: 0 => 0,1
  // rectRotation: 1 => 5 
  // rectRotation: 2 => 3, 4
  // rectRotation: 3 => 2
  const rectRotations = [0,0,3,2,2,1];


  // line smoothing code stolen from
  // https://codepen.io/francoisromain/pen/prdEBN?editors=0010
  const line = (pointA, pointB) => {
    const lengthX = pointB[0] - pointA[0]
    const lengthY = pointB[1] - pointA[1]
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    }
  };
  const controlPoint = (lineCalc, smooth) => (current, previous, next, reverse) => {
  
    // Replace 'previous' and 'next' with 'current'
    // if they don't exist 
    // (when 'current' is the first or last point of the array)
    const p = previous || current
    const n = next || current 
  
    // properties of the line between previous and next 
    const l = lineCalc(p, n)
  
    // If is end-control-point, add PI to the angle to go backward
    const angle = l.angle + (reverse ? Math.PI : 0)
    const length = l.length * smooth
  
    // The control point position is relative to the current point
    const x = current[0] + Math.cos(angle) * length
    const y = current[1] + Math.sin(angle) * length
  
    return [x, y]
  };
  const bezierCommand = (controlPointCalc) => (point, i, a) => {
    // start control point
    const [cpsX, cpsY] = controlPointCalc(a[i - 1], a[i - 2], point)
    // end control point
    const [cpeX, cpeY] = controlPointCalc(point, a[i - 1], a[i + 1], true)
  
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
  };
  const svgPath = (points, command) => {
    const d = points.reduce((acc, point, i, a) => i === 0
        ? `M ${point[0]},${point[1]}`
        : `${acc} ${command(point, i, a)}`
    , '')
    return `${d}`
  };
  const smoothing = 0.05;
  const controlPointCalc = controlPoint(line, smoothing);
  const bezierCommandCalc = bezierCommand(controlPointCalc);

  const triangleData = [
    [x3,y3],
    [x1,y1],
    [x2,y2],
  ]
  const rectData = [
    [x5,y5], 
    [x5+400,y5], 
    [x5+400,y5+300], 
    [x5,y5+300],
  ];
  const pointData = triangleData.concat(rotate(rectData, rectRotations[idx])).concat([[x3,y3]]);

  const textData = "The quick brown fox jumped over the lazy doge. racecare.";
  function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
  
    return chunks
  }
  const textArray = chunkSubstr(textData, 15);
  // console.log(textArray);
  return (
    <g>
      {/* <polygon points={`${triangleString} ${rotate(rectPoints,rectRotations[idx]).reduce(stringReducer)}`} fill="#FFEDD1"/> */}
      <path d={svgPath(pointData, bezierCommandCalc)} fill="#FFEDD1"/>
      <text
        x={x5}
        y={y5+50}
        fontSize="3em"
        fill="black"
        textLength="12em"
        // dominantBaseline="middle"
        // textAnchor="middle"
      > 
      {textArray.map((textChunk, idx) => <tspan key={textChunk} y={(idx)*52+y5+60} x={x5+25}>{textChunk}</tspan>)} 
      </text>
      
    </g>
  );
};

Quote.propTypes = {
  idx: PropTypes.number,
};

export default Quote;
