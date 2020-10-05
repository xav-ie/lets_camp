import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

// import PropTypes from 'prop-types'
const SVG = styled.svg`
  max-width: 250px;
`;
const StepData = [{
  type: "right",
  transform: "",
},
{
  type: "left",
  transform: "",
},
{
  type: "left",
  transform: "translate(175, 110) rotate(60)",
},
{
  type: "right",
  transform: "translate(-25,215) rotate(30)",
},
{
  type: "left",
  transform: "translate(125, 210) rotate(80)",
}];


const Footsteps = () => {
  const [steps, setSteps] = useState(StepData);
  const rightFootPath =
    "M133.9.3c-7 1.6-13.3 10-15.5 13.9 6.3 1.4 14 10.6 17 15 4.5-3.4 13.4-11.6 13.2-16.6-.2-6.3-6-14.3-14.7-12.3zm-4.1 37.4c-8.8.2-17.5-8-20.7-12-18.1 15-19.9 29.6-17.2 39 1.5 5.4 6.6 9.3 12.1 8.6 15-2 23.4-23.4 25.8-35.6z";
  const leftFootPath =
    "M147.4 85.2c-1.4 4.8 5.1 15 8.5 19.4 4.1-3.5 13.9-10.4 20.3-10.2-1.1-4.4-5-14-11.5-17.4-8-4-15.5 2.2-17.3 8.2zm27.9 70c5.1 2 11-.4 13.9-5.2 4.9-8.5 6.9-23-6.8-42.2-4.2 3.1-14.7 8.8-23.2 6.4-.6 12.5 2 35.3 16 41z";
  const DELAY = 1100;
  const transitions = useTransition(
    steps,
    (step) => step.type + step.transform,
    {
      from: { opacity: "0" },
      enter: { opacity: "1" },
      leave: { opacity: "0" },
      trail: DELAY,
      unique: true
    }
  );

  const reset = useCallback(() => {
    setTimeout(() => setSteps([]), DELAY*StepData.length);
    setTimeout(() => setSteps(StepData), DELAY*StepData.length*2);
    setTimeout(() => reset(), DELAY*StepData.length*2);
  }, []);

  useEffect(() => void reset(), [reset]);

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.9 428.3"
      width="30vw"
    >
      <g fill="white">
        {transitions.map(({item, props, key}) => <animated.path
            key={key}
            d={item.type === "left" ? leftFootPath : rightFootPath}
            style={props}
            transform={item.transform}
          />)}
      </g>
    </SVG>
  );
};

Footsteps.propTypes = {};

export default Footsteps;
