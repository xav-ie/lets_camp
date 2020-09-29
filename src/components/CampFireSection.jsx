import React from "react";
import styled from "styled-components";
import Fire from "./Fire.svg";
import Footsteps from "./Footsteps.svg";

// import PropTypes from 'prop-types'
const Gradient = styled.section`
  background: linear-gradient(
    180deg,
    rgba(27, 36, 48, 1) 0%,
    rgba(0, 89, 119, 1) 100%
  );
  min-height: 100vh;
  height: 100%;
  color: white;
  font-family: 'Nunito', "Comic Sans", sans-serif, Arial;
`;


const CampFireSection = (props) => {
  
  return (<Gradient>
      <h2 style={{'margin': 0, 'padding': '1em'}}>Campfire Stories!</h2>
      <div className="container">
      <Fire/>
      <Footsteps/>

      </div>
      </Gradient>);
};

CampFireSection.propTypes = {};

export default CampFireSection;
